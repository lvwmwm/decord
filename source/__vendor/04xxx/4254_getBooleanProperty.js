// Module ID: 4254
// Function ID: 4255
// Name: getBooleanProperty
// Dependencies: [32, 4238, 4251]
// Exports: useRiveBoolean

// Module 4254 (getBooleanProperty)
import c from "c" /* 4238 */;
import useRiveProperty from "useRiveProperty" /* 4251 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
function getBooleanProperty(booleanProperty) {
  return booleanProperty.booleanProperty(arg1);
}

export const useRiveBoolean = function useRiveBoolean(reducedMotion, instance) {
  let obj = c;
  const cResult = obj.c(4);
  const obj2 = useRiveProperty;
  [tmp3, tmp4, tmp5] = callback(useRiveProperty.useRiveProperty(instance, reducedMotion, getBooleanProperty), 3);
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
