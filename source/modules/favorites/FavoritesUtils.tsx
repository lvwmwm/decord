// Module ID: 5077
// Function ID: 44181
// Name: isFavoritesGuildId
// Dependencies: [1386, 653, 1212, 2]
// Exports: canFavoriteChannelType, getFavoritesAwareGuildName

// Module 5077 (isFavoritesGuildId)
import { FAVORITES_RAW_GUILD_ID } from "date";
import { FAVORITES } from "ME";

function isFavoritesGuildId(guildId) {
  let tmp = guildId === FAVORITES_RAW_GUILD_ID;
  if (!tmp) {
    tmp = guildId === FAVORITES;
  }
  return tmp;
}
const result = require("getSystemLocale").fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

export const getFavoritesAwareGuildName = function getFavoritesAwareGuildName(guild) {
  if (null != guild) {
    if (isFavoritesGuildId(guild.id)) {
      const intl = require(1212) /* getSystemLocale */.intl;
      let name = intl.string(require(1212) /* getSystemLocale */.t.wMWyci);
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
