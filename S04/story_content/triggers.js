function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ObZGB02Od1":
        Script1();
        break;
      case "5ViNOyuRcXg":
        Script2();
        break;
      case "5vAQGWEIEpZ":
        Script3();
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
const target = object('6Jx4igBPP3F');
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

window.Script2 = function()
{
  player.once(() => {
const target = object('6Jx4igBPP3F');
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

window.Script3 = function()
{
  player.once(() => {
const target = object('6Jx4igBPP3F');
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
