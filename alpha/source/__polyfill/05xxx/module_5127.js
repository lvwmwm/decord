// Module ID: 5127
// Function ID: 5128
// Dependencies: [32, 5111, 5124]
// Exports: useRiveBoolean

// Module 5127
import react from "react" /* 5111 */;
import _mod5124 from "module_5124" /* 5124 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function getBooleanProperty(booleanProperty, arg1) {
  return booleanProperty.booleanProperty(arg1);
}

export function useRiveBoolean(reducedMotion, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = _mod5124;
  [tmp3, tmp4, tmp5] = obj2.useRiveProperty(instance, reducedMotion, getBooleanProperty);
  _slicedToArray(obj2.useRiveProperty(instance, reducedMotion, getBooleanProperty), 3);
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4) {
      let tmp6;
      if (cResult[2] === tmp3) {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const obj3 = { value: tmp3, setValue: tmp4, error: tmp5 };
  cResult[0] = tmp5;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = obj3;
  tmp6 = obj3;
}
