// Module ID: 15156
// Function ID: 15157
// Name: context
// Dependencies: [19, 5427, 8012, 2]

// Module 15156 (context)
import importAllResult from "noop";
import { Gesture } from "LegacyBaseButton";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";

const obj = { gesture: null, disallowGesture: null, translateX: null };
obj[0] = Gesture.Pan();
obj[1] = createFakeSharedValue.createFakeSharedValue(false);
obj[2] = require("noop");
const context = importAllResult.createContext(obj);
const context1 = importAllResult.createContext(undefined);
const result = require("createFakeSharedValue").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;
