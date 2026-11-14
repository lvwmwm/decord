// Module ID: 10944
// Function ID: 10945
// Name: FavoritesActionCreators
// Dependencies: [5, 5147, 5159, 502, 5155, 5177, 5238, 5209, 5349, 5158, 5168, 1072, 1083, 5180, 1099, 1196, 1227, 12, 10945, 10947, 6268, 1113, 5136, 11, 10971, 10972, 10973, 1089, 5992, 5139, 2]
// Exports: addFavoriteCategory, addFavoriteChannels, addFavoriteChannelsToCategory, autoAddJoinedThreadToFavorites, pruneInactiveFavoriteThreads, removeFavoriteCategory, resetFavoritesGuild, setFavoriteCategoriesCollapsed, setFavoriteChannelNickname, setFavoritesAutoAddJoinedThreads, setFavoritesGuildVisibility, setFavoritesGuildVisibilityFromSettings, setFavoritesPruneInactiveThreads, toggleFavoriteGuildMuted, updateFavoriteChannelParent, updateFavoriteChannels

// Module 10944 (FavoritesActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants2 from "Constants" /* 1083 */;
import intl3 from "intl" /* 1113 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import wrappers from "wrappers" /* 1227 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5136 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 5147 */;
import ChannelRecord from "ChannelRecord" /* 5159 */;
import FavoritesUtils from "FavoritesUtils" /* 5180 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 5992 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6268 */;
import FavoritesHooks from "FavoritesHooks" /* 10945 */;
import openFavoritesGuildLimitUpsellDefault from "openFavoritesGuildLimitUpsell" /* 10947 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10971 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;
import FavoriteStore from "FavoriteStore" /* 5158 */;
import FavoritesConstants from "FavoritesConstants" /* 5168 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, autoAddThreadsMode, closure_42, closure_5, dependencyMap, guild, parentId, set;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let map1;
let tmp3;
const router_utils = tmp3(1099);
const f101252 = (type) => type.type !== closure_1_0(closure_1_2[15]).FavoriteChannelType.CATEGORY;
function getNextPositionFromChannels(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
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
function deselectRemovedFavoriteChannels(has) {
  const guildId = SelectedGuildStore.getGuildId();
  const channelId = SelectedChannelStore.getChannelId();
  obj = FavoritesUtils;
  let isFavoritesGuildIdResult = obj.isFavoritesGuildId(guildId);
  if (isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = null != channelId;
  }
  if (isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = has.has(channelId);
  }
  if (isFavoritesGuildIdResult) {
    const tmp3Result = router_utils;
    tmp3Result.transitionTo(authStore5.CHANNEL(guildId));
  }
}
function cleanFavoriteChannels(favoriteChannels) {
  for (const key10005 in favoriteChannels) {
    let tmp10 = key10005;
    let tmp11 = favoriteChannels[key10005];
    if (null != tmp11) {
      let tmp2 = require;
      if (tmp11.type === preloaded_user_settings.FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let channel = ChannelStore.getChannel(key10005);
        if (null != channel) {
          if (null == tmp11.channelType) {
            let UInt32Value = tmp2(1227).UInt32Value;
            obj = { value: channel.type };
            tmp11.channelType = UInt32Value.create(obj);
          }
          let isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
            isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
          }
          if (isPrivateResult) {
            continue;
          } else {
            delete tmp[tmp10];
            continue;
          }
          continue;
        } else {
          let iter = tmp11.channelType;
          let value;
          if (iter != null) {
            value = iter.value;
          }
          if (null == value) {
            delete tmp[tmp10];
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    } else {
      delete tmp[tmp10];
      continue;
    }
    continue;
  }
}
function cleanupChannelParentId(favoriteChannels, id) {
  if (null != favoriteChannels[id]) {
    if (favoriteChannels[id].parentId !== closure_19) {
      let tmp3 = null;
      if (null != favoriteChannels[id].parentId) {
        tmp3 = favoriteChannels[tmp.parentId];
      }
      const tmp4 = null != tmp3 && tmp3.type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
      if (!tmp4) {
        favoriteChannels[id].parentId = tmp2;
      }
    }
  }
}
function countFavoritesAgainstLimit(arg0) {
  const arr = _modDef12;
  return arr.filter(arg0, f101252).length;
}
function getReachedLimit(favoriteChannels, arg1) {
  let canUpsellFavoriteLimit;
  let favoriteLimit;
  cleanFavoriteChannels(favoriteChannels);
  obj = _modDef12;
  if (obj.size(favoriteChannels) >= closure_20) {
    return { limit: tmp4, canUpsell: false };
  } else {
    const obj4 = FavoritesHooks;
    const favoritesLimits = obj4.getFavoritesLimits();
    ({ favoriteLimit, canUpsellFavoriteLimit } = favoritesLimits);
    let tmp5 = null;
    if (arg1 !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
      tmp5 = null;
      const tmp2Result = _modDef12;
      if (tmp2Result.filter(favoriteChannels, f101252).length >= favoriteLimit) {
        tmp5 = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
        const obj3 = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
      }
    }
    return tmp5;
  }
}
function showLimitReachedAlert(limit) {
  let intl;
  let intl2;
  let obj2;
  limit = limit.limit;
  if (limit.canUpsell) {
    openFavoritesGuildLimitUpsellDefault(limit);
  } else {
    obj = { title: intl.string(intl3.t["+XYXtZ"]), body: intl2.formatToPlainString(intl3.t.JaIyFi, obj2) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl3.intl;
    intl2 = intl3.intl;
    obj2 = { count: limit };
    show(obj);
  }
}
function onSaveFailed(status) {
  let intl;
  let intl2;
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  if (403 === status) {
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    const ifNecessary = PreloadedUserSettingsActionCreators.loadIfNecessary(true);
    ifNecessary.catch(closure_21);
    obj = { title: intl.string(intl3.t.iufib1), body: intl2.string(intl3.t.eAn6z2) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl3.intl;
    intl2 = intl3.intl;
    show(obj);
  }
}
function updateFavoritesProto(arg0) {
  let batched;
  let update;
  ({ update, batched } = arg0);
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
  const tmp = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
  return updateAsync("favorites", update, tmp, onSaveFailed);
}
function createFavoriteCategory(favoriteChannels, nickname) {
  let num2;
  let fromTimestampResult = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    obj = SnowflakeUtilsDefault;
    fromTimestampResult = obj.fromTimestamp(Date.now());
  }
  const FavoriteChannel = preloaded_user_settings.FavoriteChannel;
  const create = FavoriteChannel.create;
  let num = 0;
  const obj2 = { nickname, type: preloaded_user_settings.FavoriteChannelType.CATEGORY, position: num2 + 1, parentId };
  num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp11 = favoriteChannels[tmp8];
      let tmp9 = null != tmp11 && null != tmp11.position;
      if (!tmp9) {
        continue;
      } else {
        let _Math = Math;
        num = Math.max(tmp7, tmp11.position);
        continue;
      }
      continue;
    }
  }
  favoriteChannels[fromTimestampResult] = create(obj2);
  return fromTimestampResult;
}
function findCategoryIdByName(obj, str) {
  const trimmed = str.trim();
  for (const key10009 in obj) {
    let tmp4 = obj[key10009];
    if (tmp4.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
      continue;
    } else {
      str = tmp4.nickname;
      let str2 = str.trim();
      if (str2.toLowerCase() !== tmp2) {
        continue;
      } else {
        return key10009;
      }
    }
    continue;
  }
}
function addFavoriteChannelsToParent() {
  return obj(...arguments);
}
let obj = function _addFavoriteChannelsToParent() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    let iter = (async (arg0, value, arg2) => {
      let flag;
      let tmp;
      let tmp4;
      if (1 === tmp4) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          let tmp25 = tmp;
          let tmp26 = closure_0;
          tmp = closure_0.filter((item) => !closure_1_12.isFavorite(item));
          let tmp27 = tmp;
          if (0 !== tmp.length) {
            let tmp14 = tmp;
            let tmp15 = closure_5;
            let tmp16 = closure_133_12;
            closure_5 = !closure_133_12.favoriteGuildEnabled;
            let tmp17 = closure_133_32;
            c6 = 2;
            c7 = 1;
            const obj6 = {
              update(favoriteChannels) {
                      let obj5;
                      let flag = false;
                      parentId = null;
                      if ("parentId" in closure_1_1) {
                        parentId = tmp.parentId;
                      }
                      if (parentId == null) {
                        parentId = closure_2_19;
                      }
                      let tmp4 = parentId;
                      const iter = closure_1_4[Symbol.iterator]();
                      const nextResult = iter.next();
                      while (iter !== undefined) {
                        let tmp7 = nextResult;
                        let tmp8 = closure_2_29;
                        let tmp11 = closure_2_29(favoriteChannels.favoriteChannels, closure_0(closure_2[15]).FavoriteChannelType.REFERENCE_ORIGINAL);
                        if (null != tmp11) {
                          let tmp55 = closure_1_3;
                          if (!tmp55) {
                            let tmp57 = closure_2_30(tmp11);
                          }
                          let tmp58 = flag;
                          if (tmp58) {
                            iter.return();
                            break;
                          } else {
                            iter.return();
                            return false;
                          }
                        } else {
                          let tmp68 = closure_1_1;
                          if ("categoryName" in closure_1_1) {
                            let tmp13 = flag;
                            if (!tmp13) {
                              let tmp16 = closure_2_34(favoriteChannels.favoriteChannels, tmp68.categoryName);
                              if (tmp16 == null) {
                                tmp16 = closure_2_33(favoriteChannels.favoriteChannels, tmp68.categoryName);
                              }
                              tmp4 = tmp16;
                              let tmp8Result = tmp8(favoriteChannels.favoriteChannels, closure_0(closure_2[15]).FavoriteChannelType.REFERENCE_ORIGINAL);
                              if (null != tmp8Result) {
                                let tmp23 = closure_1_3;
                                if (!tmp23) {
                                  let tmp26 = closure_2_30(tmp22);
                                }
                                iter.return();
                                return false;
                              }
                            }
                          }
                          channel = channel.getChannel(tmp7);
                          let tmp31 = channel;
                          favoriteChannels = favoriteChannels.favoriteChannels;
                          let FavoriteChannel = closure_0(closure_2[15]).FavoriteChannel;
                          obj = { nickname: "", type: closure_0(closure_2[15]).FavoriteChannelType.REFERENCE_ORIGINAL, channelType: obj5, position: closure_2_24(favoriteChannels.favoriteChannels), parentId: tmp4 };
                          let create = FavoriteChannel.create;
                          obj5 = undefined;
                          if (null != channel) {
                            let UInt32Value = closure_0(closure_2[16]).UInt32Value;
                            let obj2 = { value: tmp31.type };
                            obj5 = UInt32Value.create(obj2);
                          }
                          favoriteChannels[tmp7] = create(obj);
                          let tmp43 = closure_2_26(favoriteChannels.favoriteChannels);
                          let tmp46 = closure_2_27(favoriteChannels.favoriteChannels, tmp7);
                          flag = true;
                          let tmp49 = closure_0(closure_2[24]);
                          let type;
                          let trackFavoritesGuildAddToFavorites = tmp49.trackFavoritesGuildAddToFavorites;
                          let tmp50 = closure_1_2;
                          if (tmp31 != null) {
                            type = tmp31.type;
                          }
                          if (type == null) {
                            type = null;
                          }
                          let result = trackFavoritesGuildAddToFavorites(tmp50, type, closure_2_28(favoriteChannels.favoriteChannels));
                          continue;
                        }
                        if (flag) {
                          flag = closure_1_5;
                        }
                        if (flag) {
                          flag = !closure_1_3;
                        }
                        if (flag) {
                          let BoolValue = closure_0(closure_2[16]).BoolValue;
                          favoriteChannels.guildVisible = BoolValue.create({ value: true });
                          let obj3 = closure_0(closure_2[24]);
                          let str = "auto";
                          let result1 = obj3.trackFavoritesGuildVisibilitySettingToggled("auto", true);
                        }
                      }
                    }
            };
            const obj7 = { value: closure_133_32(obj6), done: false };
            return obj7;
          }
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        let someResult = !flag;
        if (someResult) {
          let tmp8 = tmp;
          let tmp9 = tmp;
          someResult = tmp.some((item) => closure_1_12.isFavorite(item));
        }
        if (someResult) {
          let tmp10 = closure_5;
          let tmp11 = closure_133_1;
          let tmp12 = closure_133_2;
          let tmp13 = closure_133_1(closure_133_2[25])();
        }
      }
      await "HermesInternal";
      let obj4 = closure_3;
      if (closure_3 === undefined) {
        obj4 = {};
      }
      flag = obj4.silent ?? false;
      return "Path";
    })();
    let nextResult = iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _addFavoriteChannels() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c4;
    let c5;
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    const tmp7 = closure_131_35;
    const tmp8 = c0;
    if (parentId == null) {
      parentId = null;
    }
    const obj5 = { parentId };
    await tmp7(tmp8, obj5, c2);
    await "HermesInternal";
    ({ channelIds: c0, parentId: c1, source: c2 } = closure_0);
    return "Path";
  });
  return obj(...arguments);
};
function removeFavoriteChannel(id, arg1) {
  let batched;
  let update;
  _require = id;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.trackAnalytics;
  if (flag === undefined) {
    flag = true;
  }
  const favorite = FavoriteStore.getFavorite(id);
  if (null != favorite) {
    const _Set = Set;
    const items = [id];
    const self = this;
    const self2 = this;
    set = new Set(items);
    const guildId = SelectedGuildStore.getGuildId();
    let tmp16 = SelectedChannelStore;
    const channelId = SelectedChannelStore.getChannelId();
    const obj5 = require("FavoritesUtils");
    let hasItem = obj5.isFavoritesGuildId(guildId) && null != channelId;
    if (hasItem) {
      let tmp3 = set;
      hasItem = set.has(channelId);
    }
    if (hasItem) {
      const tmp18Result = require("router_utils");
      tmp18Result.transitionTo(closure_22.CHANNEL(guildId));
    }
    const obj2 = {
      update(favoriteChannels) {
          delete favoriteChannels.favoriteChannels[id];
          if (favorite.type === preloaded_user_settings.FavoriteChannelType.CATEGORY) {
            for (const key10014 in favoriteChannels.favoriteChannels) {
              if (favoriteChannels.favoriteChannels[key10014].parentId !== id) {
                continue;
              } else {
                favoriteChannels.favoriteChannels[key10014].parentId = parentId;
                continue;
              }
              continue;
            }
          }
          cleanFavoriteChannels(favoriteChannels.favoriteChannels);
          const tmp3 = flag;
          if (tmp3) {
            const trackFavoritesGuildRemoveFromFavorites = FavoritesGuildAnalytics.trackFavoritesGuildRemoveFromFavorites;
            let tmp9 = null;
            FavoritesGuildAnalytics;
            if (favorite.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
              const channel = ChannelStore.getChannel(id);
              let type;
              if (channel != null) {
                type = channel.type;
              }
              if (type == null) {
                type = null;
              }
              tmp9 = type;
            }
            favoriteChannels = favoriteChannels.favoriteChannels;
            const arr = _modDef12;
            const result = trackFavoritesGuildRemoveFromFavorites(tmp9, arr.filter(favoriteChannels, f101252).length);
          }
        }
    };
    ({ update, batched } = obj2);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = tmp18(tmp19[22]).PreloadedUserSettingsActionCreators;
    const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
    const UserSettingsDelay = tmp18(tmp19[22]).UserSettingsDelay;
    const tmp6 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    let tmp9 = update;
    updateAsync("favorites", update, tmp6, onSaveFailed);
  }
}
function removeInactiveFavoriteThreads() {
  return obj(...arguments);
}
obj = function _removeInactiveFavoriteThreads() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let tmp2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        let tmp3 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let tmp4 = closure_0;
            closure_0 = closure_1;
            const tmp6 = globalThis;
            let _Set = Set;
            let self = this;
            let self2 = this;
            set = new Set(closure_0);
            const obj4 = {
              update(favoriteChannels) {
                        obj = favoriteChannels(closure_1_2[26]);
                        const favoritesCleanupCandidates = obj.getFavoritesCleanupCandidates(favoriteChannels);
                        const found = favoritesCleanupCandidates.filter((id) => {
                          const hasItem = set.has(id.id) && null != favoriteChannels.favoriteChannels[id.id];
                          return hasItem;
                        });
                        if (0 === found.length) {
                          return false;
                        } else {
                          const _Set = Set;
                          const self = this;
                          const self2 = this;
                          set = new Set(found.map((id) => id.id));
                          closure_1_25(set);
                          for (const item10015 of found) {
                            delete favoriteChannels.favoriteChannels[item10015.id];
                            let obj2 = favoriteChannels(closure_1_2[24]);
                            let result = obj2.trackFavoritesGuildRemoveFromFavorites(item10015.type, closure_1_28(favoriteChannels.favoriteChannels));
                            continue;
                          }
                        }
                      }
            };
            c3 = 1;
            c2 = 1;
            const obj5 = { value: updateFavoritesProto(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
function isPruneInactiveThreadsEnabled() {
  return FavoriteStore.pruneInactiveThreads;
}
obj = function _pruneInactiveFavoriteThreads() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let pruneInactiveThreadsScope;
        let obj5;
        let length;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp4;
            let closure_0 = tmp;
            pruneInactiveThreadsScope = undefined;
            obj5 = undefined;
            let channelId;
            length = undefined;
            id = id.getId();
            if (isPruneInactiveThreadsEnabled()) {
              if (id !== id) {
                pruneInactiveThreadsScope = FavoriteStore.pruneInactiveThreadsScope;
                let autoAddedThreadsCategoryIds = null;
                if (pruneInactiveThreadsScope === authStore4) {
                  const obj4 = require("FavoritesCleanup");
                  autoAddedThreadsCategoryIds = obj4.getAutoAddedThreadsCategoryIds();
                }
                length = undefined;
                if (autoAddedThreadsCategoryIds != null) {
                  length = autoAddedThreadsCategoryIds.length;
                }
                if (0 !== length) {
                  const _Date2 = Date;
                  closure_42 = Date.now();
                  obj5 = { days: FavoriteStore.pruneInactiveThreadsDays, categoryIds: autoAddedThreadsCategoryIds };
                  c2 = 1;
                  c3 = 1;
                  const obj7 = { value: obj6.loadFavoriteThreadsForCleanup(autoAddedThreadsCategoryIds), done: false };
                  obj6 = require("FavoritesCleanup");
                  return obj7;
                }
              } else {
                const _Date = Date;
                const diff = Date.now() - closure_42;
              }
            }
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else if (closure_129_41()) {
            if (closure_129_12.pruneInactiveThreadsScope === pruneInactiveThreadsScope) {
              channelId = closure_129_10.getChannelId();
              const obj10 = closure_129_0(closure_129_2[26]);
              const favoritesCleanupCandidates = obj10.getFavoritesCleanupCandidates(obj5);
              const mapped = favoritesCleanupCandidates.map((id) => id.id);
              length = mapped.filter((item) => item !== closure_1_2);
              if (0 !== length.length) {
                c2 = 2;
                c3 = 1;
                const obj9 = { value: closure_129_39(length, obj5), done: false };
                return obj9;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp26) {
        c3 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
obj = function _addFavoriteCategory() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let c4;
    let closure_2;
    let closure_0 = arg0;
    let closure_1 = tmp2;
    const str2 = closure_0;
    const obj8 = require("FavoritesUtils");
    const tmp20 = dependencyMap;
    if (!obj8.isFavoritesGuildCategoryNameValid(closure_0)) {
      return null;
    }
    closure_0 = str2.trim();
    let obj3 = require("SnowflakeUtils");
    const tmp13 = globalThis;
    const _Date = Date;
    closure_1 = obj3.fromTimestamp(Date.now());
    let obj5 = {
      update(favoriteChannels) {
        let canUpsellFavoriteLimit;
        let favoriteLimit;
        let intl;
        let intl2;
        let obj5;
        let tmp6;
        favoriteChannels = favoriteChannels.favoriteChannels;
        const CATEGORY = closure_2_0(closure_2_2[15]).FavoriteChannelType.CATEGORY;
        closure_2_26(favoriteChannels);
        obj = closure_2_1(closure_2_2[17]);
        if (obj.size(favoriteChannels) >= closure_2_20) {
          tmp6 = { limit: tmp5, canUpsell: false };
          const obj2 = { limit: tmp5, canUpsell: false };
        } else {
          const tmpResult = closure_2_0(closure_2_2[18]);
          const favoritesLimits = tmpResult.getFavoritesLimits();
          ({ favoriteLimit, canUpsellFavoriteLimit } = favoritesLimits);
          tmp6 = null;
          if (CATEGORY !== closure_2_0(closure_2_2[15]).FavoriteChannelType.CATEGORY) {
            tmp6 = null;
            const tmp4Result = closure_2_1(closure_2_2[17]);
            if (tmp4Result.filter(favoriteChannels, f101252).length >= favoriteLimit) {
              tmp6 = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
              const obj3 = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
            }
          }
        }
        if (null != tmp6) {
          const limit = tmp6.limit;
          if (tmp6.canUpsell) {
            closure_2_1(closure_2_2[19])(limit);
          } else {
            const obj4 = { title: intl.string(closure_2_0(closure_2_2[21]).t["+XYXtZ"]), body: intl2.formatToPlainString(closure_2_0(closure_2_2[21]).t.JaIyFi, obj5) };
            const show = closure_2_1(closure_2_2[20]).show;
            closure_2_1(closure_2_2[20]);
            intl = tmp(tmp2[21]).intl;
            intl2 = tmp(tmp2[21]).intl;
            obj5 = { count: limit };
            show(obj4);
          }
          return false;
        } else {
          closure_2_33(favoriteChannels.favoriteChannels, closure_0, closure_1);
        }
      }
    };
    await updateFavoritesProto(obj5);
    let tmp10 = null;
    if (null != closure_130_12.getFavorite(closure_1)) {
      tmp10 = closure_1;
    }
    return tmp10;
  });
  return obj(...arguments);
};
obj = function _addFavoriteChannelsToCategory() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let closure_2;
    let closure_0 = arg0;
    const obj5 = { categoryName };
    await closure_130_35(c0, obj5, c2);
    await "HermesInternal";
    ({ channelIds: c0, categoryName: c1, source: c2 } = closure_0);
    return "Path";
  });
  return obj(...arguments);
};
obj = function _autoAddJoinedThreadToFavorites() {
  obj = _asyncToGenerator(async (arg0, value) => {
    function getPerGuildCategoryName(guild_id) {
      let tmp = null;
      if (null != guild_id) {
        guild = guild.getGuild(guild_id);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        tmp = name;
      }
      let trimmed = null;
      if (null != tmp) {
        trimmed = null;
        obj = closure_1_0(closure_1_2[13]);
        if (obj.isFavoritesGuildCategoryNameValid(tmp)) {
          trimmed = tmp.trim();
        }
      }
      return trimmed;
    }
    let closure_0 = arg0;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj7 = autoAddThreadsMode;
            autoAddThreadsMode = autoAddThreadsMode.autoAddThreadsMode;
            if (autoAddThreadsMode !== map1) {
              if (!obj7.isFavorite(closure_0)) {
                channel = channel.getChannel(tmp19);
                if (null != channel) {
                  if (channel.isThread()) {
                    let tmp9 = null;
                    if (autoAddThreadsMode === closure_2_15) {
                      tmp9 = getPerGuildCategoryName(channel.guild_id);
                    }
                    let categoryName = tmp9;
                    if (tmp9 == null) {
                      categoryName = authStore3;
                    }
                    const items = [closure_0];
                    const obj4 = { categoryName };
                    c3 = 1;
                    c2 = 1;
                    const obj5 = { value: addFavoriteChannelsToParent(items, obj4, "auto_thread_join", { silent: true }), done: false };
                    return obj5;
                  }
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp15) {
        c2 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
const resetFatigueCooldown = DismissibleContentShownStateStore.resetFatigueCooldown;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ FAVORITES_AUTO_ADD_THREADS_NEVER: map1, FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY: closure_14, FAVORITES_AUTO_ADD_THREADS_PER_GUILD: closure_15, FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: closure_16, FAVORITES_PRUNE_SCOPE_ALL: closure_17, FAVORITES_PRUNE_SCOPE_AUTO_ADDED: closure_18, FAVORITES_UNCATEGORIZED_PARENT_ID: closure_19, MAX_FAVORITE_CHANNELS: closure_20 } = FavoritesConstants);
({ NOOP: closure_21, Routes: closure_22 } = Constants);
const Permissions = Constants2.Permissions;
let c42 = 0;
let c43 = null;
let result = size.fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

export function addFavoriteChannels() {
  return obj(...arguments);
}
export { removeFavoriteChannel };
export function setFavoriteChannelNickname(categoryId, trimmed) {
  let batched;
  let update;
  let closure_0 = categoryId;
  let closure_1 = trimmed;
  if (FavoriteStore.isFavorite(categoryId)) {
    obj = {
      update(arg0) {
          let str = closure_1;
          const tmp = arg0.favoriteChannels[closure_0];
          if (closure_1 == null) {
            str = "";
          }
          tmp.nickname = str;
        }
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    let tmp = require;
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
    const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
    let str = "favorites";
    const tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    updateAsync("favorites", update, tmp3, onSaveFailed);
  }
}
export { removeInactiveFavoriteThreads };
export function pruneInactiveFavoriteThreads() {
  return obj(...arguments);
}
export function addFavoriteCategory() {
  return obj(...arguments);
}
export function addFavoriteChannelsToCategory() {
  return obj(...arguments);
}
export function removeFavoriteCategory(id) {
  removeFavoriteChannel(id);
}
export function autoAddJoinedThreadToFavorites() {
  return obj(...arguments);
}
export function setFavoritesAutoAddJoinedThreads(arg0) {
  let autoAddJoinedThreadsPerGuild;
  let batched;
  let closure_0;
  let update;
  _require = arg0;
  let closure_1 = arg0 !== closure_13;
  dependencyMap = arg0 === closure_15;
  ({ update, batched } = {
    update(autoAddJoinedThreads) {
      let canUpsellFavoriteLimit;
      let favoriteLimit;
      let intl;
      let intl2;
      let obj4;
      let tmp3 = autoAddJoinedThreads.autoAddJoinedThreads !== closure_1;
      const tmp2 = closure_1;
      if (!tmp3) {
        tmp3 = autoAddJoinedThreads.autoAddJoinedThreadsPerGuild !== autoAddJoinedThreadsPerGuild;
      }
      if (tmp3) {
        let tmp7 = closure_0 !== gesture;
        if (!tmp7) {
          const favoriteChannels = autoAddJoinedThreads.favoriteChannels;
          let tmp11;
          const str = authStore3.trim();
          const formatted = str.toLowerCase();
          const keys = Object.keys();
          if (keys !== undefined) {
            while (keys[tmp] !== undefined) {
              let tmp23 = favoriteChannels[tmp13];
              if (tmp23.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
                continue;
              } else {
                let str2 = tmp23.nickname;
                let str3 = str2.trim();
                tmp11 = tmp13;
                if (str3.toLowerCase() === formatted) {
                  break;
                }
              }
              continue;
            }
          }
          if (null == tmp11) {
            let tmp15;
            const CATEGORY = preloaded_user_settings.FavoriteChannelType.CATEGORY;
            cleanFavoriteChannels(favoriteChannels);
            const obj5 = _modDef12;
            if (obj5.size(favoriteChannels) >= closure_20) {
              tmp15 = { limit: tmp31, canUpsell: false };
              const obj2 = { limit: tmp31, canUpsell: false };
            } else {
              const tmp26Result = FavoritesHooks;
              const favoritesLimits = tmp26Result.getFavoritesLimits();
              ({ favoriteLimit, canUpsellFavoriteLimit } = favoritesLimits);
              tmp15 = null;
              if (CATEGORY !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
                tmp15 = null;
                const tmp30Result = _modDef12;
                if (tmp30Result.filter(favoriteChannels, f101252).length >= favoriteLimit) {
                  tmp15 = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
                  obj = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
                }
              }
            }
            if (null == tmp15) {
              tmp11 = createFavoriteCategory(favoriteChannels, authStore3);
            } else {
              const limit = tmp15.limit;
              if (tmp15.canUpsell) {
                openFavoritesGuildLimitUpsellDefault(limit);
              } else {
                const obj3 = { title: intl.string(intl3.t["+XYXtZ"]), body: intl2.formatToPlainString(intl3.t.JaIyFi, obj4) };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = tmp26(1113).intl;
                intl2 = tmp26(1113).intl;
                obj4 = { count: limit };
                show(obj3);
              }
            }
          }
          tmp7 = null != tmp11;
        }
        if (tmp7) {
          autoAddJoinedThreads.autoAddJoinedThreads = tmp2;
          autoAddJoinedThreads.autoAddJoinedThreadsPerGuild = autoAddJoinedThreadsPerGuild;
        }
        tmp3 = tmp7;
      }
      return tmp3;
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  const tmp = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
  updateAsync("favorites", update, tmp, onSaveFailed);
}
export function setFavoritesPruneInactiveThreads(value, pruneInactiveThreadsDays, arg2) {
  let batched;
  let closure_2;
  let update;
  _require = value;
  dependencyMap = arg2;
  ({ update, batched } = {
    update(arg0) {
      const BoolValue = wrappers.BoolValue;
      obj = { value };
      arg0.pruneInactiveThreads = BoolValue.create(obj);
      if (value) {
        arg0.pruneInactiveThreadsDays = pruneInactiveThreadsDays;
        arg0.pruneAllFavoritedThreads = closure_2 === closure_17;
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  const tmp = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
  return updateAsync("favorites", update, tmp, onSaveFailed);
}
export function setFavoriteCategoriesCollapsed(collapsed, id) {
  _require = collapsed;
  let closure_1 = id;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  updateAsync("favorites", async function update(favoriteChannels) {
    if (null != id) {
      const items = [tmp];
      let keys = items;
    } else {
      const _Object = Object;
      keys = Object.keys(favoriteChannels.favoriteChannels);
    }
    let flag = false;
    for (const item10017 of keys) {
      let tmp4 = favoriteChannels.favoriteChannels[item10017];
      let tmp5 = tmp4;
      let tmp6 = null != tmp4;
      if (tmp6) {
        tmp6 = tmp5.type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
      }
      if (tmp6) {
        tmp6 = tmp5.collapsed !== collapsed;
      }
      if (tmp6) {
        tmp5.collapsed = collapsed;
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
}
export function updateFavoriteChannels(channelMoveUpdates) {
  let batched;
  let update;
  _require = channelMoveUpdates;
  if (0 !== channelMoveUpdates.length) {
    obj = {
      update(favoriteChannels) {
          const iter = channelMoveUpdates[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let id = nextResult.id;
            if (null != nextResult.position) {
              favoriteChannels.favoriteChannels[id].position = tmp3.position;
            }
            if (undefined !== tmp3.parent_id) {
              let parent_id = tmp3.parent_id;
              let tmp8 = favoriteChannels.favoriteChannels[id];
              if (parent_id == null) {
                parent_id = closure_19;
              }
              tmp8.parentId = parent_id;
              let tmp12 = cleanupChannelParentId(favoriteChannels.favoriteChannels, id);
            }
            continue;
          }
          obj = FavoritesGuildAnalytics;
          const result = obj.trackFavoritesGuildOrderUpdated();
        }
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
    const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
    const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
    let tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    let tmp4 = onSaveFailed;
    let tmp5 = PreloadedUserSettingsActionCreators;
    let tmp6 = update;
    let tmp7 = tmp3;
    updateAsync("favorites", update, tmp3, onSaveFailed);
  }
}
export function updateFavoriteChannelParent(arg0, arg1) {
  let batched;
  let closure_0;
  let update;
  _require = arg0;
  let closure_1 = arg1;
  ({ update, batched } = {
    update(favoriteChannels) {
      let tmp3 = closure_1;
      const tmp2 = favoriteChannels.favoriteChannels[closure_0];
      if (closure_1 == null) {
        tmp3 = closure_19;
      }
      tmp2.parentId = tmp3;
      favoriteChannels = favoriteChannels.favoriteChannels;
      if (null != favoriteChannels[closure_0]) {
        if (favoriteChannels[closure_0].parentId !== closure_19) {
          let tmp6 = null;
          if (null != favoriteChannels[closure_0].parentId) {
            tmp6 = favoriteChannels[tmp4.parentId];
          }
          const tmp7 = null != tmp6 && tmp6.type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
          if (!tmp7) {
            favoriteChannels[closure_0].parentId = tmp5;
          }
        }
      }
      obj = FavoritesGuildAnalytics;
      const result = obj.trackFavoritesGuildOrderUpdated();
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  const tmp = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
  updateAsync("favorites", update, tmp, onSaveFailed);
}
export function toggleFavoriteGuildMuted() {
  let batched;
  let update;
  obj = {
    update(muted) {
      muted.muted = !muted.muted;
    }
  };
  ({ update, batched } = obj);
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
  const tmp = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
  updateAsync("favorites", update, tmp, onSaveFailed);
}
export function resetFavoritesGuild() {
  let batched;
  let update;
  obj = {
    update(arg0) {
      arg0.favoriteChannels = {};
      arg0.guildVisible = undefined;
      arg0.muted = false;
      arg0.autoAddJoinedThreads = false;
      arg0.autoAddJoinedThreadsPerGuild = false;
      arg0.pruneInactiveThreads = undefined;
      arg0.pruneInactiveThreadsDays = 0;
      arg0.pruneAllFavoritedThreads = false;
    }
  };
  ({ update, batched } = obj);
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
  const tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
  updateAsync("favorites", update, tmp3, onSaveFailed);
  const tmpResult = DismissibleContentFrameworkActionCreators;
  const result = tmpResult.resetDismissibleContentFrameworkStore();
  resetFatigueCooldown();
  const tmpResult2 = UserSettingsProtoActionCreators;
  const result1 = tmpResult2.removeDismissedContent(tmp(5139).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS);
}
export function setFavoritesGuildVisibility(arg0) {
  let batched;
  let closure_0;
  let str;
  let update;
  _require = arg0;
  ({ update, batched } = {
    update(guildVisible) {
      value = undefined;
      if (guildVisible.guildVisible != null) {
        value = iter.value;
      }
      if (value === value) {
        return false;
      } else {
        const BoolValue = wrappers.BoolValue;
        obj = { value };
        guildVisible.guildVisible = BoolValue.create(obj);
        const obj2 = FavoritesGuildAnalytics;
        const result = obj2.trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  const tmp = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
  updateAsync("favorites", update, tmp, onSaveFailed);
}
export function setFavoritesGuildVisibilityFromSettings(value) {
  let batched;
  let update;
  _require = value;
  const settings_page = "settings_page";
  ({ update, batched } = {
    update(guildVisible) {
      value = undefined;
      if (guildVisible.guildVisible != null) {
        value = iter.value;
      }
      if (value === value) {
        return false;
      } else {
        const BoolValue = wrappers.BoolValue;
        obj = { value };
        guildVisible.guildVisible = BoolValue.create(obj);
        const obj2 = FavoritesGuildAnalytics;
        const result = obj2.trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const tmp2 = dependencyMap;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  const tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
  updateAsync("favorites", update, tmp3, onSaveFailed);
  let isFavoritesGuildIdResult = !value;
  if (isFavoritesGuildIdResult) {
    const tmpResult = require("FavoritesUtils");
    isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(SelectedGuildStore.getGuildId());
  }
  if (isFavoritesGuildIdResult) {
    const tmpResult2 = require("router_utils");
    tmpResult2.transitionTo(closure_22.ME);
  }
}
