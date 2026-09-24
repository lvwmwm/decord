// Module ID: 12455
// Function ID: 12456
// Name: VoicePanelStateContext
// Dependencies: [19, 12456, 12454, 12457, 7353, 12458, 1618, 12462, 2]

// Module 12455 (VoicePanelStateContext)
import VoicePanelCardLayoutManagerDefault from "VoicePanelCardLayoutManager" /* 12458 */;
import VoicePanelPIPHandoffDefault from "VoicePanelPIPHandoff" /* 12462 */;
import noop from "module_19" /* 19 */;

const VoicePanelModes = fn(12456).VoicePanelModes;
const VoicePanelControlsConstants = fn(12454);
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsConstants);
const obj = { channelId: "context-not-initialized", channelType: "e", connected: "Array", contentDimensions: false, controlsSpecs: null, dismissPanel: null, dismissToPIPGestureRef: null, dragScrolling: null, focused: null, generateStateLocker: null, guildId: null, hideControls: null, isCall: null, isFocusedVideoZoomed: null, layoutManager: null, mode: null, morphablePanelMode: null, mountedCards: null, pipAvoidanceSpecs: null, preJoinContentSize: null, safeArea: null, scrollPosition: null, setControlsMode: null, setFocused: null, setIsFocusedVideoZoomed: null, setMode: null, setShowFloatingCTA: 2007, showControls: null, showFloatingCTA: null, streamOutputSinkStack: false, windowDimensions: null, wrapperDimensions: null, useReducedMotion: null, wrapperOffset: false, pipHandoff: null };
let ReanimatedHelperTypes = fn(7353);
obj.connected = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7353);
obj.contentDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(7353);
obj.controlsSpecs = ReanimatedHelperTypes.createFakeSharedValue({ mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false });
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
obj.dismissToPIPGestureRef = { current: "emoji" };
ReanimatedHelperTypes = fn(7353);
obj.dragScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7353);
obj.focused = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.generateStateLocker = function generateStateLocker() {
  const error = new Error("VoicePanelContextType.Provider.generateStateLocker: not called within a context provider");
  throw error;
};
obj.hideControls = function hideControls() {
  const error = new Error("VoicePanelContextType.Provider.hideControls: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7353);
obj.isFocusedVideoZoomed = ReanimatedHelperTypes.createFakeSharedValue(false);
obj.layoutManager = new VoicePanelCardLayoutManagerDefault("invalid");
ReanimatedHelperTypes = fn(7353);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(VoicePanelModes.PANEL);
ReanimatedHelperTypes = fn(7353);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(12457).MorphablePanelModes.PANEL);
const obj2 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false };
const tmp3 = new VoicePanelCardLayoutManagerDefault("invalid");
obj.mountedCards = new Set();
ReanimatedHelperTypes = fn(7353);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
ReanimatedHelperTypes = fn(7353);
obj.preJoinContentSize = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7353);
obj.safeArea = ReanimatedHelperTypes.createFakeSharedValue(fn(1618).EMPTY_SAFE_AREA_INSETS);
ReanimatedHelperTypes = fn(7353);
obj.scrollPosition = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.setControlsMode = function setControlsMode() {
  const error = new Error("VoicePanelContextType.Provider.setControlsMode: not called within a context provider");
  throw error;
};
obj.setFocused = function setFocused() {
  const error = new Error("VoicePanelContextType.Provider.setFocused: not called within a context provider");
  throw error;
};
obj.setIsFocusedVideoZoomed = function setIsFocusedVideoZoomed() {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
obj.setMode = function setMode() {
  const error = new Error("VoicePanelContextType.Provider.setMode: not called within a context provider");
  throw error;
};
obj.setShowFloatingCTA = function setShowFloatingCTA() {
  const error = new Error("VoicePanelContextType.Provider.showFloatingCTA: not called within a context provider");
  throw error;
};
obj.showControls = function showControls() {
  const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7353);
obj.showFloatingCTA = ReanimatedHelperTypes.createFakeSharedValue(null);
obj.streamOutputSinkStack = {};
ReanimatedHelperTypes = fn(7353);
obj.windowDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, landscape: false });
ReanimatedHelperTypes = fn(7353);
obj.wrapperDimensions = ReanimatedHelperTypes.createFakeSharedValue({ drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL });
ReanimatedHelperTypes = fn(7353);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7353);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ gestureActive: false, x: 0, y: 0 });
const obj6 = { drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL };
const set = new Set();
obj.pipHandoff = new VoicePanelPIPHandoffDefault();
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;
