// Module ID: 1869
// Function ID: 1870
// Dependencies: [1870, 1828, 1706]
// Exports: updateLayoutAnimations

// Module 1869
import _mod1706 from "module_1706" /* 1706 */;
import startMapper from "startMapper" /* 1828 */;
import animationsManagerNative from "animationsManagerNative" /* 1870 */;

let closure_0 = [];
let closure_1 = [];
let update = {
  update(arg0, arg1) {
    const obj = animationsManagerNative;
    const result = obj.initializeLayoutAnimationsManager();
    const tmp2 = arg1;
    if (tmp2) {
      closure_1.push(arg0);
    } else {
      closure_0.push(arg0);
    }
    if (closure_0.length + closure_1.length === 1) {
      const self = this;
      this.flush();
    }
  },
  flush() {
    const obj = startMapper;
    const result = obj.configureLayoutAnimationBatch(closure_0.concat(closure_1));
    closure_0.length = 0;
    closure_1.length = 0;
  }
};

export const updateLayoutAnimations = (viewTag, type, __initData, arg3, sharedTransitionTag) => {
  let serializable;
  const obj = { viewTag, type, config: serializable, sharedTransitionTag };
  serializable = undefined;
  update = update.update;
  if (__initData) {
    const obj2 = _mod1706;
    serializable = obj2.createSerializable(__initData);
  }
  return update(obj, arg3);
};
