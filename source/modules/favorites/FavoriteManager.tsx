// Module ID: 16577
// Function ID: 16578
// Name: handleChannelDelete
// Dependencies: [9710, 1894, 5261, 2]

// Module 16577 (handleChannelDelete)
import "initialize";

const require = arg1;
function handleChannelDelete(channel) {
  const result = require(9710) /* getNextPositionFromChannels */.removeFavoriteChannel(channel.channel.id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  const result = require(9710) /* getNextPositionFromChannels */.setFavoriteCategoryCollapsed(id.id, true);
}
function handleCategoryExpand(id) {
  const result = require(9710) /* getNextPositionFromChannels */.setFavoriteCategoryCollapsed(id.id, false);
}
function handleCategoryCollapseAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = require(9710) /* getNextPositionFromChannels */.setAllFavoriteCategoriesCollapsed(true);
    const tmpResult = require(9710) /* getNextPositionFromChannels */;
  }
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = require(9710) /* getNextPositionFromChannels */.setAllFavoriteCategoriesCollapsed(false);
    const tmpResult = require(9710) /* getNextPositionFromChannels */;
  }
}
let prototype = function FavoriteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_DELETE: handleChannelDelete, CATEGORY_COLLAPSE: handleCategoryCollapse, CATEGORY_EXPAND: handleCategoryExpand, CATEGORY_COLLAPSE_ALL: handleCategoryCollapseAll, CATEGORY_EXPAND_ALL: handleCategoryExpandAll };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("initialize").fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default prototype;
