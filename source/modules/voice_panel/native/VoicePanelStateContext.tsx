// Module ID: 10006
// Function ID: 77339
// Name: dismissPanel
// Dependencies: []

// Module 10006 (dismissPanel)
let CONTROLS_HEIGHT;
let VoicePanelControlsModes;
const VoicePanelModes = arg1(dependencyMap[1]).VoicePanelModes;
const importAllResult = importAll(dependencyMap[0]);
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = arg1(dependencyMap[2]));
let obj = { channelId: "context-not-initialized", channelType: undefined };
const tmp2 = arg1(dependencyMap[2]);
obj.connected = arg1(dependencyMap[4]).createFakeSharedValue(false);
const obj3 = arg1(dependencyMap[4]);
obj.contentDimensions = arg1(dependencyMap[4]).createFakeSharedValue({ "Null": "%FunctionPrototype%", "Null": "paddingStart" });
const obj4 = arg1(dependencyMap[4]);
obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false };
obj.controlsSpecs = arg1(dependencyMap[4]).createFakeSharedValue(obj);
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
obj.dismissToPIPGestureRef = { current: undefined };
const obj5 = arg1(dependencyMap[4]);
obj.dragScrolling = arg1(dependencyMap[4]).createFakeSharedValue(false);
const obj7 = arg1(dependencyMap[4]);
obj.focused = arg1(dependencyMap[4]).createFakeSharedValue(null);
obj.generateStateLocker = function generateStateLocker(arg0) {
  const error = new Error("VoicePanelContextType.Provider.generateStateLocker: not called within a context provider");
  throw error;
};
obj.guildId = undefined;
obj.hideControls = function hideControls() {
  const error = new Error("VoicePanelContextType.Provider.hideControls: not called within a context provider");
  throw error;
};
obj.isCall = false;
const obj8 = arg1(dependencyMap[4]);
obj.isFocusedVideoZoomed = arg1(dependencyMap[4]).createFakeSharedValue(false);
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("invalid");
obj.layoutManager = importDefaultResult;
const obj9 = arg1(dependencyMap[4]);
obj.mode = arg1(dependencyMap[4]).createFakeSharedValue(VoicePanelModes.PANEL);
const obj10 = arg1(dependencyMap[4]);
obj.morphablePanelMode = arg1(dependencyMap[4]).createFakeSharedValue(arg1(dependencyMap[3]).MorphablePanelModes.PANEL);
const obj11 = arg1(dependencyMap[4]);
obj.mountedCards = new Set();
const set = new Set();
obj.pipAvoidanceSpecs = arg1(dependencyMap[4]).createFakeSharedValue({ "Null": "%FunctionPrototype%", "Null": "paddingStart" });
const obj12 = arg1(dependencyMap[4]);
obj.preJoinContentSize = require("module_0");
const obj13 = arg1(dependencyMap[4]);
obj.safeArea = arg1(dependencyMap[4]).createFakeSharedValue(arg1(dependencyMap[6]).EMPTY_SAFE_AREA_INSETS);
const obj14 = arg1(dependencyMap[4]);
obj.scrollPosition = require("module_0");
obj.setControlsMode = function setControlsMode() {
  const error = new Error("VoicePanelContextType.Provider.setControlsMode: not called within a context provider");
  throw error;
};
obj.setFocused = function setFocused() {
  const error = new Error("VoicePanelContextType.Provider.setFocused: not called within a context provider");
  throw error;
};
obj.setIsFocusedVideoZoomed = function setIsFocusedVideoZoomed(arg0) {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
obj.setMode = function setMode() {
  const error = new Error("VoicePanelContextType.Provider.setMode: not called within a context provider");
  throw error;
};
obj.setShowFloatingCTA = function setShowFloatingCTA(BAD_CONNECTION) {
  const error = new Error("VoicePanelContextType.Provider.showFloatingCTA: not called within a context provider");
  throw error;
};
obj.showControls = function showControls(arg0) {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
const obj15 = arg1(dependencyMap[4]);
obj.showFloatingCTA = arg1(dependencyMap[4]).createFakeSharedValue(null);
obj.streamOutputSinkStack = {};
const obj16 = arg1(dependencyMap[4]);
obj.windowDimensions = arg1(dependencyMap[4]).createFakeSharedValue({});
const obj17 = arg1(dependencyMap[4]);
const obj1 = { <string:1654717400>: true, <string:1655395932>: true, <string:1162977531>: true, <string:1446666757>: true, <string:1636042321>: true, <string:1895911739>: true, <string:1621778771>: true, mode: VoicePanelModes.PANEL };
obj.wrapperDimensions = arg1(dependencyMap[4]).createFakeSharedValue(obj1);
const obj18 = arg1(dependencyMap[4]);
obj.useReducedMotion = arg1(dependencyMap[4]).createFakeSharedValue(false);
const obj20 = arg1(dependencyMap[4]);
obj.wrapperOffset = arg1(dependencyMap[4]).createFakeSharedValue({ progressViewOffset: true, refreshing: true, id: true });
const obj21 = arg1(dependencyMap[4]);
obj.panelCardStillInPIP = arg1(dependencyMap[4]).createFakeSharedValue(false);
const context = importAllResult.createContext(obj);
const obj22 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;
