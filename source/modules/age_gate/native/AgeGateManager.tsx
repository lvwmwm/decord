// Module ID: 15854
// Function ID: 121323
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15854 (_isNativeReflectConstruct)
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
({ EXISTING_USER_AGE_GATE_MODAL_KEY: closure_12, AgeGateSource: closure_13 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
({ ChannelTypes: closure_14, GuildNSFWContentLevel: closure_15 } = arg1(dependencyMap[10]));
let tmp4 = (arg0) => {
  class AgeGateManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, AgeGateManager);
      items1 = [...items];
      obj = closure_7(AgeGateManager);
      tmp2 = closure_6;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { POST_CONNECTION_OPEN: tmp2Result.handlePostConnectionOpen, CHANNEL_SELECT: tmp2Result.handleChannelSelect, AGE_GATE_MODAL_OPEN: tmp2Result.handleAgeGateModalOpen, AGE_GATE_MODAL_CLOSE: tmp2Result.handleAgeGateModalClose, GUILD_UPDATE: tmp2Result.handleGuildUpdate };
      return tmp2Result;
    }
  }
  const arg1 = AgeGateManager;
  callback2(AgeGateManager, arg0);
  let obj = {
    key: "handlePostConnectionOpen",
    value() {
      const guildId = store.getGuildId();
      const channelId = channelId.getChannelId();
      AgeGateManager(closure_2[11]).maybeShowAgeGate(guildId, channelId);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "handleChannelSelect",
    value(arg0) {
      let channelId;
      let guildId;
      ({ guildId, channelId } = arg0);
      const channel = channel.getChannel(channelId);
      let tmp2 = null != guildId;
      if (tmp2) {
        let type;
        if (null != channel) {
          type = channel.type;
        }
        tmp2 = type !== constants.GUILD_VOICE;
      }
      if (tmp2) {
        AgeGateManager(closure_2[11]).maybeShowAgeGate(guildId, channelId);
        const obj = AgeGateManager(closure_2[11]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleAgeGateModalOpen",
    value(source) {
      source = source.source;
      const AgeGateManager = source;
      // CreateGeneratorClosureLongIndex (0x67)
      callback(closure_2[12]).pushLazy(callback2(tmp), { source }, closure_12);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleAgeGateModalClose",
    value() {
      callback(closure_2[12]).popWithKey(closure_12);
    }
  };
  items[4] = {
    key: "handleGuildUpdate",
    value(guild) {
      guild = guild.guild;
      const guildId = store.getGuildId();
      let tmp2 = null != guildId && guild.id === guildId;
      if (tmp2) {
        tmp2 = guild.owner_configured_content_level === constants2.AGE_RESTRICTED;
      }
      if (tmp2) {
        AgeGateManager(closure_2[11]).maybeShowAgeGate(guild.id, null);
        const obj = AgeGateManager(closure_2[11]);
      }
    }
  };
  return callback(AgeGateManager, items);
}(importDefault(dependencyMap[16]));
tmp4 = new tmp4();
const tmp3 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/age_gate/native/AgeGateManager.tsx");

export default tmp4;
