// Module ID: 118
// Function ID: 1626
// Name: renderElement
// Dependencies: [31, 119, 275, 276]
// Exports: dispatchCommand, findHostInstance_DEPRECATED, findNodeHandle, getNodeFromInternalInstanceHandle, getPublicInstanceFromInternalInstanceHandle, getPublicInstanceFromRootTag, isChildPublicInstance, isProfilingRenderer, renderElement, sendAccessibilityEvent, unmountComponentAtNodeAndRemoveContainer, unstable_batchedUpdates

// Module 118 (renderElement)
import "result";

const require = arg1;

export const renderElement = function renderElement(useFabric) {
  let element;
  let rootTag;
  let useConcurrentRoot;
  ({ element, rootTag, useConcurrentRoot } = useFabric);
  if (useFabric.useFabric) {
    const _default2 = tmp(119).default;
    let obj = { onCaughtError: tmp(275).onCaughtError, onUncaughtError: tmp(275).onUncaughtError, onRecoverableError: tmp(275).onRecoverableError };
    _default2.render(element, rootTag, null, useConcurrentRoot, obj);
  } else {
    const _default = tmp(276).default;
    obj = { onCaughtError: tmp(275).onCaughtError, onUncaughtError: tmp(275).onUncaughtError, onRecoverableError: tmp(275).onRecoverableError };
    _default.render(element, rootTag, undefined, obj);
  }
};
export const findHostInstance_DEPRECATED = function findHostInstance_DEPRECATED(arg0) {
  return require(276).default.findHostInstance_DEPRECATED(arg0);
};
export const findNodeHandle = function findNodeHandle(arg0) {
  return require(276).default.findNodeHandle(arg0);
};
export const dispatchCommand = function dispatchCommand(nodeFromPublicInstance, blur, items) {
  if (true === global.RN$Bridgeless) {
    let dispatchCommandResult = require(119) /* ReactFabric */.default.dispatchCommand(nodeFromPublicInstance, blur, items);
    const _default2 = require(119) /* ReactFabric */.default;
  } else {
    dispatchCommandResult = require(276).default.dispatchCommand(nodeFromPublicInstance, blur, items);
    const _default = require(276).default;
  }
  return dispatchCommandResult;
};
export const sendAccessibilityEvent = function sendAccessibilityEvent(arg0, arg1) {
  return require(276).default.sendAccessibilityEvent(arg0, arg1);
};
export const unmountComponentAtNodeAndRemoveContainer = function unmountComponentAtNodeAndRemoveContainer(arg0) {
  const result = require(276).default.unmountComponentAtNodeAndRemoveContainer(arg0);
};
export const unstable_batchedUpdates = function unstable_batchedUpdates(arg0, arg1) {
  return require(276).default.unstable_batchedUpdates(arg0, arg1);
};
export const isProfilingRenderer = function isProfilingRenderer() {
  return Boolean(false);
};
export const isChildPublicInstance = function isChildPublicInstance(arg0, arg1) {
  return require(276).default.isChildPublicInstance(arg0, arg1);
};
export const getNodeFromInternalInstanceHandle = function getNodeFromInternalInstanceHandle(__internalInstanceHandle) {
  return require(119) /* ReactFabric */.default.getNodeFromInternalInstanceHandle(__internalInstanceHandle);
};
export const getPublicInstanceFromInternalInstanceHandle = function getPublicInstanceFromInternalInstanceHandle(parentNode) {
  return require(119) /* ReactFabric */.default.getPublicInstanceFromInternalInstanceHandle(parentNode);
};
export const getPublicInstanceFromRootTag = function getPublicInstanceFromRootTag(arg0) {
  return require(119) /* ReactFabric */.default.getPublicInstanceFromRootTag(arg0);
};
