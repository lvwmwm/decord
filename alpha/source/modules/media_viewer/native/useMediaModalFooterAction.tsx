// Module ID: 14112
// Function ID: 14113
// Name: useMediaModalFooterAction
// Dependencies: [570, 1274, 2]
// Exports: clearMediaModalFooterAction, setMediaModalFooterAction

// Module 14112 (useMediaModalFooterAction)
import react_native from "react-native" /* 1274 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMediaModalFooterActionStore = module_570.create(() => ({}));
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export { useMediaModalFooterActionStore };
export const setMediaModalFooterAction = function setMediaModalFooterAction(footerAction) {
  _require = footerAction;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { footerAction };
    return obj.setState(obj);
  });
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => state.setState({ footerAction: "r" }));
};
