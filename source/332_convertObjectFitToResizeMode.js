// Module ID: 332
// Function ID: 333
// Name: convertObjectFitToResizeMode
// Dependencies: []

// Module 332 (convertObjectFitToResizeMode)
let closure_0 = { contain: "contain", cover: "cover", fill: "stretch", "scale-down": "contain", none: "none" };
arg5.convertObjectFitToResizeMode = function convertObjectFitToResizeMode(objectFit) {
  let tmp;
  if (null != objectFit) {
    tmp = table[objectFit];
  }
  return tmp;
};
