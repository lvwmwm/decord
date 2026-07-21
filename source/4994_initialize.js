// Module ID: 4994
// Function ID: 42776
// Name: initialize
// Dependencies: []

// Module 4994 (initialize)
let closure_3 = false;
arg5.initialize = function initialize() {
  arg1(arg6[0]).startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = arg1(arg6[1]).isFabric();
  if (isFabricResult) {
    isFabricResult = !closure_3;
  }
  if (isFabricResult) {
    arg2(arg6[2]).install();
    closure_3 = true;
    const obj2 = arg2(arg6[2]);
  }
};
