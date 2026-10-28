// Module ID: 10884
// Function ID: 10885
// Name: FavoritesHooks
// Dependencies: [5035, 1389, 4859, 4869, 1391, 10885, 558, 576, 504, 1988, 11, 1208, 4881, 2]
// Exports: getFavoritesCategories, getFavoritesLimits

// Module 10884 (FavoritesHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1988 */;
import FavoritesConstants from "FavoritesConstants" /* 4869 */;
import FavoritesUtils from "FavoritesUtils" /* 4881 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5035 */;
import UserStore from "UserStore" /* 1389 */;
import FavoriteStore from "FavoriteStore" /* 4859 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const FavoritesLimits = tmp(10885);
const MAX_FAVORITE_CHANNELS = FavoritesConstants.MAX_FAVORITE_CHANNELS;
const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesLimits() {
  let currentUser;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let FREE_FAVORITE_LIMIT;
    const obj3 = PremiumTypeUtilsDefault;
    const isPremiumExactlyResult = obj3.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
    if (isPremiumExactlyResult) {
      FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
    } else {
      FREE_FAVORITE_LIMIT = tmp(10885).FREE_FAVORITE_LIMIT;
    }
    const obj2 = { favoriteLimit: FREE_FAVORITE_LIMIT, canUpsellFavoriteLimit: !isPremiumExactlyResult };
    cResult[2] = stateFromStores;
    cResult[3] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function useFavoritesLimits() {
  let FREE_FAVORITE_LIMIT;
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj2.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
  } else {
    FREE_FAVORITE_LIMIT = FavoritesLimits.FREE_FAVORITE_LIMIT;
  }
  return { favoriteLimit: FREE_FAVORITE_LIMIT, canUpsellFavoriteLimit: !isPremiumExactlyResult };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesLimitUpsell() {
  let canUpsellFavoriteLimit;
  let favoriteLimit;
  let favoritesCountAgainstLimit;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(7);
  ({ canUpsellFavoriteLimit, favoriteLimit } = closure_8());
  closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function a() {
      return favoritesCountAgainstLimit.getFavoritesCountAgainstLimit();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === favoriteLimit) {
      if (cResult[4] === canUpsellFavoriteLimit) {
        let tmp10;
        if (cResult[5] === stateFromStores >= favoriteLimit) {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
    }
  }
  const obj2 = { shouldShowUpsell: canUpsellFavoriteLimit, favoriteCount: stateFromStores, favoriteLimit, isAtLimit: stateFromStores >= favoriteLimit };
  cResult[2] = stateFromStores;
  cResult[3] = favoriteLimit;
  cResult[4] = canUpsellFavoriteLimit;
  cResult[5] = stateFromStores >= favoriteLimit;
  cResult[6] = obj2;
  tmp10 = obj2;
}) : (function useFavoritesLimitUpsell() {
  let canUpsellFavoriteLimit;
  let favoriteLimit;
  let favoritesCountAgainstLimit;
  ({ canUpsellFavoriteLimit, favoriteLimit } = closure_8());
  closure_8();
  const items = [FavoriteStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit());
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  return { shouldShowUpsell: canUpsellFavoriteLimit, favoriteCount: stateFromStores, favoriteLimit, isAtLimit: stateFromStores >= favoriteLimit };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavorites() {
  let favoriteChannels;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function a() {
      return favoriteChannels.getFavoriteChannels();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresObject(tmp4, tmp5);
}) : (function useFavorites() {
  let favoriteChannels;
  const items = [FavoriteStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
});
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavorite(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return FavoriteStore.getFavorite(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useFavorite(arg0) {
  let closure_0;
  _require = arg0;
  const items = [FavoriteStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => FavoriteStore.getFavorite(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritedChannelIds() {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const tmp3 = closure_9();
  if (cResult[0] !== tmp3) {
    const obj2 = SnowflakeUtilsDefault;
    const keys = obj2.keys(tmp3);
    cResult[0] = tmp3;
    cResult[1] = keys;
    tmp4 = keys;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useFavoritedChannelIds() {
  const tmp = closure_9();
  const obj = SnowflakeUtilsDefault;
  return obj.keys(tmp);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoritesGuildSelected() {
  let guildId;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function o() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const tmpResult2 = FavoritesUtils;
    const isFavoritesGuildIdResult = tmpResult2.isFavoritesGuildId(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isFavoritesGuildIdResult;
    tmp8 = isFavoritesGuildIdResult;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function useIsFavoritesGuildSelected() {
  let guildId;
  const items = [SelectedGuildStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  const obj2 = FavoritesUtils;
  return obj2.isFavoritesGuildId(stateFromStores);
});
let closure_10 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesAwareChannel(arg0) {
  let closure_0;
  let tmp13;
  let tmp = arg0;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp2 = _require;
  const tmp5 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp) {
    const fn = function s() {
      const result = null != closure_0 && FavoriteStore.isChannelOrParentFavorited(tmp);
      return result;
    };
    const items1 = [tmp];
    cResult[1] = tmp;
    cResult[2] = fn;
    cResult[3] = items1;
  }
  tmp2(504);
  if (!tmp5) {
    if (tmp == null) {
      tmp = null;
    }
    tmp13 = tmp;
  } else {
    tmp13 = null;
    if (tmp11) {
      if (tmp != null) {
        tmp.isCategory();
      }
      tmp13 = null;
    }
  }
  return tmp13;
}) : (function useFavoritesAwareChannel(arg0) {
  let closure_0;
  let tmp6;
  let tmp = arg0;
  _require = arg0;
  const tmp2 = closure_10();
  require("get initialized");
  [][0] = arg0;
  if (!tmp2) {
    if (tmp == null) {
      tmp = null;
    }
    tmp6 = tmp;
  } else {
    tmp6 = null;
    if (tmp4) {
      if (tmp != null) {
        tmp.isCategory();
      }
      tmp6 = null;
    }
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export const getFavoritesLimits = function getFavoritesLimits() {
  let FREE_FAVORITE_LIMIT;
  const obj = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
  } else {
    FREE_FAVORITE_LIMIT = FavoritesLimits.FREE_FAVORITE_LIMIT;
  }
  return { favoriteLimit: FREE_FAVORITE_LIMIT, canUpsellFavoriteLimit: !isPremiumExactlyResult };
};
export const useFavoritesLimitUpsell = tmp2;
export const useFavorites = tmp3;
export const useFavorite = tmp4;
export const useFavoritedChannelIds = tmp5;
export const getFavoritesCategories = function getFavoritesCategories(favoriteChannels) {
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
};
export const useIsFavoritesGuildSelected = tmp6;
export const useFavoritesAwareChannel = tmp7;
