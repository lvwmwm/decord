// Module ID: 15093
// Function ID: 15094
// Name: LocalVoiceStateManager
// Dependencies: [5819, 5998, 502, 4861, 4883, 2131, 5911, 1071, 6783, 15091, 4837, 1404, 14304, 6785, 15094, 15095, 2]

// Module 15093 (LocalVoiceStateManager)
import FlagUtils from "FlagUtils" /* 1404 */;
import UserSettings from "UserSettings" /* 4837 */;
import Constants2 from "Constants" /* 6783 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6785 */;
import isClipsEnabled from "isClipsEnabled" /* 14304 */;
import StreamDrawingChannel from "StreamDrawingChannel" /* 15094 */;
import StreamDrawingExperiment from "StreamDrawingExperiment" /* 15095 */;
import PassTheControllerStore from "PassTheControllerStore" /* 5819 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 5998 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildStore from "GuildStore" /* 4883 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import RTCRegionStore from "RTCRegionStore" /* 5911 */;
import Constants from "Constants" /* 1071 */;
import StateManager from "StateManager" /* 15091 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
({ ChannelTypes: c9, VoiceFlags: c10 } = Constants);
const StreamTypes = Constants2.StreamTypes;
class LocalVoiceStateManager extends StateManager {
  constructor(socket) {
    const tmp = new LocalVoiceStateManager(new.target);
    tmp.socket = socket;
    return tmp;
  }
  computeVoiceFlags(guildId, channelId) {
    const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
    const setting = ClipsAllowVoiceRecording.getSetting();
    const obj = FlagUtils;
    const setFlagResult = obj.setFlag(0, constants2.ALLOW_VOICE_RECORDING, setting);
    const setFlag = FlagUtils.setFlag;
    const CLIPS_ENABLED = constants2.CLIPS_ENABLED;
    FlagUtils;
    const obj2 = isClipsEnabled;
    let result = null != channelId;
    const setFlagResult1 = setFlag(setFlagResult, CLIPS_ENABLED, obj2.isClipsEnabled());
    const setFlag2 = FlagUtils.setFlag;
    const PASS_THE_CONTROLLER_HOST = constants2.PASS_THE_CONTROLLER_HOST;
    FlagUtils;
    const tmp4 = constants2;
    if (result) {
      let CALL;
      const isSelfPassingController = PassTheControllerStore.isSelfPassingController;
      const encodeStreamKey = StreamKeyUtils.encodeStreamKey;
      StreamKeyUtils;
      if (null != guildId) {
        CALL = StreamTypes.GUILD;
      } else {
        CALL = StreamTypes.CALL;
      }
      const obj3 = { streamType: CALL, guildId, channelId, ownerId: AuthenticationStore.getId() };
      result = isSelfPassingController(encodeStreamKey(obj3));
    }
    const setFlag2Result = setFlag2(setFlagResult1, PASS_THE_CONTROLLER_HOST, result);
    const setFlag3 = FlagUtils.setFlag;
    const ALLOW_STREAM_DRAWING = tmp4.ALLOW_STREAM_DRAWING;
    FlagUtils;
    const supportsStreamDrawing = StreamDrawingChannel.supportsStreamDrawing;
    StreamDrawingChannel;
    const channel = ChannelStore.getChannel(channelId);
    let streamDrawingEnabled = supportsStreamDrawing(channel, GuildStore.getGuild(guildId));
    if (streamDrawingEnabled) {
      const tmpResult6 = StreamDrawingExperiment;
      streamDrawingEnabled = tmpResult6.getIsStreamDrawingEnabled(channelId, "LocalVoiceStateManager", false);
    }
    if (streamDrawingEnabled) {
      streamDrawingEnabled = ApplicationStreamingSettingsStore.getState().streamDrawingEnabled;
    }
    return setFlag3(setFlag2Result, ALLOW_STREAM_DRAWING, streamDrawingEnabled);
  }
  getInitialState() {
    const obj = { guildId: null, channelId: null, selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), selfVideo: MediaEngineStore.isVideoEnabled(), preferredRegion: null, preferredRegions: null, videoStreamParameters: null, flags: 0 };
    return obj;
  }
  getNextState(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    const obj = { guildId, channelId, selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), selfVideo: MediaEngineStore.isVideoEnabled(), preferredRegion: RTCRegionStore.getPreferredRegion(), preferredRegions: RTCRegionStore.getPreferredRegions(), videoStreamParameters: MediaEngineStore.getVideoStreamParameters(), flags: this.computeVoiceFlags(guildId, channelId) };
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
      if (type === constants.GUILD_STAGE_VOICE) {
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
let result = size.fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default LocalVoiceStateManager;
