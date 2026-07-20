// Module ID: 14586
// Function ID: 109970
// Dependencies: []

// Module 14586
const DCDScreenRecordingManager = require(dependencyMap[0]).NativeModules.DCDScreenRecordingManager;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingManager.ios.tsx");

export default {
  requestPermissions() {
    return DCDScreenRecordingManager.requestPermissions();
  },
  startRecording() {
    return DCDScreenRecordingManager.startRecording();
  },
  stopRecording() {
    return DCDScreenRecordingManager.stopRecording();
  },
  isRecording() {
    return DCDScreenRecordingManager.isRecording();
  },
  getLatestRecording() {
    return DCDScreenRecordingManager.getLatestRecording();
  },
  setRecordingQuality(arg0) {
    return DCDScreenRecordingManager.setRecordingQuality(arg0);
  },
  getRecordingQuality() {
    return DCDScreenRecordingManager.getRecordingQuality();
  }
};
