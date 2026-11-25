// Module ID: 12826
// Function ID: 12827
// Name: VoiceMessagesUIStore
// Dependencies: [12827, 560, 1653, 1262, 5514, 5515, 2]
// Exports: addVoiceMessageWave, hideVoiceMessagesTooltip, resetVoiceMessageState, setIsUsingHoldGesture, setIsVoiceMessageButtonMounted, setSavedVoiceMessageUploadData, setShowRecordingOverlay, setVoiceMessageAnimationState, setVoiceMessageRecordingId, setVoiceMessageRecordingState, setVoiceMessageStartTimeMillis, showVoiceMessagesTooltip

// Module 12826 (VoiceMessagesUIStore)
import react_native from "react-native" /* 1262 */;
import _mod1653 from "module_1653" /* 1653 */;
import spring_spring from "spring/spring" /* 5514 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 12827 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c2;
let c3;
({ VoiceMessageAnimationState: c2, WAVEFORM_WAVE_MAX_VALUE: c3 } = VoiceMessageConstants);
let obj = module_560.create(() => {
  let items;
  let obj2;
  obj = { voiceMessageAnimationState: obj2.makeMutable(items), recordingStatus: null, recordingId: null, currWaveHeight: "Path", showRecordingOverlay: "Array", startTimeMillis: 0, waveform: [], waveformVersion: "Promise", showVoiceMessagesTooltip: "body-sm/medium", savedVoiceMessageUploadData: "header", isVoiceMessageButtonMounted: null, isUsingHoldGesture: "none" };
  items = [, ];
  ({ SENDING: arr[0], SENDING: arr[1] } = React2);
  obj2 = _mod1653;
  return obj;
});
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesUIStore.tsx");

export const VoiceMessageRecordingStatus = { REQUESTED: 0, [0]: "REQUESTED", STARTED: 1, [1]: "STARTED" };
export const useVoiceMessagesUIStore = obj;
export function setShowRecordingOverlay(showRecordingOverlay) {
  _require = showRecordingOverlay;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { showRecordingOverlay };
    obj.setState(obj);
  });
}
export function setVoiceMessageRecordingState(recordingStatus) {
  _require = recordingStatus;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { recordingStatus };
    obj.setState(obj);
  });
}
export function setVoiceMessageRecordingId(recordingId) {
  _require = recordingId;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { recordingId };
    obj.setState(obj);
  });
}
export function setVoiceMessageStartTimeMillis(startTimeMillis) {
  _require = startTimeMillis;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { startTimeMillis };
    obj.setState(obj);
  });
}
export function setVoiceMessageAnimationState(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = {};
    const setState = obj.setState;
    const merged = Object.assign(closure_0);
    setState(obj);
  });
}
export function addVoiceMessageWave(arg0) {
  const waveform = obj.getState().waveform;
  const waveformVersion = obj.getState().waveformVersion;
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    set = currWaveHeight.set;
    obj = waveformVersion(5514);
    const result = arg0 / closure_3;
    const result1 = set(obj.withSpring(result, waveformVersion(5515).Reanimated3DefaultSpringConfig));
  }
  const items = [arg0, waveformVersion];
  waveform.push(items);
  const obj2 = waveformVersion(1262);
  obj2.batchUpdates(() => {
    obj = { waveformVersion: waveformVersion + 1 };
    obj.setState(obj);
  });
}
export function showVoiceMessagesTooltip() {
  let state;
  obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: true });
  });
}
export function hideVoiceMessagesTooltip() {
  let state;
  obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: false });
  });
}
export function resetVoiceMessageState() {
  let state;
  obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ waveform: [], waveformVersion: 0, showRecordingOverlay: false, startTimeMillis: "HermesInternal", savedVoiceMessageUploadData: "analyticsLocations" });
  });
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    set = currWaveHeight.set;
    const tmpResult = spring_spring;
    const result = set(tmpResult.withSpring(0, tmp(5515).Reanimated3DefaultSpringConfig));
  }
}
export function setSavedVoiceMessageUploadData(savedVoiceMessageUploadData) {
  _require = savedVoiceMessageUploadData;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { savedVoiceMessageUploadData };
    obj.setState(obj);
  });
}
export function setIsVoiceMessageButtonMounted(isVoiceMessageButtonMounted) {
  _require = isVoiceMessageButtonMounted;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isVoiceMessageButtonMounted };
    obj.setState(obj);
  });
}
export function setIsUsingHoldGesture(isUsingHoldGesture) {
  _require = isUsingHoldGesture;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isUsingHoldGesture };
    obj.setState(obj);
  });
}
