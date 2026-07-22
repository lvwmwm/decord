// Module ID: 15891
// Function ID: 121702
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15891 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let tmp2 = (arg0) => {
  class CommonTriggerPointManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, CommonTriggerPointManager);
      items1 = [...items];
      obj = closure_5(CommonTriggerPointManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { VOICE_CHANNEL_SELECT: tmp2Result.handleVoiceChannelSelect, CALL_CREATE: tmp2Result.handleCallCreate, USER_SETTINGS_MODAL_OPEN: tmp2Result.handleUserSettingsModalOpen };
      return tmp2Result;
    }
  }
  const arg1 = CommonTriggerPointManager;
  callback2(CommonTriggerPointManager, arg0);
  let obj = {
    key: "handleVoiceChannelSelect",
    value(guildId) {
      guildId = guildId.guildId;
      if (null != guildId.channelId) {
        let tmp3;
        const VoiceCallTriggerPoint = CommonTriggerPointManager(closure_1[5]).VoiceCallTriggerPoint;
        const obj = {};
        if (null != guildId) {
          tmp3 = guildId;
        }
        obj.guildId = tmp3;
        VoiceCallTriggerPoint.trigger(obj);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "handleCallCreate",
    value() {
      const VoiceCallTriggerPoint = CommonTriggerPointManager(closure_1[5]).VoiceCallTriggerPoint;
      VoiceCallTriggerPoint.trigger();
    }
  };
  items[1] = obj;
  obj = {
    key: "handleUserSettingsModalOpen",
    value() {
      const OpenUserSettingsTriggerPoint = CommonTriggerPointManager(closure_1[6]).OpenUserSettingsTriggerPoint;
      OpenUserSettingsTriggerPoint.trigger();
    }
  };
  items[2] = obj;
  return callback(CommonTriggerPointManager, items);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/experiments/trigger_points/CommonTriggerPointManager.tsx");

export default tmp2;
