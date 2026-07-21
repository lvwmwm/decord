// Module ID: 16040
// Function ID: 123170
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16040 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
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
const STAGE_BOOSTING_SHEET_KEY = arg1(dependencyMap[9]).STAGE_BOOSTING_SHEET_KEY;
let closure_13 = false;
let tmp2 = (arg0) => {
  class StageBoostUpsellManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, StageBoostUpsellManager);
      items1 = [...items];
      obj = closure_6(StageBoostUpsellManager);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { VOICE_CHANNEL_SELECT: tmp2Result.handleVoiceChannelSelect, VOICE_STATE_UPDATES: tmp2Result.handleVoiceStateUpdates };
      return tmp2Result;
    }
  }
  const arg1 = StageBoostUpsellManager;
  callback2(StageBoostUpsellManager, arg0);
  let obj = {
    key: "handleVoiceChannelSelect",
    value(channelId) {
      let tmp = null == channelId.channelId;
      if (tmp) {
        tmp = key.getKey() === closure_12;
      }
      if (tmp) {
        callback(closure_2[10]).hideActionSheet(closure_12);
        const obj = callback(closure_2[10]);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "handleVoiceStateUpdates",
    value() {
      if (!closure_13) {
        const voiceChannelId = voiceChannelId.getVoiceChannelId();
        if (null != voiceChannelId) {
          const channel = channel.getChannel(voiceChannelId);
          if (null != channel) {
            if (null != channel) {
              if (channel.isGuildStageVoice()) {
                let obj = StageBoostUpsellManager(paths[11]);
                if (obj.getStageHasMedia(channel.id)) {
                  if (obj2.getChannelVideoLimit(channel).reachedLimit) {
                    if (closure_10.can(StageBoostUpsellManager(paths[13]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                      obj = { channel };
                      callback(paths[10]).openLazy(StageBoostUpsellManager(paths[15])(paths[14], paths.paths), closure_12, obj);
                      closure_13 = true;
                      const obj3 = callback(paths[10]);
                    }
                  }
                  const obj2 = StageBoostUpsellManager(paths[12]);
                }
              }
            }
          }
        }
      }
    }
  };
  items[1] = obj;
  return callback(StageBoostUpsellManager, items);
}(importDefault(dependencyMap[16]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/stage_channels/native/StageBoostUpsellManager.tsx");

export default tmp2;
