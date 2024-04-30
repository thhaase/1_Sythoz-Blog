var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



var scale = 1.5;
var count = 1;
var speed = 1;

const width = (canvas.width = canvas.clientWidth*scale);
const height = (canvas.height = canvas.clientHeight*scale);


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vel = [0, 0];
  }

  distanceTo(otherPoint) {
    return Math.sqrt(Math.pow(this.x - otherPoint.x, 2) + Math.pow(this.y - otherPoint.y, 2));
  }

  applyVel(vel = [0, 0]) {
    let maxVel = [5, 5];
    this.vel[0] += vel[0];
    this.vel[1] += vel[1];

    if (Math.abs(this.vel[0]) > maxVel[0])
      this.vel[0] = maxVel[0] * Math.sign(this.vel[0]);
    if (Math.abs(this.vel[1]) > maxVel[1])
      this.vel[1] = maxVel[1] * Math.sign(this.vel[1]);
  }

  update(delta) {
    //     Apply a velocity which goes to the center of the page
    // this.applyVel([])
    this.x += this.vel[0] * delta * 2;
    this.y += this.vel[1] * delta * 2;
  }
  
  setPos(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Instantiating the points array
let points = [];
for (let i = 0; i < ((width * height) / 1500)*count; i++) {
  let point = points[points.push(new Point(...randomPoint(width, height))) - 1];

  // Add a velocity to the point
  let r = 2;
  point.applyVel([ranRange(-r, r), ranRange(-r, r)]);
}
 // points = [new Point(10, 10), new Point(50, 50)]

function ranRange(min, max) {
  return min + Math.random() * (max - min);
}

var lastTimestamp = 0;
function update(totalTimeElapsed = 0) {
  let timeSinceLastFrame = totalTimeElapsed - lastTimestamp;
  lastTimestamp = totalTimeElapsed;
  
  ctx.clearRect(0, 0, width, height);

  // Move the points in a direction
  points.forEach((e) => {
    let r = 1 / 3;
    e.applyVel([ranRange(-r, r), ranRange(-r, r)]);
    e.update(timeSinceLastFrame/1000*speed);
    if (width + 10 < e.x || e.x < -10 || height + 10 < e.y || e.y < -10) {
      e.setPos(...randomPoint(width, height));
    }
  });
  
  // ctx.strokeStyle = "red"
  // Link nearby points
  points.forEach((e) => {
    let netVel = [0, 0];
    ctx.beginPath();
    ctx.moveTo(e.x, e.y);
    
    points.forEach((w) => {
      if(w == e) return;
      let d = e.distanceTo(w);
      if (d < 80) {
        // let vel = 1;
        // netVel = [netVel[0] + vel * Math.sign(w.x - e.x),netVel[1] + vel * Math.sign(w.y - e.y)]
        ctx.lineTo(w.x, w.y);
      }
      e.applyVel(netVel);
    });
    
    ctx.stroke();
    drawSquare(e.x, e.y, 1);
  });

  setTimeout((e) => {
    requestAnimationFrame(update);
  }, 50);
}

ctx.strokeStyle = "#aaaaaa20";
ctx.fillStyle = "#fff";
update();

/**
 * Helper functions
 */
function drawSquare(x, y, width) {
  drawRect(x, y, width, width);
}

function drawRect(x, y, width, height) {
  ctx.fillRect(x - width / 2, y - height / 2, width, height);
}

function randomPoint(width, height) {
  return [
    Math.floor(Math.random() * width),
    Math.floor(Math.random() * height)
  ];
}
