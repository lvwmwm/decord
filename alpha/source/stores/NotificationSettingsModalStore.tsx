// Module ID: 19634
// Function ID: 19635
// Name: NotificationSettingsModalStore
// Dependencies: [4867, 7280, 4944, 5242, 4885, 6775, 1072, 504, 7281, 572, 2]

// Module 19634 (NotificationSettingsModalStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7281 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7280 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5242 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
import Constants from "Constants" /* 1072 */;
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
