// Module ID: 16624
// Function ID: 16625
// Name: MainTabsNavigatorPanelContext
// Dependencies: [19, 6326, 6754, 2]

// Module 16624 (MainTabsNavigatorPanelContext)
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import react from "react" /* 19 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6754 */;
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
