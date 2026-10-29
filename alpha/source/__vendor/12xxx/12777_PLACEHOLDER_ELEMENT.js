// Module ID: 12777
// Function ID: 12778
// Name: PLACEHOLDER_ELEMENT
// Dependencies: [12770, 12772]
// Exports: ensureIsTag, getNextSiblings

// Module 12777 (PLACEHOLDER_ELEMENT)
import _mod12770 from "module_12770" /* 12770 */;

const self = this;
let fn = this && self.__spreadArray || ((arg0, arg1, arg2) => {
  let callResult1;
  let tmp4;
  const tmp = arg2;
  if (tmp) {
    let num4 = 0;
    if (0 < arg1.length) {
      do {
        let tmp5 = !tmp4;
        let tmp7 = tmp4;
        if (!tmp7) {
          tmp5 = num4 in arg1;
        }
        let tmp8 = tmp4;
        if (!tmp5) {
          let callResult = tmp4;
          if (!callResult) {
            let _Array = Array;
            callResult = slice.call(arg1, 0, num4);
          }
          callResult[num4] = arg1[num4];
          tmp8 = callResult;
        }
        num4 = num4 + 1;
        tmp4 = tmp8;
        callResult1 = tmp8;
      } while (num4 < arg1.length);
    }
  }
  const concat = arg0.concat;
  if (!callResult1) {
    const _Array2 = Array;
    const slice2 = Array.prototype.slice;
    callResult1 = slice2.call(arg1);
  }
  return concat(callResult1);
});
function ensureIsTag(tmpResult, adapter) {
  let closure_0 = tmpResult;
  let closure_1 = adapter;
  if (tmpResult === module_12770.default.falseFunc) {
    fn = module_12770.default.falseFunc;
  } else {
    fn = (arg0) => {
      const isTagResult = adapter.isTag(arg0) && closure_0(arg0);
      return isTagResult;
    };
  }
  return fn;
}
function getNextSiblings(substr, adapter3) {
  const siblings = adapter3.getSiblings(substr);
  if (siblings.length <= 1) {
    return [];
  } else {
    const index = siblings.indexOf(substr);
    if (index >= 0) {
      let found;
      if (index !== siblings.length - 1) {
        substr = siblings.slice(index + 1);
        found = substr.filter(adapter3.isTag);
      }
      return found;
    }
    found = [];
  }
}
const fn2 = self && self.__importDefault || ((__esModule) => {
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
let module_12770 = fn2(_mod12770);
function is(arg0, arg1, xmlMode, arg3, fn) {
  let tmp = arg0;
  let closure_0 = arg0;
  const obj = { xmlMode: xmlMode.xmlMode, lowerCaseAttributeNames: xmlMode.lowerCaseAttributeNames, lowerCaseTags: xmlMode.lowerCaseTags, quirksMode: xmlMode.quirksMode, cacheResults: xmlMode.cacheResults, pseudos: xmlMode.pseudos, adapter: xmlMode.adapter, equals: xmlMode.equals };
  const tmp2 = fn(arg1, obj, arg3);
  let closure_1 = tmp2;
  if (tmp2 !== module_12770.default.trueFunc) {
    if (tmp2 === module_12770.default.falseFunc) {
      fn = tmp3.default.falseFunc;
    } else {
      fn = (arg0) => {
        const tmp = closure_1(arg0) && closure_0(arg0);
        return tmp;
      };
    }
    tmp = fn;
  }
  return tmp;
}

export const PLACEHOLDER_ELEMENT = {};
export { ensureIsTag };
export { getNextSiblings };
export const subselects = {
  is,
  matches: is,
  where: is,
  not(arg0, arg1, xmlMode, arg3, fn) {
    let tmp = arg0;
    let closure_0 = arg0;
    const obj = { xmlMode: xmlMode.xmlMode, lowerCaseAttributeNames: xmlMode.lowerCaseAttributeNames, lowerCaseTags: xmlMode.lowerCaseTags, quirksMode: xmlMode.quirksMode, cacheResults: xmlMode.cacheResults, pseudos: xmlMode.pseudos, adapter: xmlMode.adapter, equals: xmlMode.equals };
    let tmp2 = fn(arg1, obj, arg3);
    let closure_1 = tmp2;
    if (tmp2 !== module_12770.default.falseFunc) {
      if (tmp2 === module_12770.default.trueFunc) {
        fn = tmp3.default.falseFunc;
      } else {
        fn = (arg0) => {
          let tmp2 = !closure_1(arg0);
          closure_1(arg0);
          if (tmp2) {
            tmp2 = closure_0(arg0);
          }
          return tmp2;
        };
      }
      tmp = fn;
    }
    return tmp;
  },
  has(arg0, arr, adapter, arg3, fn) {
    let closure_4;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    const obj = { xmlMode: adapter.xmlMode, lowerCaseAttributeNames: adapter.lowerCaseAttributeNames, lowerCaseTags: adapter.lowerCaseTags, quirksMode: adapter.quirksMode, cacheResults: adapter.cacheResults, pseudos: adapter.pseudos, adapter: adapter.adapter, equals: adapter.equals, relativeSelector: true };
    let tmp;
    if (arr.some((arr) => arr.some(closure_0(items[1]).isTraversal))) {
      let items = [adapter.PLACEHOLDER_ELEMENT];
      tmp = items;
    }
    items = tmp;
    const tmp3 = fn(arr, obj, tmp);
    if (tmp3 === module_12770.default.falseFunc) {
      return module_12770.default.falseFunc;
    } else {
      closure_0 = tmp3;
      if (tmp3 === module_12770.default.falseFunc) {
        fn = tmp4.default.falseFunc;
      } else {
        fn = (arg0) => {
          const isTagResult = adapter.isTag(arg0) && closure_0(arg0);
          return isTagResult;
        };
      }
      if (tmp) {
        if (tmp3 !== module_12770.default.trueFunc) {
          const shouldTestNextSiblings = tmp3.shouldTestNextSiblings;
          module_12770 = undefined !== shouldTestNextSiblings && shouldTestNextSiblings;
          return (arg0) => {
            if (closure_0(arg0)) {
              items[0] = arg0;
              const children = adapter.getChildren(arg0);
              let tmp5Result = children;
              if (closure_4) {
                const tmp6 = fn([], children, true);
                const siblings = obj.getSiblings(arg0);
                const tmp5 = fn;
                if (siblings.length <= 1) {
                  items = [];
                } else {
                  const index = siblings.indexOf(arg0);
                  if (index >= 0) {
                    if (index !== siblings.length - 1) {
                      const substr = siblings.slice(index + 1);
                      items = substr.filter(obj.isTag);
                    }
                  }
                  items = [];
                }
                tmp5Result = tmp5(tmp6, items, true);
              }
              return adapter.existsOne(fn, tmp5Result);
            } else {
              return false;
            }
          };
        }
      }
      return (arg0) => {
        const existsOneResult = closure_0(arg0) && adapter.existsOne(fn, adapter.getChildren(arg0));
        return existsOneResult;
      };
    }
  }
};
