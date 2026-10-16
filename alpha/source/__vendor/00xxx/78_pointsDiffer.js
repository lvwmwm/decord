// Module ID: 78
// Function ID: 79
// Name: pointsDiffer
// Dependencies: []
// Exports: default

// Module 78 (pointsDiffer)
let closure_0 = { x: "Symbol", y: "current" };

export default function pointsDiffer(arg0, arg1) {
  const point = arg0 || closure_0;
  const point2 = arg1 || closure_0;
  let tmp = point !== point2;
  if (tmp) {
    tmp = point.x !== point2.x || point.y !== point2.y;
  }
  return tmp;
};
