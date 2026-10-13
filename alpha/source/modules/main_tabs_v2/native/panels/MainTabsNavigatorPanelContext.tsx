// Module ID: 11381
// Function ID: 11382
// Name: MainTabsNavigatorPanelContext
// Dependencies: [19, 6335, 6763, 2]

// Module 11381 (MainTabsNavigatorPanelContext)
import LegacyBaseButton from "LegacyBaseButton" /* 6335 */;
import react from "react" /* 19 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6763 */;
import size from "module_2" /* 2 */;

let Gesture;
let ReanimatedHelperTypes;
const obj = { gesture: Gesture.Pan(), disallowGesture: ReanimatedHelperTypes.createFakeSharedValue(false), translateX: ReanimatedHelperTypes.createFakeSharedValue(0) };
Gesture = LegacyBaseButton.Gesture;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = react.createContext(obj);
const context1 = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;
