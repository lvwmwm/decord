// Module ID: 136
// Function ID: 2224
// Name: createReactNativeDocumentInstanceHandle
// Dependencies: [117]

// Module 136 (createReactNativeDocumentInstanceHandle)
const exports = arg3;
const dependencyMap = arg6;
arg5.createReactNativeDocumentInstanceHandle = function createReactNativeDocumentInstanceHandle(containerTag) {
  return containerTag;
};
arg5.getNativeNodeReferenceFromReactNativeDocumentInstanceHandle = function getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(arg0) {
  return arg0;
};
arg5.getPublicInstanceFromReactNativeDocumentInstanceHandle = function getPublicInstanceFromReactNativeDocumentInstanceHandle(parentNode) {
  return exports(117).getPublicInstanceFromRootTag(Number(parentNode));
};
arg5.isReactNativeDocumentInstanceHandle = function isReactNativeDocumentInstanceHandle(parentNode) {
  let tmp = "number" === typeof parentNode;
  if (tmp) {
    tmp = parentNode % 10 === 1;
  }
  return tmp;
};
