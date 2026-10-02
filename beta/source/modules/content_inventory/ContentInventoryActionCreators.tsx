// Module ID: 11291
// Function ID: 11292
// Name: ContentInventoryActionCreators
// Dependencies: [2051, 2102, 4657, 1378, 11292, 1086, 585, 1253, 11293, 6604, 2]
// Exports: clearDeleteHistoryError, onGameProfileOpen, onTapContentInventoryEntryEmbed, toggleMemberListContentFeedHidden

// Module 11291 (ContentInventoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6604 */;
import ContentInventoryPlatformActionCreatorsAll from "ContentInventoryPlatformActionCreators" /* 11293 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import UserStore from "UserStore" /* 1378 */;
import ContentInventoryPersistedStore from "ContentInventoryPersistedStore" /* 11292 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export const toggleMemberListContentFeedHidden = function toggleMemberListContentFeedHidden() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { channel_id: SelectedChannelStore.getChannelId(), guild_id: SelectedGuildStore.getGuildId(), hidden: ContentInventoryPersistedStore.hidden };
  obj2.track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, obj3);
};
export const onGameProfileOpen = function onGameProfileOpen() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "GAME_PROFILE_OPEN" });
};
export const onTapContentInventoryEntryEmbed = function onTapContentInventoryEntryEmbed(authorId) {
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
};
export const clearDeleteHistoryError = function clearDeleteHistoryError() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
};
