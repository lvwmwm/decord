// Module ID: 5348
// Function ID: 45745
// Name: isFavoritesGuildId
// Dependencies: [3506438151, 3523215380]
// Exports: canFavoriteChannelType, getFavoritesAwareGuildName

// Module 5348 (isFavoritesGuildId)
function isFavoritesGuildId(guildId) {
  let tmp = guildId === FAVORITES_RAW_GUILD_ID;
  if (!tmp) {
    tmp = guildId === FAVORITES;
  }
  return tmp;
}
const FAVORITES_RAW_GUILD_ID = require(dependencyMap[0]).FAVORITES_RAW_GUILD_ID;
const FAVORITES = require(dependencyMap[1]).FAVORITES;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

export const getFavoritesAwareGuildName = function getFavoritesAwareGuildName(guild) {
  if (null != guild) {
    if (isFavoritesGuildId(guild.id)) {
      const intl = require(dependencyMap[2]).intl;
      let name = intl.string(require(dependencyMap[2]).t.wMWyci);
    } else {
      name = guild.name;
    }
    return name;
  }
};
export { isFavoritesGuildId };
export const canFavoriteChannelType = function canFavoriteChannelType(isCategory, hasHigherPrivileges) {
  let tmp = !isCategory.isCategory();
  if (tmp) {
    tmp = !isCategory.isThread() || hasHigherPrivileges;
    const tmp2 = !isCategory.isThread() || hasHigherPrivileges;
  }
  return tmp;
};
