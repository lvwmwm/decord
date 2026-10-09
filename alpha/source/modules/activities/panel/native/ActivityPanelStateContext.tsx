// Module ID: 17630
// Function ID: 17631
// Name: ActivityPanelStateContext
// Dependencies: [19, 6074, 6761, 2]

// Module 17630 (ActivityPanelStateContext)
import ActivityPanelConstants from "ActivityPanelConstants" /* 6074 */;
import react from "react" /* 19 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6761 */;
import size from "module_2" /* 2 */;

let ReanimatedHelperTypes;
const obj = {
  mode: ActivityPanelConstants.ActivityPanelModes.PANEL,
  setMode() {
    const error = new Error("ActivityPanelStateContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  wrapperDimensions: { width: 9, height: 16, isLandscape: false, isWindowLandscape: false },
  pipState: ReanimatedHelperTypes.createFakeSharedValue({ x: -1, y: -1 }),
  pipAvoidanceSpecs: ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 }),
  wrapperOffset: ReanimatedHelperTypes.createFakeSharedValue({ x: 0, y: 0, gestureActive: false }),
  useActivityWebViewLock() {
    return true;
  }
};
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = react.createContext(obj);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;
