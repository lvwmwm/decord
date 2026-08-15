// Module ID: 16717
// Function ID: 16718
// Name: handleChannelDelete
// Dependencies: [15464, 9978, 1913, 5038, 2]

// Module 16717 (handleChannelDelete)
import items from "items";
import "initialize";

let c3;
let obj1;
function handleChannelDelete(channel) {
  const result = require(9978) /* getNextPositionFromChannels */.removeFavoriteChannel(channel.channel.id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  const result = require(9978) /* getNextPositionFromChannels */.setFavoriteCategoriesCollapsed(true, id.id);
}
function handleCategoryExpand(id) {
  const result = require(9978) /* getNextPositionFromChannels */.setFavoriteCategoriesCollapsed(false, id.id);
}
function handleCategoryCollapseAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = require(9978) /* getNextPositionFromChannels */.setFavoriteCategoriesCollapsed(true);
    const tmpResult = require(9978) /* getNextPositionFromChannels */;
  }
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = require(9978) /* getNextPositionFromChannels */.setFavoriteCategoriesCollapsed(false);
    const tmpResult = require(9978) /* getNextPositionFromChannels */;
  }
}
function handleLogout() {
  callback(closure_2);
}
({ NO_SUGGESTIONS: obj1, setFavoritesGuildSuggestions: c3 } = items);
let prototype = function FavoriteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_DELETE: handleChannelDelete, CATEGORY_COLLAPSE: handleCategoryCollapse, CATEGORY_EXPAND: handleCategoryExpand, CATEGORY_COLLAPSE_ALL: handleCategoryCollapseAll, CATEGORY_EXPAND_ALL: handleCategoryExpandAll, LOGOUT: handleLogout };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
let result = require("getFavoritesAwareGuildName").fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default prototype;
