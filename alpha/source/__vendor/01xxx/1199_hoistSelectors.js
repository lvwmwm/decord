// Module ID: 1199
// Function ID: 1200
// Name: hoistSelectors
// Dependencies: [1172, 1189]
// Exports: isStructurallySame

// Module 1199 (hoistSelectors)
import _mod1172 from "module_1172" /* 1172 */;
import TYPE from "TYPE" /* 1189 */;

const require = globalThis.__r;
let _require, map, map1;

const f84296 = (acc, item) => {
  let __spreadArrayResult;
  if (Array.isArray(closure_0[item])) {
    const obj = _mod1172;
    __spreadArrayResult = obj.__spreadArray([], arr.map(cloneDeep), true);
  } else {
    __spreadArrayResult = arr;
    if (null !== closure_0[item]) {
      __spreadArrayResult = arr;
      if (typeof closure_0[item] === "object") {
        const _Object = Object;
        const keys = Object.keys(arr);
        __spreadArrayResult = keys.reduce(f84296, {});
      }
    }
  }
  acc[item] = __spreadArrayResult;
  return acc;
};
function cloneDeep(arr) {
  let __spreadArrayResult;
  _require = arr;
  if (Array.isArray(arr)) {
    const obj = require("module_1172");
    __spreadArrayResult = obj.__spreadArray([], arr.map(cloneDeep), true);
  } else {
    __spreadArrayResult = arr;
    if (null !== arr) {
      __spreadArrayResult = arr;
      if (typeof arr === "object") {
        const _Object = Object;
        const keys = Object.keys(arr);
        __spreadArrayResult = keys.reduce(f84296, {});
      }
    }
  }
  return __spreadArrayResult;
}
function hoistSelectors(arr) {
  let options;
  let tmp;
  let tmp2;
  const f84298 = (children) => {
    let tmp4 = arr(num[1]).isPluralElement(children) || arr(num[1]).isSelectElement(children);
    arr(num[1]).isPluralElement(children) || arr(num[1]).isSelectElement(children);
    if (!tmp4) {
      let isTagElementResult = tmp(tmp2[1]).isTagElement(children);
      if (isTagElementResult) {
        children = children.children;
        isTagElementResult = children.find(f84298);
      }
      tmp4 = isTagElementResult;
    }
    return tmp4;
  };
  let num = 0;
  if (0 < arr.length) {
    let __spreadArrayResult;
    while (true) {
      arr = arr[num];
      tmp = _require;
      tmp2 = num;
      let isPluralElementResult = require("TYPE").isPluralElement(arr);
      let tmp4 = num;
      if (!isPluralElementResult) {
        isPluralElementResult = tmp(tmp2[1]).isSelectElement(arr);
      }
      if (isPluralElementResult) {
        break;
      } else {
        if (tmp(tmp2[1]).isTagElement(arr)) {
          let items = [arr];
          if (items.find(f84298)) {
            let tmp5 = globalThis;
            let _Error = Error;
            let self = this;
            let str = "Cannot hoist plural/select within a tag element. Please put the tag element inside each plural/select option";
            let self2 = this;
            let error = new Error("Cannot hoist plural/select within a tag element. Please put the tag element inside each plural/select option");
            throw error;
          }
        }
        num = num + 1;
      }
    }
    _require = arr;
    const _Array = Array;
    if (Array.isArray(arr)) {
      const tmpResult = tmp(tmp2[0]);
      __spreadArrayResult = tmpResult.__spreadArray([], arr.map(options), true);
    } else {
      __spreadArrayResult = arr;
      if (null !== arr) {
        __spreadArrayResult = arr;
        if (typeof arr === "object") {
          const _Object2 = Object;
          let keys = Object.keys(arr);
          __spreadArrayResult = keys.reduce(f84296, {});
        }
      }
    }
    options = __spreadArrayResult.options;
    let _Object = Object;
    const keys1 = Object.keys(options);
    __spreadArrayResult.options = keys1.reduce((acc, item) => {
      const __spreadArray = _mod1172.__spreadArray;
      _mod1172;
      const __spreadArray2 = _mod1172.__spreadArray;
      _mod1172;
      const obj = _mod1172;
      const __spreadArray2Result = __spreadArray2(obj.__spreadArray([], arr.slice(0, num), true), options[item].value, true);
      acc[item] = { value: hoistSelectors(__spreadArray(__spreadArray2Result, arr.slice(num + 1), true)) };
      ({ value: hoistSelectors(__spreadArray(__spreadArray2Result, arr.slice(num + 1), true)) });
      return acc;
    }, {});
    const items1 = [__spreadArrayResult];
    return items1;
  }
  return arr;
}

export { hoistSelectors };
export const isStructurallySame = function isStructurallySame(arr, arr2) {
  let error;
  const f84299 = function(value) {
    let tmp = value;
    let tmp2 = closure_1_1;
    if (!value(closure_1_1[1]).isArgumentElement(value)) {
      if (!tmp(tmp2[1]).isDateElement(value)) {
        let tmp4 = tmp(tmp2[1]).isPluralElement(value) || tmp(tmp2[1]).isSelectElement(value);
        if (tmp4) {
          let tmp5 = value;
          let result = value.set(value.value, value.type);
          let tmp7 = globalThis;
          let _Object = Object;
          let keys = Object.keys(value.options);
          let item = keys.forEach(f136437);
        }
        if (tmp(tmp2[1]).isTagElement(value)) {
          let tmp9 = value;
          let result1 = value.set(value.value, value.type);
          let children = value.children;
          let item1 = children.forEach(f84299);
        }
      }
    }
    let obj = value;
    if (value.value in value) {
      if (obj.get(value.value) !== value.type) {
        let tmp12 = globalThis;
        let _Error = Error;
        let str = "Variable ";
        let concat = "Variable ".concat;
        let str2 = " has conflicting types";
        let self = this;
        let self2 = this;
        let error = new Error("Variable ".concat(value.value, " has conflicting types"));
        let tmp14 = error;
        throw error;
      }
    }
    let result2 = obj.set(value.value, value.type);
  };
  map = new Map();
  map1 = new Map();
  const item = arr.forEach(f84299);
  const item1 = arr2.forEach(f84299);
  if (map.size !== map1.size) {
    let obj = { success: false, error };
    let _Error = Error;
    let concat = "Different number of variables: [".concat;
    const _Array2 = Array;
    const arr3 = Array.from(map.keys());
    let combined = "Different number of variables: [".concat(arr3.join(", "), "] vs [");
    const _Array3 = Array;
    let concat2 = combined.concat;
    let self = this;
    let self2 = this;
    const arr4 = Array.from(map1.keys());
    error = new Error(concat2(arr4.join(", "), "]"));
    return obj;
  } else {
    const _Array = Array;
    arr = Array.from(map.entries());
    return arr.reduce(function(success, item) {
      let error;
      let error1;
      let tmp2;
      let tmp3;
      let tmp = success;
      [tmp2, tmp3] = item;
      if (success.success) {
        const value = map1.get(tmp2);
        if (null == value) {
          const _Error = Error;
          const concat = "Missing variable ".concat;
          const self = this;
          const self2 = this;
          const obj = { success: false, error };
          error = new Error("Missing variable ".concat(tmp2, " in message"));
          tmp = obj;
        } else if (value !== tmp3) {
          const _Error2 = Error;
          const concat2 = "Variable ".concat;
          const obj2 = { success: false, error: error1 };
          const combined = "Variable ".concat(tmp2, " has conflicting types: ");
          const combined1 = combined.concat(TYPE.TYPE[tmp3], " vs ");
          const self3 = this;
          const self4 = this;
          error1 = new Error(combined1.concat(TYPE.TYPE[value]));
          tmp = obj2;
        }
        return tmp;
      } else {
        return tmp;
      }
    }, { success: true });
  }
};
