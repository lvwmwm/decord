// Module ID: 1597
// Function ID: 17813
// Name: mockedRequestAnimationFrame
// Dependencies: []

// Module 1597 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  let closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};
