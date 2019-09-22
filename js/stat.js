var renderStatistics = function (ctx, names, times){
var MAXHEIGHT = 150;
var COLUMNWIDTH = 40;
var COLUMNSPACE = 50;
var STARTPOINTTEXT = 120;
var STARTPOINTCOLUMN = 160;
var MAXY = 90;
var STARTPOINTNAMES = 250;
var WINDOWX = 100;
var WINDOWY = 10;
var DISPLACEMENT = 10;
var WINDOWWIDTH = 420;
var WINDOWHEIGHT = 270

  //поле с тенью
ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
ctx.fillRect (WINDOWX + DISPLACEMENT, WINDOWY + DISPLACEMENT, WINDOWWIDTH, WINDOWHEIGHT);
ctx.fillStyle = 'white';
ctx.fillRect (WINDOWX, WINDOWY, WINDOWWIDTH, WINDOWHEIGHT);

 //текст
ctx.fillStyle = 'black';
ctx.font = '16px PT Mono';
ctx.textBaseline = 'hanging';
ctx.fillText('Ура вы победили!', STARTPOINTTEXT, 20);
ctx.fillText('Список результатов:', STARTPOINTTEXT, 46);

//максимальное количество времени
var getMaxOfArray = function (numArray) {
return Math.max.apply(null, numArray);
};
var maxTimes = Math.floor(getMaxOfArray(times));
console.log (maxTimes);


//цикл, который выводит имена и столбики

for (var i = 0; i<times.length; i++){
    if (names[i] == 'Вы') {ctx.fillStyle = 'rgba(255, 0, 0, 1)'}
    else {ctx.fillStyle = 'hsl(240, 100%, 50%, ' + Math.random() + ')'}
  ctx.fillRect (STARTPOINTCOLUMN + (COLUMNWIDTH + COLUMNSPACE) * i, MAXY + MAXHEIGHT - (MAXHEIGHT * Math.floor(times[i]) / maxTimes), COLUMNWIDTH, MAXHEIGHT * Math.floor(times[i]) / maxTimes);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText (names[i], STARTPOINTCOLUMN + (COLUMNWIDTH + COLUMNSPACE) * i, STARTPOINTNAMES);
  }
}
