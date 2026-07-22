// Module ID: 11093
// Function ID: 86303
// Name: VoiceMessageRecordingStatus
// Dependencies: []
// Exports: addVoiceMessageWave, hideVoiceMessagesTooltip, resetVoiceMessageState, setIsUsingHoldGesture, setIsVoiceMessageButtonMounted, setSavedVoiceMessageUploadData, setShowRecordingOverlay, setVoiceMessageAnimationState, setVoiceMessageRecordingId, setVoiceMessageRecordingState, setVoiceMessageStartTimeMillis, showVoiceMessagesTooltip

// Module 11093 (VoiceMessageRecordingStatus)
const _module = require(dependencyMap[0]);
({ VoiceMessageAnimationState: closure_2, WAVEFORM_WAVE_MAX_VALUE: closure_3 } = _module);
const _module1 = require(dependencyMap[1]);
const obj = _module1.create(() => {
  const obj = { "Bool(false)": -1, "Bool(false)": -1882570463, "Bool(false)": 1360068610, "Bool(false)": 1361143520, "Bool(false)": 1340580 };
  const items = [, ];
  ({ SENDING: arr[0], SENDING: arr[1] } = closure_2);
  obj.voiceMessageAnimationState = require(dependencyMap[2]).makeMutable(items);
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
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesUIStore.tsx");

export const VoiceMessageRecordingStatus = { REQUESTED: 0, [0]: "REQUESTED", STARTED: 1, [1]: "STARTED" };
export const useVoiceMessagesUIStore = obj;
export const setShowRecordingOverlay = function setShowRecordingOverlay(arg0) {
  const require = arg0;
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ showRecordingOverlay: arg0 });
  });
};
export const setVoiceMessageRecordingState = function setVoiceMessageRecordingState(arg0) {
  const require = arg0;
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ recordingStatus: arg0 });
  });
};
export const setVoiceMessageRecordingId = function setVoiceMessageRecordingId(arg0) {
  const require = arg0;
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ recordingId: arg0 });
  });
};
export const setVoiceMessageStartTimeMillis = function setVoiceMessageStartTimeMillis(arg0) {
  const require = arg0;
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ startTimeMillis: arg0 });
  });
};
export const setVoiceMessageAnimationState = function setVoiceMessageAnimationState(arg0) {
  const require = arg0;
  require(dependencyMap[3]).batchUpdates(() => {
    const merged = Object.assign(arg0);
    state.setState({});
  });
};
export const addVoiceMessageWave = function addVoiceMessageWave(arg0) {
  const waveform = obj.getState().waveform;
  const waveformVersion = obj.getState().waveformVersion;
  const require = waveformVersion;
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    const obj = require(dependencyMap[4]);
    const result = currWaveHeight.set(obj.withSpring(arg0 / closure_3));
  }
  const items = [arg0, waveformVersion];
  waveform.push(items);
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ waveformVersion: waveformVersion + 1 });
  });
};
export const showVoiceMessagesTooltip = function showVoiceMessagesTooltip() {
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: true });
  });
};
export const hideVoiceMessagesTooltip = function hideVoiceMessagesTooltip() {
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: false });
  });
};
export const resetVoiceMessageState = function resetVoiceMessageState() {
  const obj = require(dependencyMap[3]);
  obj.batchUpdates(() => {
    const obj = { "Null": "_desired", "Null": "hash", "Null": "constructor", waveform: [], startTimeMillis: undefined, savedVoiceMessageUploadData: undefined };
    state.setState(obj);
  });
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    const result = currWaveHeight.set(require(dependencyMap[4]).withSpring(0));
    const obj2 = require(dependencyMap[4]);
  }
};
export const setSavedVoiceMessageUploadData = function setSavedVoiceMessageUploadData(arg0) {
  const require = arg0;
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ savedVoiceMessageUploadData: arg0 });
  });
};
export const setIsVoiceMessageButtonMounted = function setIsVoiceMessageButtonMounted(arg0) {
  const require = arg0;
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ isVoiceMessageButtonMounted: arg0 });
  });
};
export const setIsUsingHoldGesture = function setIsUsingHoldGesture(arg0) {
  const require = arg0;
  require(dependencyMap[3]).batchUpdates(() => {
    state.setState({ isUsingHoldGesture: arg0 });
  });
};
