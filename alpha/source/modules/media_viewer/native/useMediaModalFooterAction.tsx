// Module ID: 10732
// Function ID: 10733
// Name: useMediaModalFooterAction
// Dependencies: [560, 1248, 2]
// Exports: clearMediaModalFooterAction, setMediaModalFooterAction

// Module 10732 (useMediaModalFooterAction)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
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
  ReactBatchUpdates.batchUpdates(() => state.setState({ footerAction: "__initData" }));
};
