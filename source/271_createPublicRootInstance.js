// Module ID: 271
// Function ID: 3389
// Name: createPublicRootInstance
// Dependencies: []

// Module 271 (createPublicRootInstance)
arg5.createPublicRootInstance = function createPublicRootInstance(containerTag) {
  let reactNativeDocument = null;
  if (obj.enableAccessToHostTreeInFabric()) {
    if (null == closure_3) {
      closure_3 = arg1(arg6[0]);
    }
    reactNativeDocument = closure_3.createReactNativeDocument(containerTag);
  }
  return reactNativeDocument;
};
arg5.createPublicInstance = function createPublicInstance(nativeTag, text, internalInstanceHandle, publicInstance) {
  if (obj.enableAccessToHostTreeInFabric()) {
    if (null == ctor2) {
      const ctor2 = text(arg6[1]).default;
    }
    const prototype2 = ctor2.prototype;
    let tmp11 = new ctor2(nativeTag, text, internalInstanceHandle, publicInstance);
  } else {
    if (null == ctor) {
      const ctor = text(arg6[2]).default;
    }
    const prototype = ctor.prototype;
    tmp11 = new ctor(nativeTag, text, internalInstanceHandle);
  }
  return tmp11;
};
arg5.createPublicTextInstance = function createPublicTextInstance(stateNode) {
  if (null == closure_6) {
    closure_6 = arg1(arg6[3]).default;
  }
  return new closure_6(stateNode, arg1);
};
arg5.getNativeTagFromPublicInstance = function getNativeTagFromPublicInstance(__nativeTag) {
  return __nativeTag.__nativeTag;
};
arg5.getNodeFromPublicInstance = function getNodeFromPublicInstance(__internalInstanceHandle) {
  let nodeFromInternalInstanceHandle = null;
  if (null != __internalInstanceHandle.__internalInstanceHandle) {
    if (null == nodeFromInternalInstanceHandle) {
      nodeFromInternalInstanceHandle = arg1(arg6[5]);
    }
    nodeFromInternalInstanceHandle = nodeFromInternalInstanceHandle.getNodeFromInternalInstanceHandle(__internalInstanceHandle.__internalInstanceHandle);
  }
  return nodeFromInternalInstanceHandle;
};
arg5.getInternalInstanceHandleFromPublicInstance = function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return null != _internalInstanceHandle._internalInstanceHandle ? _internalInstanceHandle._internalInstanceHandle : _internalInstanceHandle.__internalInstanceHandle;
};
