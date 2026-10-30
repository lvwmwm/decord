// Module ID: 11124
// Function ID: 11125
// Name: useFavoritesGuildChannelActions
// Dependencies: [502, 4921, 4861, 4883, 504, 10812, 2]
// Exports: default

// Module 11124 (useFavoritesGuildChannelActions)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import FavoriteStore from "FavoriteStore" /* 4861 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId) {
  _require = channelId;
  const obj = require("FavoritesUtils");
  let isFavoritableChannelResult = obj.isFavoritableChannel(channelId);
  const items = [FavoriteStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => FavoriteStore.isFavorite(channelId.id));
  const obj3 = require("FavoritesHooks");
  const isFavoritesGuildSelected = obj3.useIsFavoritesGuildSelected();
  const items1 = [GuildMemberStore, AuthenticationStore];
  const obj4 = require("get initialized");
  if (isFavoritableChannelResult) {
    isFavoritableChannelResult = obj4.useStateFromStores(items1, () => {
      const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
      return isMemberResult;
    });
  }
  return { canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id };
};
