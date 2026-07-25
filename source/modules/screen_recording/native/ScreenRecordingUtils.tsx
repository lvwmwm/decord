// Module ID: 14776
// Function ID: 112645
// Name: _getLatestVideo
// Dependencies: [5, 27, 14775, 4471, 14777, 14778, 4099, 14779, 1935, 10285, 4666, 8024, 10284, 1450, 2]
// Exports: handleRecordingPhase, handleStopAndSend

// Module 14776 (_getLatestVideo)
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
