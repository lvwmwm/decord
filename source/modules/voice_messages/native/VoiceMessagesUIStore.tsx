// Module ID: 11103
// Function ID: 86353
// Name: VoiceMessageRecordingStatus
// Dependencies: [11104, 621, 3991, 682, 4542, 2]
// Exports: addVoiceMessageWave, hideVoiceMessagesTooltip, resetVoiceMessageState, setIsUsingHoldGesture, setIsVoiceMessageButtonMounted, setSavedVoiceMessageUploadData, setShowRecordingOverlay, setVoiceMessageAnimationState, setVoiceMessageRecordingId, setVoiceMessageRecordingState, setVoiceMessageStartTimeMillis, showVoiceMessagesTooltip

// Module 11103 (VoiceMessageRecordingStatus)
import VoiceMessageAnimationState from "VoiceMessageAnimationState";
import keys from "keys";

let closure_2;
let closure_3;
({ VoiceMessageAnimationState: closure_2, WAVEFORM_WAVE_MAX_VALUE: closure_3 } = VoiceMessageAnimationState);
let obj = keys.create(() => {
  const obj = { voiceMessageAnimationState: null, recordingStatus: null, recordingId: null, currWaveHeight: null, showRecordingOverlay: false };
  const items = [, ];
  ({ SENDING: arr[0], SENDING: arr[1] } = closure_2);
  obj.voiceMessageAnimationState = require(3991).makeMutable(items);
  obj.currWaveHeight = undefined;
  obj.startTimeMillis = undefined;
  obj.waveform = [];
  obj.waveformVersion = 0;
  obj.showVoiceMessagesTooltip = false;
  obj.savedVoiceMessageUploadData = undefined;
  obj.isVoiceMessageButtonMounted = false;
  obj.isUsingHoldGesture = false;
  return obj;
});
let result = require("module_3991").fileFinishedImporting("modules/voice_messages/native/VoiceMessagesUIStore.tsx");

export const VoiceMessageRecordingStatus = { REQUESTED: 0, [0]: "REQUESTED", STARTED: 1, [1]: "STARTED" };
export const useVoiceMessagesUIStore = obj;
export const setShowRecordingOverlay = function setShowRecordingOverlay(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState({ showRecordingOverlay: closure_0 });
  });
};
export const setVoiceMessageRecordingState = function setVoiceMessageRecordingState(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState({ recordingStatus: closure_0 });
  });
};
export const setVoiceMessageRecordingId = function setVoiceMessageRecordingId(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState({ recordingId: closure_0 });
  });
};
export const setVoiceMessageStartTimeMillis = function setVoiceMessageStartTimeMillis(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState({ startTimeMillis: closure_0 });
  });
};
export const setVoiceMessageAnimationState = function setVoiceMessageAnimationState(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    const merged = Object.assign(closure_0);
    outer1_4.setState({});
  });
};
export const addVoiceMessageWave = function addVoiceMessageWave(arg0) {
  const waveform = obj.getState().waveform;
  const waveformVersion = obj.getState().waveformVersion;
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    obj = waveformVersion(4542);
    const result = currWaveHeight.set(obj.withSpring(arg0 / closure_3));
  }
  const items = [arg0, waveformVersion];
  waveform.push(items);
  waveformVersion(682).batchUpdates(() => {
    outer1_4.setState({ waveformVersion: waveformVersion + 1 });
  });
};
export const showVoiceMessagesTooltip = function showVoiceMessagesTooltip() {
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_4.setState({ showVoiceMessagesTooltip: true });
  });
};
export const hideVoiceMessagesTooltip = function hideVoiceMessagesTooltip() {
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_4.setState({ showVoiceMessagesTooltip: false });
  });
};
export const resetVoiceMessageState = function resetVoiceMessageState() {
  let obj = require(682) /* batchUpdates */;
  obj.batchUpdates(() => {
    const obj = { waveform: [], waveformVersion: 0, showRecordingOverlay: false, startTimeMillis: undefined, savedVoiceMessageUploadData: undefined };
    outer1_4.setState(obj);
  });
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    const result = currWaveHeight.set(require(4542) /* withSpring */.withSpring(0));
    const obj2 = require(4542) /* withSpring */;
  }
};
export const setSavedVoiceMessageUploadData = function setSavedVoiceMessageUploadData(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState({ savedVoiceMessageUploadData: closure_0 });
  });
};
export const setIsVoiceMessageButtonMounted = function setIsVoiceMessageButtonMounted(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState({ isVoiceMessageButtonMounted: closure_0 });
  });
};
export const setIsUsingHoldGesture = function setIsUsingHoldGesture(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState({ isUsingHoldGesture: closure_0 });
  });
};
