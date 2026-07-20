// Module ID: 118
// Function ID: 1626
// Name: renderElement
// Dependencies: []
// Exports: dispatchCommand, findHostInstance_DEPRECATED, findNodeHandle, getNodeFromInternalInstanceHandle, getPublicInstanceFromInternalInstanceHandle, getPublicInstanceFromRootTag, isChildPublicInstance, isProfilingRenderer, renderElement, sendAccessibilityEvent, unmountComponentAtNodeAndRemoveContainer, unstable_batchedUpdates

// Module 118 (renderElement)
importAll(dependencyMap[0]);

export const renderElement = function renderElement(useFabric) {
  let element;
  let rootTag;
  let useConcurrentRoot;
  ({ element, rootTag, useConcurrentRoot } = useFabric);
  if (useFabric.useFabric) {
    const _default2 = tmp(tmp2[1]).default;
    let obj = { onCaughtError: tmp(tmp2[2]).onCaughtError, onUncaughtError: tmp(tmp2[2]).onUncaughtError, onRecoverableError: tmp(tmp2[2]).onRecoverableError };
    _default2.render(element, rootTag, null, useConcurrentRoot, obj);
  } else {
    const _default = tmp(tmp2[3]).default;
    obj = { onCaughtError: tmp(tmp2[2]).onCaughtError, onUncaughtError: tmp(tmp2[2]).onUncaughtError, onRecoverableError: tmp(tmp2[2]).onRecoverableError };
    _default.render(element, rootTag, undefined, obj);
  }
};
export const findHostInstance_DEPRECATED = function findHostInstance_DEPRECATED(arg0) {
  return arg1(dependencyMap[3]).default.findHostInstance_DEPRECATED(arg0);
};
export const findNodeHandle = function findNodeHandle(arg0) {
  return arg1(dependencyMap[3]).default.findNodeHandle(arg0);
};
export const dispatchCommand = function dispatchCommand(nodeFromPublicInstance, blur, items) {
  if (true === global.RN$Bridgeless) {
    let dispatchCommandResult = blur(dependencyMap[1]).default.dispatchCommand(nodeFromPublicInstance, blur, items);
    const _default2 = blur(dependencyMap[1]).default;
  } else {
    dispatchCommandResult = blur(dependencyMap[3]).default.dispatchCommand(nodeFromPublicInstance, blur, items);
    const _default = blur(dependencyMap[3]).default;
  }
  return dispatchCommandResult;
};
export const sendAccessibilityEvent = function sendAccessibilityEvent(arg0, arg1) {
  return arg1(dependencyMap[3]).default.sendAccessibilityEvent(arg0, arg1);
};
export const unmountComponentAtNodeAndRemoveContainer = function unmountComponentAtNodeAndRemoveContainer(arg0) {
  const result = arg1(dependencyMap[3]).default.unmountComponentAtNodeAndRemoveContainer(arg0);
};
export const unstable_batchedUpdates = function unstable_batchedUpdates(arg0, arg1) {
  return arg1(dependencyMap[3]).default.unstable_batchedUpdates(arg0, arg1);
};
export const isProfilingRenderer = function isProfilingRenderer() {
  return Boolean(false);
};
export const isChildPublicInstance = function isChildPublicInstance(arg0, arg1) {
  return arg1(dependencyMap[3]).default.isChildPublicInstance(arg0, arg1);
};
export const getNodeFromInternalInstanceHandle = function getNodeFromInternalInstanceHandle(__internalInstanceHandle) {
  return arg1(dependencyMap[1]).default.getNodeFromInternalInstanceHandle(__internalInstanceHandle);
};
export const getPublicInstanceFromInternalInstanceHandle = function getPublicInstanceFromInternalInstanceHandle(parentNode) {
  return arg1(dependencyMap[1]).default.getPublicInstanceFromInternalInstanceHandle(parentNode);
};
export const getPublicInstanceFromRootTag = function getPublicInstanceFromRootTag(arg0) {
  return arg1(dependencyMap[1]).default.getPublicInstanceFromRootTag(arg0);
};
