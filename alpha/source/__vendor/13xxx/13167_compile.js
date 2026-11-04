// Module ID: 13167
// Function ID: 13168
// Name: compile
// Dependencies: [9563, 13168, 13169, 13175, 13178]
// Exports: _compileToken, _compileUnsafe, compile, is, prepareContext, selectAll, selectOne

// Module 13167 (compile)
import _mod9563 from "module_9563" /* 9563 */;
import _mod13168 from "module_13168" /* 13168 */;
import _mod13169 from "module_13169" /* 13169 */;
import PLACEHOLDER_ELEMENT from "PLACEHOLDER_ELEMENT" /* 13175 */;

const require = globalThis.__r;
let hasOwnProperty;

function addAdapter(arr, context, arg2) {
  let tmp = context;
  if (null == context) {
    tmp = closure_7;
  }
  const adapter = tmp.adapter;
  const tmp2 = null !== adapter && undefined !== adapter;
  if (!tmp2) {
    tmp.adapter = module_9563;
  }
  const equals = tmp.equals;
  const tmp4 = null !== equals && undefined !== equals;
  if (!tmp4) {
    const adapter2 = tmp.adapter;
    let equals1;
    if (null !== adapter2) {
      if (undefined !== adapter2) {
        equals1 = adapter2.equals;
      }
    }
    if (null === equals1) {
      equals1 = defaultEquals;
    }
    tmp.equals = equals1;
  }
  return compileToken(arr, tmp, arg2);
}
function select(fn, arr, arg2) {
  let removeSubsetsResult;
  let tmp = arg2;
  if (null == arg2) {
    tmp = closure_7;
  }
  const adapter = tmp.adapter;
  const tmp2 = null !== adapter && undefined !== adapter;
  if (!tmp2) {
    tmp.adapter = module_9563;
  }
  const equals = tmp.equals;
  const tmp4 = null !== equals && undefined !== equals;
  if (!tmp4) {
    const adapter2 = tmp.adapter;
    let equals1;
    if (null !== adapter2) {
      if (undefined !== adapter2) {
        equals1 = adapter2.equals;
      }
    }
    if (null === equals1) {
      equals1 = defaultEquals;
    }
    tmp.equals = equals1;
  }
  let compileUnsafeResult = fn;
  if (typeof fn !== "function") {
    compileUnsafeResult = _mod13169.compileUnsafe(fn, tmp, arr);
  }
  const adapter3 = tmp.adapter;
  let flag = compileUnsafeResult.shouldTestNextSiblings;
  if (undefined === flag) {
    flag = false;
  }
  let tmp7 = arr;
  if (flag) {
    let substr;
    const _Array = Array;
    if (Array.isArray(arr)) {
      substr = arr.slice(0);
    } else {
      substr = [arr];
    }
    let num2 = 0;
    tmp7 = substr;
    if (0 < substr.length) {
      do {
        let push = substr.push;
        let applyResult = push.apply(substr, PLACEHOLDER_ELEMENT.getNextSiblings(substr[num2], adapter3));
        num2 = num2 + 1;
        tmp7 = substr;
      } while (num2 < substr.length);
    }
  }
  if (Array.isArray(tmp7)) {
    removeSubsetsResult = adapter3.removeSubsets(tmp7);
  } else {
    removeSubsetsResult = adapter3.getChildren(tmp7);
  }
  return f60795(compileUnsafeResult, removeSubsetsResult, tmp);
}
const self = this;
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
      const obj = { enumerable: true, get };
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
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_3 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
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
  closure_3(obj, __esModule);
  return obj;
});
function prepareContext(arr, removeSubsets, arg2) {
  let removeSubsetsResult;
  let flag = arg2;
  if (undefined === arg2) {
    flag = false;
  }
  let tmp = arr;
  if (flag) {
    let substr;
    const _Array = Array;
    if (Array.isArray(arr)) {
      substr = arr.slice(0);
    } else {
      substr = [arr];
    }
    let num2 = 0;
    tmp = substr;
    if (0 < substr.length) {
      do {
        let push = substr.push;
        let applyResult = push.apply(substr, PLACEHOLDER_ELEMENT.getNextSiblings(substr[num2], removeSubsets));
        num2 = num2 + 1;
        tmp = substr;
      } while (num2 < substr.length);
    }
  }
  if (Array.isArray(tmp)) {
    removeSubsetsResult = removeSubsets.removeSubsets(tmp);
  } else {
    removeSubsetsResult = removeSubsets.getChildren(tmp);
  }
  return removeSubsetsResult;
}
const fn = self && self.__importDefault || ((__esModule) => {
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
const module_9563 = tmp5(_mod9563);
const module_13168 = fn(_mod13168);
function defaultEquals(arg0, arg1) {
  return arg0 === arg1;
}
let closure_7 = { adapter: module_9563, equals: defaultEquals };
const compile = _mod13169.compile;
const compileUnsafe = _mod13169.compileUnsafe;
const compileToken = _mod13169.compileToken;
const f60794 = (arg0, arg1, adapter) => {
  if (arg0 !== module_13168.default.falseFunc) {
    const tmp = arg1;
    if (tmp) {
      if (0 !== arg1.length) {
        adapter = adapter.adapter;
        adapter.findAll(arg0, arg1);
      }
      return [];
    }
  }
};
const f60795 = (arg0, arg1, adapter) => {
  let findOneResult = null;
  if (arg0 !== module_13168.default.falseFunc) {
    findOneResult = null;
    if (arg1) {
      findOneResult = null;
      if (0 !== arg1.length) {
        adapter = adapter.adapter;
        findOneResult = adapter.findOne(arg0, arg1);
      }
    }
  }
  return findOneResult;
};
const compile_export = addAdapter;

export { compile_export as compile };
export const _compileUnsafe = addAdapter;
export const _compileToken = addAdapter;
export { prepareContext };
export const selectAll = select;
export const selectOne = select;
export function is(arg0, fn, arg2) {
  let tmp = arg2;
  if (null == arg2) {
    tmp = closure_7;
  }
  const adapter = tmp.adapter;
  const tmp2 = null !== adapter && undefined !== adapter;
  if (!tmp2) {
    tmp.adapter = module_9563;
  }
  const equals = tmp.equals;
  const tmp4 = null !== equals && undefined !== equals;
  if (!tmp4) {
    const adapter2 = tmp.adapter;
    let equals1;
    if (null !== adapter2) {
      if (undefined !== adapter2) {
        equals1 = adapter2.equals;
      }
    }
    if (null === equals1) {
      equals1 = defaultEquals;
    }
    tmp.equals = equals1;
  }
  let compileResult = fn;
  if (typeof fn !== "function") {
    compileResult = _mod13169.compile(fn, tmp);
  }
  return compileResult(arg0);
}
export default exports.selectAll;
export const filters = require("filters").filters;
export const pseudos = require("filters").pseudos;
export const aliases = require("filters").aliases;
