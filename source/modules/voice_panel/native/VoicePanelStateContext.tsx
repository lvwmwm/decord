// Module ID: 10046
// Function ID: 77573
// Name: dismissPanel
// Dependencies: [31, 10047, 10045, 10048, 7679, 10049, 1559, 2]

// Module 10046 (dismissPanel)
import { VoicePanelModes } from "VoicePanelModes";
import VoicePanelControlsModes from "VoicePanelControlsModes";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import importDefaultResult from "_createForOfIteratorHelperLoose";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import set from "VoicePanelControlsModes";

let CONTROLS_HEIGHT;
let VoicePanelControlsModes;
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsModes);
let obj = { channelId: "context-not-initialized", channelType: undefined };
obj.connected = createFakeSharedValue.createFakeSharedValue(false);
obj.contentDimensions = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0 });
obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false };
obj.controlsSpecs = createFakeSharedValue.createFakeSharedValue(obj);
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
obj.dismissToPIPGestureRef = { current: undefined };
obj.dragScrolling = createFakeSharedValue.createFakeSharedValue(false);
obj.focused = createFakeSharedValue.createFakeSharedValue(null);
obj.generateStateLocker = function generateStateLocker(closure_0) {
  const error = new Error("VoicePanelContextType.Provider.generateStateLocker: not called within a context provider");
  throw error;
};
obj.guildId = undefined;
obj.hideControls = function hideControls() {
  const error = new Error("VoicePanelContextType.Provider.hideControls: not called within a context provider");
  throw error;
};
obj.isCall = false;
obj.isFocusedVideoZoomed = createFakeSharedValue.createFakeSharedValue(false);
importDefaultResult = new importDefaultResult("invalid");
obj.layoutManager = importDefaultResult;
obj.mode = createFakeSharedValue.createFakeSharedValue(VoicePanelModes.PANEL);
obj.morphablePanelMode = createFakeSharedValue.createFakeSharedValue(require("MIN_PAN_GESTURE_MOVE").MorphablePanelModes.PANEL);
let set = new Set();
obj.mountedCards = set;
obj.pipAvoidanceSpecs = createFakeSharedValue.createFakeSharedValue({ top: 0, bottom: 0 });
obj.preJoinContentSize = require("result");
obj.safeArea = createFakeSharedValue.createFakeSharedValue(require("EMPTY_SAFE_AREA_INSETS").EMPTY_SAFE_AREA_INSETS);
obj.scrollPosition = require("result");
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
obj.showControls = function showControls() {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
obj.showFloatingCTA = createFakeSharedValue.createFakeSharedValue(null);
obj.streamOutputSinkStack = {};
obj.windowDimensions = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0, landscape: false });
const obj1 = { drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL };
obj.wrapperDimensions = createFakeSharedValue.createFakeSharedValue(obj1);
obj.useReducedMotion = createFakeSharedValue.createFakeSharedValue(false);
obj.wrapperOffset = createFakeSharedValue.createFakeSharedValue({ gestureActive: false, x: 0, y: 0 });
obj.panelCardStillInPIP = createFakeSharedValue.createFakeSharedValue(false);
const context = require("result").createContext(obj);
const result = set.fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;
