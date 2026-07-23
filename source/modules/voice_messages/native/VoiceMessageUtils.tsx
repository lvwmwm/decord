// Module ID: 11362
// Function ID: 88344
// Name: generateBase64EncodedWaveform
// Dependencies: [5, 4177, 11103, 11104, 653, 3, 11363, 206, 22, 4227, 675, 4099, 477, 2]
// Exports: emitVoiceMessageRecorded, endAudioRecording, startAudioRecording, triggerHaptic

// Module 11362 (generateBase64EncodedWaveform)
import timestamp from "timestamp";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus";
import VoiceMessageAnimationState from "VoiceMessageAnimationState";
import { AnalyticEvents } from "ME";
import importDefaultResult from "VoiceMessageAnimationState";
import importDefaultResult1 from "apply";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function generateBase64EncodedWaveform(waveform) {
  let arr = waveform;
  if (waveform.length > closure_16) {
    arr = importDefault(11363)(waveform, tmp);
  }
  const mapped = arr.map((arg0) => Math.min(arg0, outer1_13));
  const uint8Array = new Uint8Array(mapped);
  return importDefault(206).fromByteArray(uint8Array);
}
function _startAudioRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function resetAudioRecording() {
  mediaEngine = mediaEngine.getMediaEngine();
  mediaEngine.removeListener(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.VoiceActivity, closure_21);
  callback3();
}
function stopAndGetAudioRecording() {
  callback4(null);
  callback5(null);
  const waveform = store.getState().waveform;
  let closure_0 = generateBase64EncodedWaveform(waveform.map((arg0) => {
    let tmp;
    [tmp] = arg0;
    return tmp;
  }));
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const mediaEngine = outer1_4.getMediaEngine();
    const result = mediaEngine.stopLocalAudioRecording((filename) => {
      callback({ filename, durationSecs: arg1 / 1000, waveform: callback });
    });
  });
}
function _endAudioRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function stopAndCacheAudioRecording() {
  return _stopAndCacheAudioRecording(...arguments);
}
function _stopAndCacheAudioRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ addVoiceMessageWave: closure_5, resetVoiceMessageState: closure_6, setSavedVoiceMessageUploadData: closure_7, setVoiceMessageRecordingId: closure_8, setVoiceMessageRecordingState: closure_9, setVoiceMessageStartTimeMillis: closure_10, useVoiceMessagesUIStore: closure_11, VoiceMessageRecordingStatus: closure_12 } = VoiceMessageRecordingStatus);
({ WAVEFORM_WAVE_MAX_VALUE: closure_13, VOICE_RECORDING_MIN_DB: closure_14, VOICE_RECORDING_MAX_DB: closure_15, WAVEFORM_MAX_SAMPLES: closure_16, VOICE_RECORDING_MAX_DURATION_MILLIS: closure_17 } = VoiceMessageAnimationState);
let c19 = null;
importDefaultResult = new importDefaultResult("VoiceMessages");
let closure_21 = require("apply").throttle((arg0) => {
  const state = store.getState();
  if (null != state.startTimeMillis) {
    callback2(closure_13 * ((arg0 - closure_14) / (closure_15 - closure_14)));
    let tmp8 = null == state.savedVoiceMessageUploadData;
    if (tmp8) {
      const _performance = performance;
      tmp8 = performance.now() - state.startTimeMillis >= closure_17;
    }
    if (tmp8) {
      stopAndCacheAudioRecording();
    }
  }
}, 100);
let result = require("VoiceMessageRecordingStatus").fileFinishedImporting("modules/voice_messages/native/VoiceMessageUtils.tsx");

export { generateBase64EncodedWaveform };
export const startAudioRecording = function startAudioRecording(nowResult) {
  return _startAudioRecording(...arguments);
};
export const endAudioRecording = function endAudioRecording() {
  return _endAudioRecording(...arguments);
};
export { stopAndCacheAudioRecording };
export const emitVoiceMessageRecorded = function emitVoiceMessageRecorded(CANCELLED_DURATION, durationSecs, startTimeMillis) {
  if (null != startTimeMillis) {
    let obj = importDefault(675);
    obj = { recording_start_timestamp: startTimeMillis };
    const _Date = Date;
    obj.recording_stop_timestamp = Date.now();
    obj.duration_secs = durationSecs;
    obj.result = CANCELLED_DURATION;
    obj.initialize_secs = c19;
    obj.track(AnalyticEvents.VOICE_MESSAGE_RECORDED, obj);
    c19 = null;
  }
};
export const triggerHaptic = function triggerHaptic() {
  const obj = require(4099) /* getAndroidLightImpactEffect */;
  const obj2 = require(477) /* set */;
  const HapticFeedbackTypes = require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes;
  const result = obj.triggerHapticFeedback(require(477) /* set */.isAndroid() ? HapticFeedbackTypes.IMPACT_LIGHT : HapticFeedbackTypes.IMPACT_MEDIUM);
};
