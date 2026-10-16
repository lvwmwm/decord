// Module ID: 10713
// Function ID: 10714
// Name: useFavoritesGuildChannelActions
// Dependencies: [502, 2128, 2071, 558, 576, 2093, 504, 10562, 2]

// Module 10713 (useFavoritesGuildChannelActions)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2128 */;
import FavoriteStore from "FavoriteStore" /* 2071 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildChannelActions(channelId) {
  let stateFromStores1;
  let tmp11;
  let tmp14;
  let tmp6;
  let tmp8;
  _require = channelId;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] !== channelId) {
    const tmpResult = tmp(2093);
    const isFavoritableChannelResult = tmpResult.isFavoritableChannel(channelId);
    cResult[0] = channelId;
    cResult[1] = isFavoritableChannelResult;
    stateFromStores1 = isFavoritableChannelResult;
  } else {
    stateFromStores1 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== channelId.id) {
    const fn = function c() {
      return FavoriteStore.isFavorite(channelId.id);
    };
    cResult[3] = channelId.id;
    cResult[4] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp6, tmp8);
  const tmpResult5 = tmp(10562);
  const isFavoritesGuildSelected = tmpResult5.useIsFavoritesGuildSelected();
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore, AuthenticationStore];
    cResult[5] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== channelId.guild_id) {
    const fn2 = function _() {
      const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
      return isMemberResult;
    };
    cResult[6] = channelId.guild_id;
    cResult[7] = fn2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[7];
  }
  const tmpResult6 = tmp(504);
  if (stateFromStores1) {
    stateFromStores1 = tmpResult6.useStateFromStores(tmp11, tmp14);
  }
  if (cResult[8] === stateFromStores1) {
    if (cResult[9] === channelId.id) {
      if (cResult[10] === stateFromStores) {
        let tmp15;
        if (cResult[11] === isFavoritesGuildSelected) {
          tmp15 = cResult[12];
        }
        return tmp15;
      }
    }
  }
  const obj2 = { canFavoriteChannel: stateFromStores1, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id };
  cResult[8] = stateFromStores1;
  cResult[9] = channelId.id;
  cResult[10] = stateFromStores;
  cResult[11] = isFavoritesGuildSelected;
  cResult[12] = obj2;
  tmp15 = obj2;
}) : (function useFavoritesGuildChannelActions(channelId) {
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
});
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default tmp2;
