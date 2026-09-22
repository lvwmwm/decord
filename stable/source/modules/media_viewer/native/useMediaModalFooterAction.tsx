// Module ID: 11646
// Function ID: 11647
// Name: useMediaModalFooterAction
// Dependencies: [560, 1247, 2]
// Exports: clearMediaModalFooterAction, setMediaModalFooterAction

// Module 11646 (useMediaModalFooterAction)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1247 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMediaModalFooterActionStore = module_560.create(() => ({}));
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export { useMediaModalFooterActionStore };
export const setMediaModalFooterAction = function setMediaModalFooterAction(footerAction) {
  _require = footerAction;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { footerAction };
    return obj.setState(obj);
  });
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  ReactBatchUpdates.batchUpdates(() => state.setState({ footerAction: "r" }));
};
