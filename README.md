# timeline
## A flexible timeline designed for plotree project but usable in any cases. 
### based on https://github.com/alangrafu/timeknots 

simply add  before closing head.
```<script src="timeline/d3.v2.min.js" type="application/javascript"></script>
 <script src="timeline/timeknots.js" type="application/javascript"></script>
 <link rel="stylesheet" href="timeline/timeline.css">
 ```
 
  and in the div 'potree_render_area '  
```
<div id="timeline"></div>
<script src="timeline/timeline.js" type="application/javascript"></script>
  ```
  You have to Edit the 'timeline.js'
  First part is the timeline text and spacer setup: 
  1- the name
  
  2- the date to positioning in the timeline
  
  3- info : sepa is a class important in this case so don't tutch it. 
  
  4- linewidth: also a special tricks. dont tuchit.
  
  5- background: default backup background ( will be overrighting later) 
  
  ```
  // dates spacer .. 1st oldest second newest.  
    { name: "-700", date: "-000700-01-01", info: "sepa anneeUn", lineWidth: "0", background: "#cdcdcd" },
    { name: "2022", date: "2022-01-01", info: "sepa today ", lineWidth: "0", background: "#cdcdcd" },
    { name: "1 ad", date: "0001-01-01", x: "300", info: "sepa anneeUn", lineWidth: "0", background: "#cdcdcd" },
    { name: "1000 ad", date: "1000-01-01", x: "300", info: "sepa anneeMille", lineWidth: "0", background: "#cdcdcd" },
    // dates
 ```
 Second part:  the dots on the timeline
 
   1- name: will be the title show in the popup.
   
   2- desc: the description text in the popup ( you can add link with a href like below.
   
   3- date: ( will be automatickly distributaded in the timeline) !! check the exemple for date under 0 .
   
   4- url: in poltree projer simply add the #id 
   
   5- img: Optionnal. the url of the file
   

   ```     { name: "Day of the Fight", desc: " blalbal detex <a href='#'>test</a> and an other text ans so more text ", date: "-000700-01-01", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Day_of_the_Fight_title.jpg/215px-Day_of_the_Fight_title.jpg" }, ```
   
   Some Tweak to a better render of the timeline ( move dot up or on the left or right) 
   
   like below you can add cy: "number" and cx: "number".
   
   cy: move the dot right or left based on the number populate on the time line ( check the developper tools in the browser) 
   
   cx: move the dot up or down based on the number populate on the time line ( check the developper tools in the browser) 
   
   ![](https://6clicks.ch/uploads/poltree-cx.jpg)
   
   
   ```
       { name: "Killer's Kiss", date: "1955-09-28", cy: "100", cx: "850", url: "#23", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg" },
```
### Change the Style

1- Open the timeline.css

2- edit the var in the first part of the file 

```
:root {
  --background-color: #000;
  --main-color: #7083a4;
  --alternate-color: #fff;
  --stroke-width: 6;
  --popup-top: 250px;
  --popup-background: var(--background-color);
  --tooltip-top: 200px;
  --font-fam: "Poppins";
  --popup-font-size: 15px;
  --popup-date-size: 18px;
}

```


    
    
   
  
