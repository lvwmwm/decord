// Module ID: 80
// Function ID: 1478
// Name: createGetter
// Dependencies: [81]

// Module 80 (createGetter)
const module = arg2;
const dependencyMap = arg6;
function createGetter(arg0, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  return () => {
    if (null == closure_2) {
      let tmp2 = callback();
      if (null == tmp2) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
}
const set = new Set();
const set1 = new Set();
let tmp4 = true === RN$Bridgeless.RN$Bridgeless;
if (!tmp4) {
  tmp4 = null != RN$Bridgeless.__turboModuleProxy;
}
let closure_5 = tmp4;
arg5.createJavaScriptFlagGetter = function createJavaScriptFlagGetter(alwaysFlattenAnimatedStyles, arg1) {
  let closure_0 = alwaysFlattenAnimatedStyles;
  let closure_1 = arg1;
  return createGetter(undefined, () => {
    outer1_3.add(closure_0);
    let callResult;
    if (null != outer1_2) {
      if (null != tmp2[closure_0]) {
        callResult = obj.call(tmp2, closure_1);
      }
    }
    return callResult;
  }, arg1);
};
arg5.createNativeFlagGetter = function createNativeFlagGetter(animatedShouldSignalBatch, arg1) {
  let closure_0 = animatedShouldSignalBatch;
  return createGetter(undefined, () => {
    let hasItem = animatedShouldSignalBatch(outer1_1[0]);
    if (!hasItem) {
      hasItem = outer1_4.has(tmp);
    }
    if (!hasItem) {
      hasItem = !outer1_5;
    }
    if (!hasItem) {
      outer1_4.add(tmp);
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("Could not access feature flag '" + tmp + "' because native module method was not available");
    }
    let callResult;
    if (null != animatedShouldSignalBatch(outer1_1[0])) {
      const obj = animatedShouldSignalBatch(outer1_1[0])[animatedShouldSignalBatch];
      if (null != obj) {
        callResult = obj.call(animatedShouldSignalBatch(outer1_1[0]));
      }
    }
    return callResult;
  }, arg1);
};
arg5.getOverrides = function getOverrides() {
  return closure_2;
};
arg5.setOverrides = function setOverrides(arg0) {
  if (null != closure_2) {
    const _Error2 = Error;
    const error = new Error("Feature flags cannot be overridden more than once");
    throw error;
  } else if (set.size > 0) {
    const _Array = Array;
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Feature flags were accessed before being overridden: " + Array.from(set).join(", "));
    throw error1;
  } else {
    closure_2 = arg0;
  }
};
