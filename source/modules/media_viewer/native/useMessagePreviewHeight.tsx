// Module ID: 10887
// Function ID: 84535
// Name: useMessagePreviewHeightStore
// Dependencies: [621, 682, 2]
// Exports: setMesssagePreviewCollapsedHeight, setMesssagePreviewExpandedHeight, setMesssagePreviewHeight, useMessagePreviewCollapsedheight, useMessagePreviewExpandedHeight

// Module 10887 (useMessagePreviewHeightStore)
import keys from "keys";

const obj = keys.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
const result = require("set").fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

export const useMessagePreviewHeightStore = obj;
export const useMessagePreviewCollapsedheight = function useMessagePreviewCollapsedheight() {
  return obj().collapsedHeight;
};
export const useMessagePreviewExpandedHeight = function useMessagePreviewExpandedHeight() {
  return obj().expandedHeight;
};
export const setMesssagePreviewHeight = function setMesssagePreviewHeight(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_2.setState(closure_0));
};
export const setMesssagePreviewCollapsedHeight = function setMesssagePreviewCollapsedHeight(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_2.setState({ collapsedHeight: closure_0 }));
};
export const setMesssagePreviewExpandedHeight = function setMesssagePreviewExpandedHeight(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_2.setState({ expandedHeight: closure_0 }));
};
