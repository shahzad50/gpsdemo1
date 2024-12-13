function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pOQqR0vsRI":
        Script1();
        break;
      case "6UvwdqghTyX":
        Script2();
        break;
      case "5q99gJJGT7k":
        Script3();
        break;
      case "6FsloSKLBN1":
        Script4();
        break;
      case "5lqaxzYfytG":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6fXCm6HxHX6');
const duration = 750;
const easing = 'ease-out';
const id = '6MsfyIjTLJN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5VZWQcLM024');
const duration = 750;
const easing = 'ease-out';
const id = '6hvD0p0Fwew';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6J73VNp7nF0');
const duration = 750;
const easing = 'ease-out';
const id = '6pP0nZFwfXs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6WIDLrT4X8Z');
const duration = 750;
const easing = 'ease-out';
const id = '66w1dIeaMcd';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
