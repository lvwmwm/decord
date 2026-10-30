// Module ID: 13380
// Function ID: 13381
// Name: ContentInventoryActionCreators
// Dependencies: [4858, 4912, 5040, 1384, 13381, 1072, 572, 1253, 13382, 7345, 2]
// Exports: clearDeleteHistoryError, onGameProfileOpen, onTapContentInventoryEntryEmbed, toggleMemberListContentFeedHidden

// Module 13380 (ContentInventoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import ContentInventoryPlatformActionCreatorsAll from "ContentInventoryPlatformActionCreators" /* 13382 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import UserStore from "UserStore" /* 1384 */;
import ContentInventoryPersistedStore from "ContentInventoryPersistedStore" /* 13381 */;
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
