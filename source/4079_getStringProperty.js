// Module ID: 4079
// Function ID: 4080
// Name: getStringProperty
// Dependencies: [32, 4064, 4077]
// Exports: useRiveString

// Module 4079 (getStringProperty)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function getStringProperty(stringProperty) {
  return stringProperty.stringProperty(arg1);
}

export const useRiveString = function useRiveString(LVL, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  let obj = require(4064) /* c */;
  const cResult = obj.c(4);
  const obj2 = require(4077) /* useRiveProperty */;
  [tmp3, tmp4, tmp5] = callback(require(4077) /* useRiveProperty */.useRiveProperty(instance, LVL, getStringProperty), 3);
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  obj = { value: tmp3, setValue: tmp4, error: tmp5 };
  cResult[0] = tmp5;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = obj;
  tmp6 = obj;
};
