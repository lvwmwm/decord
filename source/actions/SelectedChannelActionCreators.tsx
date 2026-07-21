// Module ID: 4941
// Function ID: 42364
// Dependencies: []

// Module 4941
let PopoutWindowKeys;
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ ME: closure_7, PopoutWindowKeys, Routes: closure_8 } = arg1(dependencyMap[3]));
const obj = {
  selectChannel(guildId) {
    let channelId;
    let jumpType;
    let messageId;
    let skipMessageFetch;
    let source;
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch } = guildId);
    let obj = importDefault(dependencyMap[4]);
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
    arg1(dependencyMap[5]).transitionTo(closure_8.CHANNEL(closure_7, id));
  },
  selectVoiceChannel(channelId, closure_1, flag2) {
    let flag = closure_1;
    let obj = arg3;
    if (closure_1 === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    if (obj === undefined) {
      obj = {};
    }
    const channel = channel.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
    }
    if (closure_6.isSupported()) {
      if (null != channelId) {
        const mediaEngine = closure_6.getMediaEngine();
        mediaEngine.interact();
      }
      const obj4 = closure_1(dependencyMap[6]);
      const voiceChannelAdditional = obj4.selectVoiceChannelAdditional(channelId, guildId, flag, flag2, obj);
    }
  },
  disconnect() {
    const self = this;
    const remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      importAll(dependencyMap[7]).remoteDisconnect(remoteSessionId);
      const obj = importAll(dependencyMap[7]);
    }
    const voiceChannel = self.selectVoiceChannel(null);
  }
};
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default obj;
