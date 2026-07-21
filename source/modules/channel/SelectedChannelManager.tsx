// Module ID: 16045
// Function ID: 123207
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16045 (_isNativeReflectConstruct)
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
const findFirstVoiceChannelId = arg1(dependencyMap[6]).findFirstVoiceChannelId;
let closure_11 = importDefault(dependencyMap[7]);
({ ChannelTypes: closure_12, Routes: closure_13, ME: closure_14, NULL_STRING_GUILD_ID: closure_15 } = arg1(dependencyMap[8]));
let tmp3 = (arg0) => {
  class SelectedChannelManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, SelectedChannelManager);
      items1 = [...items];
      obj = closure_6(SelectedChannelManager);
      tmp2 = closure_5;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { GUILD_CREATE: tmp2Result.handleGuildCreate, CHANNEL_CREATE: tmp2Result.handleChannelCreate, LOGOUT: tmp2Result.handleLogout };
      return tmp2Result;
    }
  }
  const arg1 = SelectedChannelManager;
  callback2(SelectedChannelManager, arg0);
  let obj = {
    key: "handleGuildCreate",
    value(guild) {
      guild = guild.guild;
      const channelId = store.getChannelId(closure_14);
      const voiceChannelId = store.getVoiceChannelId();
      if (guild.id === channelId) {
        SelectedChannelManager(closure_2[9]).transitionToGuild(guild.id);
        const obj = SelectedChannelManager(closure_2[9]);
      }
      let tmp6 = guild.id === voiceChannelId;
      if (tmp6) {
        tmp6 = false !== guild.unavailable;
      }
      if (tmp6) {
        tmp6 = null == voiceChannelId;
      }
      if (tmp6) {
        const voiceChannel = callback(closure_2[10]).selectVoiceChannel(callback4(guild.id));
        const obj2 = callback(closure_2[10]);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "handleChannelCreate",
    value(channel) {
      channel = channel.channel;
      if (channel.type === constants.GROUP_DM) {
        const originChannelId = channel.originChannelId;
        const channelId = store.getChannelId(closure_15);
        if (tmp) {
          SelectedChannelManager(closure_2[11]).transitionTo(closure_13.CHANNEL(closure_14, channel.id));
          const obj = SelectedChannelManager(closure_2[11]);
        }
        let tmp7 = null != originChannelId;
        if (tmp7) {
          tmp7 = originChannelId === store.getVoiceChannelId();
        }
        if (tmp7) {
          const voiceChannel = callback(closure_2[10]).selectVoiceChannel(channel.id, videoEnabled.isVideoEnabled());
          const obj2 = callback(closure_2[10]);
        }
        const tmp = null == guildId.getGuildId() && null != originChannelId && originChannelId === channelId;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleLogout",
    value() {
      callback(closure_2[12]).dispatch({});
    }
  };
  items[2] = obj;
  return callback(SelectedChannelManager, items);
}(importDefault(dependencyMap[13]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/channel/SelectedChannelManager.tsx");

export default tmp3;
