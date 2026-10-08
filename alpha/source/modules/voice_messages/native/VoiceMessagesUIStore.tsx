// Module ID: 11650
// Function ID: 11651
// Name: VoiceMessagesUIStore
// Dependencies: [11651, 570, 4810, 1271, 5374, 2]
// Exports: addVoiceMessageWave, hideVoiceMessagesTooltip, resetVoiceMessageState, setIsUsingHoldGesture, setIsVoiceMessageButtonMounted, setSavedVoiceMessageUploadData, setShowRecordingOverlay, setVoiceMessageAnimationState, setVoiceMessageRecordingId, setVoiceMessageRecordingState, setVoiceMessageStartTimeMillis, showVoiceMessagesTooltip

// Module 11650 (VoiceMessagesUIStore)
import react_native from "react-native" /* 1271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 11651 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c2;
let c3;
let tmp;
const spring = tmp(5374);
({ VoiceMessageAnimationState: c2, WAVEFORM_WAVE_MAX_VALUE: c3 } = VoiceMessageConstants);
let obj = module_570.create(() => {
  let items;
  let obj2;
  obj = { voiceMessageAnimationState: obj2.makeMutable(items), recordingStatus: null, recordingId: null, currWaveHeight: "Reflect", showRecordingOverlay: "Array", startTimeMillis: 0, waveform: [], waveformVersion: "Set", showVoiceMessagesTooltip: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}", savedVoiceMessageUploadData: "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:\"transparent\"};}", isVoiceMessageButtonMounted: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}", isUsingHoldGesture: "function UsersFastListTsx4(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}" };
  items = [, ];
  ({ SENDING: arr[0], SENDING: arr[1] } = React2);
  obj2 = ReanimatedRexport;
  return obj;
});
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesUIStore.tsx");

export const VoiceMessageRecordingStatus = { REQUESTED: 0, [0]: "REQUESTED", STARTED: 1, [1]: "STARTED" };
export const useVoiceMessagesUIStore = obj;
export const setShowRecordingOverlay = function setShowRecordingOverlay(showRecordingOverlay) {
  _require = showRecordingOverlay;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { showRecordingOverlay };
    obj.setState(obj);
  });
};
export const setVoiceMessageRecordingState = function setVoiceMessageRecordingState(recordingStatus) {
  _require = recordingStatus;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { recordingStatus };
    obj.setState(obj);
  });
};
export const setVoiceMessageRecordingId = function setVoiceMessageRecordingId(recordingId) {
  _require = recordingId;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { recordingId };
    obj.setState(obj);
  });
};
export const setVoiceMessageStartTimeMillis = function setVoiceMessageStartTimeMillis(startTimeMillis) {
  _require = startTimeMillis;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { startTimeMillis };
    obj.setState(obj);
  });
};
export const setVoiceMessageAnimationState = function setVoiceMessageAnimationState(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = {};
    const setState = obj.setState;
    const merged = Object.assign(closure_0);
    setState(obj);
  });
};
export const addVoiceMessageWave = function addVoiceMessageWave(arg0) {
  const waveform = obj.getState().waveform;
  const waveformVersion = obj.getState().waveformVersion;
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    set = currWaveHeight.set;
    obj = waveformVersion(5374);
    const result = set(obj.withSpring(arg0 / closure_3));
  }
  const items = [arg0, waveformVersion];
  waveform.push(items);
  const obj2 = waveformVersion(1271);
  obj2.batchUpdates(() => {
    obj = { waveformVersion: waveformVersion + 1 };
    obj.setState(obj);
  });
};
export const showVoiceMessagesTooltip = function showVoiceMessagesTooltip() {
  let state;
  obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: true });
  });
};
export const hideVoiceMessagesTooltip = function hideVoiceMessagesTooltip() {
  let state;
  obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: false });
  });
};
export const resetVoiceMessageState = function resetVoiceMessageState() {
  let state;
  obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ waveform: [], waveformVersion: 0, showRecordingOverlay: false, startTimeMillis: "Boolean", savedVoiceMessageUploadData: "end" });
  });
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    set = currWaveHeight.set;
    const tmpResult = spring;
    const result = set(tmpResult.withSpring(0));
  }
};
export const setSavedVoiceMessageUploadData = function setSavedVoiceMessageUploadData(savedVoiceMessageUploadData) {
  _require = savedVoiceMessageUploadData;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { savedVoiceMessageUploadData };
    obj.setState(obj);
  });
};
export const setIsVoiceMessageButtonMounted = function setIsVoiceMessageButtonMounted(isVoiceMessageButtonMounted) {
  _require = isVoiceMessageButtonMounted;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isVoiceMessageButtonMounted };
    obj.setState(obj);
  });
};
export const setIsUsingHoldGesture = function setIsUsingHoldGesture(isUsingHoldGesture) {
  _require = isUsingHoldGesture;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isUsingHoldGesture };
    obj.setState(obj);
  });
};
