/*Objectives:
Create simple objects in our program to store and access data in a more organized way.
Control the created objects with specific keyboard keys.
_______________________________________________*/

/**Set Up Radar and Speed Limit:**
  Define the radar's position (radarX) and the speed limit (speedLimit)
*/

radarX = 280;
speedLimit = 25;

/**define the car objects (Car1 and Car2) with their properties like initial positions
*(x, y, w,h,s,id), width , height , speed and IDs */

var car1 = {
  x: randomNumber(-150,-100),
  y: 233,
  w: 100,
  h: 30,
  s: randomNumber(10,35),
  id: "car1"
};

var car2 = {
  x: randomNumber(-150,-100),
  y: 407,
  w: 100,
  h: 30,
  s: randomNumber(10,35),
  id: "car2"
};

/**Create Car Display, Movement and Radar Functions:**
*/

function makeCar() {
  // Code to positions the cars on the screen via Image elements
  //HINT:image(Car1.id, Car1.id+".png");
  //    setPosition(Car1.id, Car1.x, Car1.y, Car1.w, Car1.h);
  image(car1.id, car1.id+".png");
  setPosition(car1.id, car1.x, car1.y, car1.w, car1.h);
  
  image(car2.id, car2.id+".png");
  setPosition(car2.id, car2.x, car2.y, car2.w, car2.h);
}

function moveCars() {
  // Code to updates the car positions, checks radar, and starts the car  overif they go off the screen.
  car1.x += car1.s;
  setPosition(car1.id,car1.x, car1.y, car1.w, car1.h);
  checkRadar(car1);
  startOver(car1);
  
  car2.x += car2.s;
  setPosition(car2.id,car2.x, car2.y, car2.w, car2.h);
  checkRadar(car2);
  startOver(car2);
}

function checkRadar(Car) {
  // Code to check if a car is speeding and update the radar text based on speedLimit Red above black below  
  if (Car.s > 25) {
    setProperty("radar","text-color","red");
  } else {
    setProperty("radar","text-color","black");
  }
  setText("radar",Car.s);
}

function startOver(Car) {
  //wraps the car if they go off the screen.
  if (Car.x > 320) {
    Car.x = randomNumber(-150,-100);
    Car.s = randomNumber(10,35);
  }
}


/**Run the App:**
  * Finally, call the `makeCar` function to set up the initial car positions.
  *Use the `timedLoop` function to continuously call the `moveCar` function every 200 milliseconds to update the car positions and radar information.
*/

makeCar();
timedLoop(100, moveCars);
