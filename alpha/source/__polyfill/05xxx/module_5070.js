// Module ID: 5070
// Function ID: 5071
// Dependencies: [32, 576, 5066]
// Exports: useRiveEnum

// Module 5070
import react from "react" /* 576 */;
import _mod5066 from "module_5066" /* 5066 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function getEnumProperty(enumProperty, arg1) {
  return enumProperty.enumProperty(arg1);
}

export const useRiveEnum = function useRiveEnum(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = _mod5066;
  [tmp3, tmp4, tmp5] = obj2.useRiveProperty(arg1, arg0, getEnumProperty);
  _slicedToArray(obj2.useRiveProperty(arg1, arg0, getEnumProperty), 3);
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
};
