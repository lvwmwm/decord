// Module ID: 15572
// Function ID: 118829
// Name: useActivityWebViewLock
// Dependencies: [0, 0, 0, 0]

// Module 15572 (useActivityWebViewLock)
import result from "result";
import result from "result";
import result from "result";
import result from "result";

const obj = {
  mode: require("result").ActivityPanelModes.PANEL,
  setMode() {
    const error = new Error("ActivityPanelStateContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  wrapperDimensions: { "Null": 3000, "Null": true, "Null": "/assets/images/native/icons/user_profile", "Null": 24 }
};
obj.pipState = result.createFakeSharedValue({});
obj.pipAvoidanceSpecs = result.createFakeSharedValue({ paddingVertical: -536870861, paddingHorizontal: -299892737 });
obj.wrapperOffset = result.createFakeSharedValue({});
obj.useActivityWebViewLock = function useActivityWebViewLock() {
  return true;
};
const context = require("result").createContext(obj);
result = result.fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;
