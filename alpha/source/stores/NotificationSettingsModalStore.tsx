// Module ID: 19281
// Function ID: 19282
// Name: NotificationSettingsModalStore
// Dependencies: [4860, 7243, 4934, 5230, 4878, 6739, 1084, 504, 7244, 584, 2]

// Module 19281 (NotificationSettingsModalStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 4860 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7244 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7243 */;
import GuildChannelStore from "GuildChannelStore" /* 4934 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5230 */;
import GuildStore from "GuildStore" /* 4878 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6739 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelRecord.isGuildSelectableChannelType;
const FormStates = Constants.FormStates;
const ChannelTypes = Constants.ChannelTypes;
let CLOSED = FormStates.CLOSED;
const Store = get_initializedDefault.Store;
class NotificationSettingsModalStore extends Store {
  initialize() {
    const self = this;
    this.waitFor(GuildCategoryStore, GuildChannelStore, GuildMemberCountStore, GuildStore, UserGuildSettingsStore);
    const items = [UserGuildSettingsStore, GuildChannelStore, GuildStore];
    this.syncWith(items, () => self.isOpen());
  }
  isOpen() {
    return CLOSED !== FormStates.CLOSED;
  }
  getProps() {
    const categories = GuildCategoryStore.getCategories(guildId);
    const obj = {
      guildId,
      categories,
      guild: GuildStore.getGuild(guildId),
      memberCount: GuildMemberCountStore.getMemberCount(guildId),
      suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId),
      suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId),
      mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId),
      muted: UserGuildSettingsStore.isMuted(guildId),
      muteConfig: UserGuildSettingsStore.getMuteConfig(guildId),
      messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId),
      channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId),
      channels: getFlattedChannelListDefault(categories._categories, categories, (channel) => {
        const type = channel.channel.type;
        const tmp = closure_1_3(type) || type === constants.GUILD_CATEGORY;
        return tmp;
      })
    };
    return obj;
  }
}
const prototype = NotificationSettingsModalStore.prototype;
NotificationSettingsModalStore.displayName = "NotificationSettingsModalStore";
let obj = {
  NOTIFICATION_SETTINGS_MODAL_OPEN: function handleFormOpen(guildId) {
    CLOSED = FormStates.OPEN;
    guildId = guildId.guildId;
  },
  NOTIFICATION_SETTINGS_MODAL_CLOSE: function handleFormClose() {
    CLOSED = FormStates.CLOSED;
    let c2 = null;
  }
};
const notificationSettingsModalStore = new NotificationSettingsModalStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/NotificationSettingsModalStore.tsx");

export default notificationSettingsModalStore;
