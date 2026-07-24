// Module ID: 14765
// Function ID: 112517
// Name: _getLatestVideo
// Dependencies: [5, 27, 14764, 4470, 14766, 14767, 4098, 14768, 1934, 10352, 4665, 8289, 10351, 1450, 2]
// Exports: handleRecordingPhase, handleStopAndSend

// Module 14765 (_getLatestVideo)
import SURVEY_CONFIGS from "SURVEY_CONFIGS";
import get_ActivityIndicator from "get ActivityIndicator";
import { useScreenRecordingStore } from "useScreenRecordingStore";

let NativeEventEmitter;
let NativeModules;
const require = arg1;
function _getLatestVideo() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _checkAndRequestPermissions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _startRecordingProcess() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _stopRecordingProcess() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _submitBugReportWithScreenRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleStopAndSend() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleRecordingPhase() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ NativeModules, NativeEventEmitter } = get_ActivityIndicator);
const DCDPhotos = NativeModules.DCDPhotos;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDScreenRecordingManager);
const result = require("useScreenRecordingStore").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingUtils.tsx");

export const handleStopAndSend = function handleStopAndSend() {
  return _handleStopAndSend(...arguments);
};
export const handleRecordingPhase = function handleRecordingPhase() {
  return _handleRecordingPhase(...arguments);
};
