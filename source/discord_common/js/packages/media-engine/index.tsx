// Module ID: 4227
// Function ID: 36896
// Name: getMediaEngineImpl
// Dependencies: [4191, 4228, 4298, 2, 4280, 4299]
// Exports: determineMediaEngine, initializeMediaEngine

// Module 4227 (getMediaEngineImpl)
import DesktopSources from "DesktopSources";

function getMediaEngineImpl(getMediaEngineImpl) {
  if (constants.NATIVE === getMediaEngineImpl) {
    return require(4228) /* _isNativeReflectConstruct */.default;
  } else {
    if (constants.WEBRTC !== getMediaEngineImpl) {
      const DUMMY = constants.DUMMY;
    }
    return require(4298) /* _isNativeReflectConstruct */.default;
  }
}
let closure_2 = DesktopSources.MediaEngineImplementations;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("../discord_common/js/packages/media-engine/index.tsx");

export const BaseConnectionEvent = require("_isNativeReflectConstruct").BaseConnectionEvent;
export const MediaEngineEvent = require("MediaEngineEvent").MediaEngineEvent;
export const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
export const DesktopSourceEndReason = { SOURCE_NOT_FOUND: 0, [0]: "SOURCE_NOT_FOUND", USER_STOPPED: 1, [1]: "USER_STOPPED", OTHER_ERROR: 2, [2]: "OTHER_ERROR" };
export const FilterTargetType = { INPUT_DEVICE: "input_device", STREAM: "stream" };
export const FilterSettingsGraph = { NONE: "", BACKGROUND_BLUR: "background_blur", BACKGROUND_REPLACEMENT: "background_replacement" };
export const FilterSettingsKey = { CAMERA_BACKGROUND_PREVIEW: "cameraBackgroundPreview", CAMERA_BACKGROUND_LIVE: "cameraBackgroundLive" };
export const determineMediaEngine = function determineMediaEngine() {
  const items = [constants.NATIVE, constants.WEBRTC];
  let DUMMY = items.find((arg0) => outer1_3(arg0).supported());
  if (null == DUMMY) {
    DUMMY = constants.DUMMY;
  }
  return DUMMY;
};
export const initializeMediaEngine = function initializeMediaEngine(getMediaEngineImpl) {
  let tmp = getMediaEngineImpl(getMediaEngineImpl);
  tmp = new tmp();
  return tmp;
};
