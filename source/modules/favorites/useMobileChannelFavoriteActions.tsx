// Module ID: 10377
// Function ID: 80057
// Name: useMobileChannelFavoriteActions
// Dependencies: [1194, 1917, 1351, 10220, 5077, 566, 2]
// Exports: default

// Module 10377 (useMobileChannelFavoriteActions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/useMobileChannelFavoriteActions.tsx");

export default function useMobileChannelFavoriteActions(id, FavoritesGuildChannelList) {
  let hasAccess;
  let hasHigherPrivileges;
  const _require = id;
  let obj = _require(10220);
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildChannelList);
  ({ hasAccess, hasHigherPrivileges } = favoritesAccess);
  let result = _require(5077).canFavoriteChannelType(id, hasHigherPrivileges);
  const obj2 = _require(5077);
  const items = [closure_4];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.isFavorite(id.id));
  const obj3 = _require(566);
  const isFavoritesGuildSelected = _require(10220).useIsFavoritesGuildSelected();
  const obj4 = _require(10220);
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
