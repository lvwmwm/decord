// Module ID: 1669
// Function ID: 1670
// Name: mockedRequestAnimationFrame
// Dependencies: []

// Module 1669 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};
