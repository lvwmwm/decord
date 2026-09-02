// Module ID: 1667
// Function ID: 1668
// Name: mockedRequestAnimationFrame
// Dependencies: []

// Module 1667 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};
