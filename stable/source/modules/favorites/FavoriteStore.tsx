// Module ID: 5158
// Function ID: 5159
// Name: FavoriteStore
// Dependencies: [1231, 5159, 5168, 1072, 1196, 12, 504, 572, 2]

// Module 5158 (FavoriteStore)
import _mod12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import ChannelRecord from "ChannelRecord" /* 5159 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import FavoritesConstants from "FavoritesConstants" /* 5168 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let FAVORITES_PRUNE_SCOPE_AUTO_ADDED;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
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
        let tmp30 = favoriteChannels[tmp7];
        let sum = num4;
        if (tmp30.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
          sum = num4 + 1;
        }
        let obj5 = { id: tmp7, nickname, type: null, channelType: value, order: tmp30.position, parentId };
        nickname = null;
        if ("" !== tmp30.nickname) {
          nickname = tmp30.nickname;
        }
        ({ type: obj2.type, channelType } = tmp30);
        value = undefined;
        if (channelType != null) {
          value = channelType.value;
        }
        parentId = null;
        if (tmp30.parentId !== FAVORITES_UNCATEGORIZED_PARENT_ID) {
          parentId = tmp30.parentId;
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
  let tmp16 = FAVORITES_AUTO_ADD_THREADS_NEVER;
  let autoAddJoinedThreads;
  if (favorites != null) {
    autoAddJoinedThreads = favorites.autoAddJoinedThreads;
  }
  if (true === autoAddJoinedThreads) {
    tmp16 = favorites.autoAddJoinedThreadsPerGuild ? metroRequire : hasOwnProperty;
  }
  flag2 = undefined;
  if (favorites != null) {
    if (favorites.pruneInactiveThreads != null) {
      flag2 = iter2.value;
    }
  }
  if (flag2 == null) {
    flag2 = true;
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
  const tmp20 = true === prop1 ? metroImportDefault : FAVORITES_PRUNE_SCOPE_AUTO_ADDED;
  let flag3 = flag !== flag || value2 !== value2 || FAVORITES_AUTO_ADD_THREADS_NEVER !== tmp16 || flag2 !== flag2 || FAVORITES_PRUNE_WHEN_ARCHIVED !== prop || FAVORITES_PRUNE_SCOPE_AUTO_ADDED !== tmp20;
  if (!flag3) {
    const obj4 = _mod12;
    flag3 = !obj4.isEqual(obj, obj);
  }
  if (flag3) {
    FAVORITES_AUTO_ADD_THREADS_NEVER = tmp16;
    FAVORITES_PRUNE_WHEN_ARCHIVED = prop;
    FAVORITES_PRUNE_SCOPE_AUTO_ADDED = tmp20;
    flag3 = true;
  }
  return flag3;
}
const createChannelRecord = ChannelRecord.createChannelRecord;
let FAVORITES_AUTO_ADD_THREADS_NEVER = FavoritesConstants.FAVORITES_AUTO_ADD_THREADS_NEVER;
({ FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY: hasOwnProperty, FAVORITES_AUTO_ADD_THREADS_PER_GUILD: metroRequire, FAVORITES_PRUNE_SCOPE_ALL: metroImportDefault, FAVORITES_PRUNE_SCOPE_AUTO_ADDED } = FavoritesConstants);
let FAVORITES_PRUNE_WHEN_ARCHIVED = FavoritesConstants.FAVORITES_PRUNE_WHEN_ARCHIVED;
const FAVORITES_UNCATEGORIZED_PARENT_ID = FavoritesConstants.FAVORITES_UNCATEGORIZED_PARENT_ID;
({ ChannelTypes: unpackModuleId, FAVORITES: closure_12 } = Constants);
let obj = {};
const num2 = 0;
const num = 0;
let flag = false;
let value2 = false;
let flag2 = true;
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
        obj = { id: null, name: nickname, type: unpackModuleId.GUILD_CATEGORY, position: obj[categoryId].order, guild_id };
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
Object.defineProperty(prototype, "autoAddThreadsMode", {
  get: function autoAddThreadsMode() {
    return value2 ? FAVORITES_AUTO_ADD_THREADS_NEVER : FAVORITES_AUTO_ADD_THREADS_NEVER;
  },
  set: undefined
});
Object.defineProperty(prototype, "pruneInactiveThreads", {
  get: function pruneInactiveThreads() {
    return flag2 && value2;
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
