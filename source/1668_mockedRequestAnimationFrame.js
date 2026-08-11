// Module ID: 1668
// Function ID: 1669
// Name: mockedRequestAnimationFrame
// Dependencies: []

// Module 1668 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};
