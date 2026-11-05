// Module ID: 5255
// Function ID: 5256
// Dependencies: [32, 5240, 5253]
// Exports: useRiveString

// Module 5255
import react from "react" /* 5240 */;
import _mod5253 from "module_5253" /* 5253 */;
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
  const obj2 = _mod5253;
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
