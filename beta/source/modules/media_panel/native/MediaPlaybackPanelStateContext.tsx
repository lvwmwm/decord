// Module ID: 17656
// Function ID: 17657
// Name: MediaPlaybackPanelStateContext
// Dependencies: [19, 14820, 12421, 7321, 2]

// Module 17656 (MediaPlaybackPanelStateContext)
import noop from "module_19" /* 19 */;

const obj = { mode: null, setMode: null, morphablePanelMode: null, wrapperDimensions: null, useReducedMotion: null, pipState: null, pipAvoidanceSpecs: null, dismissToPipGestureRef: null, dismissPanel: null, scrollPosition: null, canShowPIP: null, lockScrolling: null, wrapperOffset: null };
let ReanimatedHelperTypes = fn(7321);
obj.mode = ReanimatedHelperTypes.createFakeSharedValue(fn(14820).MediaPlaybackPanelModes.PIP);
obj.setMode = function setMode() {
  const error = new Error("MediaPlaybackPanelModes.Provider.setMode: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7321);
obj.morphablePanelMode = ReanimatedHelperTypes.createFakeSharedValue(fn(12421).MorphablePanelModes.PIP);
ReanimatedHelperTypes = fn(7321);
obj.wrapperDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 });
ReanimatedHelperTypes = fn(7321);
obj.useReducedMotion = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7321);
obj.pipState = ReanimatedHelperTypes.createFakeSharedValue({ x: -1, y: -1 });
ReanimatedHelperTypes = fn(7321);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
obj.dismissToPipGestureRef = { current: "emoji" };
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
ReanimatedHelperTypes = fn(7321);
obj.scrollPosition = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7321);
obj.canShowPIP = ReanimatedHelperTypes.createFakeSharedValue(true);
ReanimatedHelperTypes = fn(7321);
obj.lockScrolling = ReanimatedHelperTypes.createFakeSharedValue(false);
ReanimatedHelperTypes = fn(7321);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelStateContext.tsx");

export default context;
