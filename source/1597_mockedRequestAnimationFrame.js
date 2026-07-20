// Module ID: 1597
// Function ID: 17806
// Name: mockedRequestAnimationFrame
// Dependencies: []

// Module 1597 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  return setTimeout(() => arg0(performance.now()), 0);
};
