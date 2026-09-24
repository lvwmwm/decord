// Module ID: 5662
// Function ID: 5663
// Name: SelectedChannelActionCreators
// Dependencies: [4807, 2045, 1996, 1078, 5663, 577, 1105, 10062, 2]

// Module 5662 (SelectedChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import router_utils from "router_utils" /* 1105 */;
import SelectedChannelActionCreatorsAdditional from "SelectedChannelActionCreatorsAdditional" /* 5663 */;
import GameConsoleActionCreatorsAll from "GameConsoleActionCreators" /* 10062 */;
import GameConsoleStore from "GameConsoleStore" /* 4807 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

require = fn;
const Constants = fn(1078);
({ ME: closure_7, PopoutWindowKeys, Routes: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default {
  selectChannel(guildId) {
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch, opensChannel } = guildId);
    const channelSelectionOrigin = SelectedChannelActionCreatorsAdditional.getChannelSelectionOrigin();
    ({ fromGuildId, fromChannelId } = channelSelectionOrigin);
    let tmp2 = null;
    if (guildId !== React5) {
      tmp2 = guildId;
    }
    DispatcherDefault.dispatch({ type: "CHANNEL_SELECT", guildId: tmp2, channelId, fromGuildId, fromChannelId, messageId, jumpType, source, skipMessageFetch, opensChannel });
  },
  selectPrivateChannel(id) {
    router_utils.transitionTo(closure_1_8.CHANNEL(React5, id));
  },
  selectVoiceChannel(id, MediaEngineStore, flag2) {
    let flag = MediaEngineStore;
    if (MediaEngineStore === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    let obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    const channel = ChannelStore.getChannel(id);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (MediaEngineStore.isSupported()) {
      if (null != id) {
        const mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.interact();
      }
      const obj5 = SelectedChannelActionCreatorsAdditional;
      const voiceChannelAdditional = obj5.selectVoiceChannelAdditional(id, guildId, flag, flag2, obj);
    }
  },
  disconnect() {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null != remoteSessionId) {
      GameConsoleActionCreatorsAll.remoteDisconnect(remoteSessionId);
    }
    const voiceChannel = this.selectVoiceChannel(null);
  }
};
