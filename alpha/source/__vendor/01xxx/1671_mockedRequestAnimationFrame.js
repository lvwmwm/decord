// Module ID: 1671
// Function ID: 1672
// Name: mockedRequestAnimationFrame
// Dependencies: []
// Exports: mockedRequestAnimationFrame

// Module 1671 (mockedRequestAnimationFrame)

export const mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
};
