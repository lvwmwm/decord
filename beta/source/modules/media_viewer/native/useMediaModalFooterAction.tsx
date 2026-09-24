// Module ID: 11669
// Function ID: 11670
// Name: useMediaModalFooterAction
// Dependencies: [562, 1252, 2]
// Exports: clearMediaModalFooterAction, setMediaModalFooterAction

// Module 11669 (useMediaModalFooterAction)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1252 */;
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMediaModalFooterActionStore = module_562.create(() => ({}));
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
  ReactBatchUpdates.batchUpdates(() => state.setState({ footerAction: "emoji" }));
};
