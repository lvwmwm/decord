// Module ID: 20078
// Function ID: 20079
// Name: FavoriteManager
// Dependencies: [502, 18632, 1072, 10982, 5044, 7383, 2]

// Module 20078 (FavoriteManager)
import Constants from "Constants" /* 1072 */;
import FavoritesUtils from "FavoritesUtils" /* 5044 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10982 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 18632 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
function handleChannelDelete(channel) {
  const id = channel.channel.id;
  const obj = FavoritesActionCreators;
  const result = obj.removeFavoriteChannel(id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  id = id.id;
  const obj = FavoritesActionCreators;
  const result = obj.setFavoriteCategoriesCollapsed(true, id);
}
function handleCategoryExpand(id) {
  id = id.id;
  const obj = FavoritesActionCreators;
  const result = obj.setFavoriteCategoriesCollapsed(false, id);
}
function handleCategoryCollapseAll(guildId) {
  guildId = guildId.guildId;
  const obj = FavoritesUtils;
  if (obj.isFavoritesGuildId(guildId)) {
    const tmpResult = FavoritesActionCreators;
    const result = tmpResult.setFavoriteCategoriesCollapsed(true);
  }
}
function handleCategoryExpandAll(guildId) {
  guildId = guildId.guildId;
  const obj = FavoritesUtils;
  if (obj.isFavoritesGuildId(guildId)) {
    const tmpResult = FavoritesActionCreators;
    const result = tmpResult.setFavoriteCategoriesCollapsed(false);
  }
}
function handleLogout() {
  React3(_false);
}
function handleThreadMembersUpdate(arg0) {
  let addedMembers;
  let id;
  let removedMemberIds;
  ({ id, addedMembers, removedMemberIds } = arg0);
  const id1 = AuthenticationStore.getId();
  if (null != id1) {
    let hasItem;
    if (removedMemberIds != null) {
      hasItem = removedMemberIds.includes(id1);
    }
    if (true !== hasItem) {
      let someResult;
      if (addedMembers != null) {
        someResult = addedMembers.some((userId) => userId.userId === id1);
      }
      if (true === someResult) {
        const obj2 = FavoritesActionCreators;
        const result = obj2.autoAddJoinedThreadToFavorites(id);
        result.catch(NOOP);
      }
    } else {
      const obj = FavoritesActionCreators;
      const result1 = obj.removeFavoriteChannel(id, { trackAnalytics: false });
    }
  }
}
function handleThreadCreate(channel) {
  channel = channel.channel;
  let member;
  if (channel != null) {
    member = channel.member;
  }
  let tmp2 = null != member;
  if (tmp2) {
    const joinTimestamp = channel.member.joinTimestamp;
    let tmp3 = null != joinTimestamp;
    if (tmp3) {
      const _Date = Date;
      const _Date2 = Date;
      const self = this;
      const self2 = this;
      const timestamp = Date.now();
      const date = new Date(joinTimestamp);
      tmp3 = timestamp - date.getTime() < 60000;
    }
    tmp2 = tmp3;
  }
  if (tmp2) {
    const obj2 = FavoritesActionCreators;
    const result = obj2.autoAddJoinedThreadToFavorites(channel.id);
    result.catch(NOOP);
  }
}
function handleThreadMemberUpdate(joinTimestamp) {
  let id;
  let userId;
  joinTimestamp = joinTimestamp.joinTimestamp;
  ({ id, userId } = joinTimestamp);
  let tmp = AuthenticationStore.getId() === userId;
  if (tmp) {
    let tmp3 = null != joinTimestamp;
    if (tmp3) {
      const _Date = Date;
      const _Date2 = Date;
      const self = this;
      const self2 = this;
      const timestamp = Date.now();
      const date = new Date(joinTimestamp);
      tmp3 = timestamp - date.getTime() < 60000;
    }
    tmp = tmp3;
  }
  if (tmp) {
    const obj2 = FavoritesActionCreators;
    const result = obj2.autoAddJoinedThreadToFavorites(id);
    result.catch(NOOP);
  }
}
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: closure_4 } = FavoritesGuildSuggestionsStore);
const NOOP = Constants.NOOP;
class FavoriteManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CHANNEL_DELETE: handleChannelDelete, CATEGORY_COLLAPSE: handleCategoryCollapse, CATEGORY_EXPAND: handleCategoryExpand, CATEGORY_COLLAPSE_ALL: handleCategoryCollapseAll, CATEGORY_EXPAND_ALL: handleCategoryExpandAll, LOGOUT: handleLogout, THREAD_CREATE: handleThreadCreate, THREAD_MEMBERS_UPDATE: handleThreadMembersUpdate, THREAD_MEMBER_UPDATE: handleThreadMemberUpdate };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const favoriteManager = new FavoriteManager();
let result = size.fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default favoriteManager;
