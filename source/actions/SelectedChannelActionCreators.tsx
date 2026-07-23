// Module ID: 4944
// Function ID: 42391
// Dependencies: [4144, 1348, 4177, 653, 686, 1198, 4945, 9040, 2]

// Module 4944
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";

let PopoutWindowKeys;
let closure_7;
let closure_8;
const require = arg1;
({ ME: closure_7, PopoutWindowKeys, Routes: closure_8 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default {
  selectChannel(guildId) {
    let channelId;
    let jumpType;
    let messageId;
    let skipMessageFetch;
    let source;
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch } = guildId);
    let obj = importDefault(686);
    obj = { type: "CHANNEL_SELECT" };
    let tmp = null;
    if (guildId !== closure_7) {
      tmp = guildId;
    }
    obj.guildId = tmp;
    obj.channelId = channelId;
    obj.messageId = messageId;
    obj.jumpType = jumpType;
    obj.source = source;
    obj.skipMessageFetch = skipMessageFetch;
    obj.dispatch(obj);
  },
  selectPrivateChannel(id) {
    require(1198) /* shouldNavigate */.transitionTo(closure_8.CHANNEL(closure_7, id));
  },
  selectVoiceChannel(channelId, outer2_1, flag2) {
    let flag = outer2_1;
    let obj = arg3;
    if (outer2_1 === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    if (obj === undefined) {
      obj = {};
    }
    channel = channel.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
    }
    if (closure_6.isSupported()) {
      if (null != channelId) {
        const mediaEngine = closure_6.getMediaEngine();
        mediaEngine.interact();
      }
      const obj4 = require(4945) /* selectVoiceChannelAdditional */;
      const voiceChannelAdditional = obj4.selectVoiceChannelAdditional(channelId, guildId, flag, flag2, obj);
    }
  },
  disconnect() {
    const self = this;
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      importAll(9040).remoteDisconnect(remoteSessionId);
      const obj = importAll(9040);
    }
    const voiceChannel = self.selectVoiceChannel(null);
  }
};
