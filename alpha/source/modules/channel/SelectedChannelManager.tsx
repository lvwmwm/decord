// Module ID: 20005
// Function ID: 20006
// Name: SelectedChannelManager
// Dependencies: [2130, 5043, 5171, 1072, 7350, 7594, 6761, 1099, 572, 2]

// Module 20005 (SelectedChannelManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import SelectedChannelStore2 from "SelectedChannelStore" /* 5043 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6761 */;
import transitionToGuild from "transitionToGuild" /* 7594 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;
import Constants from "Constants" /* 1072 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7350 */;
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
