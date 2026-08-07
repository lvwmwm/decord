// Module ID: 5427
// Function ID: 5428
// Name: initialize
// Dependencies: [5428, 5430, 5435]

// Module 5427 (initialize)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = false;
arg5.initialize = function initialize() {
  require(5428) /* onGestureHandlerEvent */.startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = require(5430) /* toArray */.isFabric();
  if (isFabricResult) {
    isFabricResult = !c3;
  }
  if (isFabricResult) {
    module(5435).install();
    c3 = true;
    const obj2 = module(5435);
  }
};
