// Module ID: 3795
// Function ID: 29586
// Name: loaderMaker
// Dependencies: [57, 31, 33, 3796, 2]
// Exports: LazyLibrary, makeLazy, makeLazyWithPreload

// Module 3795 (loaderMaker)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5 } = jsxProd);
function loaderMaker() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "transparent";
  }
  return () => {
    const style = { position: "absolute", width: "100%", height: "100%", backgroundColor: str };
    return outer1_4("div", { style });
  };
}
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx");
for (const key10035 in require("_importWithRetry")) {
  let tmp4 = key10035;
  arg5[key10035] = require("_importWithRetry")[key10035];
  continue;
}

export { loaderMaker };
export const makeLazy = function makeLazy(memo) {
  let _slicedToArray;
  let dependencyMap;
  let name;
  let require;
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name } = memo);
  let flag = memo.memo;
  if (flag === undefined) {
    flag = false;
  }
  let closure_4;
  closure_4 = name.lazy(() => {
    let obj = outer1_0(outer1_1[3]);
    obj = { createPromise: closure_0, webpackId: closure_1, name };
    return obj.importWithRetry(obj);
  });
  class Wrapper {
    constructor(arg0) {
      obj = {};
      tmp = f29590;
      if (null != renderLoader) {
        tmp4 = renderLoader;
        tmp3 = renderLoader();
      } else {
        tmp2 = outer1_6;
        tmp3 = outer1_6()();
      }
      obj.fallback = tmp3;
      obj = {};
      merged = Object.assign(memo);
      obj.children = f29590(f29590, obj);
      return tmp(name.Suspense, obj);
    }
  }
  let memoResult = Wrapper;
  if (flag) {
    memoResult = name.memo(Wrapper);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  return memoResult;
};
export const makeLazyWithPreload = function makeLazyWithPreload(arg0) {
  let _slicedToArray;
  let dependencyMap;
  let memo;
  let name;
  let require;
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name, memo } = arg0);
  if (memo === undefined) {
    memo = false;
  }
  let closure_6;
  const React = null;
  let c4 = null;
  function importPromise() {
    if (null == result) {
      let obj = outer1_0(outer1_1[3]);
      obj = { createPromise: closure_0, webpackId: closure_1 };
      result = obj.importWithRetry(obj).then((arg0) => {
        const outer1_4 = arg0.default;
        return arg0;
      });
      const importWithRetryResult = obj.importWithRetry(obj);
    }
    return result;
  }
  closure_6 = React.lazy(importPromise);
  class Wrapper {
    constructor(arg0) {
      first = renderLoader(c3.useState(() => outer1_4), 1)[0];
      if (null != first) {
        tmp14 = c4;
        obj = {};
        tmp15 = obj;
        tmp16 = arg0;
        merged = Object.assign(arg0);
        tmp2Result = c4(first, obj);
      } else {
        tmp3 = c3;
        obj = {};
        tmp4 = renderLoader;
        tmp2 = c4;
        if (null != renderLoader) {
          tmp7 = renderLoader;
          tmp6 = renderLoader();
        } else {
          tmp5 = lazy;
          tmp6 = lazy()();
        }
        obj.fallback = tmp6;
        tmp8 = c4;
        tmp9 = lazy;
        obj1 = {};
        tmp10 = obj1;
        tmp11 = arg0;
        merged1 = Object.assign(arg0);
        obj.children = c4(lazy, obj1);
        tmp2Result = tmp2(c3.Suspense, obj);
      }
      return tmp2Result;
    }
  }
  let memoResult = Wrapper;
  if (memo) {
    memoResult = React.memo(Wrapper);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  memoResult.preload = () => {
    importPromise();
  };
  return memoResult;
};
export const LazyLibrary = function LazyLibrary(arg0) {
  let dependencyMap;
  let render;
  let renderFallback;
  let require;
  ({ createPromise: require, webpackId: dependencyMap } = arg0);
  ({ render, renderFallback } = arg0);
  const tmp = callback(React.useState(null), 2);
  const first = tmp[0];
  callback = tmp[1];
  const effect = React.useEffect(() => {
    let obj = outer1_0(outer1_1[3]);
    obj = { createPromise: closure_0, webpackId: closure_1 };
    obj.importWithRetry(obj).then((arg0) => outer1_2(arg0.default));
  }, []);
  return closure_4(closure_5, { children: null == first ? renderFallback() : render(first) });
};
