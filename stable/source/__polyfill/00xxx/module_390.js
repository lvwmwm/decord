// Module ID: 390
// Function ID: 391
// Dependencies: []
// Exports: isPublicInstance

// Module 390

export const isPublicInstance = function isPublicInstance(nativeScrollRef) {
  let tmp = null != nativeScrollRef;
  if (tmp) {
    let tmp2 = null != nativeScrollRef.__nativeTag;
    if (!tmp2) {
      tmp2 = null != nativeScrollRef && null != nativeScrollRef._internalInstanceHandle && null != nativeScrollRef._internalInstanceHandle.stateNode && null != nativeScrollRef._internalInstanceHandle.stateNode.canonical;
    }
    tmp = tmp2;
  }
  return tmp;
};
