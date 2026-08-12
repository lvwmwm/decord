// Module ID: 1913
// Function ID: 1914
// Name: getFavoritesAwareGuildName
// Dependencies: [1429, 676, 1236, 2]
// Exports: getFavoritesAwareGuildName, isFavoritableChannel, isFavoritesGuildCategoryNameValid, isFavoritesGuildId

// Module 1913 (getFavoritesAwareGuildName)
import { FAVORITES_RAW_GUILD_ID } from "date";
import { FAVORITES } from "ME";

const result = require("getSystemLocale").fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

export const getFavoritesAwareGuildName = function getFavoritesAwareGuildName(guild) {
  if (null != guild) {
    const id = guild.id;
    let tmp2 = id === FAVORITES_RAW_GUILD_ID;
    if (!tmp2) {
      tmp2 = id === FAVORITES;
    }
    if (tmp2) {
      const intl = require(1236) /* getSystemLocale */.intl;
      let name = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
    } else {
      name = guild.name;
    }
    return name;
  }
};
export function isFavoritesGuildId(guildId) {
  let tmp = guildId === FAVORITES_RAW_GUILD_ID;
  if (!tmp) {
    tmp = guildId === FAVORITES;
  }
  return tmp;
}
export const isFavoritesGuildCategoryNameValid = function isFavoritesGuildCategoryNameValid(closure_0) {
  return "" !== closure_0.trim();
};
export const isFavoritableChannel = function isFavoritableChannel(record) {
  return !record.isCategory();
};
