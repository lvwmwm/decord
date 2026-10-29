// Module ID: 11328
// Function ID: 11329
// Name: useMessagePreviewHeight
// Dependencies: [570, 558, 1271, 2]
// Exports: setMesssagePreviewCollapsedHeight, setMesssagePreviewExpandedHeight, setMesssagePreviewHeight, useMessagePreviewCollapsedheight, useMessagePreviewExpandedHeight

// Module 11328 (useMessagePreviewHeight)
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMessagePreviewHeightStore = module_570.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

export { useMessagePreviewHeightStore };
export function useMessagePreviewCollapsedheight() {
  return obj().collapsedHeight;
}
export function useMessagePreviewExpandedHeight() {
  return obj().expandedHeight;
}
export function setMesssagePreviewHeight(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("react-native");
  obj.batchUpdates(() => obj.setState(closure_0));
}
export function setMesssagePreviewCollapsedHeight(collapsedHeight) {
  _require = collapsedHeight;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { collapsedHeight };
    return obj.setState(obj);
  });
}
export function setMesssagePreviewExpandedHeight(expandedHeight) {
  _require = expandedHeight;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { expandedHeight };
    return obj.setState(obj);
  });
}
