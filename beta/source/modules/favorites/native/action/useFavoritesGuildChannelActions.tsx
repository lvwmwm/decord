// Module ID: 10437
// Function ID: 10438
// Name: useFavoritesGuildChannelActions
// Dependencies: [502, 2108, 2048, 9685, 2070, 504, 9703, 2]
// Exports: default

// Module 10437 (useFavoritesGuildChannelActions)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildActionSheet) {
  let hasAccess;
  let isExperimentEnabled;
  _require = channelId;
  const tmp = _require;
  const obj = require("FavoritesHooks");
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildActionSheet);
  ({ hasAccess, isExperimentEnabled } = favoritesAccess);
  const obj2 = require("FavoritesUtils");
  let isFavoritableChannelResult = obj2.isFavoritableChannel(channelId);
  const items = [FavoriteStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => FavoriteStore.isFavorite(channelId.id));
  const obj4 = require("FavoritesHooks");
  const isFavoritesGuildSelected = obj4.useIsFavoritesGuildSelected();
  const items1 = [GuildMemberStore, AuthenticationStore];
  const obj5 = require("get initialized");
  if (isFavoritableChannelResult) {
    isFavoritableChannelResult = obj5.useStateFromStores(items1, () => {
      const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
      return isMemberResult;
    });
  }
  let tmp8 = hasAccess;
  const useFavoritesBetaTagDismissibleContent = tmp(9703).useFavoritesBetaTagDismissibleContent;
  tmp(9703);
  if (hasAccess) {
    tmp8 = isFavoritableChannelResult;
  }
  if (tmp8) {
    tmp8 = !stateFromStores;
  }
  if (tmp8) {
    tmp8 = !isFavoritesGuildSelected;
  }
  const favoritesBetaTagDismissibleContent = useFavoritesBetaTagDismissibleContent(tmp8);
  return { isExperimentEnabled, hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
};
