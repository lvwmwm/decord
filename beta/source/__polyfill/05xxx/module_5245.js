// Module ID: 5245
// Function ID: 5246
// Dependencies: [32, 5230, 5243]
// Exports: useRiveString

// Module 5245
import react from "react" /* 5230 */;
import _mod5243 from "module_5243" /* 5243 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function getStringProperty(stringProperty, arg1) {
  return stringProperty.stringProperty(arg1);
}

export function useRiveString(LVL, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = _mod5243;
  [tmp3, tmp4, tmp5] = obj2.useRiveProperty(instance, LVL, getStringProperty);
  _slicedToArray(obj2.useRiveProperty(instance, LVL, getStringProperty), 3);
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
