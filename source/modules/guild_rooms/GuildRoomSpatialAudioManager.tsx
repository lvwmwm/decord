// Module ID: 15933
// Function ID: 122201
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15933 (_isNativeReflectConstruct)
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
let closure_14 = arg1(dependencyMap[11]).GUILD_ROOM_SPATIAL_AUDIO_MODE;
let closure_15 = arg1(dependencyMap[12]).DEFAULT_AUDIO_MIXER_SETTINGS;
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
              return tmp2Result.reconcile();
            },
        RTC_CONNECTION_USERS_MERGED() {
              return tmp2Result.apply();
            },
        MEDIA_SESSION_JOINED() {
              return tmp2Result.reconcile();
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
      tmp2Result.reconcile = () => {
        const result = tmp2Result.resetModeIfUnavailable();
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
      this.stores = new Map().set(closure_9, this.reconcile);
    }
  };
  const items = [obj, , , , ];
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
        let obj = callback(closure_2[13]);
        obj = { guildId, location: "GuildRoomSpatialAudioManager" };
        obj = { autoTrackExposure: false };
        experimental = obj.getCurrentConfig(obj, obj).experimental;
      }
      return experimental;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resetModeIfUnavailable",
    value() {
      const self = this;
      const audioMixerSettings = store.getAudioMixerSettings();
      if (audioMixerSettings.mode === closure_14) {
        if (!tmp2) {
          let obj = callback(closure_2[14]);
          obj = {};
          const merged = Object.assign(audioMixerSettings);
          obj["mode"] = mode.mode;
          const result = obj.setAudioMixerSettings(obj, GuildRoomSpatialAudioManager(closure_2[15]).MediaEngineContextTypes.DEFAULT);
        }
        const tmp2 = null == store2.getChannelId() || self.isLivingRoomAvailable();
      }
    }
  };
  items[4] = {
    key: "apply",
    value() {
      const self = this;
      const audioMixerSettings = store.getAudioMixerSettings();
      if (audioMixerSettings.enabled) {
        if (audioMixerSettings.mode === closure_14) {
          const channelId = store2.getChannelId();
          if (null != channelId) {
            if (self.isLivingRoomAvailable()) {
              let obj = GuildRoomSpatialAudioManager(closure_2[16]);
              obj = { users: roomUsers.getRoomUsers(channelId), currentUserId: id.getId(), listenerHeight: audioMixerSettings.listenerHeight };
              const GuildRoomSpatialAudioManager = obj.computeLivingRoomWorldPoints(obj);
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
                    let obj = closure_0(closure_2[16]);
                    let setUserPositionResult = setUserPosition.setUserPosition(tmp2[0], obj.livingRoomWorldPointToMediaEnginePoint(tmp2[1]));
                    num = num + 1;
                    length = entries.length;
                  } while (num < length);
                }
              });
            }
          }
        }
      }
    }
  };
  return callback(GuildRoomSpatialAudioManager, items);
}(importDefault(dependencyMap[17]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default tmp2;
