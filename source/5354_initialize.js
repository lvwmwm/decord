// Module ID: 5354
// Function ID: 5355
// Name: initialize
// Dependencies: [5355, 5357, 5362]

// Module 5354 (initialize)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = false;
arg5.initialize = function initialize() {
  require(5355) /* onGestureHandlerEvent */.startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = require(5357) /* toArray */.isFabric();
  if (isFabricResult) {
    isFabricResult = !c3;
  }
  if (isFabricResult) {
    module(5362).install();
    c3 = true;
    const obj2 = module(5362);
  }
};
