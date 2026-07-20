// Module ID: 35
// Function ID: 1270
// Name: ProgressBarAndroid
// Dependencies: []
// Exports: default

// Module 35 (ProgressBarAndroid)
let closure_2 = ["now", "has", "call", "a"];
let closure_3 = importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
arg1(dependencyMap[2]);

export default function ProgressBarAndroid(ref) {
  const styleAttr = ref.styleAttr;
  let str = "Normal";
  if (undefined !== styleAttr) {
    str = styleAttr;
  }
  const indeterminate = ref.indeterminate;
  const animating = ref.animating;
  const obj = { styleAttr: str, indeterminate: undefined === indeterminate || indeterminate, animating: undefined === animating || animating };
  const tmp = undefined === indeterminate || indeterminate;
  const tmp2 = undefined === animating || animating;
  const tmp3 = callback(ref, closure_2);
  return jsx(importDefault(dependencyMap[3]), Object.assign(obj, tmp3, { ref: ref.ref }));
};
