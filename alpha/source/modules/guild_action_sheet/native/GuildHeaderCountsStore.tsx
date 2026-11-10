// Module ID: 16141
// Function ID: 16142
// Name: GuildHeaderCountsStore
// Dependencies: [7513, 4991, 5360, 1385, 5805, 504, 572, 2]

// Module 16141 (GuildHeaderCountsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7513 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5360 */;
import UserStore from "UserStore" /* 1385 */;
import VoiceStateStore from "VoiceStateStore" /* 5805 */;
import size from "module_2" /* 2 */;

let closure_6;

const obj = {};
const metroRequire = obj;
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildHeaderCountsStore extends PersistedStore {
  initialize() {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = obj;
    }
    this.waitFor(GuildMemberCountStore, ChannelMemberStore, UserStore, ChannelStore, VoiceStateStore, ChannelMemberStore);
    if (tmp == null) {
      tmp = obj;
    }
    closure_6 = tmp;
  }
  getState() {
    return closure_6;
  }
  getActiveChannelsCount(arg0) {
    let activeChannelsCount;
    if (closure_6[arg0] != null) {
      activeChannelsCount = tmp.activeChannelsCount;
    }
    return activeChannelsCount;
  }
  getOnlineCount(arg0) {
    let onlineCount;
    if (closure_6[arg0] != null) {
      onlineCount = tmp.onlineCount;
    }
    return onlineCount;
  }
  getMemberCount(arg0) {
    let memberCount;
    if (closure_6[arg0] != null) {
      memberCount = tmp.memberCount;
    }
    return memberCount;
  }
}
const prototype = GuildHeaderCountsStore.prototype;
GuildHeaderCountsStore.displayName = "GuildHeaderCountsStore";
GuildHeaderCountsStore.persistKey = "GuildHeaderCountsStore";
const obj2 = {
  GUILD_HEADER_MEMBER_COUNT: function handleMemberCount(guildId) {
    guildId = guildId.guildId;
    const count = guildId.count;
    if (null == closure_6[guildId]) {
      closure_6[guildId] = { activeChannelsCount: "paddingHorizontal", onlineCount: "channel", memberCount: "set" };
    }
    closure_6[guildId].memberCount = count;
  },
  GUILD_HEADER_ONLINE_COUNT: function handleOnlineCount(guildId) {
    guildId = guildId.guildId;
    const count = guildId.count;
    if (null == closure_6[guildId]) {
      closure_6[guildId] = { activeChannelsCount: "paddingHorizontal", onlineCount: "channel", memberCount: "set" };
    }
    closure_6[guildId].onlineCount = count;
  },
  GUILD_HEADER_ACTIVE_CHANNELS_COUNT: function handleActiveChannelsCount(guildId) {
    guildId = guildId.guildId;
    const count = guildId.count;
    if (null == closure_6[guildId]) {
      closure_6[guildId] = { activeChannelsCount: "paddingHorizontal", onlineCount: "channel", memberCount: "set" };
    }
    closure_6[guildId].activeChannelsCount = count;
  }
};
const guildHeaderCountsStore = new GuildHeaderCountsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx");

export default guildHeaderCountsStore;
