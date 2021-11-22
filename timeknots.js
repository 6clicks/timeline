var TimeKnots = {
  draw: function (id, events, options) {
    var cfg = {
      width: 600,
      height: 200,
      radius: 10,
      lineWidth: 4,
      color: "#999",
      background: "#FFF",
      dateFormat: "%Y/%m/%d",
      altdateFormat: "%Y",
      horizontalLayout: true,
      showLabels: false,
      labelFormat: "%Y/%m/%d",
      addNow: false,
      seriesColor: d3.scale.category20(),
      dateDimension: true,
      starttxt: " bc",
      endtxt: "today",
      info: 'sepa',
      anneeMille: "rt",
      xpositionmille: "238",
      anneeUn: "er",
      xpositionun: "558",
      toolpos: "420",
    };

    //default configuration overrid
    if (options != undefined) {
      for (var i in options) {
        cfg[i] = options[i];
      }
    }
    if (cfg.addNow != false) {
      events.push({ date: new Date(), name: cfg.addNowLabel || "Today" });
    }
    // create popup modal on clicks
    var pop = d3.select(id)
      .append('div')
      .style("opacity", 0)
      .style("position", "absolute")
      .style("font-family", "Helvetica Neue")
      .style("font-weight", "300")
      .style("background", "rgba(0,0,0,0.5)")
      .style("border", "solid 2px white")
      .style("color", "white")
      .style("padding", "5px 10px 5px 10px")
      .style("-moz-border-radius", "8px 8px")
      .style("border-radius", "8px 8px")
      .attr("class", "popup");
    //Calculate times in terms of timestamps
    if (!cfg.dateDimension) {
      var timestamps = events.map(function (d) { return d.value });//new Date(d.date).getTime()});
      var maxValue = d3.max(timestamps);
      var minValue = d3.min(timestamps);
    } else {
      var timestamps = events.map(function (d) { return Date.parse(d.date); });//new Date(d.date).getTime()});
      var maxValue = d3.max(timestamps);
      var minValue = d3.min(timestamps);
    }
    var margin = (d3.max(events.map(function (d) { return d.radius })) || cfg.radius) * 1.5 + cfg.lineWidth;
    var step = (cfg.horizontalLayout) ? ((cfg.width - 2 * margin) / (maxValue - minValue)) : ((cfg.height - 2 * margin) / (maxValue - minValue));
    var series = [];
    if (maxValue == minValue) { step = 0; if (cfg.horizontalLayout) { margin = cfg.width / 2 } else { margin = cfg.height / 2 } }

    //creat tooltip on hover 
    var tip = d3.select(id)
      .append('div')
      .style("opacity", 0)
      .style("position", "absolute")
      .style("font-family", "Helvetica Neue")
      .style("font-weight", "300")
      .style("background", "rgba(0,0,0,0.5)")
      .style("border", "solid 2px white")
      .style("color", "white")
      .style("padding", "5px 10px 5px 10px")
      .style("-moz-border-radius", "8px 8px")
      .style("border-radius", "8px 8px")
      .attr("class", "tooltip");
    var svg = d3.select(id).append('svg').attr("width", cfg.width).attr("height", cfg.height);
    //Calculate times in terms of timestamps
    if (!cfg.dateDimension) {
      var timestamps = events.map(function (d) { return d.value });//new Date(d.date).getTime()});
      var maxValue = d3.max(timestamps);
      var minValue = d3.min(timestamps);
    } else {
      var timestamps = events.map(function (d) { return Date.parse(d.date); });//new Date(d.date).getTime()});
      var maxValue = d3.max(timestamps);
      var minValue = d3.min(timestamps);
    }
    var margin = (d3.max(events.map(function (d) { return d.radius })) || cfg.radius) * 1.5 + cfg.lineWidth;
    var step = (cfg.horizontalLayout) ? ((cfg.width - 2 * margin) / (maxValue - minValue)) : ((cfg.height - 2 * margin) / (maxValue - minValue));
    var series = [];
    if (maxValue == minValue) { step = 0; if (cfg.horizontalLayout) { margin = cfg.width / 2 } else { margin = cfg.height / 2 } }

    linePrevious = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }
    //Adding start and end labels
    if (cfg.showLabels != false) {
      if (cfg.dateDimension) {
        var format = d3.time.format(cfg.labelFormat);
        var startString = format(new Date(minValue)) + cfg.starttxt;
        //var endString = format(new Date(maxValue)) + cfg.endtxt;
        var endString = cfg.endtxt;
      } else {
        var format = function (d) { return d }; //Should I do something else?
        var startString = minValue;
        var endString = maxValue;
      }
      svg.append("text")
        .text(startString).style("font-size", "70%")
        .attr("class", "txtstart")
        .attr("x", function (d) { if (cfg.horizontalLayout) { return d3.max([0, (margin - this.getBBox().width / 2)]) } return Math.floor(this.getBBox().width / 2) })
        .attr("y", 30)//function (d) { if (cfg.horizontalLayout) { return Math.floor(cfg.height / 2 + (margin + this.getBBox().height)) } return margin + this.getBBox().height / 2 });

      svg.append("text")
        .text(endString).style("font-size", "70%")
        .attr("class", "txtend")
        .attr("x", function (d) { if (cfg.horizontalLayout) { return cfg.width - d3.max([this.getBBox().width, (margin + this.getBBox().width / 2)]) } return Math.floor(this.getBBox().width / 2) })
        .attr("y", 30)//function (d) { if (cfg.horizontalLayout) { return Math.floor(cfg.height / 2 + (margin + this.getBBox().height)) } return cfg.height - margin + this.getBBox().height / 2 })
      svg.append("text").style("font-size", "70%")
        .text(cfg.anneeUn)
        .attr("y", 30)
        .attr("x", function (d) { if (cfg.xpositionmille - 20) { return cfg.xpositionmille - 20 } })
      svg.append("text").style("font-size", "70%")
        .text(cfg.anneeMille)
        .attr("y", 30)
        .attr("x", function (d) { if (cfg.xpositionun - 20) { return cfg.xpositionun - 20 } })
      //var datum = (cfg.dateDimension) ? new Date(d.date).getTime() : d.value;
      //var x = Math.floor(step * (datum - minValue) + margin);
      //return x;

    }

    svg.selectAll("line")
      .data(events).enter().append("line")
      .attr("class", "timeline-line")
      .attr("x1", function (d) {
        var ret;
        if (cfg.horizontalLayout) {
          var datum = (cfg.dateDimension) ? new Date(d.date).getTime() : d.value;
          ret = Math.floor(step * (datum - minValue) + margin)
        }
        else {
          ret = Math.floor(cfg.width / 2)
        }
        linePrevious.x1 = ret
        return ret
      })
      .attr("x2", function (d) {
        if (linePrevious.x1 != null) {
          return linePrevious.x1
        }
        if (cfg.horizontalLayout) {
          var datum = (cfg.dateDimension) ? new Date(d.date).getTime() : d.value;
          ret = Math.floor(step * (datum - minValue))
        }
        return Math.floor(cfg.width / 2)
      })
      .attr("y1", function (d) {
        var ret;
        if (cfg.horizontalLayout) {
          ret = Math.floor(cfg.height / 2)
        }
        else {
          var datum = (cfg.dateDimension) ? new Date(d.date).getTime() : d.value;
          ret = Math.floor(step * (datum - minValue)) + margin
        }
        linePrevious.y1 = ret
        return ret
      })
      .attr("y2", function (d) {
        if (linePrevious.y1 != null) {
          return linePrevious.y1
        }
        if (cfg.horizontalLayout) {
          return Math.floor(cfg.height / 2)
        }
        var datum = (cfg.dateDimension) ? new Date(d.date).getTime() : d.value;
        return Math.floor(step * (datum - minValue))
      })
      .style("stroke", function (d) {
        if (d.color != undefined) {
          return d.color
        }
        if (d.series != undefined) {
          if (series.indexOf(d.series) < 0) {
            series.push(d.series);
          }
          return cfg.seriesColor(series.indexOf(d.series));
        }
        return cfg.color
      })
      .style("stroke-width", cfg.lineWidth);





    svg.selectAll("circle")
      .data(events).enter()
      .append("ellipse")
      .attr("rx", function (d) { if (d.info != undefined) { return cfg.radius } return cfg.radius })
      .attr("class", function (d) { if (d.info != undefined) { return d.info } return null })
      .attr("r", function (d) { if (d.radius != undefined) { return d.radius } return cfg.radius })
      .style("stroke", function (d) {
        if (d.color != undefined) {
          return d.color
        }
        if (d.series != undefined) {
          if (series.indexOf(d.series) < 0) {
            series.push(d.series);
          }
          console.log(d.series, series, series.indexOf(d.series));
          return cfg.seriesColor(series.indexOf(d.series));
        }
        return cfg.color
      }
      )
      .style("stroke-width", function (d) { if (d.lineWidth != undefined) { return d.lineWidth } return cfg.lineWidth })
      .style("fill", function (d) { if (d.background != undefined) { return d.background } return cfg.background })

      .attr("cy", function (d) {
        if (d.cy != undefined) { return d.cy }
        if (cfg.horizontalLayout) {
          return Math.floor(cfg.height / 2)
        }
        var datum = (cfg.dateDimension) ? new Date(d.date).getTime() : d.value;
        return Math.floor(step * (datum - minValue) + margin)
      })
      .attr("cx", function (d) {
        if (d.cx != undefined) { return d.cx }
        if (cfg.horizontalLayout) {
          var datum = (cfg.dateDimension) ? new Date(d.date).getTime() : d.value;
          var x = Math.floor(step * (datum - minValue) + margin);
          return x;
        }
        return Math.floor(cfg.width / 2)
      }).on("mouseover", function (d) {
        if (d.info != undefined) {
          return false
        }
        if (cfg.dateDimension) {
          var format = d3.time.format(cfg.altdateFormat);
          var datetime = format(new Date(d.date));
          var dateValue = datetime;
        } else {
          var format = function (d) { return d }; // TODO
          var datetime = d.value;
          var dateValue = d.value;
        }
        d3.select(this)
          .style("fill", function (d) { if (d.color != undefined) { return d.color } return cfg.color }).transition()
          .duration(100).attr("r", function (d) { if (d.radius != undefined) { return Math.floor(d.radius * 1.5) } return Math.floor(cfg.radius * 1.5) });
        tip.html("");
        // Remove annoying 00 -0 0 in front of dates bleow 1AD
        let datesimple = dateValue.replace(/^(?!00$)00+/, '').replace(/^(?!0$)0+/, '').replace(/^(?!-0$)-0+/, '-');

        tip.append("div").style("float", "left").html(datesimple).attr("class", "date-tool");
        tip.transition()
          .duration(100)
          .style("opacity", .9);

      })
      .on("click", function (d) {
        d3.select(this);

        if (d.url != undefined) {
          window.location.href = d.url;
        }
        /*if (d.modal != undefined) {
          console.log("#" + d.modal);
          $("#" + d.modal).modal();
        }*/

        if (d.info != undefined) {
          return false
        }
        if (cfg.dateDimension) {
          var format = d3.time.format(cfg.altdateFormat);
          var datetime = format(new Date(d.date));
          var dateValue = (datetime != "") ? (datetime) : d.name;
        } else {
          var format = function (d) { return d }; // TODO
          var datetime = d.value;
          var dateValue = d.value;
        }
        // Remove annoying 00 -0 0 in front of dates bleow 1AD
        let datesimple = dateValue.replace(/^(?!00$)00+/, '').replace(/^(?!0$)0+/, '').replace(/^(?!-0$)-0+/, '-');
        d3.select(this)
          .style("fill", function (d) { if (d.color != undefined) { return d.color } return cfg.color }).transition()
          .attr("class", "selected")
          .duration(100).attr("r", function (d) { if (d.radius != undefined) { return Math.floor(d.radius * 1.5) } return Math.floor(cfg.radius * 1.5) });
        pop.html("");
        if (d.img != undefined) {
          pop.append("img").style("float", "left").style("margin-right", "4px").attr("src", d.img).attr("width", "64px").attr('class', 'image-popup');
        }

        pop.append("div").attr("class", "popup-date").html(datesimple);
        if (d.name != undefined) {
          pop.append('div').attr('class', 'popup-titre').html(d.name);
        }
        if (d.desc != undefined) {
          pop.append("div").style("float", "left").style("margin-right", "4px").html(d.desc).attr("class", "popup-desc");
        }
        var closediv = "<a id='closebout'>X</a>";
        pop.append("div").style("float", "left").html(closediv).attr('class', 'closediv');

        pop.transition()
          .duration(100)
          .style("opacity", .9);
        // ferme la popup
        function closebouton1() {
          let closebouton = document.querySelector('.closediv');
          closebouton.addEventListener("click", function () {
            pop.transition()
              .duration(100)
              .style("opacity", 0)

          });
        }
        closebouton1();

        // supprime la classe selected au click.
        document.querySelectorAll('ellipse').forEach(btn => {
          btn.classList.remove('selected')
        })
      })



      .on("mouseout", function () {
        d3.select(this)
          .style("fill", function (d) { if (d.background != undefined) { return d.background } return cfg.background }).transition()
          .duration(100).attr("r", function (d) { if (d.radius != undefined) { return d.radius } return cfg.radius });
        tip.transition()
          .duration(100)
          .style("opacity", 0)

      });

    svg.on("mousemove", function () {
      tipPixels = parseInt(tip.style("height").replace("px", ""));
      let postool = cfg.toolpos;
      return tip.style("top", (d3.event.pageY - tipPixels - margin - 30) + "px").style("left", (d3.event.pageX - postool) + "px");
    })
      .on("mouseout", function () { return tip.style("opacity", 0).style("top", "0px").style("left", "0px"); });

  }
}

