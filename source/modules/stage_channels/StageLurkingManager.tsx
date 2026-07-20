// Module ID: 12222
// Function ID: 93811
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12222 (_isNativeReflectConstruct)
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
let tmp2 = (arg0) => {
  class StageLurkingManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, StageLurkingManager);
      items1 = [...items];
      obj = closure_6(StageLurkingManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      StageLurkingManager = tmp2Result;
      tmp2Result.handleVoiceChannelSelect = (arg0) => {
        let channelId;
        let guildId;
        ({ channelId, guildId } = arg0);
        if (null != channelId) {
          const channel = channel.getChannel(channelId);
        }
        tmp2Result.terminate();
        let tmp3 = null;
        if (null != channelId) {
          let tmp4 = null;
          if (null != guildId) {
            tmp4 = guildId;
          }
          tmp3 = tmp4;
        }
        const result = tmp2Result.handleDisconnectFromStageChannel(tmp3);
      };
      tmp2Result.handleDisconnectFromStageChannel = (arg0) => {
        const guildId = guildId.getGuildId();
        const items = [guildId, arg0];
        tmp2Result(closure_2[7]).stopLurkingAll(items.filter(tmp2Result(closure_2[8]).isNotNullish));
      };
      tmp2Result.handleLogout = () => {
        tmp2Result.terminate();
        const result = tmp2Result.handleDisconnectFromStageChannel(null);
      };
      return tmp2Result;
    }
  }
  const arg1 = StageLurkingManager;
  callback2(StageLurkingManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = callback(closure_2[9]).subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
      const obj = callback(closure_2[9]);
      const subscription1 = callback(closure_2[9]).subscribe("LOGOUT", this.handleLogout);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_2[9]).unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
      const obj = callback(closure_2[9]);
      callback(closure_2[9]).unsubscribe("LOGOUT", this.handleLogout);
    }
  };
  items[1] = obj;
  return callback(StageLurkingManager, items);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/stage_channels/StageLurkingManager.tsx");

export default tmp2;
