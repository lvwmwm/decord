// Module ID: 17110
// Function ID: 17111
// Name: GuildRoomSpatialAudioManager
// Dependencies: [32, 4746, 1235, 502, 2044, 1992, 4852, 4987, 6534, 17111, 9093, 5029, 2]

// Module 17110 (GuildRoomSpatialAudioManager)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9093 */;
import GuildRoomSpatialAudio from "GuildRoomSpatialAudio" /* 17111 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4746 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;
import GuildRoomStore from "GuildRoomStore" /* 4987 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6534 */;

const GuildRoomsExperiment = tmp(5029);
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
