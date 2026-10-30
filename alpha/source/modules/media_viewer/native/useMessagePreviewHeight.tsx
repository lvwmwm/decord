// Module ID: 11532
// Function ID: 11533
// Name: useMessagePreviewHeight
// Dependencies: [560, 1260, 2]
// Exports: setMesssagePreviewCollapsedHeight, setMesssagePreviewExpandedHeight, setMesssagePreviewHeight, useMessagePreviewCollapsedheight, useMessagePreviewExpandedHeight

// Module 11532 (useMessagePreviewHeight)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMessagePreviewHeightStore = module_560.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
const result = size.fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

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
