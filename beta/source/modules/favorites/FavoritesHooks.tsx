// Module ID: 9685
// Function ID: 9686
// Name: FavoritesHooks
// Dependencies: [4655, 1372, 2048, 2058, 1374, 9686, 9687, 504, 1970, 11, 1186, 2070, 2]
// Exports: getFavoritesAccess, getFavoritesCategories, useFavorite, useFavoritedChannelIds, useFavorites, useFavoritesAwareChannel, useFavoritesLimitUpsell, useIsFavoritesGuildSelected

// Module 9685 (FavoritesHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1970 */;
import FavoritesConstants from "FavoritesConstants" /* 2058 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import FavoritesGuildExperiment from "FavoritesGuildExperiment" /* 9687 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import UserStore from "UserStore" /* 1372 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const FavoritesLimits = tmp(9686);
const f89196 = () => favoriteChannels.getFavoriteChannels();
const f89197 = () => guildId.getGuildId();
function useFavoritesAccess(FavoritesGuildActionSheet) {
  let currentUser;
  let enabled;
  let isFreemium;
  let str = FavoritesGuildActionSheet;
  if (FavoritesGuildActionSheet === undefined) {
    str = "useFavoritesAccess";
  }
  const obj = FavoritesGuildExperiment;
  const favoritesGuildConfig = obj.useFavoritesGuildConfig({ location: str });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj3.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  let tmp6 = enabled;
  if (tmp6) {
    tmp6 = isPremiumExactlyResult || isFreemium;
  }
  let num = 0;
  if (tmp6) {
    let num2;
    if (isPremiumExactlyResult) {
      num2 = MAX_FAVORITE_CHANNELS;
    } else {
      num2 = 0;
      if (isFreemium) {
        num2 = FavoritesLimits.FREE_FAVORITE_LIMIT;
      }
    }
    num = num2;
  }
  const obj4 = { hasAccess: tmp6, isExperimentEnabled: enabled, isFreemium, favoriteLimit: num, canUpsellFavoriteLimit: enabled };
  if (enabled) {
    enabled = isFreemium;
  }
  if (enabled) {
    enabled = !isPremiumExactlyResult;
  }
  return obj4;
}
const MAX_FAVORITE_CHANNELS = FavoritesConstants.MAX_FAVORITE_CHANNELS;
const PremiumTypes = PremiumConstants.PremiumTypes;
let result = size.fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export { useFavoritesAccess };
export const getFavoritesAccess = function getFavoritesAccess() {
  let enabled;
  let isFreemium;
  const obj = FavoritesGuildExperiment;
  const favoritesGuildConfig = obj.getFavoritesGuildConfig({ location: "getFavoritesAccess" });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const obj2 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj2.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  let tmp5 = enabled;
  if (tmp5) {
    tmp5 = isPremiumExactlyResult || isFreemium;
  }
  let num = 0;
  if (tmp5) {
    let num2;
    if (isPremiumExactlyResult) {
      num2 = MAX_FAVORITE_CHANNELS;
    } else {
      num2 = 0;
      if (isFreemium) {
        num2 = FavoritesLimits.FREE_FAVORITE_LIMIT;
      }
    }
    num = num2;
  }
  const obj3 = { hasAccess: tmp5, isExperimentEnabled: enabled, isFreemium, favoriteLimit: num, canUpsellFavoriteLimit: enabled };
  if (enabled) {
    enabled = isFreemium;
  }
  if (enabled) {
    enabled = !isPremiumExactlyResult;
  }
  return obj3;
};
export const useFavoritesLimitUpsell = function useFavoritesLimitUpsell() {
  let canUpsellFavoriteLimit;
  let favoriteLimit;
  let favoritesCountAgainstLimit;
  ({ canUpsellFavoriteLimit, favoriteLimit } = useFavoritesAccess("useFavoritesLimitUpsell"));
  useFavoritesAccess("useFavoritesLimitUpsell");
  const items = [FavoriteStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit());
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  return { shouldShowUpsell: canUpsellFavoriteLimit, favoriteCount: stateFromStores, favoriteLimit, isAtLimit: favoriteLimit > 0 && stateFromStores >= favoriteLimit };
};
export const useFavorites = function useFavorites() {
  const items = [FavoriteStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, f89196);
};
export const useFavorite = function useFavorite(id) {
  _require = id;
  const items = [FavoriteStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => FavoriteStore.getFavorite(id));
};
export const useFavoritedChannelIds = function useFavoritedChannelIds() {
  let favoriteChannels;
  const items = [FavoriteStore];
  const obj = get_initialized;
  const stateFromStoresObject = obj.useStateFromStoresObject(items, f89196);
  const obj2 = SnowflakeUtilsDefault;
  return obj2.keys(stateFromStoresObject);
};
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
export const useIsFavoritesGuildSelected = function useIsFavoritesGuildSelected() {
  const items = [SelectedGuildStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f89197);
  const obj2 = FavoritesUtils;
  return obj2.isFavoritesGuildId(stateFromStores);
};
export const useFavoritesAwareChannel = function useFavoritesAwareChannel(arg0, FavoritesGuildActionSheet) {
  let closure_0;
  let guildId;
  let tmp7;
  let tmp = arg0;
  _require = arg0;
  const items = [SelectedGuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f89197);
  const obj2 = require("FavoritesUtils");
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(stateFromStores);
  const hasAccess = useFavoritesAccess(FavoritesGuildActionSheet).hasAccess;
  require("get initialized");
  [][0] = arg0;
  if (!isFavoritesGuildIdResult) {
    if (tmp == null) {
      tmp = null;
    }
    tmp7 = tmp;
  } else {
    tmp7 = null;
    if (hasAccess) {
      tmp7 = null;
      if (tmp5) {
        if (tmp != null) {
          tmp.isCategory();
        }
        tmp7 = null;
      }
    }
  }
  return tmp7;
};
