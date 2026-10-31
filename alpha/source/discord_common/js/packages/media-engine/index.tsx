// Module ID: 5789
// Function ID: 5790
// Name: BaseConnectionEvent
// Dependencies: [5768, 5790, 5862, 2, 5802, 5798]
// Exports: determineMediaEngine, initializeMediaEngine

// Module 5789 (BaseConnectionEvent)
import MediaEngineNative from "MediaEngineNative" /* 5790 */;
import MediaEngineEvent from "MediaEngineEvent" /* 5798 */;
import BaseConnection from "BaseConnection" /* 5802 */;
import MediaEngineDummy from "MediaEngineDummy" /* 5862 */;
import Constants from "Constants" /* 5768 */;
import size from "module_2" /* 2 */;

const MediaEngineImplementations = Constants.MediaEngineImplementations;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/index.tsx");
const MediaEngineEvent_export = MediaEngineEvent.MediaEngineEvent;

export const BaseConnectionEvent = BaseConnection.BaseConnectionEvent;
export { MediaEngineEvent_export as MediaEngineEvent };
export { MediaEngineContextTypes };
export const DesktopSourceEndReason = { SOURCE_NOT_FOUND: 0, [0]: "SOURCE_NOT_FOUND", USER_STOPPED: 1, [1]: "USER_STOPPED", OTHER_ERROR: 2, [2]: "OTHER_ERROR" };
export const FilterTargetType = { INPUT_DEVICE: "input_device", STREAM: "stream" };
export const FilterSettingsGraph = { NONE: "", BACKGROUND_BLUR: "background_blur", BACKGROUND_REPLACEMENT: "background_replacement" };
export const FilterSettingsKey = { CAMERA_BACKGROUND_PREVIEW: "cameraBackgroundPreview", CAMERA_BACKGROUND_LIVE: "cameraBackgroundLive" };
export function determineMediaEngine() {
  const items = [, ];
  ({ NATIVE: arr[0], WEBRTC: arr[1] } = MediaEngineImplementations);
  const tmp = MediaEngineImplementations;
  let DUMMY = items.find((item) => {
    let _default;
    if (constants.NATIVE === item) {
      _default = MediaEngineNative.default;
    } else {
      if (constants.WEBRTC !== item) {
        const DUMMY = tmp.DUMMY;
      }
      _default = MediaEngineDummy.default;
    }
    return _default.supported();
  });
  if (DUMMY == null) {
    DUMMY = tmp.DUMMY;
  }
  return DUMMY;
}
export function initializeMediaEngine(BaseConnectionEvent) {
  let _default;
  if (MediaEngineImplementations.NATIVE === BaseConnectionEvent) {
    _default = MediaEngineNative.default;
  } else {
    if (MediaEngineImplementations.WEBRTC !== BaseConnectionEvent) {
      const DUMMY = tmp.DUMMY;
    }
    _default = MediaEngineDummy.default;
  }
  const _default1 = new _default();
  return _default1;
}
