// Module ID: 1014
// Function ID: 1015
// Dependencies: []

// Module 1014
function getStatics($$typeof) {
  let tmp = typeof $$typeof === "object";
  if (typeof $$typeof === "object") {
    tmp = null !== $$typeof;
  }
  if (tmp) {
    tmp = $$typeof.$$typeof === forResult1;
  }
  if (tmp) {
    return obj;
  } else {
    $$typeof = $$typeof.$$typeof;
    return $$typeof && obj2[$$typeof] || closure_0;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_0 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
let closure_1 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
let obj = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
const forResult = Symbol.for("react.forward_ref");
const forResult1 = Symbol.for("react.memo");
const obj2 = {};
obj2[forResult] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
obj2[forResult1] = obj;
let closure_6 = defineProperty.bind(Object);
let closure_7 = getOwnPropertyNames.bind(Object);
let bindResult;
if (getOwnPropertySymbols != null) {
  const _Object = Object;
  bindResult = getOwnPropertySymbols.bind(Object);
}
const metroImportAll = bindResult;
let closure_9 = getOwnPropertyDescriptor.bind(Object);
let closure_10 = getPrototypeOf.bind(Object);
let closure_11 = Object.prototype;
function hoistNonReactStatics(arg0, str, arg2) {
  if (typeof str !== "string") {
    if (closure_11) {
      const tmp2 = closure_10(str);
      const tmp3 = tmp2 && tmp2 !== tmp32;
      if (tmp3) {
        hoistNonReactStatics(arg0, tmp2);
      }
    }
    obj = closure_7(str);
    let combined = obj;
    if (metroImportAll) {
      combined = obj.concat(tmp7(str));
    }
    const tmp10 = getStatics(arg0);
    const tmp11 = getStatics(str);
    const iter = combined[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      if (!closure_1[nextResult]) {
        let tmp19;
        if (tmp11 != null) {
          tmp19 = tmp11[tmp17];
        }
        if (!tmp19) {
          let tmp21;
          if (tmp10 != null) {
            tmp21 = tmp10[tmp17];
          }
          if (!tmp21) {
            const tmp23 = closure_9;
            if (!closure_9(arg0, nextResult)) {
              const tmp23Result = tmp23(str, nextResult);
              if (tmp23Result) {
                try {
                  closure_6(arg0, nextResult, tmp27);
                } catch (err) {
                }
              }
            }
          }
        }
      }
    }
  }
  return arg0;
}

export { hoistNonReactStatics };
