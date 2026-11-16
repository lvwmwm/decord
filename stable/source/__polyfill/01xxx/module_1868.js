// Module ID: 1868
// Function ID: 1869
// Dependencies: [1869, 1827, 1705]
// Exports: updateLayoutAnimations

// Module 1868
import _mod1705 from "module_1705" /* 1705 */;
import startMapper from "startMapper" /* 1827 */;
import animationsManagerNative from "animationsManagerNative" /* 1869 */;

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
    const obj2 = _mod1705;
    serializable = obj2.createSerializable(__initData);
  }
  return update(obj, arg3);
};
