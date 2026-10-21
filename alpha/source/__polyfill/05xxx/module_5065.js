// Module ID: 5065
// Function ID: 5066
// Dependencies: [32, 576, 5066]
// Exports: useRiveNumber

// Module 5065
import react from "react" /* 576 */;
import _mod5066 from "module_5066" /* 5066 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function getNumberProperty(numberProperty, arg1) {
  return numberProperty.numberProperty(arg1);
}

export const useRiveNumber = function useRiveNumber(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = _mod5066;
  [tmp3, tmp4, tmp5] = obj2.useRiveProperty(arg1, arg0, getNumberProperty);
  _slicedToArray(obj2.useRiveProperty(arg1, arg0, getNumberProperty), 3);
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
