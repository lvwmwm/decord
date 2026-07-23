// Module ID: 137
// Function ID: 2229
// Name: ReactNativeDocumentElementInstanceHandleImpl
// Dependencies: [7, 6]
// Exports: createReactNativeDocumentElementInstanceHandle, getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle, getPublicInstanceFromReactNativeDocumentElementInstanceHandle, isReactNativeDocumentElementInstanceHandle, setNativeElementReferenceForReactNativeDocumentElementInstanceHandle, setPublicInstanceForReactNativeDocumentElementInstanceHandle

// Module 137 (ReactNativeDocumentElementInstanceHandleImpl)
import _classCallCheck from "_classCallCheck";

class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    tmp = c0(this, ReactNativeDocumentElementInstanceHandleImpl);
    return;
  }
}
let closure_1 = require("_defineProperties")(ReactNativeDocumentElementInstanceHandleImpl);

export const createReactNativeDocumentElementInstanceHandle = function createReactNativeDocumentElementInstanceHandle() {
  return new closure_1();
};
export const getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle = function getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(nativeElementReference) {
  return nativeElementReference.nativeElementReference;
};
export const setNativeElementReferenceForReactNativeDocumentElementInstanceHandle = function setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, linkRootNodeResult) {
  reactNativeDocumentElementInstanceHandle.nativeElementReference = linkRootNodeResult;
};
export const getPublicInstanceFromReactNativeDocumentElementInstanceHandle = function getPublicInstanceFromReactNativeDocumentElementInstanceHandle(publicInstance) {
  return publicInstance.publicInstance;
};
export const setPublicInstanceForReactNativeDocumentElementInstanceHandle = function setPublicInstanceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, publicInstance) {
  reactNativeDocumentElementInstanceHandle.publicInstance = publicInstance;
};
export const isReactNativeDocumentElementInstanceHandle = function isReactNativeDocumentElementInstanceHandle(parentNode) {
  return parentNode instanceof closure_1;
};
