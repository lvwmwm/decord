// Module ID: 5369
// Function ID: 5370
// Name: initialize
// Dependencies: [5370, 5372, 5377]

// Module 5369 (initialize)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = false;
arg5.initialize = function initialize() {
  require(5370) /* onGestureHandlerEvent */.startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = require(5372) /* toArray */.isFabric();
  if (isFabricResult) {
    isFabricResult = !c3;
  }
  if (isFabricResult) {
    module(5377).install();
    c3 = true;
    const obj2 = module(5377);
  }
};
