// Module ID: 80
// Function ID: 1478
// Name: createGetter
// Dependencies: []

// Module 80 (createGetter)
function createGetter(arg0, arg1, arg2) {
  arg2 = arg1;
  const arg6 = arg2;
  return () => {
    if (null == tmp2) {
      let tmp2 = arg1();
      if (null == tmp2) {
        tmp2 = arg2;
      }
    }
    return tmp2;
  };
}
const set = new Set();
const set1 = new Set();
let tmp4 = true === RN$Bridgeless.RN$Bridgeless;
if (!tmp4) {
  tmp4 = null != RN$Bridgeless.__turboModuleProxy;
}
arg5.createJavaScriptFlagGetter = function createJavaScriptFlagGetter(alwaysFlattenAnimatedStyles, arg1) {
  const arg2 = alwaysFlattenAnimatedStyles;
  const arg6 = arg1;
  return createGetter(undefined, () => {
    set.add(arg0);
    let callResult;
    if (null != closure_2) {
      if (null != tmp2[closure_0]) {
        callResult = obj.call(tmp2, arg1);
      }
    }
    return callResult;
  }, arg1);
};
arg5.createNativeFlagGetter = function createNativeFlagGetter(animatedShouldSignalBatch, arg1) {
  const arg2 = animatedShouldSignalBatch;
  return createGetter(undefined, () => {
    let hasItem = arg0(closure_1[0]);
    if (!hasItem) {
      hasItem = set.has(tmp);
    }
    if (!hasItem) {
      hasItem = !closure_5;
    }
    if (!hasItem) {
      set.add(tmp);
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("Could not access feature flag '" + tmp + "' because native module method was not available");
    }
    let callResult;
    if (null != arg0(closure_1[0])) {
      const obj = arg0(closure_1[0])[closure_0];
      if (null != obj) {
        callResult = obj.call(arg0(closure_1[0]));
      }
    }
    return callResult;
  }, arg1);
};
arg5.getOverrides = function getOverrides() {
  return closure_2;
};
arg5.setOverrides = function setOverrides(arg0) {
  if (null != arg0) {
    const _Error2 = Error;
    const error = new Error("Feature flags cannot be overridden more than once");
    throw error;
  } else if (set.size > 0) {
    const _Array = Array;
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Feature flags were accessed before being overridden: " + Array.from(set).join(", "));
    throw error1;
  }
};
