// Module ID: 11070
// Function ID: 86119
// Name: toggleMemberListContentFeedHidden
// Dependencies: [905969671, 1241513986]
// Exports: clearDeleteHistoryError, onGameProfileOpen, onTapContentInventoryEntryEmbed, toggleMemberListContentFeedHidden

// Module 11070 (toggleMemberListContentFeedHidden)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export const toggleMemberListContentFeedHidden = function toggleMemberListContentFeedHidden() {
  let obj = importDefault(dependencyMap[6]);
  obj.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  obj = { channel_id: channelId.getChannelId(), guild_id: guildId.getGuildId(), hidden: hidden.hidden };
  importDefault(dependencyMap[7]).track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, obj);
};
export const onGameProfileOpen = function onGameProfileOpen() {
  importDefault(dependencyMap[6]).dispatch({ type: "GAME_PROFILE_OPEN" });
};
export const onTapContentInventoryEntryEmbed = function onTapContentInventoryEntryEmbed(authorId) {
  let message;
  let tappedElement;
  ({ message, tappedElement } = authorId);
  const channel = channel.getChannel(message.channel_id);
  if ("avatar" === tappedElement) {
    const user = user.getUser(authorId.authorId);
    if (null != user) {
      let showUserProfileResult = { userId: user.id };
      let id;
      if (null != channel) {
        id = channel.id;
      }
      showUserProfileResult.channelId = id;
      showUserProfileResult.messageId = message.id;
      let items = importDefault(dependencyMap[9]);
      if (tmp2) {
        items = [];
        items[0] = items.AVATAR;
        let items1 = items;
      } else {
        items1 = [items.USERNAME];
      }
      showUserProfileResult.sourceAnalyticsLocations = items1;
      showUserProfileResult = importAll(dependencyMap[8]).showUserProfile(showUserProfileResult);
      const obj2 = importAll(dependencyMap[8]);
    }
  }
};
export const clearDeleteHistoryError = function clearDeleteHistoryError() {
  importDefault(dependencyMap[6]).dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
};
