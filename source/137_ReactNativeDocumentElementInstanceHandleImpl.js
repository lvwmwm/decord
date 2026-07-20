// Module ID: 137
// Function ID: 2229
// Name: ReactNativeDocumentElementInstanceHandleImpl
// Dependencies: []
// Exports: createReactNativeDocumentElementInstanceHandle, getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle, getPublicInstanceFromReactNativeDocumentElementInstanceHandle, isReactNativeDocumentElementInstanceHandle, setNativeElementReferenceForReactNativeDocumentElementInstanceHandle, setPublicInstanceForReactNativeDocumentElementInstanceHandle

// Module 137 (ReactNativeDocumentElementInstanceHandleImpl)
let closure_0 = importDefault(dependencyMap[1]);
class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    tmp = closure_0(this, ReactNativeDocumentElementInstanceHandleImpl);
    return;
  }
}
let closure_1 = importDefault(dependencyMap[0])(ReactNativeDocumentElementInstanceHandleImpl);

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
