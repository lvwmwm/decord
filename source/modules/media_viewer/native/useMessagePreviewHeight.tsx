// Module ID: 10849
// Function ID: 84284
// Name: useMessagePreviewHeightStore
// Dependencies: []
// Exports: setMesssagePreviewCollapsedHeight, setMesssagePreviewExpandedHeight, setMesssagePreviewHeight, useMessagePreviewCollapsedheight, useMessagePreviewExpandedHeight

// Module 10849 (useMessagePreviewHeightStore)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({}));
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

export const useMessagePreviewHeightStore = obj;
export const useMessagePreviewCollapsedheight = function useMessagePreviewCollapsedheight() {
  return obj().collapsedHeight;
};
export const useMessagePreviewExpandedHeight = function useMessagePreviewExpandedHeight() {
  return obj().expandedHeight;
};
export const setMesssagePreviewHeight = function setMesssagePreviewHeight(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState(arg0));
};
export const setMesssagePreviewCollapsedHeight = function setMesssagePreviewCollapsedHeight(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState({ collapsedHeight: arg0 }));
};
export const setMesssagePreviewExpandedHeight = function setMesssagePreviewExpandedHeight(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState({ expandedHeight: arg0 }));
};
