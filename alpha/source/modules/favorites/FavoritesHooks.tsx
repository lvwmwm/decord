// Module ID: 10832
// Function ID: 10833
// Name: FavoritesHooks
// Dependencies: [5045, 1383, 4866, 4876, 1385, 10833, 504, 1983, 11, 1196, 4888, 2]
// Exports: getFavoritesCategories, getFavoritesLimits, useFavorite, useFavoritedChannelIds, useFavorites, useFavoritesAwareChannel, useFavoritesLimitUpsell, useIsFavoritesGuildSelected

// Module 10832 (FavoritesHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1983 */;
import FavoritesConstants from "FavoritesConstants" /* 4876 */;
import FavoritesUtils from "FavoritesUtils" /* 4888 */;
import FavoritesLimits from "FavoritesLimits" /* 10833 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import UserStore from "UserStore" /* 1383 */;
import FavoriteStore from "FavoriteStore" /* 4866 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f98164 = () => favoriteChannels.getFavoriteChannels();
const f98165 = () => guildId.getGuildId();
const MAX_FAVORITE_CHANNELS = FavoritesConstants.MAX_FAVORITE_CHANNELS;
const PremiumTypes = PremiumConstants.PremiumTypes;
let result = size.fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export function getFavoritesLimits() {
  let FREE_FAVORITE_LIMIT;
  const obj = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
  } else {
    FREE_FAVORITE_LIMIT = FavoritesLimits.FREE_FAVORITE_LIMIT;
  }
  return { favoriteLimit: FREE_FAVORITE_LIMIT, canUpsellFavoriteLimit: !isPremiumExactlyResult };
}
export function useFavoritesLimitUpsell() {
  let FREE_FAVORITE_LIMIT;
  let currentUser;
  let favoritesCountAgainstLimit;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj2.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
  } else {
    FREE_FAVORITE_LIMIT = tmp(10833).FREE_FAVORITE_LIMIT;
  }
  let flag = !isPremiumExactlyResult;
  const items1 = [FavoriteStore];
  const tmpResult = get_initialized;
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit());
  if (!isPremiumExactlyResult) {
    flag = true;
  }
  return { shouldShowUpsell: flag, favoriteCount: stateFromStores1, favoriteLimit: FREE_FAVORITE_LIMIT, isAtLimit: stateFromStores1 >= FREE_FAVORITE_LIMIT };
}
export function useFavorites() {
  const items = [FavoriteStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, f98164);
}
export function useFavorite(arg0) {
  let closure_0;
  _require = arg0;
  const items = [FavoriteStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => FavoriteStore.getFavorite(closure_0));
}
export function useFavoritedChannelIds() {
  let favoriteChannels;
  const items = [FavoriteStore];
  const obj = get_initialized;
  const stateFromStoresObject = obj.useStateFromStoresObject(items, f98164);
  const obj2 = SnowflakeUtilsDefault;
  return obj2.keys(stateFromStoresObject);
}
export function getFavoritesCategories(favoriteChannels) {
  let nickname;
  if (favoriteChannels === undefined) {
    const tmp2 = FavoriteStore;
    favoriteChannels = FavoriteStore.getFavoriteChannels();
  }
  const items = [{ id: null, name: "" }];
  for (const key10010 in favoriteChannels) {
    let tmp6 = favoriteChannels[key10010];
    if (tmp6.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
      continue;
    } else {
      let obj = { id: null, name: nickname };
      ({ id: obj.id, nickname } = tmp6);
      let push = items.push;
      if (nickname == null) {
        nickname = "";
      }
      let arr = push(obj);
      continue;
    }
    continue;
  }
  const sorted = items.sort((arg0, arg1) => {
    let num;
    const tmp = favoriteChannels;
    if (favoriteChannels[arg0.id] != null) {
      num = tmp2.order;
    }
    if (num == null) {
      num = 0;
    }
    let num2;
    if (tmp[arg1.id] != null) {
      num2 = tmp3.order;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  });
  return items;
}
export function useIsFavoritesGuildSelected() {
  const items = [SelectedGuildStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f98165);
  const obj2 = FavoritesUtils;
  return obj2.isFavoritesGuildId(stateFromStores);
}
export function useFavoritesAwareChannel(arg0) {
  let closure_0;
  let guildId;
  let tmp7;
  let tmp = arg0;
  _require = arg0;
  const items = [SelectedGuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f98165);
  const obj2 = require("FavoritesUtils");
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(stateFromStores);
  require("get initialized");
  [][0] = arg0;
  if (!isFavoritesGuildIdResult) {
    if (tmp == null) {
      tmp = null;
    }
    tmp7 = tmp;
  } else {
    tmp7 = null;
    if (tmp5) {
      if (tmp != null) {
        tmp.isCategory();
      }
      tmp7 = null;
    }
  }
  return tmp7;
}
