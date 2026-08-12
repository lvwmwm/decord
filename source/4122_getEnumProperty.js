// Module ID: 4122
// Function ID: 4123
// Name: getEnumProperty
// Dependencies: [32, 4105, 4118]
// Exports: useRiveEnum

// Module 4122 (getEnumProperty)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function getEnumProperty(enumProperty) {
  return enumProperty.enumProperty(arg1);
}

export const useRiveEnum = function useRiveEnum(FillColor, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  let obj = require(4105) /* c */;
  const cResult = obj.c(4);
  const obj2 = require(4118) /* useRiveProperty */;
  [tmp3, tmp4, tmp5] = callback(require(4118) /* useRiveProperty */.useRiveProperty(instance, FillColor, getEnumProperty), 3);
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
