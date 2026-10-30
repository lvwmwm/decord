// Module ID: 1666
// Function ID: 1667
// Name: mockedRequestAnimationFrame
// Dependencies: []
// Exports: mockedRequestAnimationFrame

// Module 1666 (mockedRequestAnimationFrame)

export function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
}
