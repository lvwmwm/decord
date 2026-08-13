// Module ID: 10242
// Function ID: 10243
// Name: useFavoritesGuildChannelActions
// Dependencies: [1218, 1990, 1394, 9759, 1913, 589, 9769, 2]
// Exports: default

// Module 10242 (useFavoritesGuildChannelActions)
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
const result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildActionSheet) {
  const _require = channelId;
  let obj = _require(9759);
  const hasAccess = obj.useFavoritesAccess(FavoritesGuildActionSheet).hasAccess;
  let isFavoritableChannelResult = _require(1913).isFavoritableChannel(channelId);
  const obj2 = _require(1913);
  const tmp = _require;
  const items = [initializeFromUserSettings];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_4.isFavorite(channelId.id));
  const obj3 = _require(589);
  const isFavoritesGuildSelected = _require(9759).useIsFavoritesGuildSelected();
  const obj4 = _require(9759);
  const items1 = [trackCommunicationDisabled, fetchFingerprint];
  if (isFavoritableChannelResult) {
    isFavoritableChannelResult = obj5.useStateFromStores(items1, () => {
      let isMemberResult = null == channelId.guild_id;
      if (!isMemberResult) {
        isMemberResult = outer1_3.isMember(tmp.guild_id, outer1_2.getId());
      }
      return isMemberResult;
    });
  }
  obj5 = _require(589);
  let tmp6 = hasAccess;
  if (hasAccess) {
    tmp6 = isFavoritableChannelResult;
  }
  if (tmp6) {
    tmp6 = !stateFromStores;
  }
  if (tmp6) {
    tmp6 = !isFavoritesGuildSelected;
  }
  const favoritesBetaTagDismissibleContent = tmp(9769).useFavoritesBetaTagDismissibleContent(tmp6);
  obj = { hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
  return obj;
};
