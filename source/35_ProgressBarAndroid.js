// Module ID: 35
// Function ID: 1270
// Name: ProgressBarAndroid
// Dependencies: [29, 33, 31, 36]
// Exports: default

// Module 35 (ProgressBarAndroid)
import _objectWithoutProperties from "_objectWithoutProperties";
import { jsx } from "jsxProd";
import result from "result";

let closure_2 = ["ref", "styleAttr", "indeterminate", "animating"];

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
  return jsx(importDefault(36), Object.assign(obj, tmp3, { ref: ref.ref }));
};
