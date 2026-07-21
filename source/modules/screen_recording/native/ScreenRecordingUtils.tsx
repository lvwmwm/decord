// Module ID: 14595
// Function ID: 109989
// Name: _getLatestVideo
// Dependencies: []
// Exports: handleRecordingPhase, handleStopAndSend

// Module 14595 (_getLatestVideo)
let NativeEventEmitter;
let NativeModules;
function _getLatestVideo() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getLatestVideo = obj;
  return obj(...arguments);
}
function _checkAndRequestPermissions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _checkAndRequestPermissions = obj;
  return obj(...arguments);
}
function _startRecordingProcess() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _startRecordingProcess = obj;
  return obj(...arguments);
}
function _stopRecordingProcess() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _stopRecordingProcess = obj;
  return obj(...arguments);
}
function _submitBugReportWithScreenRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _submitBugReportWithScreenRecording = obj;
  return obj(...arguments);
}
function _handleStopAndSend() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleStopAndSend = obj;
  return obj(...arguments);
}
function _handleRecordingPhase() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleRecordingPhase = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
({ NativeModules, NativeEventEmitter } = arg1(dependencyMap[1]));
const useScreenRecordingStore = arg1(dependencyMap[2]).useScreenRecordingStore;
const DCDPhotos = NativeModules.DCDPhotos;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDScreenRecordingManager);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/screen_recording/native/ScreenRecordingUtils.tsx");

export const handleStopAndSend = function handleStopAndSend() {
  return _handleStopAndSend(...arguments);
};
export const handleRecordingPhase = function handleRecordingPhase() {
  return _handleRecordingPhase(...arguments);
};
