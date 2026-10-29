// Module ID: 281
// Function ID: 282
// Dependencies: [140, 143, 151, 114]
// Exports: createPublicInstance, createPublicRootInstance, createPublicTextInstance, getInternalInstanceHandleFromPublicInstance, getNativeTagFromPublicInstance, getNodeFromPublicInstance

// Module 281
import renderElementAll from "renderElement" /* 114 */;
import _mod140 from "module_140" /* 140 */;
import _modDef143 from "module_143" /* 143 */;
import _modDef151 from "module_151" /* 151 */;


export function createPublicRootInstance(containerTag) {
  const obj = _mod140;
  return obj.createReactNativeDocument(containerTag);
}
export function createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, publicRootInstance) {
  const tmp = new _modDef143(nativeTag, viewConfig, internalInstanceHandle, publicRootInstance);
  return tmp;
}
export function createPublicTextInstance(stateNode, arg1) {
  const tmp = new _modDef151(stateNode, arg1);
  return tmp;
}
export function getNativeTagFromPublicInstance(hostInstance) {
  return hostInstance.__nativeTag;
}
export function getNodeFromPublicInstance(instance) {
  let nodeFromInternalInstanceHandle = null;
  if (null != instance.__internalInstanceHandle) {
    const obj = renderElementAll;
    nodeFromInternalInstanceHandle = obj.getNodeFromInternalInstanceHandle(instance.__internalInstanceHandle);
  }
  return nodeFromInternalInstanceHandle;
}
export function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return null != _internalInstanceHandle._internalInstanceHandle ? _internalInstanceHandle._internalInstanceHandle : _internalInstanceHandle.__internalInstanceHandle;
}
