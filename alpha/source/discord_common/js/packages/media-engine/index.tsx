// Module ID: 4882
// Function ID: 4883
// Name: BaseConnectionEvent
// Dependencies: [4852, 4883, 4954, 2, 4894, 4955]
// Exports: determineMediaEngine, initializeMediaEngine

// Module 4882 (BaseConnectionEvent)
import destroy from "destroy" /* 4883 */;
import BaseConnection from "BaseConnection" /* 4894 */;
import MediaEngineDummy from "MediaEngineDummy" /* 4954 */;
import MediaEngineEvent from "MediaEngineEvent" /* 4955 */;
import Constants from "Constants" /* 4852 */;
import size from "module_2" /* 2 */;

const constants = Constants.MediaEngineImplementations;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/index.tsx");

export const BaseConnectionEvent = BaseConnection.BaseConnectionEvent;
export const MediaEngineEvent = MediaEngineEvent.MediaEngineEvent;
export const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
export const DesktopSourceEndReason = { SOURCE_NOT_FOUND: 0, [0]: "SOURCE_NOT_FOUND", USER_STOPPED: 1, [1]: "USER_STOPPED", OTHER_ERROR: 2, [2]: "OTHER_ERROR" };
export const FilterTargetType = { INPUT_DEVICE: "input_device", STREAM: "stream" };
export const FilterSettingsGraph = { NONE: "", BACKGROUND_BLUR: "background_blur", BACKGROUND_REPLACEMENT: "background_replacement" };
export const FilterSettingsKey = { CAMERA_BACKGROUND_PREVIEW: "cameraBackgroundPreview", CAMERA_BACKGROUND_LIVE: "cameraBackgroundLive" };
export const determineMediaEngine = function determineMediaEngine() {
  const items = [, ];
  ({ NATIVE: arr[0], WEBRTC: arr[1] } = constants);
  let DUMMY = items.find((item) => {
    if (constants.NATIVE === item) {
      let _default = destroy.default;
    } else {
      if (tmp.WEBRTC !== item) {
        const DUMMY = tmp.DUMMY;
      }
      _default = MediaEngineDummy.default;
    }
    return _default.supported();
  });
  if (DUMMY == null) {
    DUMMY = constants.DUMMY;
  }
  return DUMMY;
};
export const initializeMediaEngine = function initializeMediaEngine(BaseConnectionEvent) {
  if (constants.NATIVE === BaseConnectionEvent) {
    let _default = destroy.default;
  } else {
    if (tmp.WEBRTC !== BaseConnectionEvent) {
      const DUMMY = tmp.DUMMY;
    }
    _default = MediaEngineDummy.default;
  }
  return new _default();
};
