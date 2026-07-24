// Module ID: 1934
// Function ID: 21811
// Name: maybeLoadBundle
// Dependencies: [1935]

// Module 1934 (maybeLoadBundle)
import asyncGeneratorStep from "asyncGeneratorStep";

function maybeLoadBundle(arg0, arg1) {
  const tmp = global["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__loadBundleAsync"];
  if (null != tmp) {
    const _String = String;
    if (null != arg1) {
      const tmp3 = arg1[String(undefined, arg0)];
      if (null != tmp3) {
        return tmp(tmp3);
      }
    }
  }
}
function asyncRequireImpl(arg0, arg1) {
  let closure_0 = arg0;
  const promise = maybeLoadBundle(arg0, arg1);
  function importAll(closure_0) {
    return outer1_1.importAll(closure_0);
  }
  if (null != promise) {
    let nextPromise = promise.then(importAll);
  } else {
    nextPromise = importAll();
  }
  return nextPromise;
}
function asyncRequire(arg0, arg1, arg2) {
  return _asyncRequire(...arguments);
}
async function _asyncRequire(arg0, arg1, arg2, arg3) {
  if (obj) {
    return obj.resume();
  } else {
    return outer2_4(arg0, arg1);
  }
}
asyncRequire.unstable_importMaybeSync = function unstable_importMaybeSync(arg0, arg1) {
  return asyncRequireImpl(arg0, arg1);
};
asyncRequire.prefetch = (arg0, arg1, arg2) => {
  const promise = maybeLoadBundle(arg0, arg1);
  if (null != promise) {
    promise.then(() => {

    }, () => {

    });
  }
};

export default asyncRequire;
