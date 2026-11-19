// Module ID: 12394
// Function ID: 12395
// Name: ContentInventoryActionCreators
// Dependencies: [4641, 4695, 4825, 1388, 12395, 1072, 572, 1256, 12396, 7420, 2]
// Exports: clearDeleteHistoryError, onGameProfileOpen, onTapContentInventoryEntryEmbed, toggleMemberListContentFeedHidden

// Module 12394 (ContentInventoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7420 */;
import ContentInventoryPlatformActionCreatorsAll from "ContentInventoryPlatformActionCreators" /* 12396 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4825 */;
import UserStore from "UserStore" /* 1388 */;
import ContentInventoryPersistedStore from "ContentInventoryPersistedStore" /* 12395 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export function toggleMemberListContentFeedHidden() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { channel_id: SelectedChannelStore.getChannelId(), guild_id: SelectedGuildStore.getGuildId(), hidden: ContentInventoryPersistedStore.hidden };
  obj2.track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, obj3);
}
export function onGameProfileOpen() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "GAME_PROFILE_OPEN" });
}
export function onTapContentInventoryEntryEmbed(authorId) {
  let id;
  let items1;
  let message;
  let tappedElement;
  ({ message, tappedElement } = authorId);
  authorId = authorId.authorId;
  const channel = ChannelStore.getChannel(message.channel_id);
  if ("avatar" === tappedElement) {
    const user = UserStore.getUser(authorId);
    if (null != user) {
      const obj = { userId: user.id, channelId: id, messageId: message.id, sourceAnalyticsLocations: items1 };
      id = undefined;
      const showUserProfile = ContentInventoryPlatformActionCreatorsAll.showUserProfile;
      ContentInventoryPlatformActionCreatorsAll;
      if (channel != null) {
        id = channel.id;
      }
      const tmp8 = AnalyticsLocationDefault;
      if ("avatar" === tappedElement) {
        const items = [tmp8.AVATAR];
        items1 = items;
      } else {
        items1 = [tmp8.USERNAME];
      }
      showUserProfile(obj);
    }
  }
}
export function clearDeleteHistoryError() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
}
