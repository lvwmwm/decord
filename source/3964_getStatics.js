// Module ID: 3964
// Function ID: 32821
// Name: getStatics
// Dependencies: [3962]

// Module 3964 (getStatics)
function getStatics(arg0) {
  const obj = require(3962) /* z */;
  if (obj.isMemo(arg0)) {
    let tmp2 = obj;
  } else {
    tmp2 = obj[arg0.$$typeof] || closure_2;
  }
  return tmp2;
}
let closure_2 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
let closure_3 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
let obj = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
obj = {};
obj[require("z").ForwardRef] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
obj[require("z").Memo] = obj;
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
        let tmp22 = table;
        if (!table[tmp20]) {
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
