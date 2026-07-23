// Module ID: 135
// Function ID: 2214
// Name: getRendererProxy
// Dependencies: [117, 136, 137]

// Module 135 (getRendererProxy)
const require = arg1;
const dependencyMap = arg6;
function getRendererProxy() {
  if (null == closure_2) {
    closure_2 = require(117) /* renderElement */;
  }
  return closure_2;
}
function getInstanceHandle(arg0) {
  return arg0[closure_3];
}
let closure_3 = Symbol("internalInstanceHandle");
let closure_4 = Symbol("ownerDocument");
arg5.getInstanceHandle = getInstanceHandle;
arg5.setInstanceHandle = function setInstanceHandle(arg0, __internalInstanceHandle) {
  arg0[closure_3] = __internalInstanceHandle;
};
arg5.getOwnerDocument = function getOwnerDocument(arg0) {
  let tmp2 = null;
  if (null != arg0[closure_4]) {
    tmp2 = tmp;
  }
  return tmp2;
};
arg5.setOwnerDocument = function setOwnerDocument(arg0, arg1) {
  arg0[closure_4] = arg1;
};
arg5.getPublicInstanceFromInstanceHandle = function getPublicInstanceFromInstanceHandle(parentNode) {
  if (obj.isReactNativeDocumentInstanceHandle(parentNode)) {
    let tmpResult = tmp(136);
    let publicInstanceFromReactNativeDocumentInstanceHandle = tmpResult.getPublicInstanceFromReactNativeDocumentInstanceHandle(parentNode);
  } else {
    tmpResult = tmp(137);
    if (tmpResult.isReactNativeDocumentElementInstanceHandle(parentNode)) {
      publicInstanceFromReactNativeDocumentInstanceHandle = require(137) /* ReactNativeDocumentElementInstanceHandleImpl */.getPublicInstanceFromReactNativeDocumentElementInstanceHandle(parentNode);
      const obj4 = require(137) /* ReactNativeDocumentElementInstanceHandleImpl */;
    } else {
      publicInstanceFromReactNativeDocumentInstanceHandle = getRendererProxy().getPublicInstanceFromInternalInstanceHandle(parentNode);
      const obj3 = getRendererProxy();
    }
  }
  return publicInstanceFromReactNativeDocumentInstanceHandle;
};
arg5.getNativeNodeReference = function getNativeNodeReference(arg0) {
  const tmp = getInstanceHandle(arg0);
  if (obj.isReactNativeDocumentInstanceHandle(tmp)) {
    let tmp2Result = tmp2(136);
    let nativeNodeReferenceFromReactNativeDocumentInstanceHandle = tmp2Result.getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(tmp);
  } else {
    tmp2Result = tmp2(137);
    if (tmp2Result.isReactNativeDocumentElementInstanceHandle(tmp)) {
      nativeNodeReferenceFromReactNativeDocumentInstanceHandle = require(137) /* ReactNativeDocumentElementInstanceHandleImpl */.getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(tmp);
      const obj4 = require(137) /* ReactNativeDocumentElementInstanceHandleImpl */;
    } else {
      nativeNodeReferenceFromReactNativeDocumentInstanceHandle = getRendererProxy().getNodeFromInternalInstanceHandle(tmp);
      const obj3 = getRendererProxy();
    }
  }
  return nativeNodeReferenceFromReactNativeDocumentInstanceHandle;
};
arg5.getNativeElementReference = function getNativeElementReference(arg0) {
  const tmp = getInstanceHandle(arg0);
  if (obj.isReactNativeDocumentElementInstanceHandle(tmp)) {
    let nativeElementReferenceFromReactNativeDocumentElementInstanceHandle = require(137) /* ReactNativeDocumentElementInstanceHandleImpl */.getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(tmp);
    const obj3 = require(137) /* ReactNativeDocumentElementInstanceHandleImpl */;
  } else {
    nativeElementReferenceFromReactNativeDocumentElementInstanceHandle = getRendererProxy().getNodeFromInternalInstanceHandle(tmp);
    const obj2 = getRendererProxy();
  }
  return nativeElementReferenceFromReactNativeDocumentElementInstanceHandle;
};
arg5.getNativeTextReference = function getNativeTextReference(arg0) {
  const tmp = getInstanceHandle(arg0);
  return getRendererProxy().getNodeFromInternalInstanceHandle(tmp);
};
