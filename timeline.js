/**
 * Variable you can add to the timeline dots 
 *  Name
 *  Desc > description in the popup 
 *  date > !! for date under 1000 .. 
 *  url
 *  img
 *  radius = size of the dot
 *  cy = hack the position of the dot in height
 *  cx = hack the position on the timeline to adapt visually. 
 *  color 
 *  background  
 *  lineWidth 
 *
 *  based on https://github.com/alangrafu/timeknots .... 
 */
var potreedates = [
    // dates spacer .. 1st oldest second newest.  
    { name: "-700", date: "-000700-01-01", info: "sepa anneeUn", lineWidth: "0", background: "#cdcdcd" },
    { name: "2022", date: "2022-01-01", info: "sepa today ", lineWidth: "0", background: "#cdcdcd" },
    { name: "1 ad", date: "0001-01-01", x: "300", info: "sepa anneeUn", lineWidth: "0", background: "#cdcdcd" },
    { name: "1000 ad", date: "1000-01-01", x: "300", info: "sepa anneeMille", lineWidth: "0", background: "#cdcdcd" },
    // dates 
    { name: "Day of the Fight", desc: " blalbal detex <a href='#'>test</a> and an other text ans so more text ", date: "-000700-01-01", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Day_of_the_Fight_title.jpg/215px-Day_of_the_Fight_title.jpg" },
    { name: "The Seafarers", date: "-000011-10-15", url: "#24", img: "http://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Seafarers_title.jpg/225px-Seafarers_title.jpg" },
    { name: "Lolita (1962 film)", date: "0067-06-13", url: "#25", img: "http://upload.wikimedia.org/wikipedia/en/thumb/7/72/LolitaPoster.jpg/215px-LolitaPoster.jpg" },
    { name: "Fear and Desire", date: "0090-03-31", url: "#25" },
    { name: "Paths of Glory", date: "0130-12-25", url: "#27", img: "http://upload.wikimedia.org/wikipedia/en/thumb/b/bc/PathsOfGloryPoster.jpg/220px-PathsOfGloryPoster.jpg" },
    { name: "Killer's Kiss", date: "0131-09-28", url: "#28", cy: "86", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "0149-09-28", url: "#29", cy: "80", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "0211-09-28", url: "#30", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "0272-09-28", url: "#31", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "0273-09-28", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "1400-09-28", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "1500-09-28", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "1800-09-28", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "1954-09-28", cx: "570", cy: "100", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "1955-09-28", cy: "100", cx: "850", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "1966-11-28", cy: "100", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
    { name: "Killer's Kiss", date: "1966-09-28", cy: "90", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },

];

TimeKnots.draw("#timeline", potreedates, {
    dateFormat: "%B %Y",
    color: "#ccc",
    radius: 8,
    lineWidth: 2,
    width: 900,
    showLabels: true,
    labelFormat: "%Y",
    starttxt: " bc",
    endtxt: "2022",
    anneeMille: "1000 AD",
    xpositionmille: "238", // time line text position 
    anneeUn: "1 AD",
    xpositionun: "558",  // time line text position 
    toolpos: "435px",
});

document.querySelector('#timeline').style.width = "900px";
