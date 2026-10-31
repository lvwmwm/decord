// Module ID: 14660
// Function ID: 14661
// Name: useMediaModalFooterAction
// Dependencies: [560, 1259, 2]
// Exports: clearMediaModalFooterAction, setMediaModalFooterAction

// Module 14660 (useMediaModalFooterAction)
import react_native from "react-native" /* 1259 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMediaModalFooterActionStore = module_560.create(() => ({}));
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export { useMediaModalFooterActionStore };
export function setMediaModalFooterAction(footerAction) {
  _require = footerAction;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { footerAction };
    return obj.setState(obj);
  });
}
export function clearMediaModalFooterAction() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => state.setState({ footerAction: "Array" }));
}
