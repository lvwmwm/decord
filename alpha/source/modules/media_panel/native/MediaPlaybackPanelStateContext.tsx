// Module ID: 19445
// Function ID: 19446
// Name: MediaPlaybackPanelStateContext
// Dependencies: [19, 15709, 11711, 7361, 2]

// Module 19445 (MediaPlaybackPanelStateContext)
import MorphablePanelConstants from "MorphablePanelConstants" /* 11711 */;
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants" /* 15709 */;
import react from "react" /* 19 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7361 */;
import size from "module_2" /* 2 */;

let MorphablePanelModes;
let ReanimatedHelperTypes;
const MediaPlaybackPanelModes = MediaPlaybackPanelConstants.MediaPlaybackPanelModes;
const obj = {
  mode: ReanimatedHelperTypes.createFakeSharedValue(MediaPlaybackPanelModes.PIP),
  setMode() {
    const error = new Error("MediaPlaybackPanelModes.Provider.setMode: not called within a context provider");
    throw error;
  },
  morphablePanelMode: ReanimatedHelperTypes.createFakeSharedValue(MorphablePanelModes.PIP),
  wrapperDimensions: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0 }),
  useReducedMotion: ReanimatedHelperTypes.createFakeSharedValue(false),
  pipState: ReanimatedHelperTypes.createFakeSharedValue({ x: -1, y: -1 }),
  pipAvoidanceSpecs: ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 }),
  dismissToPipGestureRef: { current: "find" },
  dismissPanel() {
    const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
    throw error;
  },
  scrollPosition: ReanimatedHelperTypes.createFakeSharedValue(0),
  canShowPIP: ReanimatedHelperTypes.createFakeSharedValue(true),
  lockScrolling: ReanimatedHelperTypes.createFakeSharedValue(false),
  wrapperOffset: ReanimatedHelperTypes.createFakeSharedValue({ x: 0, y: 0, gestureActive: false })
};
MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(obj);
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelStateContext.tsx");

export default context;
