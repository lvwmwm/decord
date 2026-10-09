// Module ID: 4845
// Function ID: 4846
// Dependencies: [32, 576, 4842]
// Exports: useRiveBoolean

// Module 4845
import react from "react" /* 576 */;
import _mod4842 from "module_4842" /* 4842 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function getBooleanProperty(booleanProperty, arg1) {
  return booleanProperty.booleanProperty(arg1);
}

export const useRiveBoolean = function useRiveBoolean(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = _mod4842;
  [tmp3, tmp4, tmp5] = obj2.useRiveProperty(arg1, arg0, getBooleanProperty);
  _slicedToArray(obj2.useRiveProperty(arg1, arg0, getBooleanProperty), 3);
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
