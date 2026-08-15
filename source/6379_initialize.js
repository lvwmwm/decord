// Module ID: 6379
// Function ID: 6380
// Name: initialize
// Dependencies: [6380]

// Module 6379 (initialize)
const require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  require(6380) /* onGestureHandlerEvent */.startListening();
};
