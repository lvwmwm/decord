// Module ID: 5408
// Function ID: 5409
// Name: initialize
// Dependencies: [5409, 5411, 5416]

// Module 5408 (initialize)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = false;
arg5.initialize = function initialize() {
  require(5409) /* onGestureHandlerEvent */.startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = require(5411) /* toArray */.isFabric();
  if (isFabricResult) {
    isFabricResult = !c3;
  }
  if (isFabricResult) {
    module(5416).install();
    c3 = true;
    const obj2 = module(5416);
  }
};
