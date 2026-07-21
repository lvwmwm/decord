// Module ID: 10435
// Function ID: 80502
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10435 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUpdateActivity() {
  const tmp = function buildActivity() {
    const voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return null;
    } else {
      const stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(voiceChannelId);
      if (null == stageInstanceByChannel) {
        return null;
      } else {
        const channel = channel.getChannel(voiceChannelId);
        if (null == channel) {
          return null;
        } else {
          if (obj10.canEveryone(constants2.VIEW_CHANNEL, channel)) {
            const guild = guild.getGuild(channel.getGuildId());
            if (null == guild) {
              return null;
            } else {
              const features = guild.features;
              if (features.has(constants.DISCOVERABLE)) {
                let obj = callback(closure_3[16]);
                const result = obj.packStageChannelPartyId(channel, stageInstanceByChannel);
                let id;
                if (null != tmp) {
                  const party = tmp.party;
                  if (null != party) {
                    id = party.id;
                  }
                }
                let tmp8 = null;
                if (id === result) {
                  tmp8 = tmp;
                }
                const mutableParticipants = store.getMutableParticipants(channel.id, callback(closure_3[17]).StageChannelParticipantNamedIndex.SPEAKER);
                const length = mutableParticipants.filter((type) => type.type === callback(closure_3[17]).StageChannelParticipantTypes.STREAM).length;
                const diff = mutableParticipants.length - length;
                let size;
                const diff1 = store.getParticipantCount(voiceChannelId) - length;
                if (null != tmp8) {
                  const party2 = tmp8.party;
                  if (null != party2) {
                    size = party2.size;
                  }
                }
                let num3 = 0;
                if (null != size) {
                  num3 = tmp8.party.size[1];
                }
                obj = { application_id: closure_17 };
                let topic = stageInstanceByChannel.topic;
                if (null == topic) {
                  topic = channel.topic;
                }
                if (null == topic) {
                  let obj2 = callback(closure_3[18]);
                  topic = obj2.computeChannelName(channel, closure_14, closure_12);
                }
                obj.name = topic;
                obj.type = callback(closure_3[19]).getStageHasMedia(channel.id) ? closure_18.WATCHING : closure_18.LISTENING;
                obj = {};
                let start;
                if (null != tmp8) {
                  const timestamps = tmp8.timestamps;
                  if (null != timestamps) {
                    start = timestamps.start;
                  }
                }
                if (null == start) {
                  const _Date = Date;
                  const date = new Date();
                  start = date.getTime();
                }
                obj.start = start;
                obj.timestamps = obj;
                const obj1 = {};
                const icon = guild.icon;
                let tmp29;
                if (null != icon) {
                  tmp29 = icon;
                }
                obj1.small_image = tmp29;
                obj1.small_text = guild.name;
                obj.assets = obj1;
                obj2 = { id: result };
                const items = [diff, ];
                const _Math = Math;
                items[1] = Math.max(diff1, num3);
                obj2.size = items;
                obj.party = obj2;
                return obj;
              } else {
                return null;
              }
            }
          } else {
            return null;
          }
          const obj10 = callback2(closure_3[15]);
        }
      }
    }
  }();
  let flag = !importDefault(dependencyMap[20])(tmp, closure_22);
  if (flag) {
    closure_22 = tmp;
    flag = true;
  }
  return flag;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
const STAGE_APPLICATION_ID = arg1(dependencyMap[13]).STAGE_APPLICATION_ID;
({ ActivityTypes: closure_18, GuildFeatures: closure_19, Permissions: closure_20, RTCConnectionStates: closure_21 } = arg1(dependencyMap[14]));
let closure_22 = null;
let tmp3 = (Store) => {
  class StageChannelSelfRichPresenceStore {
    constructor() {
      self = this;
      tmp = closure_4(this, StageChannelSelfRichPresenceStore);
      obj = closure_7(StageChannelSelfRichPresenceStore);
      tmp2 = closure_6;
      if (closure_23()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = StageChannelSelfRichPresenceStore;
  callback2(StageChannelSelfRichPresenceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_11, closure_13, closure_15, closure_16);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getActivity",
    value() {
      return closure_22;
    }
  };
  items[1] = obj;
  return callback(StageChannelSelfRichPresenceStore, items);
}(importDefault(dependencyMap[21]).Store);
tmp3.displayName = "StageChannelSelfRichPresenceStore";
tmp3 = new tmp3(importDefault(dependencyMap[22]), {
  CONNECTION_OPEN: handleUpdateActivity,
  STAGE_INSTANCE_CREATE: handleUpdateActivity,
  STAGE_INSTANCE_UPDATE: handleUpdateActivity,
  STAGE_INSTANCE_DELETE: handleUpdateActivity,
  VOICE_CHANNEL_SELECT: handleUpdateActivity,
  RTC_CONNECTION_STATE: function handleUpdateRTCConnection(state) {
    let tmp;
    if (null != party) {
      const party = party.party;
      if (null != party) {
        const size = party.size;
        if (null != size) {
          tmp = size[1];
        }
      }
    }
    let num2 = 0;
    if (null != tmp) {
      num2 = tmp;
    }
    let tmp3 = !tmp2;
    if (!(state.state !== constants.RTC_CONNECTED || num2 > 0)) {
      tmp3 = handleUpdateActivity();
    }
    return tmp3;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let arg1;
    if (null != closure_22) {
      const result = arg1(dependencyMap[16]).unpackStageChannelParty(closure_22);
      arg1 = result;
      const obj = arg1(dependencyMap[16]);
      if (tmp5) {
        handleUpdateActivity();
      }
      const tmp5 = null != result && null != voiceStates.find((channelId) => channelId.channelId === result.channelId);
    }
  }
});
const obj = {
  CONNECTION_OPEN: handleUpdateActivity,
  STAGE_INSTANCE_CREATE: handleUpdateActivity,
  STAGE_INSTANCE_UPDATE: handleUpdateActivity,
  STAGE_INSTANCE_DELETE: handleUpdateActivity,
  VOICE_CHANNEL_SELECT: handleUpdateActivity,
  RTC_CONNECTION_STATE: function handleUpdateRTCConnection(state) {
    let tmp;
    if (null != party) {
      const party = party.party;
      if (null != party) {
        const size = party.size;
        if (null != size) {
          tmp = size[1];
        }
      }
    }
    let num2 = 0;
    if (null != tmp) {
      num2 = tmp;
    }
    let tmp3 = !tmp2;
    if (!(state.state !== constants.RTC_CONNECTED || num2 > 0)) {
      tmp3 = handleUpdateActivity();
    }
    return tmp3;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let arg1;
    if (null != closure_22) {
      const result = arg1(dependencyMap[16]).unpackStageChannelParty(closure_22);
      arg1 = result;
      const obj = arg1(dependencyMap[16]);
      if (tmp5) {
        handleUpdateActivity();
      }
      const tmp5 = null != result && null != voiceStates.find((channelId) => channelId.channelId === result.channelId);
    }
  }
};
const tmp2 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/stage_channels/StageChannelSelfRichPresenceStore.tsx");

export default tmp3;
