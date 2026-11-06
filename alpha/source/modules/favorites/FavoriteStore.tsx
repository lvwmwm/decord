// Module ID: 5022
// Function ID: 5023
// Name: FavoriteStore
// Dependencies: [1231, 5023, 5032, 1072, 1196, 12, 504, 572, 2]

// Module 5022 (FavoriteStore)
import _mod12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import ChannelRecord from "ChannelRecord" /* 5023 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import FavoritesConstants from "FavoritesConstants" /* 5032 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let FAVORITES_PRUNE_SCOPE_AUTO_ADDED;
let c9;
let closure_4;
let metroImportAll;
function initializeFromUserSettings() {
  let channelType;
  let nickname;
  let parentId;
  let value;
  const favorites = UserSettingsProtoStore.settings.favorites;
  flag = undefined;
  if (favorites != null) {
    flag = favorites.muted;
  }
  if (flag == null) {
    flag = false;
  }
  let favoriteChannels;
  if (favorites != null) {
    favoriteChannels = favorites.favoriteChannels;
  }
  obj = {};
  if (null != favoriteChannels) {
    let num4 = 0;
    let num5 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp28 = favoriteChannels[tmp7];
        let sum = num4;
        if (tmp28.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
          sum = num4 + 1;
        }
        let obj5 = { id: tmp7, nickname, type: null, channelType: value, order: tmp28.position, parentId };
        nickname = null;
        if ("" !== tmp28.nickname) {
          nickname = tmp28.nickname;
        }
        ({ type: obj2.type, channelType } = tmp28);
        value = undefined;
        if (channelType != null) {
          value = channelType.value;
        }
        parentId = null;
        if (tmp28.parentId !== FAVORITES_UNCATEGORIZED_PARENT_ID) {
          parentId = tmp28.parentId;
        }
        num5 = num5 + 1;
        obj[tmp7] = obj5;
        num4 = sum;
        continue;
      }
    }
  }
  value2 = undefined;
  if (favorites != null) {
    if (favorites.guildVisible != null) {
      value2 = iter.value;
    }
  }
  if (value2 == null) {
    const obj3 = _mod12;
    value2 = !obj3.isEmpty(obj);
  }
  flag2 = undefined;
  if (favorites != null) {
    flag2 = favorites.autoAddJoinedThreads;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  flag3 = undefined;
  if (favorites != null) {
    if (favorites.pruneInactiveThreads != null) {
      flag3 = iter2.value;
    }
  }
  if (flag3 == null) {
    flag3 = true;
  }
  let prop;
  if (favorites != null) {
    prop = favorites.pruneInactiveThreadsDays;
  }
  if (prop == null) {
    prop = FAVORITES_PRUNE_WHEN_ARCHIVED;
  }
  let prop1;
  if (favorites != null) {
    prop1 = favorites.pruneAllFavoritedThreads;
  }
  const tmp18 = true === prop1 ? React3 : FAVORITES_PRUNE_SCOPE_AUTO_ADDED;
  let flag4 = flag !== flag || value2 !== value2 || flag2 !== flag2 || flag3 !== flag3 || FAVORITES_PRUNE_WHEN_ARCHIVED !== prop || FAVORITES_PRUNE_SCOPE_AUTO_ADDED !== tmp18;
  if (!flag4) {
    const obj4 = _mod12;
    flag4 = !obj4.isEqual(obj, obj);
  }
  if (flag4) {
    FAVORITES_PRUNE_WHEN_ARCHIVED = prop;
    FAVORITES_PRUNE_SCOPE_AUTO_ADDED = tmp18;
    flag4 = true;
  }
  return flag4;
}
const createChannelRecord = ChannelRecord.createChannelRecord;
({ FAVORITES_PRUNE_SCOPE_ALL: closure_4, FAVORITES_PRUNE_SCOPE_AUTO_ADDED } = FavoritesConstants);
let FAVORITES_PRUNE_WHEN_ARCHIVED = FavoritesConstants.FAVORITES_PRUNE_WHEN_ARCHIVED;
const FAVORITES_UNCATEGORIZED_PARENT_ID = FavoritesConstants.FAVORITES_UNCATEGORIZED_PARENT_ID;
({ ChannelTypes: metroImportAll, FAVORITES: c9 } = Constants);
let obj = {};
const num2 = 0;
const num = 0;
let flag = false;
let value2 = false;
let flag2 = false;
let flag3 = true;
const Store = get_initializedDefault.Store;
class FavoriteStore extends Store {
  initialize() {
    this.waitFor(UserSettingsProtoStore);
    initializeFromUserSettings();
    const items = [UserSettingsProtoStore];
    this.syncWith(items, initializeFromUserSettings);
  }
  getFavoriteChannels() {
    return obj;
  }
  isFavorite(arg0) {
    return null != arg0 && null != obj[arg0];
  }
  isChannelOrParentFavorited(channel) {
    const self = this;
    let isFavoriteResult = this.isFavorite(channel.id);
    if (!isFavoriteResult) {
      isFavoriteResult = channel.isThread() && self.isFavorite(channel.parent_id);
      channel.isThread() && self.isFavorite(channel.parent_id);
    }
    return isFavoriteResult;
  }
  getFavorite(categoryId) {
    if (null != categoryId) {
      return obj[categoryId];
    }
  }
  getCategoryRecord(categoryId) {
    let nickname;
    let tmp = null;
    if (categoryId in obj) {
      tmp = null;
      if (obj[categoryId].type === preloaded_user_settings.FavoriteChannelType.CATEGORY) {
        obj = { id: null, name: nickname, type: metroImportAll.GUILD_CATEGORY, position: obj[categoryId].order, guild_id };
        ({ id: obj.id, nickname } = obj[categoryId]);
        const tmp7 = createChannelRecord;
        if (nickname == null) {
          nickname = "";
        }
        tmp = tmp7(obj);
      }
    }
    return tmp;
  }
  getNickname(categoryId) {
    const favorite = this.getFavorite(categoryId);
    let nickname;
    if (favorite != null) {
      nickname = favorite.nickname;
    }
    return nickname;
  }
  getFavoritesCount() {
    return num2;
  }
  getFavoritesCountAgainstLimit() {
    return num;
  }
  hasStoredFavorites() {
    obj = _mod12;
    return !obj.isEmpty(this.getFavoriteChannels());
  }
}
const prototype = FavoriteStore.prototype;
Object.defineProperty(prototype, "favoriteGuildMuted", {
  get: function favoriteGuildMuted() {
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "favoriteGuildEnabled", {
  get: function favoriteGuildEnabled() {
    return value2;
  },
  set: undefined
});
Object.defineProperty(prototype, "autoAddJoinedThreads", {
  get: function autoAddJoinedThreads() {
    return flag2 && value2;
  },
  set: undefined
});
Object.defineProperty(prototype, "pruneInactiveThreads", {
  get: function pruneInactiveThreads() {
    return flag3 && value2;
  },
  set: undefined
});
Object.defineProperty(prototype, "pruneInactiveThreadsDays", {
  get: function pruneInactiveThreadsDays() {
    return FAVORITES_PRUNE_WHEN_ARCHIVED;
  },
  set: undefined
});
Object.defineProperty(prototype, "pruneInactiveThreadsScope", {
  get: function pruneInactiveThreadsScope() {
    return FAVORITES_PRUNE_SCOPE_AUTO_ADDED;
  },
  set: undefined
});
FavoriteStore.displayName = "FavoriteStore";
const favoriteStore = new FavoriteStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default favoriteStore;
