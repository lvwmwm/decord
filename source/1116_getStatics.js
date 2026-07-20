// Module ID: 1116
// Function ID: 12692
// Name: getStatics
// Dependencies: []

// Module 1116 (getStatics)
function getStatics($$typeof) {
  let tmp = "object" === typeof $$typeof;
  if (tmp) {
    tmp = null !== $$typeof;
  }
  if (tmp) {
    tmp = $$typeof.$$typeof === forResult1;
  }
  if (tmp) {
    return obj;
  } else {
    $$typeof = $$typeof.$$typeof;
    let tmp4 = $$typeof;
    if ($$typeof) {
      tmp4 = obj[$$typeof];
    }
    if (!tmp4) {
      tmp4 = closure_0;
    }
    return tmp4;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_0 = { <string:2152970082>: null, <string:3169437126>: "rgba(0, 0, 0, 0.251)", <string:71459373>: true, <string:1657465425>: true, <string:1985020994>: true, <string:3891880573>: true, <string:1646552145>: true, <string:1683159527>: true, <string:1656666148>: true, <string:2706504167>: true, <string:1483629047>: true };
let closure_1 = {};
let obj = { "Bool(false)": 0.000000000000000000000000000000000010615702489367825, "Bool(false)": -1602914219622361000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -120350253250391550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -1561007058987362700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010959979032937442, "Bool(false)": 148455159673736300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
const forResult1 = Symbol.for("react.memo");
obj = {};
obj[Symbol.for("react.forward_ref")] = { FORCE_CHANGE: null, ROTATION: null, ROTATION_CHANGE: null, SCALE: null, SCALE_CHANGE: null };
obj[forResult1] = obj;
let closure_5 = defineProperty.bind(Object);
let closure_6 = getOwnPropertyNames.bind(Object);
let bindResult;
if (null != getOwnPropertySymbols) {
  const _Object = Object;
  bindResult = getOwnPropertySymbols.bind(Object);
}
let closure_8 = getOwnPropertyDescriptor.bind(Object);
let closure_9 = getPrototypeOf.bind(Object);
let closure_10 = Object.prototype;
function hoistNonReactStatics(arg0, arg1, arg2) {
  if ("string" !== typeof arg1) {
    if (closure_10) {
      const tmp4 = callback4(tmp);
      let tmp5 = tmp4;
      if (tmp4) {
        tmp5 = tmp4 !== closure_10;
      }
      if (tmp5) {
        hoistNonReactStatics(arg0, tmp4);
      }
    }
    const obj = callback2(tmp);
    let combined = obj;
    if (bindResult) {
      combined = obj.concat(bindResult(tmp));
    }
    const tmp18 = getStatics(arg0);
    const tmp20 = getStatics(tmp);
    const iter = combined[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp46 = nextResult;
      let _String = String;
      let StringResult = String(nextResult);
      let tmp48 = StringResult;
      let tmp49 = closure_1;
      if (!closure_1[StringResult]) {
        let tmp26 = tmp20;
        if (null == tmp20) {
          let tmp29 = tmp18;
          if (null == tmp18) {
            let tmp32 = callback3;
            let tmp33 = arg0;
            let tmp34 = nextResult;
            if (!callback3(arg0, tmp46)) {
              let tmp35 = callback3;
              let tmp36 = arg1;
              let tmp37 = nextResult;
              let tmp38 = callback3(tmp, tmp46);
              if (tmp38) {
                let tmp40 = callback;
                let tmp41 = arg0;
                let tmp42 = nextResult;
                let tmp43 = tmp38;
                let tmp44 = callback(arg0, tmp46, tmp39);
              }
            }
          } else {
            let tmp30 = tmp18;
            let tmp31 = StringResult;
          }
        } else {
          let tmp27 = tmp20;
          let tmp28 = StringResult;
        }
      }
      continue;
    }
  }
  return arg0;
}
arg5.hoistNonReactStatics = hoistNonReactStatics;
