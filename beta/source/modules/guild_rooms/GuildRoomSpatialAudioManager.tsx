// Module ID: 17144
// Function ID: 17145
// Name: GuildRoomSpatialAudioManager
// Dependencies: [32, 4752, 1247, 502, 2051, 1999, 4860, 4995, 6540, 17145, 9081, 5037, 2]

// Module 17144 (GuildRoomSpatialAudioManager)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9081 */;
import GuildRoomSpatialAudio from "GuildRoomSpatialAudio" /* 17145 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4752 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import GuildRoomStore from "GuildRoomStore" /* 4995 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let _require, map, setUserPosition;

let tmp;
const GuildRoomsExperiment = tmp(5037);
class GuildRoomSpatialAudioManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      AUDIO_SET_AUDIO_MIXER_SETTINGS() {
        return require.apply();
      },
      RTC_CONNECTION_STATE() {
        return require.apply();
      },
      RTC_CONNECTION_USERS_MERGED() {
        return require.apply();
      },
      MEDIA_SESSION_JOINED() {
        return require.apply();
      },
      GUILD_ROOM_CONNECT() {
        return require.apply();
      },
      GUILD_ROOM_UPDATE() {
        return require.apply();
      },
      GUILD_ROOM_LOCAL_UPDATE() {
        return require.apply();
      },
      GUILD_ROOM_DISCONNECT() {
        return require.apply();
      }
    };
    applyArgumentsResult.reapplyForExperimentUpdate = function reapplyForExperimentUpdate() {
      if (GuildRoomSpatialAudio.GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
        const audioMixerSettings = MediaEngineStore.getAudioMixerSettings();
        const obj = AudioActionCreatorsDefault;
        const result = obj.setAudioMixerSettings(audioMixerSettings);
        require.apply();
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    map = new Map();
    const result = map.set(ExperimentStore, this.reapplyForExperimentUpdate);
    this.stores = result.set(ApexExperimentStore, this.reapplyForExperimentUpdate);
  }
  _terminate() {

  }
  isLivingRoomAvailable() {
    if (GuildRoomSpatialAudio.GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
      const guildId = RTCConnectionStore.getGuildId();
      let interactionsEnabled = null != guildId;
      if (interactionsEnabled) {
        const obj = { guildId, location: "GuildRoomSpatialAudioManager" };
        const tmpResult = GuildRoomsExperiment;
        interactionsEnabled = tmpResult.getGuildRoomsConfig(obj, { autoTrackExposure: false }).interactionsEnabled;
      }
      return interactionsEnabled;
    } else {
      return false;
    }
  }
  apply() {
    let closure_0;
    let obj = MediaEngineStore;
    if (MediaEngineStore.getAudioMixerSettings().enabled) {
      const channelId = RTCConnectionStore.getChannelId();
      const tmp3 = null;
      if (null != channelId) {
        const self = this;
        if (this.isLivingRoomAvailable()) {
          let tmp4 = ChannelStore;
          const channel = ChannelStore.getChannel(channelId);
          let isGuildStageVoiceResult;
          if (channel != null) {
            isGuildStageVoiceResult = channel.isGuildStageVoice();
          }
          if (!isGuildStageVoiceResult) {
            const tmp6 = _require;
            const tmp7 = dependencyMap;
            let tmp8 = require("GuildRoomSpatialAudio");
            let tmp9 = GuildRoomStore;
            const computeLivingRoomWorldPoints = tmp8.computeLivingRoomWorldPoints;
            const obj2 = { users: GuildRoomStore.getRoomUsers(channelId), currentUserId: AuthenticationStore.getId(), channelId };
            _require = computeLivingRoomWorldPoints(obj2);
            const mediaEngine = obj.getMediaEngine();
            mediaEngine.eachConnection((setUserPosition) => {
              let tmp6;
              let tmp7;
              const entries = Object.entries(closure_0);
              const tmp2 = entries[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = _slicedToArray(tmp3, 2);
                [tmp6, tmp7] = tmp5;
                setUserPosition = setUserPosition.setUserPosition;
                let obj = GuildRoomSpatialAudio;
                let setUserPositionResult = setUserPosition(tmp6, obj.livingRoomWorldPointToMediaEnginePoint(tmp7));
                continue;
              }
            });
          }
        }
      }
    }
  }
}
const prototype = GuildRoomSpatialAudioManager.prototype;
const guildRoomSpatialAudioManager = new GuildRoomSpatialAudioManager();
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default guildRoomSpatialAudioManager;
