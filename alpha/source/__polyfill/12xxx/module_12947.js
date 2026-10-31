// Module ID: 12947
// Function ID: 12948
// Dependencies: [12946, 12948, 12953, 12949, 12954]
// Exports: compile, compileUnsafe

// Module 12947
import _mod12946 from "module_12946" /* 12946 */;
import sortByProcedure2 from "sortByProcedure" /* 12948 */;
import _mod12949 from "module_12949" /* 12949 */;
import PLACEHOLDER_ELEMENT from "PLACEHOLDER_ELEMENT" /* 12953 */;

let _require, c3, dependencyMap, hasOwnProperty;

let self = this;
function includesScopePseudo(type) {
  let tmp = type.type === _mod12949.SelectorType.Pseudo;
  if (tmp) {
    let tmp2 = "scope" === type.name;
    if (!tmp2) {
      const _Array = Array;
      let isArray = Array.isArray(type.data);
      if (isArray) {
        const data = type.data;
        isArray = data.some((arr) => arr.some(includesScopePseudo));
      }
      tmp2 = isArray;
    }
    tmp = tmp2;
  }
  return tmp;
}
function compileToken(arr, context, arg2) {
  let traversal;
  _require = context;
  const item = arr.forEach(sortByProcedure.default);
  context = context.context;
  let tmp2 = arg2;
  if (null !== context) {
    tmp2 = arg2;
    if (undefined !== context) {
      tmp2 = context;
    }
  }
  dependencyMap = Array.isArray(tmp2);
  obj = tmp2;
  if (obj) {
    const _Array = Array;
    let tmp3 = tmp2;
    if (!Array.isArray(tmp2)) {
      const items = [tmp2];
      tmp3 = items;
    }
    obj = tmp3;
  }
  if (false !== context.relativeSelector) {
    const adapter = context.adapter;
    if (null != obj) {
      obj.every((item) => {
        const tmp = adapter.isTag(item) && adapter.getParent(item);
        let tmp2 = item === adapter(closure_1[2]).PLACEHOLDER_ELEMENT;
        if (!tmp2) {
          tmp2 = tmp && adapter.isTag(tmp);
          tmp && adapter.isTag(tmp);
        }
        return tmp2;
      });
    }
    let num3 = 0;
    if (0 < arr.length) {
      while (true) {
        let arr2 = arr[num3];
        let tmp8 = num3;
        if (arr2.length > 0) {
          arr = arr2.unshift(obj2);
          num3 = num3 + 1;
          if (num3 >= arr.length) {
            break;
          }
        }
        if (tmp7) {
          if (!arr2.some(includesScopePseudo)) {
            let arr3 = arr2.unshift(obj);
          }
        }
      }
    }
  } else if (arr.some((item) => {
    const isTraversalResult = item.length > 0 && traversal.isTraversal(item[0]);
    return isTraversalResult;
  })) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    throw error;
  }
  shouldTestNextSiblings = false;
  const mapped = arr.map((item) => {
    let tmp6;
    let tmp7;
    if (item.length >= 2) {
      [tmp6, tmp7] = item;
      const tmp = tmp6.type !== _mod12949.SelectorType.Pseudo || "scope" !== tmp6.name;
      if (!tmp) {
        const tmp2 = closure_1;
        if (tmp2) {
          if (tmp7.type === _mod12949.SelectorType.Descendant) {
            item[1] = closure_8;
          }
        }
        const tmp3 = tmp7.type !== tmp8(12949).SelectorType.Adjacent && tmp7.type !== tmp8(12949).SelectorType.Sibling;
        if (!tmp3) {
          c3 = true;
        }
      }
    }
    closure_1 = obj;
    let trueFunc = context.rootFunc;
    const reduce = item.reduce;
    if (null === trueFunc) {
      trueFunc = module_12946.default.trueFunc;
    }
    return reduce((arg0, type) => {
      let falseFunc;
      if (arg0 === closure_2_4.default.falseFunc) {
        falseFunc = closure_2_4.default.falseFunc;
      } else {
        falseFunc = context(closure_2_1[4]).compileGeneralSelector(arg0, type, closure_0, closure_1, closure_2_10);
      }
      return falseFunc;
    }, trueFunc);
  });
  const reduced = mapped.reduce(reduceRules, module_12946.default.falseFunc);
  reduced.shouldTestNextSiblings = shouldTestNextSiblings;
  return reduced;
}
function reduceRules(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = module_12946;
  let tmp2 = arg0;
  if (arg1 !== module_12946.default.falseFunc) {
    tmp2 = arg0;
    if (arg0 !== tmp.default.trueFunc) {
      let combine = arg1;
      if (arg0 !== tmp.default.falseFunc) {
        combine = arg1;
        if (arg1 !== tmp.default.trueFunc) {
          combine = function combine(arg0) {
            const tmp = closure_0(arg0) || closure_1(arg0);
            return tmp;
          };
        }
      }
      tmp2 = combine;
    }
  }
  return tmp2;
}
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_2 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let shouldTestNextSiblings = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  shouldTestNextSiblings(obj, __esModule);
  return obj;
});
function compileUnsafe(fn, arg1, arr) {
  let parsed = fn;
  const tmp = compileToken;
  if (typeof fn === "string") {
    parsed = _mod12949.parse(fn);
  }
  return tmp(parsed, arg1, arr);
}
const fn = self && self.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
const module_12946 = fn(_mod12946);
const sortByProcedure = tmp5(sortByProcedure2);
let obj = { type: _mod12949.SelectorType.Descendant };
let closure_8 = { type: "_flexibleDescendant" };
const obj2 = { type: _mod12949.SelectorType.Pseudo, name: "scope", data: null };

export function compile(str, adapter, arg2) {
  let parsed = str;
  const tmp = compileToken;
  if (typeof str === "string") {
    parsed = _mod12949.parse(str);
  }
  const tmpResult = tmp(parsed, adapter, arg2);
  return PLACEHOLDER_ELEMENT.ensureIsTag(tmpResult, adapter.adapter);
}
export { compileUnsafe };
export { compileToken };
