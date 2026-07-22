// Module ID: 342
// Function ID: 5055
// Name: shouldUseTurboAnimatedModule
// Dependencies: [351, 55]

// Module 342 (shouldUseTurboAnimatedModule)
arg5.default = {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      arg1(arg6[0])(arg2(arg6[1]), "Trying to debug FrameRateLogger without the native module!");
      const tmp3 = arg1(arg6[0]);
    }
    if (null != arg2(arg6[1])) {
      let obj = arg2(arg6[1]);
      obj = { debug: debug.debug };
      obj.setGlobalOptions(obj);
    }
  },
  setContext(arg0) {
    if (null != arg2(arg6[1])) {
      arg2(arg6[1]).setContext(arg0);
      const obj = arg2(arg6[1]);
    }
  },
  beginScroll() {
    if (null != arg2(arg6[1])) {
      arg2(arg6[1]).beginScroll();
      const obj = arg2(arg6[1]);
    }
  },
  endScroll() {
    if (null != arg2(arg6[1])) {
      arg2(arg6[1]).endScroll();
      const obj = arg2(arg6[1]);
    }
  }
};
