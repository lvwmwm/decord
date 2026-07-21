// Module ID: 15866
// Function ID: 121443
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15866 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleAVAudioSessionMode() {
  const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  if (null == channel) {
    let VIDEO = VoiceEngine.AVAudioSessionMode.DEFAULT;
  } else {
    let hasVideoResult = allActiveStreams.getAllActiveStreams().length > 0;
    if (!hasVideoResult) {
      hasVideoResult = closure_14.hasVideo(channel.id);
    }
    if (!hasVideoResult) {
      hasVideoResult = videoEnabled.isVideoEnabled();
    }
    if (!hasVideoResult) {
      if (null == currentEmbeddedActivity.getCurrentEmbeddedActivity()) {
        const AVAudioSessionMode = VoiceEngine.AVAudioSessionMode;
        VIDEO = arg1(dependencyMap[17]).shouldImmediatelyRequestVoicePermissions(id.getId(), channel.id) ? AVAudioSessionMode.VOICE : AVAudioSessionMode.LISTEN;
        const obj = arg1(dependencyMap[17]);
      }
    }
    VIDEO = VoiceEngine.AVAudioSessionMode.VIDEO;
  }
  let tmp12 = VOICE !== VIDEO;
  if (tmp12) {
    tmp12 = state.getState() === AppStates.ACTIVE;
  }
  if (tmp12) {
    const VOICE = VIDEO;
    const result = VoiceEngine.setAVAudioSessionMode(VIDEO);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[6]);
let closure_8 = importDefault(dependencyMap[7]);
let closure_9 = importDefault(dependencyMap[8]);
let closure_10 = importDefault(dependencyMap[9]);
let closure_11 = importDefault(dependencyMap[10]);
let closure_12 = importDefault(dependencyMap[11]);
let closure_13 = importDefault(dependencyMap[12]);
let closure_14 = importDefault(dependencyMap[13]);
let closure_15 = importDefault(dependencyMap[14]);
const AppStates = arg1(dependencyMap[15]).AppStates;
let obj = arg1(dependencyMap[16]);
if (obj.isAndroid()) {
  obj = {
    setAVAudioSessionMode(VIDEO) {

      },
    AVAudioSessionMode: { <string:2988224429>: 29966913, style: 661934336, value: 23719745, minimumValue: 617500928 }
  };
  let VoiceEngine = obj;
} else {
  VoiceEngine = arg1(dependencyMap[5]).NativeModules.VoiceEngine;
}
const VOICE = VoiceEngine.AVAudioSessionMode.VOICE;
let tmp2 = (arg0) => {
  class AudioSessionModeManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, AudioSessionModeManager);
      items1 = [...items];
      obj = closure_5(AudioSessionModeManager);
      tmp2 = closure_4;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      result = map.set(closure_9, closure_20);
      result1 = result.set(closure_14, closure_20);
      result2 = result1.set(closure_12, closure_20);
      result3 = result2.set(closure_8, closure_20);
      tmp2Result.stores = result3.set(closure_7, closure_20);
      return tmp2Result;
    }
  }
  const arg1 = AudioSessionModeManager;
  callback2(AudioSessionModeManager, arg0);
  return callback(AudioSessionModeManager);
}(importDefault(dependencyMap[18]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/voice_calls/native/AudioSessionModeManager.tsx");

export default tmp2;
