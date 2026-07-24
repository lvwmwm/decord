// Module ID: 10220
// Function ID: 78916
// Name: computeFavoritesAccess
// Dependencies: [3947, 1849, 1351, 10221, 1386, 1851, 10222, 10223, 566, 1872, 21, 1282, 5077, 2]
// Exports: getFavoritesAccess, useFavorite, useFavoriteAdded, useFavoritedChannelIds, useFavoritesAwareChannel, useFavoritesCategories

// Module 10220 (computeFavoritesAccess)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { useFavoritesNotificationStore as closure_6 } from "useFavoritesNotificationStore";
import { MAX_FAVORITE_CHANNELS } from "date";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function computeFavoritesAccess(hasHigherPrivileges) {
  let isExperimentEnabled;
  let isFreemium;
  let isPremiumTier2;
  ({ isExperimentEnabled, isFreemium, isPremiumTier2 } = hasHigherPrivileges);
  let tmp = isExperimentEnabled;
  if (isExperimentEnabled) {
    let tmp2 = isPremiumTier2;
    if (!isPremiumTier2) {
      tmp2 = isFreemium;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    const obj = { hasAccess: tmp, isExperimentEnabled, hasHigherPrivileges: hasHigherPrivileges.hasHigherPrivileges, favoriteLimit: 0 };
    return obj;
  } else if (isPremiumTier2) {
    let num = MAX_FAVORITE_CHANNELS;
  } else {
    num = 0;
    if (isFreemium) {
      num = require(10222) /* FREE_FAVORITE_LIMIT */.FREE_FAVORITE_LIMIT;
    }
  }
}
function useFavoritesAccess(FavoritesGuildChannelList) {
  let enabled;
  let hasHigherPrivileges;
  let obj = require(10223) /* apexExperiment */;
  obj = { location: FavoritesGuildChannelList };
  const favoritesGuildConfig = obj.useFavoritesGuildConfig(obj);
  const isFreemium = favoritesGuildConfig.isFreemium;
  let tmp2 = undefined !== isFreemium;
  ({ enabled, hasHigherPrivileges } = favoritesGuildConfig);
  if (tmp2) {
    tmp2 = isFreemium;
  }
  const items = [closure_4];
  obj = { isExperimentEnabled: enabled, hasHigherPrivileges, isFreemium: tmp2 };
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getCurrentUser());
  const obj3 = require(566) /* initialize */;
  obj.isPremiumTier2 = importDefault(1872).isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  return computeFavoritesAccess(obj);
}
function useFavorites() {
  const items = [closure_5];
  return require(566) /* initialize */.useStateFromStoresObject(items, () => outer1_5.getFavoriteChannels());
}
function getFavoritesCategories(favoriteChannels) {
  let nickname;
  if (favoriteChannels === undefined) {
    favoriteChannels = favoriteChannels.getFavoriteChannels();
  }
  const items = [{ id: null, name: "" }];
  for (const key10012 in favoriteChannels) {
    let tmp5 = key10012;
    let tmp6 = favoriteChannels[key10012];
    let tmp7 = favoriteChannels;
    let tmp8 = dependencyMap;
    if (tmp6.type !== favoriteChannels(1282).FavoriteChannelType.CATEGORY) {
      continue;
    } else {
      let obj = {};
      ({ id: obj.id, nickname } = tmp6);
      let str = "";
      if (null != nickname) {
        str = nickname;
      }
      obj.name = str;
      let arr = items.push(obj);
      continue;
    }
    continue;
  }
  const sorted = items.sort((arg0, arg1) => {
    let order;
    if (null != favoriteChannels[arg0.id]) {
      order = tmp.order;
    }
    let num = 0;
    if (null != order) {
      num = order;
    }
    let order1;
    if (null != favoriteChannels[arg1.id]) {
      order1 = tmp3.order;
    }
    let num2 = 0;
    if (null != order1) {
      num2 = order1;
    }
    return num - num2;
  });
  return items;
}
function useIsFavoritesGuildSelected() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getGuildId());
  const obj = require(566) /* initialize */;
  return require(5077) /* isFavoritesGuildId */.isFavoritesGuildId(stateFromStores);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export { useFavoritesAccess };
export const getFavoritesAccess = function getFavoritesAccess() {
  let obj = require(10223) /* apexExperiment */;
  const favoritesGuildConfig = obj.getFavoritesGuildConfig({ location: "getFavoritesAccess" });
  const isFreemium = favoritesGuildConfig.isFreemium;
  obj = { isExperimentEnabled: favoritesGuildConfig.enabled, hasHigherPrivileges: favoritesGuildConfig.hasHigherPrivileges };
  let tmp3 = undefined !== isFreemium;
  if (tmp3) {
    tmp3 = isFreemium;
  }
  obj.isFreemium = tmp3;
  obj.isPremiumTier2 = importDefault(1872).isPremiumExactly(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
  return computeFavoritesAccess(obj);
};
export { useFavorites };
export const useFavorite = function useFavorite(arg0) {
  const _require = arg0;
  const items = [closure_5];
  return _require(566).useStateFromStores(items, () => outer1_5.getFavorite(closure_0));
};
export const useFavoritedChannelIds = function useFavoritedChannelIds() {
  const tmp = useFavorites();
  return importDefault(21).keys(tmp);
};
export { getFavoritesCategories };
export const useFavoritesCategories = function useFavoritesCategories() {
  const items = [closure_5];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_12(outer1_5.getFavoriteChannels()));
};
export { useIsFavoritesGuildSelected };
export const useFavoritesAwareChannel = function useFavoritesAwareChannel(isCategory, FavoritesGuildChannelList) {
  const _require = isCategory;
  _require(566);
  [][0] = isCategory;
  if (!tmp) {
    let tmp6 = null;
    if (null != isCategory) {
      tmp6 = isCategory;
    }
    let tmp5 = tmp6;
  } else {
    tmp5 = null;
    if (useFavoritesAccess(FavoritesGuildChannelList).hasAccess) {
      tmp5 = null;
      if (tmp3) {
        if (null != isCategory) {
          tmp5 = null;
        }
      }
    }
  }
  return tmp5;
};
export const useFavoriteAdded = function useFavoriteAdded() {
  return { favoriteAdded: callback((favoriteAdded) => favoriteAdded.favoriteAdded), notifyFavoriteAdded: callback((notifyFavoriteAdded) => notifyFavoriteAdded.notifyFavoriteAdded), clearFavoriteAdded: callback((clearFavoriteAdded) => clearFavoriteAdded.clearFavoriteAdded) };
};
