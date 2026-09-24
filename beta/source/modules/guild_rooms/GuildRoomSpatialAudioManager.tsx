// Module ID: 17794
// Function ID: 17795
// Name: GuildRoomSpatialAudioManager
// Dependencies: [32, 4706, 1239, 502, 2045, 1996, 4813, 4948, 7397, 17795, 9921, 4990, 2]

// Module 17794 (GuildRoomSpatialAudioManager)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9921 */;
import GuildRoomSpatialAudio from "GuildRoomSpatialAudio" /* 17795 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4706 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1239 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4813 */;
import GuildRoomStore from "GuildRoomStore" /* 4948 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

const GuildRoomsExperiment = tmp(4990);
require = fn;
class GuildRoomSpatialAudioManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      AUDIO_SET_AUDIO_MIXER_SETTINGS() {
            return applyArgumentsResult.apply();
          },
      RTC_CONNECTION_STATE() {
            return applyArgumentsResult.apply();
          },
      RTC_CONNECTION_USERS_MERGED() {
            return applyArgumentsResult.apply();
          },
      MEDIA_SESSION_JOINED() {
            return applyArgumentsResult.apply();
          },
      GUILD_ROOM_CONNECT() {
            return applyArgumentsResult.apply();
          },
      GUILD_ROOM_UPDATE() {
            return applyArgumentsResult.apply();
          },
      GUILD_ROOM_LOCAL_UPDATE() {
            return applyArgumentsResult.apply();
          },
      GUILD_ROOM_DISCONNECT() {
            return applyArgumentsResult.apply();
          }
    };
    applyArgumentsResult.reapplyForExperimentUpdate = function reapplyForExperimentUpdate() {
      if (GuildRoomSpatialAudio.GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
        const audioMixerSettings = MediaEngineStore.getAudioMixerSettings();
        const result = AudioActionCreatorsDefault.setAudioMixerSettings(audioMixerSettings);
        applyArgumentsResult.apply();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildRoomSpatialAudioManager.prototype;
prototype["_initialize"] = function _initialize() {
  const result = new Map().set(ExperimentStore, this.reapplyForExperimentUpdate);
  this.stores = result.set(ApexExperimentStore, this.reapplyForExperimentUpdate);
};
prototype["_terminate"] = function _terminate() {

};
prototype["isLivingRoomAvailable"] = function isLivingRoomAvailable() {
  if (GuildRoomSpatialAudio.GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
    const guildId = RTCConnectionStore.getGuildId();
    let interactionsEnabled = null != guildId;
    if (interactionsEnabled) {
      const obj = { guildId, location: "GuildRoomSpatialAudioManager" };
      interactionsEnabled = GuildRoomsExperiment.getGuildRoomsConfig(obj, { autoTrackExposure: false }).interactionsEnabled;
      const tmpResult = GuildRoomsExperiment;
    }
    return interactionsEnabled;
  } else {
    return false;
  }
};
prototype["apply"] = function apply() {
  if (MediaEngineStore.getAudioMixerSettings().enabled) {
    const channelId = RTCConnectionStore.getChannelId();
    if (null != channelId) {
      const self = this;
      if (this.isLivingRoomAvailable()) {
        const channel = ChannelStore.getChannel(channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          const obj2 = { users: GuildRoomStore.getRoomUsers(channelId), currentUserId: AuthenticationStore.getId(), channelId };
          _require = require("GuildRoomSpatialAudio").computeLivingRoomWorldPoints(obj2);
          const mediaEngine = MediaEngineStore.getMediaEngine();
          mediaEngine.eachConnection((setUserPosition) => {
            const entries = Object.entries(closure_0);
            while (tmp2 !== undefined) {
              let tmp5 = _slicedToArray(tmp3, 2);
              [tmp6, tmp7] = tmp5;
              let obj = GuildRoomSpatialAudio;
              let setUserPositionResult = setUserPosition.setUserPosition(tmp6, obj.livingRoomWorldPointToMediaEnginePoint(tmp7));
              continue;
            }
          });
          const obj3 = require("GuildRoomSpatialAudio");
        }
      }
    }
  }
};
const guildRoomSpatialAudioManager = new GuildRoomSpatialAudioManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default guildRoomSpatialAudioManager;
