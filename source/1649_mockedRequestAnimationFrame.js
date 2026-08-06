// Module ID: 1649
// Function ID: 1650
// Name: mockedRequestAnimationFrame
// Dependencies: []

// Module 1649 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};
