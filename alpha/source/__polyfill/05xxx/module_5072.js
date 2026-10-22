// Module ID: 5072
// Function ID: 5073
// Dependencies: [32, 576, 5070]
// Exports: useRiveString

// Module 5072
import react from "react" /* 576 */;
import _mod5070 from "module_5070" /* 5070 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function getStringProperty(stringProperty, arg1) {
  return stringProperty.stringProperty(arg1);
}

export const useRiveString = function useRiveString(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = _mod5070;
  [tmp3, tmp4, tmp5] = obj2.useRiveProperty(arg1, arg0, getStringProperty);
  _slicedToArray(obj2.useRiveProperty(arg1, arg0, getStringProperty), 3);
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
