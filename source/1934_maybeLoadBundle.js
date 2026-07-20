// Module ID: 1934
// Function ID: 21804
// Name: maybeLoadBundle
// Dependencies: []

// Module 1934 (maybeLoadBundle)
function maybeLoadBundle(arg0, arg1) {
  if (null != global["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__loadBundleAsync"]) {
    const _String = String;
    if (null != arg1) {
      if (null != arg1[String(undefined, arg0)]) {
        return tmp(tmp3);
      }
    }
  }
}
function asyncRequireImpl(arg0, arg1) {
  const global = arg0;
  const promise = maybeLoadBundle(arg0, arg1);
  function importAll(arg0) {
    return closure_1.importAll(arg0);
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
    return callback(arg0, arg1);
  }
}
let closure_2 = require(dependencyMap[0]);
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
