// Module ID: 5272
// Function ID: 5273
// Dependencies: [32, 5260, 5273]
// Exports: useRiveNumber

// Module 5272
import react from "react" /* 5260 */;
import _mod5273 from "module_5273" /* 5273 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function getNumberProperty(numberProperty, arg1) {
  return numberProperty.numberProperty(arg1);
}

export function useRiveNumber(chapterID, instance) {
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = _mod5273;
  [tmp3, tmp4, tmp5] = obj2.useRiveProperty(instance, chapterID, getNumberProperty);
  _slicedToArray(obj2.useRiveProperty(instance, chapterID, getNumberProperty), 3);
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
