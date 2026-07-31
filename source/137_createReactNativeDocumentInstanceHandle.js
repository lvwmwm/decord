// Module ID: 137
// Function ID: 138
// Name: createReactNativeDocumentInstanceHandle
// Dependencies: [114]

// Module 137 (createReactNativeDocumentInstanceHandle)
const exports = arg3;
const dependencyMap = arg6;
arg5.createReactNativeDocumentInstanceHandle = function createReactNativeDocumentInstanceHandle(arg0) {
  return arg0;
};
arg5.getNativeNodeReferenceFromReactNativeDocumentInstanceHandle = function getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(target) {
  return target;
};
arg5.getPublicInstanceFromReactNativeDocumentInstanceHandle = function getPublicInstanceFromReactNativeDocumentInstanceHandle(element) {
  return exports(114).getPublicInstanceFromRootTag(Number(element));
};
arg5.isReactNativeDocumentInstanceHandle = function isReactNativeDocumentInstanceHandle(target) {
  let tmp = typeof target === "Object";
  if (typeof target !== "__REMOTEDEV__") {
    tmp = target % 10 === 1;
  }
  return tmp;
};
