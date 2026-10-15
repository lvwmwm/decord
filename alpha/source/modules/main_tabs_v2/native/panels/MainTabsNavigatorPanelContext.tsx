// Module ID: 11613
// Function ID: 11614
// Name: MainTabsNavigatorPanelContext
// Dependencies: [19, 6555, 6983, 2]

// Module 11613 (MainTabsNavigatorPanelContext)
import LegacyBaseButton from "LegacyBaseButton" /* 6555 */;
import react from "react" /* 19 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6983 */;
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
