// Module ID: 1640
// Function ID: 18334
// Name: convertAnimationObjectToKeyframes
// Dependencies: [57, 1641]
// Exports: convertAnimationObjectToKeyframes

// Module 1640 (convertAnimationObjectToKeyframes)
import _slicedToArray from "_slicedToArray";

const require = arg1;

export const convertAnimationObjectToKeyframes = function convertAnimationObjectToKeyframes(BounceIn) {
  let tmp33;
  let tmp35;
  let _require = "@keyframes " + BounceIn.name + " { ";
  let entries = Object.entries(BounceIn.style);
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
    let tmp5 = _require;
    let _HermesInternal = HermesInternal;
    _require = _require + "" + num2 + "% { ";
    let _Object = Object;
    let tmp6 = tmp35;
    let entries1 = Object.entries(tmp35);
    let tmp8 = entries1;
    for (const item10058 of entries1) {
      let tmp36 = callback;
      let tmp37 = callback(item10058, 2);
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
              let tmp26 = _require;
              _require = _require + "transform:";
              let tmp27 = arr;
              let item = arr.forEach((arg0) => {
                const entries = Object.entries(arg0);
                while (tmp2 !== undefined) {
                  let tmp4 = outer1_2;
                  let tmp5 = outer1_2(tmp3, 2);
                  let tmp6 = closure_0;
                  let _HermesInternal = HermesInternal;
                  let str = " ";
                  let str2 = "(";
                  let str3 = ")";
                  closure_0 = closure_0 + " " + tmp5[0] + "(" + tmp5[1] + ")";
                  continue;
                }
              });
              let tmp29 = _require;
              _require = _require + "; ";
            } else {
              let tmp23 = _require;
              let tmp24 = first;
              let tmp25 = arr;
              let _HermesInternal5 = HermesInternal;
              let str3 = "";
              let str4 = ": ";
              let str5 = "; ";
              _require = _require + "" + tmp39 + ": " + arr + "; ";
            }
          } else {
            let tmp20 = _require;
            let tmp21 = arr;
            let _HermesInternal4 = HermesInternal;
            _require = _require + "top: " + arr + "px; ";
          }
        } else {
          let tmp17 = _require;
          let tmp18 = arr;
          let _HermesInternal3 = HermesInternal;
          _require = _require + "left: " + arr + "px; ";
        }
      } else {
        let str = "linear";
        let tmp40 = arr;
        let tmp41 = _require;
        let tmp42 = dependencyMap;
        let tmp43 = arr;
        if (arr in _require(1641).WebEasings) {
          str = arr;
        } else {
          let tmp9 = _require;
          let tmp10 = dependencyMap;
          if (arr.name in _require(1641).WebEasings) {
            let tmp11 = arr;
            str = arr.name;
          }
        }
        let tmp12 = _require;
        let tmp13 = _require;
        let tmp14 = dependencyMap;
        let tmp15 = str;
        let str2 = _require(1641).WebEasings[str];
        let _HermesInternal2 = HermesInternal;
        _require = _require + "animation-timing-function: cubic-bezier(" + str2.toString() + ");";
      }
      continue;
    }
    let tmp30 = _require;
    _require = `${closure_0}} `;
    continue;
  }
  _require = `${closure_0}} `;
  return `${closure_0}} `;
};
