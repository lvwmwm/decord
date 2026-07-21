// Module ID: 10335
// Function ID: 79767
// Name: useFavoritesAccess
// Dependencies: []
// Exports: useFavorite, useFavoriteAdded, useFavoritedChannelIds, useFavoritesAwareChannel, useFavoritesCategories

// Module 10335 (useFavoritesAccess)
function useFavoritesAccess(FavoritesGuildChannelList) {
  let obj = arg1(dependencyMap[5]);
  obj = { location: FavoritesGuildChannelList };
  const favoritesGuildConfig = obj.useFavoritesGuildConfig(obj);
  const enabled = favoritesGuildConfig.enabled;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = arg1(dependencyMap[6]);
  obj = {};
  let isPremiumExactlyResult = enabled;
  if (enabled) {
    isPremiumExactlyResult = obj4.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  }
  obj.hasAccess = isPremiumExactlyResult;
  obj.isExperimentEnabled = enabled;
  obj.hasHigherPrivileges = favoritesGuildConfig.hasHigherPrivileges;
  return obj;
}
function useFavorites() {
  const items = [closure_5];
  return arg1(dependencyMap[6]).useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
}
function getFavoritesCategories(favoriteChannels) {
  let nickname;
  if (favoriteChannels === undefined) {
    favoriteChannels = favoriteChannels.getFavoriteChannels();
  }
  const arg1 = favoriteChannels;
  const items = [{}];
  for (const key10012 in favoriteChannels) {
    let tmp5 = key10012;
    let tmp6 = favoriteChannels[key10012];
    let tmp7 = closure_0;
    let tmp8 = closure_2;
    if (tmp6.type !== closure_0(closure_2[9]).FavoriteChannelType.CATEGORY) {
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
      // continue
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
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => guildId.getGuildId());
  const obj = arg1(dependencyMap[6]);
  return arg1(dependencyMap[10]).isFavoritesGuildId(stateFromStores);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).useFavoritesNotificationStore;
const PremiumTypes = arg1(dependencyMap[4]).PremiumTypes;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export { useFavoritesAccess };
export { useFavorites };
export const useFavorite = function useFavorite(arg0) {
  const arg1 = arg0;
  const items = [closure_5];
  return arg1(dependencyMap[6]).useStateFromStores(items, () => favorite.getFavorite(arg0));
};
export const useFavoritedChannelIds = function useFavoritedChannelIds() {
  const tmp = useFavorites();
  return importDefault(dependencyMap[8]).keys(tmp);
};
export { getFavoritesCategories };
export const useFavoritesCategories = function useFavoritesCategories() {
  const items = [closure_5];
  return arg1(dependencyMap[6]).useStateFromStores(items, () => callback(favoriteChannels.getFavoriteChannels()));
};
export { useIsFavoritesGuildSelected };
export const useFavoritesAwareChannel = function useFavoritesAwareChannel(isCategory, FavoritesGuildChannelList) {
  FavoritesGuildChannelList = isCategory;
  FavoritesGuildChannelList(dependencyMap[6]);
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
