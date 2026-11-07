// Module ID: 5014
// Function ID: 5015
// Name: FavoritesUtils
// Dependencies: [5002, 1072, 1113, 2]
// Exports: getFavoritesAwareGuildName, isFavoritableChannel, isFavoritesGuildCategoryNameValid, isFavoritesGuildId

// Module 5014 (FavoritesUtils)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FavoritesConstants from "FavoritesConstants" /* 5002 */;
import size from "module_2" /* 2 */;

const FAVORITES_RAW_GUILD_ID = FavoritesConstants.FAVORITES_RAW_GUILD_ID;
const FAVORITES = Constants.FAVORITES;
const result = size.fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

export function getFavoritesAwareGuildName(guild) {
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
}
export function isFavoritesGuildId(guildId) {
  return guildId === FAVORITES_RAW_GUILD_ID || guildId === FAVORITES;
}
export function isFavoritesGuildCategoryNameValid(str) {
  return "" !== str.trim();
}
export function isFavoritableChannel(record) {
  return !record.isCategory();
}
