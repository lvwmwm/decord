// Module ID: 11537
// Function ID: 11538
// Name: useMessagePreviewHeightStore
// Dependencies: [560, 1249, 2]
// Exports: setMesssagePreviewCollapsedHeight, setMesssagePreviewExpandedHeight, setMesssagePreviewHeight, useMessagePreviewCollapsedheight, useMessagePreviewExpandedHeight

// Module 11537 (useMessagePreviewHeightStore)
import set from "set" /* 2 */;
import keys from "keys" /* 560 */;

const obj = keys.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
const result = set.fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

export const useMessagePreviewHeightStore = obj;
export const useMessagePreviewCollapsedheight = function useMessagePreviewCollapsedheight() {
  return obj().collapsedHeight;
};
export const useMessagePreviewExpandedHeight = function useMessagePreviewExpandedHeight() {
  return obj().expandedHeight;
};
export const setMesssagePreviewHeight = function setMesssagePreviewHeight(arg0) {
  const _require = arg0;
  _require(1249).batchUpdates(() => closure_1_2.setState(closure_0));
};
export const setMesssagePreviewCollapsedHeight = function setMesssagePreviewCollapsedHeight(arg0) {
  const _require = arg0;
  _require(1249).batchUpdates(() => closure_1_2.setState({ collapsedHeight: closure_0 }));
};
export const setMesssagePreviewExpandedHeight = function setMesssagePreviewExpandedHeight(arg0) {
  const _require = arg0;
  _require(1249).batchUpdates(() => closure_1_2.setState({ expandedHeight: closure_0 }));
};
