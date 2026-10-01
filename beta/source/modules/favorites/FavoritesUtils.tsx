// Module ID: 2070
// Function ID: 2071
// Name: FavoritesUtils
// Dependencies: [2058, 1074, 1115, 2]
// Exports: getFavoritesAwareGuildName, isFavoritableChannel, isFavoritesGuildCategoryNameValid, isFavoritesGuildId

// Module 2070 (FavoritesUtils)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import FavoritesConstants from "FavoritesConstants" /* 2058 */;
import size from "module_2" /* 2 */;

const FAVORITES_RAW_GUILD_ID = FavoritesConstants.FAVORITES_RAW_GUILD_ID;
const FAVORITES = Constants.FAVORITES;
const result = size.fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

export const getFavoritesAwareGuildName = function getFavoritesAwareGuildName(guild) {
  if (null != guild) {
    let name;
    const id = guild.id;
    const tmp2 = id === FAVORITES_RAW_GUILD_ID || id === FAVORITES;
    if (tmp2) {
      const intl = intl2.intl;
      name = intl.string(intl2.t.wMWyci);
    } else {
      name = guild.name;
    }
    return name;
  }
};
export function isFavoritesGuildId(guildId) {
  return guildId === FAVORITES_RAW_GUILD_ID || guildId === FAVORITES;
}
export const isFavoritesGuildCategoryNameValid = function isFavoritesGuildCategoryNameValid(str) {
  return "" !== str.trim();
};
export const isFavoritableChannel = function isFavoritableChannel(record) {
  return !record.isCategory();
};
