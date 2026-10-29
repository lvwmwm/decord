// Module ID: 19487
// Function ID: 19488
// Name: SelectedChannelManager
// Dependencies: [2012, 4908, 5036, 1084, 7274, 7508, 6693, 1111, 584, 2]

// Module 19487 (SelectedChannelManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1111 */;
import SelectedChannelStore2 from "SelectedChannelStore" /* 4908 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6693 */;
import transitionToGuild from "transitionToGuild" /* 7508 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5036 */;
import Constants from "Constants" /* 1084 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
import size from "module_2" /* 2 */;

const SelectedChannelStore = SelectedChannelStore2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
const findFirstVoiceChannelId = SelectedChannelStore2.findFirstVoiceChannelId;
({ ChannelTypes: metroImportDefault, Routes: metroImportAll, ME: c9, NULL_STRING_GUILD_ID: c10 } = Constants);
class SelectedChannelManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { GUILD_CREATE: applyArgumentsResult.handleGuildCreate, CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate, LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
  handleGuildCreate(guild) {
    guild = guild.guild;
    const channelId = SelectedChannelStore.getChannelId(React4);
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (guild.id === channelId) {
      const obj = transitionToGuild;
      obj.transitionToGuild(guild.id);
    }
    const tmp6 = guild.id === voiceChannelId && false !== guild.unavailable && null == voiceChannelId;
    if (tmp6) {
      const obj2 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj2.selectVoiceChannel(findFirstVoiceChannelId(guild.id));
    }
  }
  handleChannelCreate(channel) {
    channel = channel.channel;
    if (channel.type === metroImportDefault.GROUP_DM) {
      const originChannelId = channel.originChannelId;
      const channelId = SelectedChannelStore.getChannelId(authStore);
      const obj3 = SelectedChannelStore;
      const tmp = null == SelectedGuildStore.getGuildId() && null != originChannelId && originChannelId === channelId;
      if (tmp) {
        const obj = router_utils;
        obj.transitionTo(metroImportAll.CHANNEL(React4, channel.id));
      }
      const tmp7 = null != originChannelId && originChannelId === obj3.getVoiceChannelId();
      if (tmp7) {
        const obj2 = SelectedChannelActionCreatorsDefault;
        const voiceChannel = obj2.selectVoiceChannel(channel.id, MediaEngineStore.isVideoEnabled());
      }
    }
  }
  handleLogout() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "VOICE_CHANNEL_SELECT", channelId: null, guildId: null, video: false, currentVoiceChannelId: null, joinVoiceId: null });
  }
}
const prototype = SelectedChannelManager.prototype;
const selectedChannelManager = new SelectedChannelManager();
const result = size.fileFinishedImporting("modules/channel/SelectedChannelManager.tsx");

export default selectedChannelManager;
