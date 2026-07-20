// Module ID: 10174
// Function ID: 78604
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: addFavoriteCategory, addFavoriteChannel, removeFavoriteCategory, setAllFavoriteCategoriesCollapsed, setFavoriteCategoryCollapsed, setFavoriteChannelNickname, setFavoritesGuildVisibility, toggleFavoriteGuildMuted, updateFavoriteChannelParent, updateFavoriteChannels

// Module 10174 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      require = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getNextPositionFromChannels(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp6 = tmp4;
      let tmp7 = arg0[tmp4];
      let tmp5 = null != tmp7 && null != tmp7.position;
      if (!tmp5) {
        continue;
      } else {
        let _Math = Math;
        num = Math.max(tmp3, tmp7.position);
        // continue
      }
      continue;
    }
  }
  return num2 + 1;
}
function cleanFavoriteChannels(obj) {
  for (const key10010 in arg0) {
    let tmp19 = key10010;
    let tmp20 = arg0[key10010];
    if (null != tmp20) {
      let tmp = closure_0;
      let tmp2 = closure_2;
      if (tmp20.type === closure_0(closure_2[6]).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp3 = closure_4;
        let channel = closure_4.getChannel(key10010);
        if (null != channel) {
          if (null == tmp20.channelType) {
            let tmp12 = closure_0;
            let tmp13 = closure_2;
            let UInt32Value = closure_0(closure_2[7]).UInt32Value;
            obj = { value: channel.type };
            tmp20.channelType = UInt32Value.create(obj);
          }
          let isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
            let tmp15 = closure_5;
            let tmp16 = closure_9;
            isPrivateResult = closure_5.can(closure_9.VIEW_CHANNEL, channel);
          }
          let tmp17 = channel;
          if (isPrivateResult) {
            continue;
          } else {
            delete r13[r15];
            let tmp18 = channel;
            // continue
          }
          continue;
        } else {
          let iter = tmp20.channelType;
          let value;
          if (null != iter) {
            value = iter.value;
          }
          if (null == value) {
            delete r13[r15];
            let tmp9 = channel;
            let tmp10 = iter;
            let tmp11 = value;
            // continue
          } else {
            let tmp5 = closure_3;
            let tmp6 = channel;
            let tmp7 = iter;
            let tmp8 = value;
          }
          continue;
        }
        continue;
      }
      continue;
    } else {
      delete r13[r15];
      // continue
    }
    continue;
  }
}
function cleanupChannelParentId(arg0, arg1) {
  if (null != arg0[arg1]) {
    if (tmp.parentId !== closure_7) {
      let tmp3 = null;
      if (null != tmp.parentId) {
        tmp3 = arg0[tmp.parentId];
      }
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = tmp3.type === require(dependencyMap[6]).FavoriteChannelType.CATEGORY;
      }
      if (!tmp4) {
        tmp.parentId = closure_7;
      }
    }
  }
}
function hasReachedLimit(arg0) {
  cleanFavoriteChannels(arg0);
  return importDefault(dependencyMap[8]).size(arg0) >= closure_8;
}
function showLimitReachedAlert() {
  let obj = importDefault(dependencyMap[9]);
  obj = {};
  const intl = require(dependencyMap[10]).intl;
  obj.title = intl.string(require(dependencyMap[10]).t.+XYXtZ);
  const intl2 = require(dependencyMap[10]).intl;
  obj = { count: closure_8 };
  obj.body = intl2.formatToPlainString(require(dependencyMap[10]).t.JaIyFi, obj);
  obj.show(obj);
}
function onSaveFailed() {
  let obj = importDefault(dependencyMap[9]);
  obj = {};
  const intl = require(dependencyMap[10]).intl;
  obj.title = intl.string(require(dependencyMap[10]).t.iufib1);
  const intl2 = require(dependencyMap[10]).intl;
  obj.body = intl2.string(require(dependencyMap[10]).t.eAn6z2);
  obj.onCloseCallback = function onCloseCallback(arg0) {
    const _location = window.location;
    _location.reload();
  };
  obj.show(obj);
}
function getFavoritesCount(arg0) {
  return Object.keys(arg0).length;
}
function getAnalyticsChannelType(id, type) {
  let tmp = null;
  if (type !== require(dependencyMap[6]).FavoriteChannelType.CATEGORY) {
    const channel = channel.getChannel(id);
    type = undefined;
    if (null != channel) {
      type = channel.type;
    }
    let tmp6 = null;
    if (null != type) {
      tmp6 = type;
    }
    tmp = tmp6;
  }
  return tmp;
}
function addFavoriteChannels(items, arg1, channel_context_menu) {
  let str = channel_context_menu;
  const require = arg1;
  if (channel_context_menu === undefined) {
    str = "channel_context_menu";
  }
  const importDefault = str;
  let dependencyMap;
  const found = items.filter((arg0) => !favorite.isFavorite(arg0));
  dependencyMap = found;
  if (0 !== found.length) {
    const PreloadedUserSettingsActionCreators = require(dependencyMap[11]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      const tmp = callback(found);
      const iter = tmp();
      let iter2 = iter;
      let flag = false;
      if (!iter.done) {
        const value = iter2.value;
        while (!callback5(favoriteChannels.favoriteChannels)) {
          let tmp4 = channel;
          let channel = channel.getChannel(value);
          let tmp6 = arg1;
          let tmp7 = found;
          let FavoriteChannel = arg1(found[6]).FavoriteChannel;
          let obj = { nickname: "", type: arg1(found[6]).FavoriteChannelType.REFERENCE_ORIGINAL };
          obj = undefined;
          if (null != channel) {
            let tmp9 = arg1;
            let tmp10 = found;
            let UInt32Value = arg1(found[7]).UInt32Value;
            obj = { value: channel.type };
            obj = UInt32Value.create(obj);
          }
          obj.channelType = obj;
          let tmp11 = callback2;
          obj.position = callback2(favoriteChannels.favoriteChannels);
          let tmp12 = arg1;
          obj.parentId = null != arg1 ? arg1 : closure_7;
          favoriteChannels.favoriteChannels[value] = FavoriteChannel.create(obj);
          let tmp13 = callback3;
          let tmp14 = callback3(favoriteChannels.favoriteChannels);
          let tmp15 = callback4;
          let tmp16 = callback4(favoriteChannels.favoriteChannels, value);
          let tmp17 = arg1;
          let tmp18 = found;
          let obj3 = arg1(found[12]);
          let tmp19 = str;
          let tmp20 = callback8;
          let tmp22 = callback7;
          let tmp21 = callback8(value, arg1(found[6]).FavoriteChannelType.REFERENCE_ORIGINAL);
          let result = obj3.trackFavoritesGuildAddToFavorites(str, tmp21, callback7(favoriteChannels.favoriteChannels));
          let iter3 = tmp();
          iter2 = iter3;
          flag = true;
        }
        callback6();
        if (!flag) {
          return false;
        }
      }
    }, require(dependencyMap[11]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
}
function removeFavoriteChannel(id, arg1) {
  let obj = arg1;
  const require = id;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.trackAnalytics;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let dependencyMap;
  let THREAD_CHANNEL_TYPES;
  const favorite = store.getFavorite(id);
  dependencyMap = favorite;
  if (null != favorite) {
    let tmp2 = null;
    if (flag) {
      tmp2 = getAnalyticsChannelType(id, favorite.type);
    }
    THREAD_CHANNEL_TYPES = tmp2;
    const PreloadedUserSettingsActionCreators = require(dependencyMap[11]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      delete r3[r0];
      if (favorite.type === favoriteChannels(favorite[6]).FavoriteChannelType.CATEGORY) {
        for (const key10015 in arg0.favoriteChannels) {
          let tmp8 = key10015;
          let tmp9 = closure_0;
          if (arg0.favoriteChannels[key10015].parentId !== closure_0) {
            continue;
          } else {
            let tmp = closure_7;
            arg0.favoriteChannels[key10015].parentId = closure_7;
            // continue
          }
          continue;
        }
      }
      const tmp2 = callback(favoriteChannels.favoriteChannels);
      if (flag) {
        const result = favoriteChannels(favorite[12]).trackFavoritesGuildRemoveFromFavorites(tmp2, callback2(favoriteChannels.favoriteChannels));
        const obj = favoriteChannels(favorite[12]);
      }
    }, require(dependencyMap[11]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  }
}
function setProtoFavoriteCategoryCollapsed(type, collapsed) {
  let flag = null != type;
  if (flag) {
    flag = type.type === require(dependencyMap[6]).FavoriteChannelType.CATEGORY;
  }
  if (flag) {
    flag = type.collapsed !== collapsed;
  }
  if (flag) {
    type.collapsed = collapsed;
    flag = true;
  }
  return flag;
}
function updateFavoriteCategoriesCollapsed(arg0) {
  const require = arg0;
  const PreloadedUserSettingsActionCreators = require(dependencyMap[11]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    if (!arg0(arg0)) {
      return false;
    }
  }, require(dependencyMap[11]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
}
const THREAD_CHANNEL_TYPES = require(dependencyMap[0]).THREAD_CHANNEL_TYPES;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const _module = require(dependencyMap[4]);
({ FAVORITES_UNCATEGORIZED_PARENT_ID: closure_7, MAX_FAVORITE_CHANNELS: closure_8 } = _module);
const Permissions = require(dependencyMap[5]).Permissions;
const _module1 = require(dependencyMap[14]);
const result = _module1.fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

export const addFavoriteChannel = function addFavoriteChannel(arg0, arg1, channel_context_menu) {
  let str = channel_context_menu;
  if (channel_context_menu === undefined) {
    str = "channel_context_menu";
  }
  const items = [arg0];
  addFavoriteChannels(items, arg1, str);
};
export { addFavoriteChannels };
export { removeFavoriteChannel };
export const setFavoriteChannelNickname = function setFavoriteChannelNickname(arg0, arg1) {
  const require = arg0;
  const importDefault = arg1;
  if (store.isFavorite(arg0)) {
    const PreloadedUserSettingsActionCreators = require(dependencyMap[11]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
      let str = "";
      if (null != arg1) {
        str = arg1;
      }
      arg0.favoriteChannels[closure_0].nickname = str;
    }, require(dependencyMap[11]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const addFavoriteCategory = function addFavoriteCategory(arg0) {
  let str = arg1;
  const require = arg0;
  if (arg1 === undefined) {
    str = "modal";
  }
  const importDefault = str;
  let closure_2;
  closure_2 = importDefault(closure_2[13]).fromTimestamp(Date.now());
  const PreloadedUserSettingsActionCreators = require(closure_2[11]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
    if (callback2(favoriteChannels.favoriteChannels)) {
      callback3();
      return false;
    } else {
      const FavoriteChannel = favoriteChannels(closure_2[6]).FavoriteChannel;
      const obj = { nickname: favoriteChannels, type: favoriteChannels(closure_2[6]).FavoriteChannelType.CATEGORY, position: callback(favoriteChannels.favoriteChannels), parentId: closure_7 };
      favoriteChannels.favoriteChannels[closure_2] = FavoriteChannel.create(obj);
      const obj2 = favoriteChannels(closure_2[12]);
      const result = obj2.trackFavoritesGuildAddToFavorites(str, callback5(closure_2, favoriteChannels(closure_2[6]).FavoriteChannelType.CATEGORY), callback4(favoriteChannels.favoriteChannels));
    }
  }, require(closure_2[11]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const removeFavoriteCategory = function removeFavoriteCategory(id) {
  removeFavoriteChannel(id);
};
export const setFavoriteCategoryCollapsed = function setFavoriteCategoryCollapsed(id, arg1) {
  const require = id;
  const importDefault = arg1;
  const favorite = store.getFavorite(id);
  let tmp2 = null != favorite;
  if (tmp2) {
    tmp2 = favorite.type === require(dependencyMap[6]).FavoriteChannelType.CATEGORY;
  }
  if (tmp2) {
    updateFavoriteCategoriesCollapsed((arg0) => callback(arg0.favoriteChannels[closure_0], arg1));
  }
};
export const setAllFavoriteCategoriesCollapsed = function setAllFavoriteCategoriesCollapsed(arg0) {
  const require = arg0;
  updateFavoriteCategoriesCollapsed((favoriteChannels) => {
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp4 = tmp3;
        let tmp5 = callback;
        let tmp6 = favoriteChannels;
        if (!callback(favoriteChannels.favoriteChannels[tmp3], favoriteChannels)) {
          continue;
        } else {
          flag = true;
          // continue
        }
        continue;
      }
    }
    return flag2;
  });
};
export const updateFavoriteChannels = function updateFavoriteChannels(arg0) {
  const require = arg0;
  if (0 !== arg0.length) {
    const PreloadedUserSettingsActionCreators = require(dependencyMap[11]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      let iter3;
      const tmp = callback(favoriteChannels);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let id = value.id;
          if (null != value.position) {
            favoriteChannels.favoriteChannels[id].position = value.position;
          }
          if (undefined !== value.parent_id) {
            let parent_id = value.parent_id;
            let tmp2 = parent_id;
            if (null == parent_id) {
              tmp2 = closure_7;
            }
            favoriteChannels.favoriteChannels[id].parentId = tmp2;
            let tmp3 = closure_14;
            let tmp4 = closure_14(favoriteChannels.favoriteChannels, id);
            let tmp5 = parent_id;
          }
          iter3 = tmp();
          iter2 = iter3;
        } while (!iter3.done);
      }
      const result = favoriteChannels(closure_2[12]).trackFavoritesGuildOrderUpdated();
    }, require(dependencyMap[11]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const updateFavoriteChannelParent = function updateFavoriteChannelParent(arg0, arg1) {
  const require = arg0;
  const importDefault = arg1;
  const PreloadedUserSettingsActionCreators = require(dependencyMap[11]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
    favoriteChannels.favoriteChannels[closure_0].parentId = null != arg1 ? arg1 : closure_7;
    callback(favoriteChannels.favoriteChannels, favoriteChannels);
  }, require(dependencyMap[11]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const toggleFavoriteGuildMuted = function toggleFavoriteGuildMuted() {
  const PreloadedUserSettingsActionCreators = require(dependencyMap[11]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (muted) => {
    muted.muted = !muted.muted;
  }, require(dependencyMap[11]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0, channel_context_menu) {
  let str = channel_context_menu;
  const require = arg0;
  if (channel_context_menu === undefined) {
    str = "settings_page";
  }
  const importDefault = str;
  const PreloadedUserSettingsActionCreators = require(dependencyMap[11]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    const BoolValue = arg0(closure_2[7]).BoolValue;
    arg0.guildVisible = BoolValue.create({ value: arg0 });
    const result = arg0(closure_2[12]).trackFavoritesGuildVisibilitySettingToggled(str, arg0);
  }, require(dependencyMap[11]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
