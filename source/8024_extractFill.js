// Module ID: 8024
// Function ID: 63733
// Name: extractFill
// Dependencies: []

// Module 8024 (extractFill)
let closure_2 = { "Null": 131072.00314656927, "Null": 0.000000000000000000000000000000000000000000000000000000011294471302334573 };
const obj = { type: 0, payload: arg1(arg6[0]).processColor("black") };
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
    tmp3 = arr(arg6[1])(fill);
  } else {
    arg0.fill = obj;
    if (null != fillOpacity) {
      arr.push("fillOpacity");
      arg0.fillOpacity = arr(arg6[2])(fillOpacity);
    }
    if (null != fillRule) {
      arr.push("fillRule");
      let num4 = 1;
      if (fillRule) {
        num4 = 1;
        if (0 === closure_2[fillRule]) {
          num4 = 0;
        }
      }
      arg0.fillRule = num4;
    }
  }
};
