// Module ID: 1659
// Function ID: 1660
// Name: mockedRequestAnimationFrame
// Dependencies: []
// Exports: mockedRequestAnimationFrame

// Module 1659 (mockedRequestAnimationFrame)

export const mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
};
