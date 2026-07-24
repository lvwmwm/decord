// Module ID: 15945
// Function ID: 123136
// Name: setMode
// Dependencies: [31, 13512, 10048, 7679, 2]

// Module 15945 (setMode)
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
import importAllResult from "result";

const obj = {};
obj.mode = createFakeSharedValue.createFakeSharedValue(require("MediaPlaybackPanelModes").MediaPlaybackPanelModes.PIP);
obj.setMode = function setMode() {
  const error = new Error("MediaPlaybackPanelModes.Provider.setMode: not called within a context provider");
  throw error;
};
obj.morphablePanelMode = createFakeSharedValue.createFakeSharedValue(require("MIN_PAN_GESTURE_MOVE").MorphablePanelModes.PIP);
obj.wrapperDimensions = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0 });
obj.useReducedMotion = createFakeSharedValue.createFakeSharedValue(false);
obj.pipState = createFakeSharedValue.createFakeSharedValue({ x: -1, y: -1 });
obj.pipAvoidanceSpecs = createFakeSharedValue.createFakeSharedValue({ top: 0, bottom: 0 });
obj.dismissToPipGestureRef = { current: undefined };
obj.dismissPanel = function dismissPanel() {
  const error = new Error("VoicePanelContextType.Provider.dismissDrawer: not called within a context provider");
  throw error;
};
obj.scrollPosition = require("result");
obj.canShowPIP = createFakeSharedValue.createFakeSharedValue(true);
obj.lockScrolling = createFakeSharedValue.createFakeSharedValue(false);
obj.wrapperOffset = createFakeSharedValue.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
const context = require("result").createContext(obj);
const result = require("MIN_PAN_GESTURE_MOVE").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelStateContext.tsx");

export default context;
