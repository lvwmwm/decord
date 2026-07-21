// Module ID: 15875
// Function ID: 121542
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15875 (_isNativeReflectConstruct)
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
let closure_7 = importDefault(dependencyMap[5]);
const importDefaultResult1 = importDefault(dependencyMap[7]);
let closure_9 = importDefault(dependencyMap[8]);
let closure_10 = importDefault(dependencyMap[9]);
let closure_11 = importDefault(dependencyMap[10]);
let closure_12 = importDefault(dependencyMap[11]);
let closure_13 = importDefault(dependencyMap[12]);
let closure_14 = importDefault(dependencyMap[13]);
let closure_15 = importDefault(dependencyMap[14]);
let closure_16 = importDefault(dependencyMap[15]);
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_17 = arg1(dependencyMap[16]).createSoundForPack("call_calling", importDefaultResult1.getSoundpack());
let closure_18 = importDefaultResult("outboundRingingGuildUserIds");
let tmp3 = (arg0) => {
  class ChannelCallManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, ChannelCallManager);
      items1 = [...items];
      obj = closure_5(ChannelCallManager);
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
      ChannelCallManager = tmp2Result;
      obj = { writable: true };
      set = new Set();
      obj.value = set;
      definePropertyResult = Object.defineProperty(tmp2Result, closure_18, obj);
      tmp2Result.actions = {
        GUILD_LOCAL_RING_START(channelId) {
              return tmp2Result.handleGuildRingStart(channelId);
            },
        GUILD_RING_STOP(guildId) {
              return tmp2Result.handleGuildRingStop(guildId);
            }
      };
      tmp2Result._handleRing = (arg0, arg1) => {
        const currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(arg1);
        let tmp2 = null != currentClientVoiceChannelId;
        if (tmp2) {
          tmp2 = closure_15.countVoiceStatesForChannel(currentClientVoiceChannelId) >= 2;
        }
        if (null != currentClientVoiceChannelId) {
          if (!tmp2) {
            if (arg0) {
              if (!soundDisabled.isSoundDisabled("call_calling")) {
                if (!disableSounds.disableSounds) {
                  closure_17.loop();
                }
              }
            }
          }
        }
        closure_17.stop();
      };
      tmp2Result.handleSoundpackUpdate = () => {
        closure_17.stop();
        closure_17 = tmp2Result(closure_1[16]).createSoundForPack("call_calling", soundpack.getSoundpack());
      };
      tmp2Result.handleRingUpdate = () => {
        const channel = channel.getChannel(store.getVoiceChannelId());
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        let tmp3 = null;
        if (null != guild_id) {
          tmp3 = guild_id;
        }
        const calls = calls.getCalls();
        let someResult = calls.some((ringing) => {
          let tmp = ringing.ringing.length > 0;
          if (tmp) {
            tmp = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null) === ringing.channelId;
          }
          return tmp;
        });
        if (!someResult) {
          someResult = callback(tmp2Result, closure_18)[closure_18].size > 0;
        }
        tmp2Result._handleRing(someResult, tmp3);
      };
      tmp2Result.handleGuildRingStart = (arg0) => {
        let guildId;
        let ringing;
        ({ ringing, guildId } = arg0);
        const item = ringing.forEach((arg0) => {
          callback(closure_0, closure_18)[closure_18].add(arg0);
        });
        tmp2Result._handleRing(callback(tmp2Result, closure_18)[closure_18].size > 0, guildId);
      };
      tmp2Result.handleGuildRingStop = (arg0) => {
        let guildId;
        let ringing;
        ({ ringing, guildId } = arg0);
        const item = ringing.forEach((arg0) => {
          callback(closure_0, closure_18)[closure_18].delete(arg0);
        });
        tmp2Result._handleRing(callback(tmp2Result, closure_18)[closure_18].size > 0, guildId);
      };
      tmp2Result.handleChannelRTCStoreChange = () => {
        const voiceChannelId = store.getVoiceChannelId();
        if (callback(tmp2Result, closure_18)[closure_18].size > 0) {
          if (null == voiceChannelId) {
            const _Set = Set;
            const set = new Set();
            callback(tmp2Result, closure_18)[closure_18] = set;
            tmp2Result._handleRing(callback(tmp2Result, closure_18)[closure_18].size > 0, null);
          } else if (null != voiceChannelId) {
            const tmp2Result = guildRingingUsers.getGuildRingingUsers(voiceChannelId);
            const _Set2 = Set;
            const items = [];
            HermesBuiltin.arraySpread(callback(tmp2Result, closure_18)[closure_18], 0);
            const set1 = new Set(items.filter((arg0) => !set.has(arg0)));
            if (set1.size > 0) {
              const item = set1.forEach((arg0) => {
                callback(closure_0, closure_18)[closure_18].delete(arg0);
              });
              tmp2Result._handleRing(callback(tmp2Result, closure_18)[closure_18].size > 0, null);
            }
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = ChannelCallManager;
  callback2(ChannelCallManager, arg0);
  const items = [
    {
      key: "_initialize",
      value() {
        const result = new Map().set(closure_9, this.handleRingUpdate);
        const result1 = result.set(closure_11, this.handleRingUpdate);
        const result2 = result1.set(closure_13, this.handleRingUpdate);
        const result3 = result2.set(closure_14, this.handleRingUpdate);
        const result4 = result3.set(closure_16, this.handleChannelRTCStoreChange);
        this.stores = result4.set(closure_8, this.handleSoundpackUpdate);
      }
    }
  ];
  return callback(ChannelCallManager, items);
}(importDefault(dependencyMap[17]));
tmp3 = new tmp3();
const obj2 = arg1(dependencyMap[16]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/calls/ChannelCallManager.tsx");

export default tmp3;
