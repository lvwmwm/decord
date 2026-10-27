// Module ID: 4849
// Function ID: 4850
// Name: FavoritesUtils
// Dependencies: [4837, 1084, 1125, 2]
// Exports: getFavoritesAwareGuildName, isFavoritableChannel, isFavoritesGuildCategoryNameValid, isFavoritesGuildId

// Module 4849 (FavoritesUtils)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import FavoritesConstants from "FavoritesConstants" /* 4837 */;
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
