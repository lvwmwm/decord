// Module ID: 14718
// Function ID: 112196
// Name: _getLatestVideo
// Dependencies: [5, 27, 14717, 4470, 14719, 14720, 4098, 14721, 1934, 10323, 4665, 8245, 10322, 1450, 2]
// Exports: handleRecordingPhase, handleStopAndSend

// Module 14718 (_getLatestVideo)
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
