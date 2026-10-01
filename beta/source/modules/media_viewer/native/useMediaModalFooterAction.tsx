// Module ID: 10732
// Function ID: 10733
// Name: useMediaModalFooterAction
// Dependencies: [560, 1248, 2]
// Exports: clearMediaModalFooterAction, setMediaModalFooterAction

// Module 10732 (useMediaModalFooterAction)
import react_native from "react-native" /* 1248 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMediaModalFooterActionStore = module_560.create(() => ({}));
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
  obj.batchUpdates(() => state.setState({ footerAction: "Path" }));
};
