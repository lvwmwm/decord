// Module ID: 4223
// Function ID: 36849
// Name: getMediaEngineImpl
// Dependencies: []
// Exports: determineMediaEngine, initializeMediaEngine

// Module 4223 (getMediaEngineImpl)
function getMediaEngineImpl(arg0) {
  if (constants.NATIVE === arg0) {
    return require(dependencyMap[1]).default;
  } else {
    if (constants.WEBRTC !== arg0) {
      const DUMMY = constants.DUMMY;
    }
    return require(dependencyMap[2]).default;
  }
}
const _module = require(dependencyMap[0]);
let closure_2 = _module.MediaEngineImplementations;
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("../discord_common/js/packages/media-engine/index.tsx");

export const BaseConnectionEvent = require(dependencyMap[4]).BaseConnectionEvent;
export const MediaEngineEvent = require(dependencyMap[5]).MediaEngineEvent;
export const MediaEngineContextTypes = _module.MediaEngineContextTypes;
export const DesktopSourceEndReason = { SOURCE_NOT_FOUND: 0, [0]: "SOURCE_NOT_FOUND", USER_STOPPED: 1, [1]: "USER_STOPPED", OTHER_ERROR: 2, [2]: "OTHER_ERROR" };
export const FilterTargetType = { INPUT_DEVICE: "input_device", STREAM: "stream" };
export const FilterSettingsGraph = { NONE: "", BACKGROUND_BLUR: "background_blur", BACKGROUND_REPLACEMENT: "background_replacement" };
export const FilterSettingsKey = { CAMERA_BACKGROUND_PREVIEW: "cameraBackgroundPreview", CAMERA_BACKGROUND_LIVE: "cameraBackgroundLive" };
export const determineMediaEngine = function determineMediaEngine() {
  const items = [constants.NATIVE, constants.WEBRTC];
  let DUMMY = items.find((arg0) => callback(arg0).supported());
  if (null == DUMMY) {
    DUMMY = constants.DUMMY;
  }
  return DUMMY;
};
export const initializeMediaEngine = function initializeMediaEngine(arg0) {
  let tmp = getMediaEngineImpl(arg0);
  tmp = new tmp();
  return tmp;
};
