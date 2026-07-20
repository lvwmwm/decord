// Module ID: 1640
// Function ID: 18327
// Name: convertAnimationObjectToKeyframes
// Dependencies: []
// Exports: convertAnimationObjectToKeyframes

// Module 1640 (convertAnimationObjectToKeyframes)
let closure_2 = importDefault(dependencyMap[0]);

export const convertAnimationObjectToKeyframes = function convertAnimationObjectToKeyframes(BounceIn) {
  let tmp33;
  let tmp35;
  let closure_0 = "@keyframes " + BounceIn.name + " { ";
  const entries = Object.entries(BounceIn.style);
  while (tmp2 !== undefined) {
    let tmp31 = callback;
    let tmp32 = callback(tmp3, 2);
    [tmp33, tmp35] = tmp32;
    let num2 = 0;
    if ("from" !== tmp33) {
      let tmp4 = tmp33;
      let num = 100;
      if ("to" !== tmp34) {
        num = tmp33;
      }
      num2 = num;
    }
    let tmp5 = closure_0;
    let _HermesInternal = HermesInternal;
    closure_0 = closure_0 + "" + num2 + "% { ";
    let _Object = Object;
    let tmp6 = tmp35;
    let entries1 = Object.entries(tmp35);
    let tmp8 = entries1;
    for (const item10058 of entries1) {
      let tmp36 = closure_2;
      let tmp37 = closure_2(item10058, 2);
      let first = tmp37[0];
      let tmp39 = first;
      let arr = tmp37[1];
      if ("easing" !== first) {
        let tmp16 = first;
        if ("originX" !== tmp39) {
          let tmp19 = first;
          if ("originY" !== tmp39) {
            let tmp22 = first;
            if ("transform" === tmp39) {
              let tmp26 = closure_0;
              closure_0 = closure_0 + "transform:";
              let tmp27 = arr;
              let item = arr.forEach((arg0) => {
                const entries = Object.entries(arg0);
                while (tmp2 !== undefined) {
                  let tmp4 = callback;
                  let tmp5 = callback(tmp3, 2);
                  let tmp6 = closure_0;
                  let _HermesInternal = HermesInternal;
                  let str = " ";
                  let str2 = "(";
                  let str3 = ")";
                  closure_0 = closure_0 + " " + tmp5[0] + "(" + tmp5[1] + ")";
                  // continue
                }
              });
              let tmp29 = closure_0;
              closure_0 = closure_0 + "; ";
            } else {
              let tmp23 = closure_0;
              let tmp24 = first;
              let tmp25 = arr;
              let _HermesInternal5 = HermesInternal;
              let str3 = "";
              let str4 = ": ";
              let str5 = "; ";
              closure_0 = closure_0 + "" + tmp39 + ": " + arr + "; ";
            }
          } else {
            let tmp20 = closure_0;
            let tmp21 = arr;
            let _HermesInternal4 = HermesInternal;
            closure_0 = closure_0 + "top: " + arr + "px; ";
          }
        } else {
          let tmp17 = closure_0;
          let tmp18 = arr;
          let _HermesInternal3 = HermesInternal;
          closure_0 = closure_0 + "left: " + arr + "px; ";
        }
      } else {
        let str = "linear";
        let tmp40 = arr;
        let tmp41 = closure_0;
        let tmp42 = closure_1;
        let tmp43 = arr;
        if (arr in closure_0(closure_1[1]).WebEasings) {
          str = arr;
        } else {
          let tmp9 = closure_0;
          let tmp10 = closure_1;
          if (arr.name in closure_0(closure_1[1]).WebEasings) {
            let tmp11 = arr;
            str = arr.name;
          }
        }
        let tmp12 = closure_0;
        let tmp13 = closure_0;
        let tmp14 = closure_1;
        let tmp15 = str;
        let str2 = closure_0(closure_1[1]).WebEasings[str];
        let _HermesInternal2 = HermesInternal;
        closure_0 = closure_0 + "animation-timing-function: cubic-bezier(" + str2.toString() + ");";
      }
    }
    let tmp30 = closure_0;
    closure_0 = `${closure_0}} `;
    // continue
  }
  closure_0 = `${closure_0}} `;
  return `${closure_0}} `;
};
