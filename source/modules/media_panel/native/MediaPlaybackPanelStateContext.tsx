// Module ID: 15769
// Function ID: 120554
// Name: setMode
// Dependencies: []

// Module 15769 (setMode)
const obj = {};
const importAllResult = importAll(dependencyMap[0]);
obj.mode = arg1(dependencyMap[3]).createFakeSharedValue(arg1(dependencyMap[1]).MediaPlaybackPanelModes.PIP);
obj.setMode = function setMode() {
  const error = new Error("MediaPlaybackPanelModes.Provider.setMode: not called within a context provider");
  throw error;
};
const obj3 = arg1(dependencyMap[3]);
obj.morphablePanelMode = arg1(dependencyMap[3]).createFakeSharedValue(arg1(dependencyMap[2]).MorphablePanelModes.PIP);
const obj4 = arg1(dependencyMap[3]);
obj.wrapperDimensions = arg1(dependencyMap[3]).createFakeSharedValue({ bhk: -536870861, bic: -299892737 });
const obj5 = arg1(dependencyMap[3]);
obj.useReducedMotion = arg1(dependencyMap[3]).createFakeSharedValue(false);
const obj6 = arg1(dependencyMap[3]);
obj.pipState = arg1(dependencyMap[3]).createFakeSharedValue({ max: false, guildId: false });
const obj7 = arg1(dependencyMap[3]);
obj.pipAvoidanceSpecs = arg1(dependencyMap[3]).createFakeSharedValue({ <string:2958189153>: -536870861, <string:1661207664>: -299892737 });
obj.dismissToPipGestureRef = { current: undefined };
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
const obj8 = arg1(dependencyMap[3]);
obj.scrollPosition = require("module_0");
const obj9 = arg1(dependencyMap[3]);
obj.canShowPIP = arg1(dependencyMap[3]).createFakeSharedValue(true);
const obj10 = arg1(dependencyMap[3]);
obj.lockScrolling = arg1(dependencyMap[3]).createFakeSharedValue(false);
const obj11 = arg1(dependencyMap[3]);
obj.wrapperOffset = arg1(dependencyMap[3]).createFakeSharedValue({});
const context = importAllResult.createContext(obj);
const obj12 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelStateContext.tsx");

export default context;
