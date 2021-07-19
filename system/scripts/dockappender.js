var mi = -2;
var waittime;
function okay(image, width, height, appname, applink) {
    mi = mi+2;
    var img = `<img src="${image}" style="width: ${width}; height: ${height}; top: 0.5vw; position: absolute; left: -0.1vw; z-index: -2;"> <h2 style="transform: rotate(90deg); color: grey; font-size: small; position: relative; top: 5vw;">${appname}</h2>`;
    var random =Math.floor(Math.random() * 5) + 5;
    var randomside =Math.floor(Math.random() *20) + 1;
    var apcv =    `
</div>
        <div style="z-index: 1; top: ${random}vw; position:relative;  left: ${randomside}vw;    transition-property: all; transition-duration: 2s;  resize: both;   
">
            <embed src="${applink}" style="position: relative; margin-top: 5vw; width: 50vw; height: 40vw; z-index: -10;  resize: both; overflow: auto;" ref="10" JSIMSOYHI>
            <div style="width: 2vw; height: 40.05vw; background-color: white; position: absolute; right: -50.5vw; top: 5vw;transition-property: all; transition-duration: 2s;" refJSIMS>
<button onclick="this.parentNode.parentNode.parentNode.remove()" style="position: absolute;  right: -0.56vw; top: 17vw;transform: rotate(90deg); font-family: 'Inter Semibold'; width: 3vw">X</button>

                <h1 style="position: relative;  right: -0.3vw; top: 7vw;transform: rotate(90deg); font-family: 'Inter Semibold';">${appname}</h1>
   </div>
        </div>`;
    var apv = document.createElement("button");   
    apv.innerHTML = img +apcv ;
    apv.style.backgroundColor = 'rgba(119, 119, 119, 0.4)';
    apv.style.width = '2vw';
    apv.style.height = '11vw';
    apv.style.zIndex = '-1';
    apv.style.position = 'absolute';
    apv.style.top = '0vw';
    apv.style.left = mi + "vw";
    document.querySelector('#dock').appendChild(apv);   
    
    
    

    
    
    
    if (mi > 8) {
        callNotiflication('You have too many apps open. You cannot open another application until you close one.');
    }
}

function opena() {
    document.querySelector('dock').style.animation = 'animationdoc  4s 2';
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    callFunction('hi')
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

//below is new
function JSIMSHDFU(JSIMSOYHI){
   var ILYL = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').style.height.split("vw")[0]) + 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').style.height = ILYL + "vw";
    
    var ILYLWAMH = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').style.height.split("vw")[0]) + 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').style.height = ILYLWAMH + "vw";
}

function JSIMS(JSIMSOYHI){
   var ILYL = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').style.height.split("vw")[0]) - 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').style.height = ILYL + "vw";
    
    var ILYLWAMH = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').style.height.split("vw")[0]) - 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').style.height = ILYLWAMH + "vw";
}

function ILTLOYID(JSIMSOYHI){
   var ILYL = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').parentNode.style.left.split("vw")[0]) + 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').parentNode.style.left = ILYL + "vw";
    
    var ILYLWAMH = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').parentNode.style.right.split("vw")[0]) + 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').parentNode.style.right = ILYLWAMH + "vw";
}

function ILTLOYIDWAMH(JSIMSOYHI){
   var ILYL = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').parentNode.style.left.split("vw")[0]) - 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').parentNode.style.left = ILYL + "vw";
    
    var ILYLWAMH = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').parentNode.style.right.split("vw")[0]) - 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').parentNode.style.right = ILYLWAMH + "vw";
}
//JSIMS!OYHI!
function JSIMSHDFU3(JSIMSOYHI){
   var ILYL = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').style.width.split("vw")[0]) + 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').style.width = ILYL + "vw";
    
    var ILYLWAMH = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').style.right.split("vw")[0]) - 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').style.right = ILYLWAMH + "vw";
}

function JSIMS3(JSIMSOYHI){
   var ILYL = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').style.width.split("vw")[0]) - 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').style.width = ILYL + "vw";
    
    var ILYLWAMH = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').style.right.split("vw")[0]) + 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').style.right = ILYLWAMH + "vw";
}

function ILTLOYID3(JSIMSOYHI){
   var ILYL = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').parentNode.style.top.split("vw")[0]) + 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').parentNode.style.top = ILYL + "vw";
    
    var ILYLWAMH = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').parentNode.style.top.split("vw")[0]) + 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').parentNode.style.top = ILYLWAMH + "vw";
}

function ILTLOYIDWAMH3(JSIMSOYHI){
   var ILYL = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').parentNode.style.top.split("vw")[0]) - 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[ref]').parentNode.style.top = ILYL + "vw";
    
    var ILYLWAMH = parseInt(JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').parentNode.style.top.split("vw")[0]) - 1; JSIMSOYHI.parentNode.parentNode.parentNode.querySelector('[refJSIMS]').parentNode.style.top = ILYLWAMH + "vw";
}
function newscaleJSIMS(object){
    var mouseXJSIMS = event.clientX;
    var mouseYJSIMS = event.clientY;
    object.parentNode.parentNode.parentNode.parentNode.style.right = mouseXJSIMS + "px";
    object.parentNode.parentNode.parentNode.parentNode.style.top = mouseYJSIMS + "px";
}

setInterval(function(){
                var x = event.clientX-100;
  var y = event.clientY-961;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.querySelector("[JSIMSOYHI]").style.top = y + "px";
  document.querySelector("[JSIMSOYHI]").style.left = x + "px";
            }, 1)
            function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.querySelector("[JSIMSOYHI]").style.top = y + "px";
  document.querySelector("[JSIMSOYHI]").style.left = x + "px";
  //document.querySelector("[JSIMSOYHI]").style.fontSize = y + x + "px";
}