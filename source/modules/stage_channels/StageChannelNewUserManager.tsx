// Module ID: 12235
// Function ID: 93885
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12235 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY;
let tmp2 = (arg0) => {
  class StageChannelNewUserManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, StageChannelNewUserManager);
      items1 = [...items];
      obj = closure_7(StageChannelNewUserManager);
      tmp2 = closure_6;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      StageChannelNewUserManager = tmp2Result;
      tmp2Result.handleVoiceStateUpdates = (voiceStates) => {
        voiceStates = voiceStates.voiceStates;
        const item = voiceStates.forEach((channelId) => {
          if (null != channelId.channelId) {
            if (channelId.userId === id.getId()) {
              lib.terminate();
              const Storage2 = lib(closure_3[9]).Storage;
              if (!Storage2.get(closure_12, false)) {
                const voiceChannelId = voiceChannelId.getVoiceChannelId();
                let isAudienceMemberResult = null != voiceChannelId && channelId.channelId === voiceChannelId;
                if (isAudienceMemberResult) {
                  isAudienceMemberResult = audienceMember.isAudienceMember(channelId.userId, voiceChannelId);
                }
                if (isAudienceMemberResult) {
                  const Storage = lib(closure_3[9]).Storage;
                  const result = Storage.set(closure_12, true);
                  const result1 = callback(closure_3[10]).openStageChannelAudienceNoticeModal(voiceChannelId);
                  const obj = callback(closure_3[10]);
                }
              }
            }
          }
        });
      };
      return tmp2Result;
    }
  }
  const arg1 = StageChannelNewUserManager;
  callback2(StageChannelNewUserManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = callback(closure_3[11]).subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_3[11]).unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
  };
  items[1] = obj;
  return callback(StageChannelNewUserManager, items);
}(importDefault(dependencyMap[12]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/stage_channels/StageChannelNewUserManager.tsx");

export default tmp2;
