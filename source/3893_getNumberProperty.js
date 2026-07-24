// Module ID: 3893
// Function ID: 32227
// Name: getNumberProperty
// Dependencies: [57, 3881, 3894]
// Exports: useRiveNumber

// Module 3893 (getNumberProperty)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function getNumberProperty(numberProperty) {
  return numberProperty.numberProperty(arg1);
}

export const useRiveNumber = function useRiveNumber(AnimationState, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  let obj = require(3881) /* c */;
  const cResult = obj.c(4);
  const obj2 = require(3894) /* useRiveProperty */;
  [tmp3, tmp4, tmp5] = callback(require(3894) /* useRiveProperty */.useRiveProperty(instance, AnimationState, getNumberProperty), 3);
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
