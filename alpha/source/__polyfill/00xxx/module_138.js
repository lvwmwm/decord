// Module ID: 138
// Function ID: 139
// Dependencies: [42, 41]
// Exports: createReactNativeDocumentElementInstanceHandle, getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle, getPublicInstanceFromReactNativeDocumentElementInstanceHandle, isReactNativeDocumentElementInstanceHandle, setNativeElementReferenceForReactNativeDocumentElementInstanceHandle, setPublicInstanceForReactNativeDocumentElementInstanceHandle

// Module 138
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    _classCallCheck(this, ReactNativeDocumentElementInstanceHandleImpl);
  }
}
let closure_1 = _createClass(ReactNativeDocumentElementInstanceHandleImpl);

export function createReactNativeDocumentElementInstanceHandle() {
  const tmp = new closure_1();
  return tmp;
}
export function getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(nativeElementReference) {
  return nativeElementReference.nativeElementReference;
}
export function setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, linkRootNodeResult) {
  reactNativeDocumentElementInstanceHandle.nativeElementReference = linkRootNodeResult;
}
export function getPublicInstanceFromReactNativeDocumentElementInstanceHandle(publicInstance) {
  return publicInstance.publicInstance;
}
export function setPublicInstanceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, publicInstance) {
  reactNativeDocumentElementInstanceHandle.publicInstance = publicInstance;
}
export function isReactNativeDocumentElementInstanceHandle(c5) {
  return c5 instanceof closure_1;
}
