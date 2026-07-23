// Module ID: 15697
// Function ID: 121045
// Name: useActivityWebViewLock
// Dependencies: [31, 10226, 7590, 2]

// Module 15697 (useActivityWebViewLock)
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import importAllResult from "result";

const obj = {
  mode: require("ActivityPanelModes").ActivityPanelModes.PANEL,
  setMode() {
    const error = new Error("ActivityPanelStateContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  wrapperDimensions: { width: 9, height: 16, isLandscape: false, isWindowLandscape: false }
};
obj.pipState = createFakeSharedValue.createFakeSharedValue({ x: -1, y: -1 });
obj.pipAvoidanceSpecs = createFakeSharedValue.createFakeSharedValue({ top: 0, bottom: 0 });
obj.wrapperOffset = createFakeSharedValue.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
obj.useActivityWebViewLock = function useActivityWebViewLock() {
  return true;
};
const context = require("result").createContext(obj);
const result = require("createFakeSharedValue").fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;
