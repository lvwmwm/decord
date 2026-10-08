// Module ID: 5885
// Function ID: 5886
// Name: SelectedChannelActionCreators
// Dependencies: [5109, 2063, 2011, 1085, 5886, 584, 1112, 10897, 2]

// Module 5885 (SelectedChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import SelectedChannelActionCreatorsAdditional from "SelectedChannelActionCreatorsAdditional" /* 5886 */;
import GameConsoleActionCreatorsAll from "GameConsoleActionCreators" /* 10897 */;
import GameConsoleStore from "GameConsoleStore" /* 5109 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import Constants from "Constants" /* 1085 */;
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
    let isAppStartupNavigation;
    let jumpType;
    let messageId;
    let opensChannel;
    let skipMessageFetch;
    let source;
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch, opensChannel, isAppStartupNavigation } = guildId);
    const obj = SelectedChannelActionCreatorsAdditional;
    const channelSelectionOrigin = obj.getChannelSelectionOrigin();
    ({ fromGuildId, fromChannelId } = channelSelectionOrigin);
    let tmp3 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (guildId !== metroImportDefault) {
      tmp3 = guildId;
    }
    dispatch({ type: "CHANNEL_SELECT", guildId: tmp3, channelId, fromGuildId, fromChannelId, messageId, jumpType, source, skipMessageFetch, opensChannel, isAppStartupNavigation });
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
