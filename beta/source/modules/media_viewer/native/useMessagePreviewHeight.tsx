// Module ID: 11656
// Function ID: 11657
// Name: useMessagePreviewHeight
// Dependencies: [562, 558, 1252, 2]
// Exports: setMesssagePreviewCollapsedHeight, setMesssagePreviewExpandedHeight, setMesssagePreviewHeight, useMessagePreviewCollapsedheight, useMessagePreviewExpandedHeight

// Module 11656 (useMessagePreviewHeight)
import module_562 from "module_562" /* 562 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMessagePreviewHeightStore = module_562.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

export { useMessagePreviewHeightStore };
export const useMessagePreviewCollapsedheight = () => obj().collapsedHeight;
export const useMessagePreviewExpandedHeight = () => obj().expandedHeight;
export const setMesssagePreviewHeight = function setMesssagePreviewHeight(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(closure_0));
};
export const setMesssagePreviewCollapsedHeight = function setMesssagePreviewCollapsedHeight(collapsedHeight) {
  _require = collapsedHeight;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { collapsedHeight };
    return obj.setState(obj);
  });
};
export const setMesssagePreviewExpandedHeight = function setMesssagePreviewExpandedHeight(expandedHeight) {
  _require = expandedHeight;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { expandedHeight };
    return obj.setState(obj);
  });
};
