// Module ID: 5724
// Function ID: 5725
// Name: SelectedChannelActionCreators
// Dependencies: [4854, 2051, 1999, 1086, 5725, 585, 1113, 9221, 2]

// Module 5724 (SelectedChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import router_utils from "router_utils" /* 1113 */;
import SelectedChannelActionCreatorsAdditional from "SelectedChannelActionCreatorsAdditional" /* 5725 */;
import GameConsoleActionCreatorsAll from "GameConsoleActionCreators" /* 9221 */;
import GameConsoleStore from "GameConsoleStore" /* 4854 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let PopoutWindowKeys;
let metroImportAll;
let metroImportDefault;
({ ME: metroImportDefault, PopoutWindowKeys, Routes: metroImportAll } = Constants);
let obj = {
  selectChannel(guildId) {
    let channelId;
    let fromChannelId;
    let fromGuildId;
    let jumpType;
    let messageId;
    let opensChannel;
    let skipMessageFetch;
    let source;
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch, opensChannel } = guildId);
    const obj = SelectedChannelActionCreatorsAdditional;
    const channelSelectionOrigin = obj.getChannelSelectionOrigin();
    ({ fromGuildId, fromChannelId } = channelSelectionOrigin);
    let tmp3 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (guildId !== metroImportDefault) {
      tmp3 = guildId;
    }
    dispatch({ type: "CHANNEL_SELECT", guildId: tmp3, channelId, fromGuildId, fromChannelId, messageId, jumpType, source, skipMessageFetch, opensChannel });
  },
  selectPrivateChannel(id) {
    const obj = router_utils;
    obj.transitionTo(metroImportAll.CHANNEL(metroImportDefault, id));
  },
  selectVoiceChannel(id, MediaEngineStore, flag2) {
    let guildId;
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
      guildId = channel.getGuildId();
    }
    const obj3 = MediaEngineStore;
    if (MediaEngineStore.isSupported()) {
      if (null != id) {
        const mediaEngine = obj3.getMediaEngine();
        mediaEngine.interact();
      }
      const obj5 = SelectedChannelActionCreatorsAdditional;
      const voiceChannelAdditional = obj5.selectVoiceChannelAdditional(id, guildId, flag, flag2, obj);
    }
  },
  disconnect() {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null != remoteSessionId) {
      const obj = GameConsoleActionCreatorsAll;
      obj.remoteDisconnect(remoteSessionId);
    }
    const voiceChannel = this.selectVoiceChannel(null);
  }
};
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default obj;
