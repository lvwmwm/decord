// Module ID: 1673
// Function ID: 1674
// Name: mockedRequestAnimationFrame
// Dependencies: []
// Exports: mockedRequestAnimationFrame

// Module 1673 (mockedRequestAnimationFrame)

export const mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
};
