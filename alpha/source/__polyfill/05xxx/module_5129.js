// Module ID: 5129
// Function ID: 5130
// Dependencies: [32, 19, 5111, 5124, 5119]
// Exports: useRiveColor

// Module 5129
import react from "react" /* 19 */;
import react2 from "react" /* 5111 */;
import _mod5124 from "module_5124" /* 5124 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let tmp;
const RiveColor2 = tmp(5119);
react.useCallback;
const f34157 = (colorProperty, arg1) => colorProperty.colorProperty(arg1);

export function useRiveColor(FillColor, instance) {
  let closure_0;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  const obj2 = _mod5124;
  const tmp4 = _slicedToArray(obj2.useRiveProperty(instance, FillColor, f34157), 3);
  [tmp5, tmp6] = tmp4;
  require = tmp6;
  if (cResult[0] !== tmp5) {
    let fromIntResult;
    if (undefined !== tmp5) {
      let RiveColor = RiveColor2.RiveColor;
      fromIntResult = RiveColor.fromInt(tmp5);
    }
    cResult[0] = tmp5;
    cResult[1] = fromIntResult;
    tmp8 = fromIntResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const fn = function p(str) {
      let fromHexStringResult = str;
      if (typeof str === "string") {
        const RiveColor = RiveColor2.RiveColor;
        fromHexStringResult = RiveColor.fromHexString(str);
      }
      tmp6(fromHexStringResult.toInt());
    };
    cResult[2] = tmp6;
    cResult[3] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4[2]) {
    if (cResult[5] === tmp10) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
  }
  const obj3 = { value: tmp8, setValue: tmp10, error: tmp4[2] };
  cResult[4] = tmp4[2];
  cResult[5] = tmp10;
  cResult[6] = tmp8;
  cResult[7] = obj3;
  tmp11 = obj3;
}
