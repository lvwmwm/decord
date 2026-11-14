// Module ID: 5425
// Function ID: 5426
// Dependencies: [32, 5408, 5421]
// Exports: useRiveEnum

// Module 5425
import react from "react" /* 5408 */;
import _mod5421 from "module_5421" /* 5421 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function getEnumProperty(enumProperty, arg1) {
  return enumProperty.enumProperty(arg1);
}

export function useRiveEnum(device, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = _mod5421;
  [tmp3, tmp4, tmp5] = obj2.useRiveProperty(instance, device, getEnumProperty);
  _slicedToArray(obj2.useRiveProperty(instance, device, getEnumProperty), 3);
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
