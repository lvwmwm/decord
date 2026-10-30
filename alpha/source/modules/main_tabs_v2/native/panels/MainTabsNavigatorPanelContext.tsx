// Module ID: 12056
// Function ID: 12057
// Name: MainTabsNavigatorPanelContext
// Dependencies: [19, 5298, 7236, 2]

// Module 12056 (MainTabsNavigatorPanelContext)
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import react from "react" /* 19 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7236 */;
import size from "module_2" /* 2 */;

let Gesture;
let ReanimatedHelperTypes;
const obj = { gesture: Gesture.Pan(), disallowGesture: ReanimatedHelperTypes.createFakeSharedValue(false), edgeSwipeOnly: ReanimatedHelperTypes.createFakeSharedValue(false), translateX: ReanimatedHelperTypes.createFakeSharedValue(0) };
Gesture = LegacyBaseButton.Gesture;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = react.createContext(obj);
const context1 = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;
