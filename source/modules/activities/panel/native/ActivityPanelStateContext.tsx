// Module ID: 15580
// Function ID: 118872
// Name: useActivityWebViewLock
// Dependencies: [0, 0, 0, 0]

// Module 15580 (useActivityWebViewLock)
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

const obj = {
  mode: require("__exportStarResult1").ActivityPanelModes.PANEL,
  setMode() {
    const error = new Error("ActivityPanelStateContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  wrapperDimensions: { <string:2225500021>: 3000, <string:979535012>: true, <string:1927631446>: "/assets/images/native/icons/user_profile", <string:996373222>: 24 }
};
obj.pipState = __exportStarResult1.createFakeSharedValue({ 0: "pow", 0: "decorationCutout" });
obj.pipAvoidanceSpecs = __exportStarResult1.createFakeSharedValue({ "Null": "%FunctionPrototype%", "Null": "paddingStart" });
obj.wrapperOffset = __exportStarResult1.createFakeSharedValue({});
obj.useActivityWebViewLock = function useActivityWebViewLock() {
  return true;
};
const context = require("__exportStarResult1").createContext(obj);
const result = __exportStarResult1.fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;
