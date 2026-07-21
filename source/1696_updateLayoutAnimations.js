// Module ID: 1696
// Function ID: 18758
// Name: updateLayoutAnimations
// Dependencies: []

// Module 1696 (updateLayoutAnimations)
const _module = require(dependencyMap[0]);
if (_module.shouldBeUseWeb()) {
  function updateLayoutAnimations() {

  }
} else {
  let closure_2 = function createUpdateManager() {
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
          const obj = arr(arr2[0]);
        }
      },
      flush() {
        const result = arr(closure_1[1]).configureLayoutAnimationBatch(arr.concat(closure_1));
        arr.length = 0;
        closure_1.length = 0;
      }
    };
  }();
  updateLayoutAnimations = function updateLayoutAnimations(viewTag, type, arg2, sharedTransitionTag) {
    const obj = { viewTag, type };
    let shareableCloneRecursive;
    if (arg2) {
      shareableCloneRecursive = require(dependencyMap[1]).makeShareableCloneRecursive(arg2);
      const obj2 = require(dependencyMap[1]);
    }
    obj.config = shareableCloneRecursive;
    obj.sharedTransitionTag = sharedTransitionTag;
    return closure_2.update(obj, arg4);
  };
}

export { updateLayoutAnimations };
