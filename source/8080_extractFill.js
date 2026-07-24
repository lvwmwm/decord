// Module ID: 8080
// Function ID: 64036
// Name: extractFill
// Dependencies: [27, 8081, 8069]

// Module 8080 (extractFill)
const module = arg2;
const dependencyMap = arg6;
let closure_2 = { evenodd: 0, nonzero: 1 };
const obj = { type: 0, payload: require("get ActivityIndicator").processColor("black") };
arg5.default = function extractFill(arg0, arg1, arr) {
  let fill;
  let fillOpacity;
  let fillRule;
  ({ fill, fillRule, fillOpacity } = arg1);
  if (null != fill) {
    arr.push("fill");
    if (!fill) {
      if ("number" !== typeof fill) {
        let tmp3 = obj;
      }
      arg0.fill = tmp3;
    }
    tmp3 = module(8081)(fill);
  } else {
    arg0.fill = obj;
    if (null != fillOpacity) {
      arr.push("fillOpacity");
      arg0.fillOpacity = module(8069)(fillOpacity);
    }
    if (null != fillRule) {
      arr.push("fillRule");
      let num4 = 1;
      if (fillRule) {
        num4 = 1;
        if (0 === table[fillRule]) {
          num4 = 0;
        }
      }
      arg0.fillRule = num4;
    }
  }
};
