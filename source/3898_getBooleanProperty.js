// Module ID: 3898
// Function ID: 32258
// Name: getBooleanProperty
// Dependencies: [57, 3882, 3895]
// Exports: useRiveBoolean

// Module 3898 (getBooleanProperty)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function getBooleanProperty(booleanProperty) {
  return booleanProperty.booleanProperty(arg1);
}

export const useRiveBoolean = function useRiveBoolean(reducedMotion, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  let obj = require(3882) /* c */;
  const cResult = obj.c(4);
  const obj2 = require(3895) /* useRiveProperty */;
  [tmp3, tmp4, tmp5] = callback(require(3895) /* useRiveProperty */.useRiveProperty(instance, reducedMotion, getBooleanProperty), 3);
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
