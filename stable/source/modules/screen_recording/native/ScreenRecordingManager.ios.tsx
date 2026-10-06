// Module ID: 15546
// Function ID: 15547
// Name: react-native
// Dependencies: [17, 2]

// Module 15546 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const DCDScreenRecordingManager = react_native.NativeModules.DCDScreenRecordingManager;
const obj = {
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
  setRecordingQuality(size) {
    return DCDScreenRecordingManager.setRecordingQuality(size);
  },
  getRecordingQuality() {
    return DCDScreenRecordingManager.getRecordingQuality();
  }
};
const result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingManager.ios.tsx");

export default obj;
