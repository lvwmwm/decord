// Module ID: 1621
// Function ID: 1622
// Name: mockedRequestAnimationFrame
// Dependencies: []

// Module 1621 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};
