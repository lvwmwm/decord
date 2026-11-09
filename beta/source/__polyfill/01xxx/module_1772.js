// Module ID: 1772
// Function ID: 1773
// Dependencies: [1665]
// Exports: createSingleCSSAnimationProperties

// Module 1772
import _mod1665 from "module_1665" /* 1665 */;


export function createSingleCSSAnimationProperties(arg0) {
  let animationName;
  let closure_129_0;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let closure_129_4;
  let closure_129_5;
  let closure_129_6;
  let obj = _mod1665;
  const result = obj.convertPropertiesToArrays(arg0);
  ({ animationName, animationDuration: closure_129_0, animationTimingFunction: closure_129_1, animationDelay: closure_129_2, animationIterationCount: closure_129_3, animationDirection: closure_129_4, animationFillMode: closure_129_5, animationPlayState: closure_129_6 } = result);
  return animationName.map((animationName, index) => {
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    const obj = { animationName, animationDuration: tmp, animationTimingFunction: tmp2, animationDelay: tmp3, animationIterationCount: tmp4, animationDirection: tmp5, animationFillMode: tmp6, animationPlayState: tmp7 };
    tmp = undefined;
    if (closure_1_0 != null) {
      tmp = arr[index % arr.length];
    }
    tmp2 = undefined;
    if (closure_1_1 != null) {
      tmp2 = arr2[index % arr2.length];
    }
    tmp3 = undefined;
    if (closure_1_2 != null) {
      tmp3 = arr3[index % arr3.length];
    }
    tmp4 = undefined;
    if (closure_1_3 != null) {
      tmp4 = arr4[index % arr4.length];
    }
    tmp5 = undefined;
    if (closure_1_4 != null) {
      tmp5 = arr5[index % arr5.length];
    }
    tmp6 = undefined;
    if (closure_1_5 != null) {
      tmp6 = arr6[index % arr6.length];
    }
    tmp7 = undefined;
    if (closure_1_6 != null) {
      tmp7 = arr7[index % arr7.length];
    }
    return obj;
  });
}
