var MAX_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_SPACE = 50;
var START_POINT_TEXT = 120;
var START_POINT_COLUMN = 160;
var MAX_Y = 90;
var START_POINT_NAMES = 250;
var WINDOW_X = 100;
var WINDOW_Y = 10;
var DISPLACEMENT = 10;
var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270

var getMaxOfArray = function (numArray) {
  return Math.max.apply(null, numArray);
  };

var renderStatistics = function (ctx, names, times){

var createCloud = function() {
ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
ctx.fillRect (WINDOW_X + DISPLACEMENT, WINDOW_Y + DISPLACEMENT, WINDOW_WIDTH, WINDOW_HEIGHT);
ctx.fillStyle = 'white';
ctx.fillRect (WINDOW_X, WINDOW_Y, WINDOW_WIDTH, WINDOW_HEIGHT);
};
createCloud();

var createText = function() {
ctx.fillStyle = 'black';
ctx.font = '16px PT Mono';
ctx.textBaseline = 'hanging';
ctx.fillText('Ура вы победили!', START_POINT_TEXT, 20);
ctx.fillText('Список результатов:', START_POINT_TEXT, 46);
};
createText();

var getStat = function() {
var maxTimes = Math.floor(getMaxOfArray(times));
for (var i = 0; i<times.length; i++){
      if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'
      } else {
      ctx.fillStyle = 'hsl(240, 100%, 50%, ' + Math.random() + ')'
      }
  ctx.fillRect (START_POINT_COLUMN + (COLUMN_WIDTH + COLUMN_SPACE) * i, MAX_Y + MAX_HEIGHT - (MAX_HEIGHT * Math.floor(times[i]) / maxTimes), COLUMN_WIDTH, MAX_HEIGHT * Math.floor(times[i]) / maxTimes);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText (names[i], START_POINT_COLUMN + (COLUMN_WIDTH + COLUMN_SPACE) * i, START_POINT_NAMES);
    };
  };
  getStat();
}
