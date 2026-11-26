// Module ID: 1870
// Function ID: 1871
// Dependencies: [1871, 1829, 1707]
// Exports: updateLayoutAnimations

// Module 1870
import _mod1707 from "module_1707" /* 1707 */;
import startMapper from "startMapper" /* 1829 */;
import animationsManagerNative from "animationsManagerNative" /* 1871 */;

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
    const obj2 = _mod1707;
    serializable = obj2.createSerializable(__initData);
  }
  return update(obj, arg3);
};
