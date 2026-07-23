// Module ID: 271
// Function ID: 3389
// Name: createPublicRootInstance
// Dependencies: [141, 142, 272, 149, 79, 117]

// Module 271 (createPublicRootInstance)
const require = arg1;
const exports = arg3;
const dependencyMap = arg6;
arg5.createPublicRootInstance = function createPublicRootInstance(containerTag) {
  let reactNativeDocument = null;
  if (obj.enableAccessToHostTreeInFabric()) {
    if (null == closure_3) {
      closure_3 = require(141) /* _isNativeReflectConstruct */;
    }
    reactNativeDocument = closure_3.createReactNativeDocument(containerTag);
  }
  return reactNativeDocument;
};
arg5.createPublicInstance = function createPublicInstance(c176, text, internalInstanceHandle, publicInstance) {
  if (obj.enableAccessToHostTreeInFabric()) {
    if (null == ctor2) {
      ctor2 = require(142) /* _isNativeReflectConstruct */.default;
    }
    const prototype2 = ctor2.prototype;
    let tmp11 = new ctor2(c176, text, internalInstanceHandle, publicInstance);
  } else {
    if (null == ctor) {
      ctor = require(272) /* noop */.default;
    }
    const prototype = ctor.prototype;
    tmp11 = new ctor(c176, text, internalInstanceHandle);
  }
  return tmp11;
};
arg5.createPublicTextInstance = function createPublicTextInstance(stateNode) {
  if (null == closure_6) {
    closure_6 = require(149) /* _isNativeReflectConstruct */.default;
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
      nodeFromInternalInstanceHandle = require(117) /* renderElement */;
    }
    nodeFromInternalInstanceHandle = nodeFromInternalInstanceHandle.getNodeFromInternalInstanceHandle(__internalInstanceHandle.__internalInstanceHandle);
  }
  return nodeFromInternalInstanceHandle;
};
arg5.getInternalInstanceHandleFromPublicInstance = function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return null != _internalInstanceHandle._internalInstanceHandle ? _internalInstanceHandle._internalInstanceHandle : _internalInstanceHandle.__internalInstanceHandle;
};
