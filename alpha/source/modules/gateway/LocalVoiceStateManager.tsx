// Module ID: 13800
// Function ID: 13801
// Name: LocalVoiceStateManager
// Dependencies: [2063, 2011, 5209, 1085, 13798, 2040, 1402, 13451, 2]

// Module 13800 (LocalVoiceStateManager)
import FlagUtils from "FlagUtils" /* 1402 */;
import UserSettings from "UserSettings" /* 2040 */;
import isClipsEnabled from "isClipsEnabled" /* 13451 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import RTCRegionStore from "RTCRegionStore" /* 5209 */;
import Constants from "Constants" /* 1085 */;
import StateManager from "StateManager" /* 13798 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ ChannelTypes: hasOwnProperty, VoiceFlags: metroRequire } = Constants);
class LocalVoiceStateManager extends StateManager {
  constructor(socket) {
    const tmp = new LocalVoiceStateManager(new.target);
    tmp.socket = socket;
    return tmp;
  }
  computeVoiceFlags() {
    const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
    const setting = ClipsAllowVoiceRecording.getSetting();
    const obj = FlagUtils;
    const setFlagResult = obj.setFlag(0, metroRequire.ALLOW_VOICE_RECORDING, setting);
    const setFlag = FlagUtils.setFlag;
    const CLIPS_ENABLED = metroRequire.CLIPS_ENABLED;
    FlagUtils;
    const obj2 = isClipsEnabled;
    return setFlag(setFlagResult, CLIPS_ENABLED, obj2.isClipsEnabled());
  }
  getInitialState() {
    const obj = { guildId: null, channelId: null, selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), selfVideo: MediaEngineStore.isVideoEnabled(), preferredRegion: null, preferredRegions: null, videoStreamParameters: null, flags: 0 };
    return obj;
  }
  getNextState(guildId) {
    const obj = { guildId: guildId.guildId, channelId: guildId.channelId, selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), selfVideo: MediaEngineStore.isVideoEnabled(), preferredRegion: RTCRegionStore.getPreferredRegion(), preferredRegions: RTCRegionStore.getPreferredRegions(), videoStreamParameters: MediaEngineStore.getVideoStreamParameters(), flags: this.computeVoiceFlags() };
    return obj;
  }
  shouldCommit() {
    const socket = this.socket;
    return socket.isSessionEstablished();
  }
  didCommit(state) {
    let channelId;
    let flags;
    let guildId;
    let preferredRegion;
    let preferredRegions;
    let selfDeaf;
    let selfMute;
    let selfVideo;
    ({ guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, flags } = state);
    const videoStreamParameters = state.videoStreamParameters;
    if (flags === undefined) {
      flags = 0;
    }
    const self = this;
    if (selfVideo) {
      const channel = ChannelStore.getChannel(channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type === hasOwnProperty.GUILD_STAGE_VOICE) {
        const socket2 = self.socket;
        const obj = { guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, videoStreamParameters, flags };
        socket2.voiceStateUpdate(obj);
      }
    }
    const socket = self.socket;
    socket.voiceStateUpdate({ guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, flags });
  }
}
const prototype = LocalVoiceStateManager.prototype;
Object.defineProperty(prototype, "guildId", {
  get: function guildId() {
    return this.getState().guildId;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelId", {
  get: function channelId() {
    return this.getState().channelId;
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default LocalVoiceStateManager;
