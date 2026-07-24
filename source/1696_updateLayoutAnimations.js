// Module ID: 1696
// Function ID: 18760
// Name: updateLayoutAnimations
// Dependencies: [1585, 1626]

// Module 1696 (updateLayoutAnimations)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  function updateLayoutAnimations() {

  }
} else {
  let closure_2 = (function createUpdateManager() {
    let closure_0 = [];
    let closure_1 = [];
    return {
      update(arg0, arg1) {
        const self = this;
        if (arg1) {
          let arr = arr2.push(arg0);
        } else {
          arr = arr.push(arg0);
        }
        if (arr.length + arr2.length === 1) {
          if (obj.isFabric()) {
            self.flush();
          } else {
            const _setImmediate = setImmediate;
            setImmediate(self.flush);
          }
          obj = arr(arr2[0]);
        }
      },
      flush() {
        const result = arr(arr2[1]).configureLayoutAnimationBatch(arr.concat(arr2));
        arr.length = 0;
        arr2.length = 0;
      }
    };
  })();
  updateLayoutAnimations = function updateLayoutAnimations(viewTag, type, arg2, sharedTransitionTag) {
    const obj = { viewTag, type };
    let shareableCloneRecursive;
    if (arg2) {
      shareableCloneRecursive = require(1626) /* getSensorContainer */.makeShareableCloneRecursive(arg2);
      const obj2 = require(1626) /* getSensorContainer */;
    }
    obj.config = shareableCloneRecursive;
    obj.sharedTransitionTag = sharedTransitionTag;
    return closure_2.update(obj, arg4);
  };
}

export { updateLayoutAnimations };
