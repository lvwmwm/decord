// Module ID: 17978
// Function ID: 17979
// Name: NotificationSettingsModalStore
// Dependencies: [2067, 6790, 4705, 4980, 2086, 5971, 1085, 504, 6791, 584, 2]

// Module 17978 (NotificationSettingsModalStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 2067 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6791 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6790 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4980 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
import Constants from "Constants" /* 1085 */;
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
