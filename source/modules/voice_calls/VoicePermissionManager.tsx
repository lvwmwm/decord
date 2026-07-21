// Module ID: 15867
// Function ID: 121451
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15867 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function voicePermissionRequest() {
  const permission = importDefault(dependencyMap[13]).requestPermission(NativePermissionTypes.AUDIO);
  permission.then((arg0) => {
    if (arg0) {
      callback(closure_2[14])(true);
    }
  });
  if (mode.getMode() === InputModes.PUSH_TO_TALK) {
    const permission1 = importDefault(dependencyMap[13]).requestPermission(NativePermissionTypes.INPUT_MONITORING);
    const obj2 = importDefault(dependencyMap[13]);
  }
}
function shouldImmediatelyRequestVoicePermissions(id, id2) {
  const channel = channel.getChannel(id2);
  let isListenModeCapableResult;
  if (null != channel) {
    isListenModeCapableResult = channel.isListenModeCapable();
  }
  let isSpeakerResult = !isListenModeCapableResult;
  if (!isSpeakerResult) {
    isSpeakerResult = speaker.isSpeaker(id, id2);
  }
  return isSpeakerResult;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const InputModes = arg1(dependencyMap[11]).InputModes;
const NativePermissionTypes = arg1(dependencyMap[12]).NativePermissionTypes;
let closure_16 = null;
let tmp2 = (arg0) => {
  class VoicePermissionManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, VoicePermissionManager);
      items1 = [...items];
      obj = closure_6(VoicePermissionManager);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { VOICE_STATE_UPDATES: tmp2Result.handleVoiceStateUpdates, VOICE_CHANNEL_SELECT: tmp2Result.handleVoiceChannelSelect };
      return tmp2Result;
    }
  }
  const arg1 = VoicePermissionManager;
  callback2(VoicePermissionManager, arg0);
  let obj = {
    key: "handleVoiceChannelSelect",
    value(channelId) {
      if (null == channelId.channelId) {
        let closure_16 = null;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "handleVoiceStateUpdates",
    value(voiceStates) {
      voiceStates = voiceStates.voiceStates;
      const item = voiceStates.forEach((arg0) => {
        let channelId;
        let userId;
        ({ userId, channelId } = arg0);
        if (null != channelId) {
          if (id.getId() === userId) {
            if (null != rTCConnectionId.getRTCConnectionId()) {
              if (channelId !== channelId) {
                if (callback3(userId, channelId)) {
                  callback2();
                } else {
                  const prototype = ctor.prototype;
                  const tmp7 = new ctor(arg0);
                  const audienceRequestToSpeakState = callback(closure_2[15]).getAudienceRequestToSpeakState(tmp7);
                  if (audienceRequestToSpeakState === callback(closure_2[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
                    callback2();
                  }
                  const obj = callback(closure_2[15]);
                }
              }
            }
          }
        }
      });
    }
  };
  items[1] = obj;
  return callback(VoicePermissionManager, items);
}(importDefault(dependencyMap[16]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/voice_calls/VoicePermissionManager.tsx");

export default tmp2;
export { shouldImmediatelyRequestVoicePermissions };
