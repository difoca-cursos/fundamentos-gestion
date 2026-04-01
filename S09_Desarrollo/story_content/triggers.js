function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mGV9e5YxWp":
        Script1();
        break;
      case "6O0JWvp8HiX":
        Script2();
        break;
      case "5sY9qJPAmpF":
        Script3();
        break;
      case "5hY9eoH9jGE":
        Script4();
        break;
      case "5qFLIEz7CJH":
        Script5();
        break;
      case "6HuHukCkvVM":
        Script6();
        break;
      case "5xD3aUM53fT":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('5dy9rz3EHgO');
const duration = 1250;
const easing = 'ease-out';
const id = '6jkIjtcLbnL';
const shakeAmount = 2;
const delay = 2062;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5VGtqmmERw1');
const duration = 1250;
const easing = 'ease-out';
const id = '6aBa5djqX8Z';
const shakeAmount = 2;
const delay = 2062;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5VGtqmmERw1');
const duration = 1250;
const easing = 'ease-out';
const id = '6aBa5djqX8Z';
const shakeAmount = 2;
const delay = 2062;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5iuhF9Rspov');
const duration = 1250;
const easing = 'ease-out';
const id = '6ffxdgvO3a4';
const shakeAmount = 2;
const delay = 2062;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5aFStX6qAGb');
const duration = 750;
const easing = 'ease-out';
const id = '6P7Wr1FAiIB';
const pulseAmount = 0.07;
const delay = 3021;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5aFStX6qAGb');
const duration = 750;
const easing = 'ease-out';
const id = '6P7Wr1FAiIB';
const pulseAmount = 0.07;
const delay = 3021;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5aFStX6qAGb');
const duration = 750;
const easing = 'ease-out';
const id = '6lAtz5cXfM1';
const shakeAmount = 2;
const delay = 6771;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
