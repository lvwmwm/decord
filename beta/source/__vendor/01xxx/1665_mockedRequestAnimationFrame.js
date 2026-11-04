// Module ID: 1665
// Function ID: 1666
// Name: mockedRequestAnimationFrame
// Dependencies: []
// Exports: mockedRequestAnimationFrame

// Module 1665 (mockedRequestAnimationFrame)

export function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
}
