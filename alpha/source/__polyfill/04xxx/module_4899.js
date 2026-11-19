// Module ID: 4899
// Function ID: 4900
// Dependencies: [32, 4884, 4897]
// Exports: useRiveString

// Module 4899
import react from "react" /* 4884 */;
import _mod4897 from "module_4897" /* 4897 */;
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
  const obj2 = _mod4897;
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
