// Module ID: 10702
// Function ID: 10703
// Name: useMediaModalFooterActionStore
// Dependencies: [644, 705, 2]
// Exports: clearMediaModalFooterAction, setMediaModalFooterAction

// Module 10702 (useMediaModalFooterActionStore)
import keys from "keys";

const obj = keys.create(() => ({}));
const result = require("set").fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export const useMediaModalFooterActionStore = obj;
export const setMediaModalFooterAction = function setMediaModalFooterAction(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => outer1_2.setState({ footerAction: closure_0 }));
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  require(705) /* batchUpdates */.batchUpdates(() => state.setState({ footerAction: "r" }));
};
