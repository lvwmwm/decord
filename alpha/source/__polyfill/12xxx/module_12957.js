// Module ID: 12957
// Function ID: 12958
// Dependencies: [12958, 12946]

// Module 12957
import _mod12946 from "module_12946" /* 12946 */;
import nthCheck2 from "nthCheck" /* 12958 */;

function dynamicPseudo(arg0, arg1, arg2) {
  let active;
  let closure_0 = arg0;
  let tmp = arg2.adapter[isActive];
  let closure_1 = tmp;
  if (typeof tmp !== "function") {
    active = module_12946.default.falseFunc;
  } else {
    active = function active(arg0) {
      const tmp = closure_1(arg0) && closure_0(arg0);
      return tmp;
    };
  }
  return active;
}
const fn = this && this.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
const nthCheck = fn(nthCheck2);
const module_12946 = fn(_mod12946);
let obj = {
  contains(arg0, arg1, adapter) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    adapter = adapter.adapter;
    return function contains(arg0) {
      let hasItem = closure_0(arg0);
      if (hasItem) {
        const text = adapter.getText(arg0);
        hasItem = text.includes(closure_1);
      }
      return hasItem;
    };
  },
  icontains(arg0, str, adapter) {
    let closure_0 = arg0;
    adapter = adapter.adapter;
    let closure_2 = str.toLowerCase();
    return function icontains(arg0) {
      let hasItem = closure_0(arg0);
      if (hasItem) {
        const str = adapter.getText(arg0);
        const formatted = str.toLowerCase();
        hasItem = formatted.includes(closure_2);
      }
      return hasItem;
    };
  },
  "nth-child": (arg0, arg1, adapter) => {
    let nthChild;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const defaultResult = nthCheck.default(arg1);
    let tmp2 = module_12946;
    if (defaultResult === module_12946.default.falseFunc) {
      nthChild = tmp2.default.falseFunc;
    } else if (defaultResult === tmp2.default.trueFunc) {
      closure_0 = arg0;
      nthChild = (arg0) => {
        const parent = adapter.getParent(arg0);
        let tmp2 = null != parent && adapter.isTag(parent);
        if (tmp2) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    } else {
      nthChild = function nthChild(arg0) {
        const siblings = adapter.getSiblings(arg0);
        let num = 0;
        if (0 < siblings.length) {
          let num3 = 0;
          let num4 = 0;
          num = 0;
          if (!equals(arg0, siblings[0])) {
            while (true) {
              let sum = num4;
              if (adapter.isTag(siblings[num3])) {
                sum = num4 + 1;
              }
              let sum1 = num3 + 1;
              num = sum;
              if (sum1 >= siblings.length) {
                break;
              } else {
                num3 = sum1;
                num4 = sum;
                num = sum;
                if (equals(arg0, siblings[sum1])) {
                  break;
                }
              }
            }
          }
        }
        const tmp8 = defaultResult(num) && closure_0(arg0);
        return tmp8;
      };
    }
    return nthChild;
  },
  "nth-last-child": (arg0, arg1, adapter) => {
    let nthLastChild;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const defaultResult = nthCheck.default(arg1);
    if (defaultResult === module_12946.default.falseFunc) {
      nthLastChild = tmp2.default.falseFunc;
    } else if (defaultResult === module_12946.default.trueFunc) {
      closure_0 = arg0;
      nthLastChild = (arg0) => {
        const parent = adapter.getParent(arg0);
        let tmp2 = null != parent && adapter.isTag(parent);
        if (tmp2) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    } else {
      nthLastChild = function nthLastChild(arg0) {
        const siblings = adapter.getSiblings(arg0);
        let diff = siblings.length - 1;
        let num = 0;
        if (0 <= diff) {
          let num2 = 0;
          num = 0;
          if (!equals(arg0, siblings[diff])) {
            while (true) {
              let sum = num2;
              if (adapter.isTag(siblings[diff])) {
                sum = num2 + 1;
              }
              let diff1 = diff - 1;
              num = sum;
              if (0 > diff1) {
                break;
              } else {
                diff = diff1;
                num2 = sum;
                num = sum;
                if (equals(arg0, siblings[diff1])) {
                  break;
                }
              }
            }
          }
        }
        const tmp9 = defaultResult(num) && closure_0(arg0);
        return tmp9;
      };
    }
    return nthLastChild;
  },
  "nth-of-type": (arg0, arg1, adapter) => {
    let nthOfType;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const defaultResult = nthCheck.default(arg1);
    if (defaultResult === module_12946.default.falseFunc) {
      nthOfType = tmp2.default.falseFunc;
    } else if (defaultResult === module_12946.default.trueFunc) {
      closure_0 = arg0;
      nthOfType = (arg0) => {
        const parent = adapter.getParent(arg0);
        let tmp2 = null != parent && adapter.isTag(parent);
        if (tmp2) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    } else {
      nthOfType = function nthOfType(arg0) {
        const siblings = adapter.getSiblings(arg0);
        let num = 0;
        let num2 = 0;
        let num3 = 0;
        if (0 < siblings.length) {
          num = num3;
          while (!equals(arg0, siblings[num2])) {
            let obj = adapter;
            let isTagResult = adapter.isTag(tmp);
            if (isTagResult) {
              let name = obj.getName(tmp);
              isTagResult = name === obj.getName(arg0);
            }
            let sum = num3;
            if (isTagResult) {
              sum = num3 + 1;
            }
            num2 = num2 + 1;
            num3 = sum;
            num = sum;
            if (num2 >= siblings.length) {
              break;
            }
          }
        }
        const tmp8 = defaultResult(num) && closure_0(arg0);
        return tmp8;
      };
    }
    return nthOfType;
  },
  "nth-last-of-type": (arg0, arg1, adapter) => {
    let nthLastOfType;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const defaultResult = nthCheck.default(arg1);
    let tmp2 = module_12946;
    if (defaultResult === module_12946.default.falseFunc) {
      nthLastOfType = tmp2.default.falseFunc;
    } else if (defaultResult === tmp2.default.trueFunc) {
      closure_0 = arg0;
      nthLastOfType = (arg0) => {
        const parent = adapter.getParent(arg0);
        let tmp2 = null != parent && adapter.isTag(parent);
        if (tmp2) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    } else {
      nthLastOfType = function nthLastOfType(arg0) {
        const siblings = adapter.getSiblings(arg0);
        let diff = siblings.length - 1;
        let num = 0;
        let num2 = 0;
        if (0 <= diff) {
          num2 = num;
          while (!equals(arg0, siblings[diff])) {
            let obj = adapter;
            let isTagResult = adapter.isTag(tmp2);
            if (isTagResult) {
              let name = obj.getName(tmp2);
              isTagResult = name === obj.getName(arg0);
            }
            let sum = num;
            if (isTagResult) {
              sum = num + 1;
            }
            diff = diff - 1;
            num = sum;
            num2 = sum;
            if (0 > diff) {
              break;
            }
          }
        }
        const tmp9 = defaultResult(num2) && closure_0(arg0);
        return tmp9;
      };
    }
    return nthLastOfType;
  },
  root(arg0, arg1, adapter) {
    let closure_0 = arg0;
    adapter = adapter.adapter;
    return (arg0) => {
      const parent = adapter.getParent(arg0);
      let tmp2 = null == parent || !adapter.isTag(parent);
      if (tmp2) {
        tmp2 = closure_0(arg0);
      }
      return tmp2;
    };
  },
  scope(arg0, arg1, equals, arg3) {
    let closure_0 = arg0;
    let closure_1 = arg3;
    equals = equals.equals;
    if (arg3) {
      let rootResult;
      if (0 !== arg3.length) {
        rootResult = 1 === arg3.length ? ((arg0) => {
          const tmp = equals(closure_1[0], arg0) && closure_0(arg0);
          return tmp;
        }) : ((arg0) => {
          const hasItem = closure_1.includes(arg0) && closure_0(arg0);
          return hasItem;
        });
      }
      return rootResult;
    }
    const filters = exports.filters;
    rootResult = filters.root(arg0, arg1, equals);
  },
  hover: dynamicPseudo,
  visited: dynamicPseudo,
  active: dynamicPseudo
};
const isHovered = "isHovered";
const isVisited = "isVisited";
const isActive = "isActive";
const filters_export = obj;

export { filters_export as filters };
