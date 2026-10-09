// Module ID: 13894
// Function ID: 13895
// Name: LocalVoiceStateManager
// Dependencies: [2064, 2012, 5210, 1085, 13892, 2041, 1403, 13543, 2]

// Module 13894 (LocalVoiceStateManager)
import FlagUtils from "FlagUtils" /* 1403 */;
import UserSettings from "UserSettings" /* 2041 */;
import isClipsEnabled from "isClipsEnabled" /* 13543 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RTCRegionStore from "RTCRegionStore" /* 5210 */;
import Constants from "Constants" /* 1085 */;
import StateManager from "StateManager" /* 13892 */;
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
