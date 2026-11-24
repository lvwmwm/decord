// Module ID: 4791
// Function ID: 4792
// Name: FavoritesUtils
// Dependencies: [4779, 1071, 1112, 2]
// Exports: getFavoritesAwareGuildName, isFavoritableChannel, isFavoritesGuildCategoryNameValid, isFavoritesGuildId

// Module 4791 (FavoritesUtils)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FavoritesConstants from "FavoritesConstants" /* 4779 */;
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
export function isFavoritesGuildCategoryNameValid(name) {
  return "" !== name.trim();
}
export function isFavoritableChannel(record) {
  return !record.isCategory();
}
