// Module ID: 14932
// Function ID: 14933
// Name: LocalVoiceStateManager
// Dependencies: [6395, 502, 4762, 2131, 5753, 1071, 6397, 14930, 4738, 1404, 14878, 6401, 2]

// Module 14932 (LocalVoiceStateManager)
import FlagUtils from "FlagUtils" /* 1404 */;
import UserSettings from "UserSettings" /* 4738 */;
import Constants2 from "Constants" /* 6397 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6401 */;
import isClipsEnabled from "isClipsEnabled" /* 14878 */;
import PassTheControllerStore from "PassTheControllerStore" /* 6395 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import RTCRegionStore from "RTCRegionStore" /* 5753 */;
import Constants from "Constants" /* 1071 */;
import StateManager from "StateManager" /* 14930 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
({ ChannelTypes: metroImportDefault, VoiceFlags: metroImportAll } = Constants);
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
    const setFlagResult = obj.setFlag(0, metroImportAll.ALLOW_VOICE_RECORDING, setting);
    const setFlag = FlagUtils.setFlag;
    const CLIPS_ENABLED = metroImportAll.CLIPS_ENABLED;
    FlagUtils;
    const obj2 = isClipsEnabled;
    let result = null != channelId;
    const setFlagResult1 = setFlag(setFlagResult, CLIPS_ENABLED, obj2.isClipsEnabled());
    const setFlag2 = FlagUtils.setFlag;
    const PASS_THE_CONTROLLER_HOST = metroImportAll.PASS_THE_CONTROLLER_HOST;
    FlagUtils;
    if (result) {
      let CALL;
      const isSelfPassingController = PassTheControllerStore.isSelfPassingController;
      const encodeStreamKey = tmp(6401).encodeStreamKey;
      StreamKeyUtils;
      if (null != guildId) {
        CALL = StreamTypes.GUILD;
      } else {
        CALL = StreamTypes.CALL;
      }
      const obj3 = { streamType: CALL, guildId, channelId, ownerId: AuthenticationStore.getId() };
      result = isSelfPassingController(encodeStreamKey(obj3));
    }
    return setFlag2(setFlagResult1, PASS_THE_CONTROLLER_HOST, result);
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
      if (type === metroImportDefault.GUILD_STAGE_VOICE) {
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
