// Module ID: 10151
// Function ID: 78508
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1352, 1348, 3759, 1351, 1386, 482, 1282, 1313, 22, 10152, 4471, 1212, 1331, 10156, 1841, 21, 10157, 2]
// Exports: addFavoriteCategory, addFavoriteChannel, removeFavoriteCategory, resetFavoritesGuild, setAllFavoriteCategoriesCollapsed, setFavoriteCategoryCollapsed, setFavoriteChannelNickname, setFavoritesGuildVisibility, toggleFavoriteGuildMuted, updateFavoriteChannelParent, updateFavoriteChannels

// Module 10151 (_createForOfIteratorHelperLoose)
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Permissions } from "sum";
import date from "date";

let closure_7;
let closure_8;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
        continue;
      }
      continue;
    }
  }
  return num2 + 1;
}
function cleanFavoriteChannels(obj) {
  for (const key10010 in arg0) {
    let tmp21 = key10010;
    let tmp22 = arg0[key10010];
    if (null != tmp22) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      if (tmp22.type === require(1282) /* _callSuper */.FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp5 = store;
        let channel = store.getChannel(key10010);
        if (null != channel) {
          if (null == tmp22.channelType) {
            let tmp14 = require;
            let tmp15 = dependencyMap;
            let UInt32Value = require(1313) /* _callSuper */.UInt32Value;
            obj = { value: channel.type };
            tmp22.channelType = UInt32Value.create(obj);
          }
          let isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
            let tmp17 = closure_5;
            let tmp18 = Permissions;
            isPrivateResult = closure_5.can(Permissions.VIEW_CHANNEL, channel);
          }
          let tmp19 = channel;
          if (isPrivateResult) {
            continue;
          } else {
            delete tmp[tmp2];
            let tmp20 = channel;
            continue;
          }
          continue;
        } else {
          let iter = tmp22.channelType;
          let value;
          if (null != iter) {
            value = iter.value;
          }
          if (null == value) {
            delete tmp[tmp2];
            let tmp11 = channel;
            let tmp12 = iter;
            let tmp13 = value;
            continue;
          } else {
            let tmp7 = THREAD_CHANNEL_TYPES;
            let tmp8 = channel;
            let tmp9 = iter;
            let tmp10 = value;
          }
          continue;
        }
        continue;
      }
      continue;
    } else {
      delete tmp[tmp2];
      continue;
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
        tmp4 = tmp3.type === require(1282) /* _callSuper */.FavoriteChannelType.CATEGORY;
      }
      if (!tmp4) {
        tmp.parentId = closure_7;
      }
    }
  }
}
function getReachedLimit(arg0, arg1) {
  cleanFavoriteChannels(arg0);
  if (obj.size(arg0) >= closure_8) {
    return closure_8;
  } else {
    const favoriteLimit = require(10152) /* computeFavoritesAccess */.getFavoritesAccess().favoriteLimit;
    let tmp5 = null;
    if (favoriteLimit > 0) {
      tmp5 = null;
      if (arg1 !== require(1282) /* _callSuper */.FavoriteChannelType.CATEGORY) {
        let tmp8 = null;
        if (arr.filter(arg0, (type) => type.type !== outer1_0(outer1_2[6]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
          tmp8 = favoriteLimit;
        }
        tmp5 = tmp8;
        arr = importDefault(22);
      }
    }
    return tmp5;
  }
  obj = importDefault(22);
}
function showLimitReachedAlert(count) {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["+XYXtZ"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { count };
  obj.body = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.JaIyFi, obj);
  obj.show(obj);
}
function onSaveFailed() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.iufib1);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.eAn6z2);
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
  if (type !== require(1282) /* _callSuper */.FavoriteChannelType.CATEGORY) {
    const channel = store.getChannel(id);
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
function addFavoriteChannels(found, arg1, modal) {
  let str = modal;
  const _require = arg1;
  if (modal === undefined) {
    str = "channel_context_menu";
  }
  found = undefined;
  found = found.filter((arg0) => !outer1_6.isFavorite(arg0));
  if (0 !== found.length) {
    const PreloadedUserSettingsActionCreators = _require(found[12]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      const tmp = outer1_10(found);
      const iter = tmp();
      let iter2 = iter;
      let flag = false;
      if (!iter.done) {
        const value = iter2.value;
        const tmp5 = outer1_15(favoriteChannels.favoriteChannels, callback(found[6]).FavoriteChannelType.REFERENCE_ORIGINAL);
        while (null == tmp5) {
          let tmp25 = outer1_4;
          let channel = outer1_4.getChannel(value);
          let tmp27 = callback;
          let tmp28 = found;
          let FavoriteChannel = callback(found[6]).FavoriteChannel;
          let obj = { nickname: "", type: callback(found[6]).FavoriteChannelType.REFERENCE_ORIGINAL };
          obj = undefined;
          if (null != channel) {
            let tmp7 = callback;
            let tmp8 = found;
            let UInt32Value = callback(found[7]).UInt32Value;
            obj = { value: channel.type };
            obj = UInt32Value.create(obj);
          }
          obj.channelType = obj;
          let tmp10 = outer1_12;
          obj.position = outer1_12(favoriteChannels.favoriteChannels);
          let tmp11 = callback;
          obj.parentId = null != callback ? callback : outer1_7;
          favoriteChannels.favoriteChannels[value] = FavoriteChannel.create(obj);
          let tmp12 = outer1_13;
          let tmp13 = outer1_13(favoriteChannels.favoriteChannels);
          let tmp14 = outer1_14;
          let tmp15 = outer1_14(favoriteChannels.favoriteChannels, value);
          let tmp16 = callback;
          let tmp17 = found;
          let obj2 = callback(found[13]);
          let tmp18 = str;
          let tmp19 = outer1_19;
          let tmp21 = outer1_18;
          let tmp20 = outer1_19(value, callback(found[6]).FavoriteChannelType.REFERENCE_ORIGINAL);
          let result = obj2.trackFavoritesGuildAddToFavorites(str, tmp20, outer1_18(favoriteChannels.favoriteChannels));
          let iter3 = tmp();
          iter2 = iter3;
          flag = true;
        }
        outer1_16(tmp5);
        if (!flag) {
          return false;
        }
      }
    }, _require(found[12]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
}
function removeFavoriteChannel(id, arg1) {
  let obj = arg1;
  const _require = id;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.trackAnalytics;
  if (flag === undefined) {
    flag = true;
  }
  let favorite;
  let c3;
  favorite = store2.getFavorite(id);
  if (null != favorite) {
    let tmp2 = null;
    if (flag) {
      tmp2 = getAnalyticsChannelType(id, favorite.type);
    }
    c3 = tmp2;
    const PreloadedUserSettingsActionCreators = _require(favorite[12]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      delete tmp2[tmp];
      if (favorite.type === id(favorite[6]).FavoriteChannelType.CATEGORY) {
        for (const key10015 in arg0.favoriteChannels) {
          let tmp10 = key10015;
          let tmp11 = id;
          if (arg0.favoriteChannels[key10015].parentId !== id) {
            continue;
          } else {
            let tmp3 = outer1_7;
            arg0.favoriteChannels[key10015].parentId = outer1_7;
            continue;
          }
          continue;
        }
      }
      outer1_13(favoriteChannels.favoriteChannels);
      if (flag) {
        const result = id(favorite[13]).trackFavoritesGuildRemoveFromFavorites(c3, outer1_18(favoriteChannels.favoriteChannels));
        const obj = id(favorite[13]);
      }
    }, _require(favorite[12]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  }
}
function setProtoFavoriteCategoryCollapsed(type, collapsed) {
  let flag = null != type;
  if (flag) {
    flag = type.type === require(1282) /* _callSuper */.FavoriteChannelType.CATEGORY;
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
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    if (!callback(arg0)) {
      return false;
    }
  }, _require(1331).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
}
({ FAVORITES_UNCATEGORIZED_PARENT_ID: closure_7, MAX_FAVORITE_CHANNELS: closure_8 } = require("date"));
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

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
  const _require = arg0;
  let closure_1 = arg1;
  if (store2.isFavorite(arg0)) {
    const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
      let str = "";
      if (null != closure_1) {
        str = closure_1;
      }
      arg0.favoriteChannels[closure_0].nickname = str;
    }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const addFavoriteCategory = function addFavoriteCategory(first, modal) {
  let str = modal;
  if (modal === undefined) {
    str = "modal";
  }
  let importDefault;
  let dependencyMap;
  if (obj.isFavoritesGuildCategoryNameValid(first)) {
    importDefault = first.trim();
    const _Date = Date;
    dependencyMap = importDefault(21).fromTimestamp(Date.now());
    const PreloadedUserSettingsActionCreators = str(1331).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      const tmp = outer1_15(favoriteChannels.favoriteChannels, str(1282).FavoriteChannelType.CATEGORY);
      if (null != tmp) {
        outer1_16(tmp);
        return false;
      } else {
        const FavoriteChannel = str(1282).FavoriteChannel;
        const obj = { nickname: closure_1, type: str(1282).FavoriteChannelType.CATEGORY, position: outer1_12(favoriteChannels.favoriteChannels), parentId: outer1_7 };
        favoriteChannels.favoriteChannels[dependencyMap] = FavoriteChannel.create(obj);
        const obj2 = str(10156);
        const result = obj2.trackFavoritesGuildAddToFavorites(str, outer1_19(dependencyMap, str(1282).FavoriteChannelType.CATEGORY), outer1_18(favoriteChannels.favoriteChannels));
      }
    }, str(1331).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
    let obj2 = importDefault(21);
  }
};
export const removeFavoriteCategory = function removeFavoriteCategory(id) {
  removeFavoriteChannel(id);
};
export const setFavoriteCategoryCollapsed = function setFavoriteCategoryCollapsed(id, arg1) {
  const _require = id;
  let closure_1 = arg1;
  const favorite = store2.getFavorite(id);
  let tmp2 = null != favorite;
  if (tmp2) {
    tmp2 = favorite.type === _require(1282).FavoriteChannelType.CATEGORY;
  }
  if (tmp2) {
    updateFavoriteCategoriesCollapsed((arg0) => outer1_22(arg0.favoriteChannels[closure_0], closure_1));
  }
};
export const setAllFavoriteCategoriesCollapsed = function setAllFavoriteCategoriesCollapsed(arg0) {
  let closure_0 = arg0;
  updateFavoriteCategoriesCollapsed((favoriteChannels) => {
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp4 = tmp3;
        let tmp5 = outer1_22;
        let tmp6 = closure_0;
        if (!outer1_22(favoriteChannels.favoriteChannels[tmp3], closure_0)) {
          continue;
        } else {
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  });
};
export const updateFavoriteChannels = function updateFavoriteChannels(arg0) {
  const _require = arg0;
  if (0 !== arg0.length) {
    const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      let iter3;
      const tmp = outer1_10(callback);
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
              tmp2 = outer1_7;
            }
            favoriteChannels.favoriteChannels[id].parentId = tmp2;
            let tmp3 = outer1_14;
            let tmp4 = outer1_14(favoriteChannels.favoriteChannels, id);
            let tmp5 = parent_id;
          }
          iter3 = tmp();
          iter2 = iter3;
        } while (!iter3.done);
      }
      const result = callback(outer1_2[13]).trackFavoritesGuildOrderUpdated();
    }, _require(1331).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const updateFavoriteChannelParent = function updateFavoriteChannelParent(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
    favoriteChannels.favoriteChannels[closure_0].parentId = null != closure_1 ? closure_1 : outer1_7;
    outer1_14(favoriteChannels.favoriteChannels, closure_0);
  }, _require(1331).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const toggleFavoriteGuildMuted = function toggleFavoriteGuildMuted() {
  const PreloadedUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (muted) => {
    muted.muted = !muted.muted;
  }, require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const resetFavoritesGuild = function resetFavoritesGuild() {
  let done;
  const PreloadedUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    arg0.favoriteChannels = {};
    arg0.guildVisible = undefined;
    arg0.muted = false;
  }, require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  const tmp2 = _createForOfIteratorHelperLoose(require(10157) /* items */.FAVORITES_GUILD_DISMISSIBLE_CONTENT);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let obj = require(1331) /* _createForOfIteratorHelperLoose */;
      let result = obj.removeDismissedContent(iter.value);
      let iter2 = tmp2();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0, channel_context_menu) {
  let str = channel_context_menu;
  const _require = arg0;
  if (channel_context_menu === undefined) {
    str = "settings_page";
  }
  const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    const BoolValue = callback(outer1_2[7]).BoolValue;
    arg0.guildVisible = BoolValue.create({ value: callback });
    const result = callback(outer1_2[13]).trackFavoritesGuildVisibilitySettingToggled(str, callback);
  }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
