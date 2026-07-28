// Module ID: 10351
// Function ID: 79844
// Name: useFavoritesGuildChannelActions
// Dependencies: [1194, 1918, 1351, 10194, 1841, 566, 2]
// Exports: default

// Module 10351 (useFavoritesGuildChannelActions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(id, FavoritesGuildChannelList) {
  let hasAccess;
  let hasHigherPrivileges;
  const _require = id;
  let obj = _require(10194);
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildChannelList);
  ({ hasAccess, hasHigherPrivileges } = favoritesAccess);
  let result = _require(1841).canFavoriteChannelType(id, hasHigherPrivileges);
  const obj2 = _require(1841);
  const items = [closure_4];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.isFavorite(id.id));
  const obj3 = _require(566);
  const isFavoritesGuildSelected = _require(10194).useIsFavoritesGuildSelected();
  const obj4 = _require(10194);
  const items1 = [closure_3, _isNativeReflectConstruct];
  obj = { hasFavoritesAccess: hasAccess };
  if (result) {
    result = obj5.useStateFromStores(items1, () => {
      let isMemberResult = null == id.guild_id;
      if (!isMemberResult) {
        isMemberResult = outer1_3.isMember(id.guild_id, outer1_2.getId());
      }
      return isMemberResult;
    });
  }
  obj.canFavoriteChannel = result;
  obj.isChannelInFavorites = stateFromStores;
  obj.isFavoritesGuild = isFavoritesGuildSelected;
  obj.channelId = id.id;
  return obj;
};
