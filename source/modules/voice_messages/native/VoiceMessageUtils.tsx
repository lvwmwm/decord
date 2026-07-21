// Module ID: 11351
// Function ID: 88269
// Name: generateBase64EncodedWaveform
// Dependencies: []
// Exports: emitVoiceMessageRecorded, endAudioRecording, startAudioRecording, triggerHaptic

// Module 11351 (generateBase64EncodedWaveform)
function generateBase64EncodedWaveform(waveform) {
  let arr = waveform;
  if (waveform.length > closure_16) {
    arr = importDefault(dependencyMap[6])(waveform, tmp);
  }
  const mapped = arr.map((arg0) => Math.min(arg0, closure_13));
  const uint8Array = new Uint8Array(mapped);
  return importDefault(dependencyMap[7]).fromByteArray(uint8Array);
}
function _startAudioRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _startAudioRecording = obj;
  return obj(...arguments);
}
function resetAudioRecording() {
  const mediaEngine = mediaEngine.getMediaEngine();
  mediaEngine.removeListener(arg1(dependencyMap[9]).MediaEngineEvent.VoiceActivity, closure_21);
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
    const mediaEngine = mediaEngine.getMediaEngine();
    const result = mediaEngine.stopLocalAudioRecording((filename) => {
      filename({ filename, durationSecs: arg1 / 1000, waveform: filename });
    });
  });
}
function _endAudioRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _endAudioRecording = obj;
  return obj(...arguments);
}
function stopAndCacheAudioRecording() {
  return _stopAndCacheAudioRecording(...arguments);
}
function _stopAndCacheAudioRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _stopAndCacheAudioRecording = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ addVoiceMessageWave: closure_5, resetVoiceMessageState: closure_6, setSavedVoiceMessageUploadData: closure_7, setVoiceMessageRecordingId: closure_8, setVoiceMessageRecordingState: closure_9, setVoiceMessageStartTimeMillis: closure_10, useVoiceMessagesUIStore: closure_11, VoiceMessageRecordingStatus: closure_12 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ WAVEFORM_WAVE_MAX_VALUE: closure_13, VOICE_RECORDING_MIN_DB: closure_14, VOICE_RECORDING_MAX_DB: closure_15, WAVEFORM_MAX_SAMPLES: closure_16, VOICE_RECORDING_MAX_DURATION_MILLIS: closure_17 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
let closure_19 = null;
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("VoiceMessages");
const tmp3 = arg1(dependencyMap[3]);
let closure_21 = importDefault(dependencyMap[8]).throttle((arg0) => {
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
const importDefaultResult1 = importDefault(dependencyMap[8]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/voice_messages/native/VoiceMessageUtils.tsx");

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
    let obj = importDefault(dependencyMap[10]);
    obj = { recording_start_timestamp: startTimeMillis };
    const _Date = Date;
    obj.recording_stop_timestamp = Date.now();
    obj.duration_secs = durationSecs;
    obj.result = CANCELLED_DURATION;
    obj.initialize_secs = closure_19;
    obj.track(AnalyticEvents.VOICE_MESSAGE_RECORDED, obj);
    closure_19 = null;
  }
};
export const triggerHaptic = function triggerHaptic() {
  const obj = arg1(dependencyMap[11]);
  const obj2 = arg1(dependencyMap[12]);
  const HapticFeedbackTypes = arg1(dependencyMap[11]).HapticFeedbackTypes;
  const result = obj.triggerHapticFeedback(arg1(dependencyMap[12]).isAndroid() ? HapticFeedbackTypes.IMPACT_LIGHT : HapticFeedbackTypes.IMPACT_MEDIUM);
};
