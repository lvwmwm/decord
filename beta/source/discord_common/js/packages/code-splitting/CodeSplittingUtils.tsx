// Module ID: 4507
// Function ID: 4508
// Name: CodeSplittingUtils
// Dependencies: [32, 19, 21, 4508, 2]
// Exports: LazyLibrary, makeLazy, makeLazyWithPreload

// Module 4507 (CodeSplittingUtils)
import importWithRetry from "importWithRetry" /* 4508 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let closure_3, first, merged1, obj1, obj6, obj7, str2, str3, tmp, tmp10, tmp11, tmp12, tmp14, tmp14Result, tmp14Result1, tmp3, tmp5, tmp6, tmp7;

let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ jsx: closure_4, Fragment: hasOwnProperty } = Fragment);
function loaderMaker() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "transparent";
  }
  return () => {
    const obj = { style: size };
    size = { position: "absolute", width: "100%", height: "100%", backgroundColor: str };
    return React3("div", obj);
  };
}
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx");
for (const key10029 in importWithRetry) {
  exports[key10029] = importWithRetry[key10029];
  continue;
}

export { loaderMaker };
export const makeLazy = function makeLazy(memo) {
  let createPromise;
  let name;
  let webpackId;
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name } = memo);
  let flag = memo.memo;
  if (flag === undefined) {
    flag = false;
  }
  let obj = name;
  let closure_4 = name.lazy(() => {
    const obj = importWithRetry;
    const obj2 = { createPromise: require, webpackId: dependencyMap, name };
    return obj.importWithRetry(obj2);
  });
  class Wrapper {
    constructor(arg0) {
      let obj3;
      let tmpResult;
      const Suspense = react.Suspense;
      if (null != _slicedToArray) {
        tmpResult = tmp2();
      } else if (typeof loaderMaker === "function") {
        const transparent = "transparent";
        const obj = { style: size };
        size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
        tmpResult = tmp("div", obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const obj2 = { fallback: tmpResult, children: React3(closure_4, obj3) };
      obj3 = {};
      const merged = Object.assign(arg0);
      return React3(Suspense, obj2);
    }
  }
  let memoResult = Wrapper;
  if (flag) {
    memoResult = obj.memo(Wrapper);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  return memoResult;
};
export const makeLazyWithPreload = function makeLazyWithPreload(arg0) {
  let createPromise;
  let memo;
  let name;
  let webpackId;
  const f111333 = (result) => {
    closure_4 = result.default;
    return result;
  };
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name, memo } = arg0);
  if (memo === undefined) {
    memo = false;
  }
  react = null;
  let c4 = null;
  let obj = react;
  let closure_5 = react.lazy(function importPromise() {
    if (null == closure_3) {
      const obj2 = { createPromise: require, webpackId: dependencyMap };
      const obj = importWithRetry;
      const importWithRetryResult = obj.importWithRetry(obj2);
      closure_3 = importWithRetryResult.then(f111333);
    }
    return closure_3;
  });
  class Wrapper {
    constructor(arg0) {
      tmp = closure_3;
      first = closure_2(closure_3.useState(() => closure_1_4), 1)[0];
      if (null != first) {
        tmp10 = jsx;
        obj1 = {};
        tmp11 = obj1;
        tmp12 = arg0;
        merged = Object.assign(arg0);
        tmp14Result1 = jsx(first, obj1);
      } else {
        tmp14 = jsx;
        Suspense = tmp.Suspense;
        if (null != renderLoader) {
          tmp14Result = renderLoader();
        } else {
          tmp3 = loaderMaker;
          if (typeof loaderMaker === "function") {
            str = "transparent";
            transparent = "transparent";
            obj = { style: null };
            size = { position: "absolute", width: "100%", height: "100%", backgroundColor: null };
            size.backgroundColor = "transparent";
            obj.style = size;
            str2 = "div";
            tmp14Result = tmp14("div", obj);
          } else {
            str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        obj6 = { fallback: null, children: null };
        obj6.fallback = tmp14Result;
        tmp5 = closure_5;
        obj7 = {};
        tmp6 = obj7;
        tmp7 = arg0;
        merged1 = Object.assign(arg0);
        obj6.children = tmp14(closure_5, obj7);
        tmp14Result1 = tmp14(Suspense, obj6);
      }
      return tmp14Result1;
    }
  }
  let memoResult = Wrapper;
  if (memo) {
    memoResult = obj.memo(Wrapper);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  memoResult.preload = () => {
    if (null == closure_3) {
      const obj2 = { createPromise: require, webpackId: dependencyMap };
      const obj = importWithRetry;
      const importWithRetryResult = obj.importWithRetry(obj2);
      closure_3 = importWithRetryResult.then(f111333);
    }
  };
  return memoResult;
};
export const LazyLibrary = function LazyLibrary(arg0) {
  let c2;
  let createPromise;
  let render;
  let renderFallback;
  let tmp2;
  let webpackId;
  ({ createPromise: require, webpackId: dependencyMap } = arg0);
  _slicedToArray = undefined;
  ({ render, renderFallback } = arg0);
  [tmp2, c2] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    const obj = importWithRetry;
    const obj2 = { createPromise: require, webpackId: dependencyMap };
    const importWithRetryResult = obj.importWithRetry(obj2);
    importWithRetryResult.then((result) => closure_1_2(result.default));
  }, []);
  let obj = { children: null == tmp2 ? renderFallback() : render(tmp2) };
  return closure_4(closure_5, obj);
};
