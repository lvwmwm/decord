// Module ID: 14680
// Function ID: 110682
// Name: context
// Dependencies: []

// Module 14680 (context)
const importAllResult = importAll(dependencyMap[0]);
const obj = {};
const Gesture = arg1(dependencyMap[1]).Gesture;
obj.gesture = Gesture.Pan();
obj.disallowGesture = arg1(dependencyMap[2]).createFakeSharedValue(false);
const obj3 = arg1(dependencyMap[2]);
obj.translateX = require("module_0");
const context = importAllResult.createContext(obj);
const context1 = importAllResult.createContext(undefined);
const obj4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx");

export default context;
export const MainTabsChannelScreenStackContext = context1;
