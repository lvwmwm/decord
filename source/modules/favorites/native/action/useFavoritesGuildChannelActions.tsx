// Module ID: 10372
// Function ID: 10373
// Name: useFavoritesGuildChannelActions
// Dependencies: [1218, 1942, 1375, 10215, 1865, 589, 2]
// Exports: default

// Module 10372 (useFavoritesGuildChannelActions)
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
let result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(id, FavoritesGuildChannelList) {
  let hasAccess;
  let hasHigherPrivileges;
  const _require = id;
  let obj = _require(10215);
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildChannelList);
  ({ hasAccess, hasHigherPrivileges } = favoritesAccess);
  let result = _require(1865).canFavoriteChannelType(id, hasHigherPrivileges);
  const obj2 = _require(1865);
  const items = [initializeFromUserSettings];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_4.isFavorite(id.id));
  const obj3 = _require(589);
  const isFavoritesGuildSelected = _require(10215).useIsFavoritesGuildSelected();
  const obj4 = _require(10215);
  const items1 = [trackCommunicationDisabled, fetchFingerprint];
  obj = { hasFavoritesAccess: hasAccess, canFavoriteChannel: null, isChannelInFavorites: null, isFavoritesGuild: null, channelId: null };
  if (result) {
    result = obj5.useStateFromStores(items1, () => {
      let isMemberResult = null == id.guild_id;
      if (!isMemberResult) {
        isMemberResult = outer1_3.isMember(tmp.guild_id, outer1_2.getId());
      }
      return isMemberResult;
    });
  }
  obj[1] = result;
  obj[2] = stateFromStores;
  obj[3] = isFavoritesGuildSelected;
  obj[4] = id.id;
  return obj;
};
