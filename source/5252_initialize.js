// Module ID: 5252
// Function ID: 45291
// Name: initialize
// Dependencies: [5253, 5255, 5260]

// Module 5252 (initialize)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = false;
arg5.initialize = function initialize() {
  require(5253) /* isStateChangeEvent */.startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = require(5255) /* hasProperty */.isFabric();
  if (isFabricResult) {
    isFabricResult = !c3;
  }
  if (isFabricResult) {
    module(5260).install();
    c3 = true;
    const obj2 = module(5260);
  }
};
