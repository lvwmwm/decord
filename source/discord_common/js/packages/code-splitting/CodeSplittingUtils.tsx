// Module ID: 3793
// Function ID: 29576
// Name: loaderMaker
// Dependencies: []
// Exports: LazyLibrary, makeLazy, makeLazyWithPreload

// Module 3793 (loaderMaker)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ jsx: closure_4, Fragment: closure_5 } = arg1(dependencyMap[2]));
function loaderMaker() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "transparent";
  }
  const arg1 = str;
  return () => {
    const style = { "Null": null, "Null": null, "Null": null, backgroundColor: str };
    return callback("div", { style });
  };
}
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx");
for (const key10035 in arg1(arg6[3])) {
  let tmp4 = key10035;
  arg5[key10035] = arg1(arg6[3])[key10035];
}

export { loaderMaker };
export const makeLazy = function makeLazy(memo) {
  let name;
  ({ createPromise: closure_0, webpackId: closure_1, renderLoader: closure_2, name } = memo);
  const React = name;
  let flag = memo.memo;
  if (flag === undefined) {
    flag = false;
  }
  let closure_4;
  closure_4 = React.lazy(() => {
    let obj = callback(closure_1[3]);
    obj = { createPromise: callback, webpackId: closure_1, name };
    return obj.importWithRetry(obj);
  });
  class Wrapper {
    constructor(arg0) {
      obj = {};
      tmp = f29580;
      if (null != renderLoader) {
        tmp4 = renderLoader;
        tmp3 = renderLoader();
      } else {
        tmp2 = closure_6;
        tmp3 = closure_6()();
      }
      obj.fallback = tmp3;
      obj = {};
      merged = Object.assign(memo);
      obj.children = f29580(f29580, obj);
      return tmp(name.Suspense, obj);
    }
  }
  let memoResult = Wrapper;
  if (flag) {
    memoResult = React.memo(Wrapper);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  return memoResult;
};
export const makeLazyWithPreload = function makeLazyWithPreload(arg0) {
  let memo;
  let name;
  ({ createPromise: closure_0, webpackId: closure_1, renderLoader: closure_2, name, memo } = arg0);
  if (memo === undefined) {
    memo = false;
  }
  let closure_6;
  const React = null;
  let closure_4 = null;
  function importPromise() {
    if (null == closure_3) {
      let obj = callback(closure_1[3]);
      obj = { createPromise: callback, webpackId: closure_1 };
      closure_3 = obj.importWithRetry(obj).then((arg0) => {
        let closure_4 = arg0.default;
        return arg0;
      });
      const importWithRetryResult = obj.importWithRetry(obj);
    }
    return closure_3;
  }
  closure_6 = React.lazy(importPromise);
  class Wrapper {
    constructor(arg0) {
      first = renderLoader(closure_3.useState(() => closure_4), 1)[0];
      if (null != first) {
        tmp14 = closure_4;
        obj = {};
        tmp15 = obj;
        tmp16 = arg0;
        merged = Object.assign(arg0);
        tmp2Result = closure_4(first, obj);
      } else {
        tmp3 = closure_3;
        obj = {};
        tmp4 = renderLoader;
        tmp2 = closure_4;
        if (null != renderLoader) {
          tmp7 = renderLoader;
          tmp6 = renderLoader();
        } else {
          tmp5 = lazy;
          tmp6 = lazy()();
        }
        obj.fallback = tmp6;
        tmp8 = closure_4;
        tmp9 = lazy;
        obj1 = {};
        tmp10 = obj1;
        tmp11 = arg0;
        merged1 = Object.assign(arg0);
        obj.children = closure_4(lazy, obj1);
        tmp2Result = tmp2(closure_3.Suspense, obj);
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
  let render;
  let renderFallback;
  ({ createPromise: closure_0, webpackId: closure_1 } = arg0);
  ({ render, renderFallback } = arg0);
  const tmp = callback(React.useState(null), 2);
  const first = tmp[0];
  const callback = tmp[1];
  const effect = React.useEffect(() => {
    let obj = callback(closure_1[3]);
    obj = { createPromise: callback, webpackId: closure_1 };
    obj.importWithRetry(obj).then((arg0) => callback(arg0.default));
  }, []);
  return closure_4(closure_5, { children: null == first ? renderFallback() : render(first) });
};
