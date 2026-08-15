// Module ID: 10515
// Function ID: 10516
// Name: useFavoritesGuildChannelActions
// Dependencies: [1218, 1990, 1394, 9979, 1913, 589, 9990, 2]
// Exports: default

// Module 10515 (useFavoritesGuildChannelActions)
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
const result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildActionSheet) {
  let hasAccess;
  let isExperimentEnabled;
  const _require = channelId;
  let obj = _require(9979);
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildActionSheet);
  ({ hasAccess, isExperimentEnabled } = favoritesAccess);
  let isFavoritableChannelResult = _require(1913).isFavoritableChannel(channelId);
  const obj2 = _require(1913);
  const tmp = _require;
  const items = [initializeFromUserSettings];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_4.isFavorite(channelId.id));
  const obj3 = _require(589);
  const isFavoritesGuildSelected = _require(9979).useIsFavoritesGuildSelected();
  const obj4 = _require(9979);
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
  let tmp7 = hasAccess;
  if (hasAccess) {
    tmp7 = isFavoritableChannelResult;
  }
  if (tmp7) {
    tmp7 = !stateFromStores;
  }
  if (tmp7) {
    tmp7 = !isFavoritesGuildSelected;
  }
  const favoritesBetaTagDismissibleContent = tmp(9990).useFavoritesBetaTagDismissibleContent(tmp7);
  obj = { isExperimentEnabled, hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
  return obj;
};
