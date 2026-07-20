// Module ID: 136
// Function ID: 2224
// Name: createReactNativeDocumentInstanceHandle
// Dependencies: []

// Module 136 (createReactNativeDocumentInstanceHandle)
arg5.createReactNativeDocumentInstanceHandle = function createReactNativeDocumentInstanceHandle(containerTag) {
  return containerTag;
};
arg5.getNativeNodeReferenceFromReactNativeDocumentInstanceHandle = function getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(arg0) {
  return arg0;
};
arg5.getPublicInstanceFromReactNativeDocumentInstanceHandle = function getPublicInstanceFromReactNativeDocumentInstanceHandle(parentNode) {
  return arg3(arg6[0]).getPublicInstanceFromRootTag(Number(parentNode));
};
arg5.isReactNativeDocumentInstanceHandle = function isReactNativeDocumentInstanceHandle(parentNode) {
  let tmp = "number" === typeof parentNode;
  if (tmp) {
    tmp = parentNode % 10 === 1;
  }
  return tmp;
};
