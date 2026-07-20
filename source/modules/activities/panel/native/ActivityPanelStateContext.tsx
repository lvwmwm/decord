// Module ID: 15562
// Function ID: 118766
// Name: useActivityWebViewLock
// Dependencies: [0, 0, 0, 0]

// Module 15562 (useActivityWebViewLock)
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
  wrapperDimensions: { flex: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", alignItems: null, paddingTop: null, paddingBottom: true }
};
obj.pipState = result.createFakeSharedValue({ "Null": false, "Null": false });
obj.pipAvoidanceSpecs = result.createFakeSharedValue({ "Bool(false)": false, "Bool(false)": true });
obj.wrapperOffset = result.createFakeSharedValue({});
obj.useActivityWebViewLock = function useActivityWebViewLock() {
  return true;
};
const context = require("result").createContext(obj);
result = result.fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;
