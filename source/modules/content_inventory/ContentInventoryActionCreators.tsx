// Module ID: 11107
// Function ID: 86358
// Name: toggleMemberListContentFeedHidden
// Dependencies: [1348, 1906, 3947, 1849, 11108, 653, 686, 675, 11109, 5482, 2]
// Exports: clearDeleteHistoryError, onGameProfileOpen, onTapContentInventoryEntryEmbed, toggleMemberListContentFeedHidden

// Module 11107 (toggleMemberListContentFeedHidden)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export const toggleMemberListContentFeedHidden = function toggleMemberListContentFeedHidden() {
  let obj = importDefault(686);
  obj.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  obj = { channel_id: channelId.getChannelId(), guild_id: guildId.getGuildId(), hidden: hidden.hidden };
  importDefault(675).track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, obj);
};
export const onGameProfileOpen = function onGameProfileOpen() {
  importDefault(686).dispatch({ type: "GAME_PROFILE_OPEN" });
};
export const onTapContentInventoryEntryEmbed = function onTapContentInventoryEntryEmbed(authorId) {
  let message;
  let tappedElement;
  ({ message, tappedElement } = authorId);
  channel = channel.getChannel(message.channel_id);
  if ("avatar" === tappedElement) {
    user = user.getUser(authorId.authorId);
    if (null != user) {
      let showUserProfileResult = { userId: user.id };
      let id;
      if (null != channel) {
        id = channel.id;
      }
      showUserProfileResult.channelId = id;
      showUserProfileResult.messageId = message.id;
      let items = importDefault(5482);
      if (tmp2) {
        items = [];
        items[0] = items.AVATAR;
        let items1 = items;
      } else {
        items1 = [items.USERNAME];
      }
      showUserProfileResult.sourceAnalyticsLocations = items1;
      showUserProfileResult = importAll(11109).showUserProfile(showUserProfileResult);
      const obj2 = importAll(11109);
    }
  }
};
export const clearDeleteHistoryError = function clearDeleteHistoryError() {
  importDefault(686).dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
};
