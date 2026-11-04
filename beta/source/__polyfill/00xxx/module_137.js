// Module ID: 137
// Function ID: 138
// Dependencies: [114]
// Exports: createReactNativeDocumentInstanceHandle, getNativeNodeReferenceFromReactNativeDocumentInstanceHandle, getPublicInstanceFromReactNativeDocumentInstanceHandle, isReactNativeDocumentInstanceHandle

// Module 137
import renderElementAll from "renderElement" /* 114 */;


export function createReactNativeDocumentInstanceHandle(containerTag) {
  return containerTag;
}
export function getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(target) {
  return target;
}
export function getPublicInstanceFromReactNativeDocumentInstanceHandle(element) {
  const obj = renderElementAll;
  return obj.getPublicInstanceFromRootTag(Number(element));
}
export function isReactNativeDocumentInstanceHandle(element) {
  let tmp = typeof element === "number";
  if (typeof element === "number") {
    tmp = element % 10 === 1;
  }
  return tmp;
}
