function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KwTjfOiUWK":
        Script1();
        break;
      case "5bo1InKtlN4":
        Script2();
        break;
      case "5zRmqYOgqo2":
        Script3();
        break;
      case "5qg8n583MSR":
        Script4();
        break;
      case "6lkpAVsEsFE":
        Script5();
        break;
      case "6iHuJeRhbRY":
        Script6();
        break;
      case "5xq6Y0L7pvo":
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
const target = object('67qCBsBKw4B');
const duration = 750;
const easing = 'ease-out';
const id = '6JT7sMJjJwU';
const pulseAmount = 0.07;
const delay = 6646;
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
const target = object('6BvV3on3nX4');
const duration = 1000;
const easing = 'ease-out';
const id = '6nGu6Z8Qbim';
const pulseAmount = 0.07;
const delay = 4753;
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
const target = object('5o9nncm7q0x');
const duration = 1000;
const easing = 'ease-out';
const id = '5fAzFUgtu0A';
const pulseAmount = 0.07;
const delay = 4753;
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

window.Script4 = function()
{
  player.once(() => {
const target = object('5bbr8R6CxJG');
const duration = 1000;
const easing = 'ease-out';
const id = '6RhLP5pK32r';
const pulseAmount = 0.07;
const delay = 4753;
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

window.Script5 = function()
{
  player.once(() => {
const target = object('5lCasvBVSg9');
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
const target = object('5lCasvBVSg9');
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
const target = object('5lCasvBVSg9');
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
