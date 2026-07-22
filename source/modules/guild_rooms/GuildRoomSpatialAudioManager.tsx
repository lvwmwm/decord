// Module ID: 15941
// Function ID: 122244
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15941 (_isNativeReflectConstruct)
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
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let tmp2 = (arg0) => {
  class GuildRoomSpatialAudioManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, GuildRoomSpatialAudioManager);
      items1 = [...items];
      obj = closure_7(GuildRoomSpatialAudioManager);
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
      GuildRoomSpatialAudioManager = tmp2Result;
      tmp2Result.actions = {
        AUDIO_SET_AUDIO_MIXER_SETTINGS() {
              return tmp2Result.apply();
            },
        RTC_CONNECTION_STATE() {
              return tmp2Result.apply();
            },
        RTC_CONNECTION_USERS_MERGED() {
              return tmp2Result.apply();
            },
        MEDIA_SESSION_JOINED() {
              return tmp2Result.apply();
            },
        GUILD_ROOM_CONNECT() {
              return tmp2Result.apply();
            },
        GUILD_ROOM_UPDATE() {
              return tmp2Result.apply();
            },
        GUILD_ROOM_LOCAL_UPDATE() {
              return tmp2Result.apply();
            },
        GUILD_ROOM_DISCONNECT() {
              return tmp2Result.apply();
            }
      };
      tmp2Result.reapplyForExperimentUpdate = () => {
        const audioMixerSettings = audioMixerSettings.getAudioMixerSettings();
        const result = callback(closure_2[13]).setAudioMixerSettings(audioMixerSettings);
        tmp2Result.apply();
      };
      return tmp2Result;
    }
  }
  const arg1 = GuildRoomSpatialAudioManager;
  callback2(GuildRoomSpatialAudioManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const result = new Map().set(closure_9, this.reapplyForExperimentUpdate);
      this.stores = result.set(closure_10, this.reapplyForExperimentUpdate);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "_terminate",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "isLivingRoomAvailable",
    value() {
      const guildId = store2.getGuildId();
      let experimental = null != guildId;
      if (experimental) {
        let obj = callback(closure_2[14]);
        obj = { guildId, location: "GuildRoomSpatialAudioManager" };
        obj = { autoTrackExposure: false };
        experimental = obj.getCurrentConfig(obj, obj).experimental;
      }
      return experimental;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "apply",
    value() {
      const self = this;
      if (store.getAudioMixerSettings().enabled) {
        const channelId = store2.getChannelId();
        if (null != channelId) {
          if (self.isLivingRoomAvailable()) {
            const channel = channel.getChannel(channelId);
            let isGuildStageVoiceResult;
            if (null != channel) {
              isGuildStageVoiceResult = channel.isGuildStageVoice();
            }
            if (null == isGuildStageVoiceResult) {
              const obj = { users: roomUsers.getRoomUsers(channelId), currentUserId: id.getId() };
              const GuildRoomSpatialAudioManager = GuildRoomSpatialAudioManager(closure_2[15]).computeLivingRoomWorldPoints(obj);
              const mediaEngine = store.getMediaEngine();
              mediaEngine.eachConnection((setUserPosition) => {
                let length;
                const entries = Object.entries(closure_0);
                let num = 0;
                if (0 < entries.length) {
                  do {
                    let tmp = closure_3;
                    let tmp2 = closure_3(entries[num], 2);
                    let tmp3 = closure_0;
                    let tmp4 = closure_2;
                    let obj = closure_0(closure_2[15]);
                    let setUserPositionResult = setUserPosition.setUserPosition(tmp2[0], obj.livingRoomWorldPointToMediaEnginePoint(tmp2[1]));
                    num = num + 1;
                    length = entries.length;
                  } while (num < length);
                }
              });
              const obj2 = GuildRoomSpatialAudioManager(closure_2[15]);
            }
          }
        }
      }
    }
  };
  return callback(GuildRoomSpatialAudioManager, items);
}(importDefault(dependencyMap[16]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default tmp2;
