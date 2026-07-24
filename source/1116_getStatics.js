// Module ID: 1116
// Function ID: 12698
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
let closure_0 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
let closure_1 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
let obj = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
const forResult1 = Symbol.for("react.memo");
obj = {};
obj[Symbol.for("react.forward_ref")] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
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
      let tmp49 = table;
      if (!table[StringResult]) {
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
