// var canvas = document.getElementById('demoCanvas');


// function init() {
// 	var stage = new createjs.Stage('demoCanvas');
// 	var circle = new createjs.Shape();
// 	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
// 	circle.x = 100;
// 	circle.y = 100;
// 	stage.addChild(circle);
// 	stage.update();
// }


// window.onload = init();

// createjs.Tween.get(circle, { loop: true })
//   .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
//   .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
//   .to({ alpha: 0, y: 225 }, 100)
//   .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
//   .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
  
// createjs.Ticker.setFPS(60);
// createjs.Ticker.addEventListener("tick", stage);

var newStats = {
	name: 'Christian',
	str: 10,
	fin: 10,
	intl: 10,
	aff: 10,
	wil: 10,
	agl: 10,
	chr: 10
};

var player = new Player(newStats);

console.log(player);