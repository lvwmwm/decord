// Module ID: 342
// Function ID: 5055
// Name: invariant
// Dependencies: [44, 343]

// Module 342 (invariant)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      require(44) /* invariant */(module(343), "Trying to debug FrameRateLogger without the native module!");
      const tmp3 = require(44) /* invariant */;
    }
    if (null != module(343)) {
      let obj = module(343);
      obj = { debug: debug.debug };
      obj.setGlobalOptions(obj);
    }
  },
  setContext(arg0) {
    if (null != module(343)) {
      module(343).setContext(arg0);
      const obj = module(343);
    }
  },
  beginScroll() {
    if (null != module(343)) {
      module(343).beginScroll();
      const obj = module(343);
    }
  },
  endScroll() {
    if (null != module(343)) {
      module(343).endScroll();
      const obj = module(343);
    }
  }
};
