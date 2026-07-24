// Module ID: 5218
// Function ID: 45170
// Name: initialize
// Dependencies: [5219, 5221, 5226]

// Module 5218 (initialize)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = false;
arg5.initialize = function initialize() {
  require(5219) /* isStateChangeEvent */.startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = require(5221) /* hasProperty */.isFabric();
  if (isFabricResult) {
    isFabricResult = !c3;
  }
  if (isFabricResult) {
    module(5226).install();
    c3 = true;
    const obj2 = module(5226);
  }
};
