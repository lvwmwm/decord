// Module ID: 11222
// Function ID: 11223
// Name: VoicePanelStateContext
// Dependencies: [19, 11223, 11221, 11224, 7242, 11225, 1627, 11231, 2]

// Module 11222 (VoicePanelStateContext)
import SafeAreaConstants from "SafeAreaConstants" /* 1627 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11224 */;
import VoicePanelCardLayoutManagerDefault from "VoicePanelCardLayoutManager" /* 11225 */;
import VoicePanelPIPHandoffDefault from "VoicePanelPIPHandoff" /* 11231 */;
import react from "react" /* 19 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7242 */;
import size from "module_2" /* 2 */;

let CONTROLS_HEIGHT;
let MorphablePanelModes;
let ReanimatedHelperTypes;
let VoicePanelControlsModes;
let obj2;
let obj3;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ CONTROLS_HEIGHT, VoicePanelControlsModes } = VoicePanelControlsConstants);
const obj = {
  channelId: "context-not-initialized",
  channelType: "ind",
  connected: ReanimatedHelperTypes.createFakeSharedValue(false),
  contentDimensions: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 }),
  controlsSpecs: ReanimatedHelperTypes.createFakeSharedValue(obj2),
  committedMode: ReanimatedHelperTypes.createFakeSharedValue(null),
  dismissPanel() {
    const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
    throw error;
  },
  dockContentSwap: ReanimatedHelperTypes.createFakeSharedValue(0),
  dockEntryProgress: ReanimatedHelperTypes.createFakeSharedValue(1),
  dockHeight: ReanimatedHelperTypes.createFakeSharedValue(0),
  dockJoinMorphOrigin: ReanimatedHelperTypes.createFakeSharedValue(null),
  dockMinimizeProgress: ReanimatedHelperTypes.createFakeSharedValue(0),
  dockPressProgress: ReanimatedHelperTypes.createFakeSharedValue(0),
  dockPressed: ReanimatedHelperTypes.createFakeSharedValue(false),
  dismissToPIPGestureRef: { current: "Array" },
  dragScrolling: ReanimatedHelperTypes.createFakeSharedValue(false),
  focused: ReanimatedHelperTypes.createFakeSharedValue(null),
  generateStateLocker() {
    const error = new Error("VoicePanelContextType.Provider.generateStateLocker: not called within a context provider");
    throw error;
  },
  guildId: null,
  handleDockSheetLayout() {
    const error = new Error("VoicePanelContextType.Provider.handleDockSheetLayout: not called within a context provider");
    throw error;
  },
  hideControls() {
    const error = new Error("VoicePanelContextType.Provider.hideControls: not called within a context provider");
    throw error;
  },
  isCall: null,
  isDockConnected: ReanimatedHelperTypes.createFakeSharedValue(false),
  isDockEnabled: null,
  isDockExpanding: ReanimatedHelperTypes.createFakeSharedValue(true),
  isFocusedVideoZoomed: ReanimatedHelperTypes.createFakeSharedValue(false),
  layoutManager: new VoicePanelCardLayoutManagerDefault("invalid"),
  mode: ReanimatedHelperTypes.createFakeSharedValue(VoicePanelModes.PANEL),
  morphablePanelMode: ReanimatedHelperTypes.createFakeSharedValue(MorphablePanelModes.PANEL),
  mountedCards: new Set(),
  pipAvoidanceSpecs: ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 }),
  preJoinContentSize: ReanimatedHelperTypes.createFakeSharedValue(0),
  refreshIdleTimeout() {
    const error = new Error("VoicePanelContextType.Provider.refreshIdleTimeout: not called within a context provider");
    throw error;
  },
  safeArea: ReanimatedHelperTypes.createFakeSharedValue(SafeAreaConstants.EMPTY_SAFE_AREA_INSETS),
  scrollPosition: ReanimatedHelperTypes.createFakeSharedValue(0),
  setControlsMode() {
    const error = new Error("VoicePanelContextType.Provider.setControlsMode: not called within a context provider");
    throw error;
  },
  setFocused() {
    const error = new Error("VoicePanelContextType.Provider.setFocused: not called within a context provider");
    throw error;
  },
  setIsFocusedVideoZoomed() {
    const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
    throw error;
  },
  setMode() {
    const error = new Error("VoicePanelContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  setShowFloatingCTA() {
    const error = new Error("VoicePanelContextType.Provider.showFloatingCTA: not called within a context provider");
    throw error;
  },
  sheetExitProgress: ReanimatedHelperTypes.createFakeSharedValue(0),
  showControls() {
    const error = new Error("VoicePanelContextType.Provider.showControls: not called within a context provider");
    throw error;
  },
  showFloatingCTA: ReanimatedHelperTypes.createFakeSharedValue(null),
  streamOutputSinkStack: {},
  windowDimensions: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, landscape: false }),
  wrapperDimensions: ReanimatedHelperTypes.createFakeSharedValue(obj3),
  useReducedMotion: ReanimatedHelperTypes.createFakeSharedValue(false),
  wrapperOffset: ReanimatedHelperTypes.createFakeSharedValue({ gestureActive: false, x: 0, y: 0 }),
  pipHandoff: new VoicePanelPIPHandoffDefault()
};
MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const createContext = react.createContext;
obj2 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: CONTROLS_HEIGHT, pushToTalk: false };
new VoicePanelCardLayoutManagerDefault("invalid");
new Set();
obj3 = { drawerWidth: 0, drawerHeight: 0, drawerX: 0, drawerY: 0, pipX: 0, pipY: 0, animated: true, mode: VoicePanelModes.PANEL };
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
new VoicePanelPIPHandoffDefault();
const context = createContext(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelStateContext.tsx");

export default context;
