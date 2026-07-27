// Module ID: 14778
// Function ID: 112685
// Name: get ActivityIndicator
// Dependencies: [27, 2]

// Module 14778 (get ActivityIndicator)
const DCDScreenRecordingManager = require("get ActivityIndicator").NativeModules.DCDScreenRecordingManager;
const result = require("set").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingManager.ios.tsx");

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
