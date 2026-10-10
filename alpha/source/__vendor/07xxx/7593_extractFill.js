// Module ID: 7593
// Function ID: 7594
// Name: extractFill
// Dependencies: [17, 7594, 7582]
// Exports: default

// Module 7593 (extractFill)
import extractOpacityDefault from "extractOpacity" /* 7582 */;
import extractBrushDefault from "extractBrush" /* 7594 */;

const require = globalThis.__r;

let closure_2 = { evenodd: 0, nonzero: 1 };
const action = { type: 0, payload: require("react-native").processColor("black") };

export default function extractFill(arg0, arg1, arr) {
  let fill;
  let fillOpacity;
  let fillRule;
  ({ fill, fillRule, fillOpacity } = arg1);
  if (null != fill) {
    arr.push("fill");
    if (!fill) {
      let tmp5;
      if (typeof fill !== "number") {
        tmp5 = action;
      }
      arg0.fill = tmp5;
    }
    tmp5 = extractBrushDefault(fill);
  } else {
    arg0.fill = action;
  }
  if (null != fillOpacity) {
    arr.push("fillOpacity");
    arg0.fillOpacity = extractOpacityDefault(fillOpacity);
  }
  if (null != fillRule) {
    arr.push("fillRule");
    let num2 = 1;
    if (fillRule) {
      num2 = 1;
      if (0 === closure_2[fillRule]) {
        num2 = 0;
      }
    }
    arg0.fillRule = num2;
  }
};
