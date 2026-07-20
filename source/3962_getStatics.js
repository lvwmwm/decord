// Module ID: 3962
// Function ID: 32809
// Name: getStatics
// Dependencies: []

// Module 3962 (getStatics)
function getStatics(arg0) {
  const obj = require(dependencyMap[0]);
  if (obj.isMemo(arg0)) {
    let tmp2 = obj;
  } else {
    tmp2 = obj[arg0.$$typeof] || closure_2;
  }
  return tmp2;
}
let closure_2 = { <string:2152970082>: null, <string:3169437126>: "rgba(0, 0, 0, 0.251)", <string:71459373>: true, <string:1657465425>: true, <string:1985020994>: true, <string:3891880573>: true, <string:1646552145>: true, <string:1683159527>: true, <string:1656666148>: true, <string:2706504167>: true, <string:1483629047>: true };
let closure_3 = {};
let obj = { "Bool(false)": 0.000000000000000000000000000000000010615702489367825, "Bool(false)": -1602914219622361000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -120350253250391550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -1561007058987362700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010959979032937442, "Bool(false)": 148455159673736300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
obj = {};
obj[require(dependencyMap[0]).ForwardRef] = { FORCE_CHANGE: null, ROTATION: null, ROTATION_CHANGE: null, SCALE: null, SCALE_CHANGE: null };
obj[require(dependencyMap[0]).Memo] = obj;
let closure_11 = Object.prototype;
function hoistNonReactStatics(arg0, arr) {
  if ("string" !== typeof arr) {
    if (closure_11) {
      const tmp4 = getPrototypeOf(tmp);
      let tmp5 = tmp4;
      if (tmp4) {
        tmp5 = tmp4 !== closure_11;
      }
      if (tmp5) {
        hoistNonReactStatics(arg0, tmp4, arg2);
      }
    }
    const obj = getOwnPropertyNames(tmp);
    let combined = obj;
    if (getOwnPropertySymbols) {
      combined = obj.concat(getOwnPropertySymbols(tmp));
    }
    const tmp17 = getStatics(arg0);
    const tmp19 = getStatics(tmp);
    let num = 0;
    if (0 < combined.length) {
      while (true) {
        let tmp20 = combined[num];
        let tmp21 = tmp20;
        let tmp22 = closure_3;
        if (!closure_3[tmp20]) {
          if (!arg2) {
            if (!tmp19) {
              if (!tmp17) {
                let tmp26 = getOwnPropertyDescriptor;
                let tmp27 = arr;
                let tmp28 = tmp20;
                let tmp29 = getOwnPropertyDescriptor(tmp, tmp21);
                let tmp30 = defineProperty;
                let tmp31 = arg0;
                let tmp32 = tmp20;
                let tmp33 = tmp29;
                let tmp34 = defineProperty(arg0, tmp21, tmp29);
              } else {
                let tmp25 = tmp20;
              }
            } else {
              let tmp24 = tmp20;
            }
          } else {
            let tmp23 = tmp20;
          }
        }
        while (true) {
          num = num + 1;
          if (num < combined.length) {
            break;
          } else {
            break label0;
          }
        }
      }
    }
  }
  return arg0;
}

export default hoistNonReactStatics;
