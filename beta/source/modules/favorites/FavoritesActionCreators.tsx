// Module ID: 10876
// Function ID: 10877
// Name: FavoritesActionCreators
// Dependencies: [5, 4847, 4859, 4855, 4935, 4906, 5034, 4858, 4868, 1087, 1098, 4880, 1114, 1211, 1242, 12, 10877, 10879, 5940, 1128, 4836, 11, 10886, 10888, 10889, 5673, 4839, 2]
// Exports: addFavoriteCategory, addFavoriteChannels, addFavoriteChannelsToCategory, autoAddJoinedThreadToFavorites, removeFavoriteCategory, removeInactiveFavoriteThreads, resetFavoritesGuild, setFavoriteCategoriesCollapsed, setFavoriteChannelNickname, setFavoritesAutoAddJoinedThreads, setFavoritesGuildVisibility, setFavoritesGuildVisibilityFromSettings, toggleFavoriteGuildMuted, updateFavoriteChannelParent, updateFavoriteChannels

// Module 10876 (FavoritesActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants2 from "Constants" /* 1098 */;
import intl3 from "intl" /* 1128 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1211 */;
import wrappers from "wrappers" /* 1242 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4836 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4847 */;
import ChannelRecord from "ChannelRecord" /* 4859 */;
import FavoritesUtils from "FavoritesUtils" /* 4880 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 5673 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5940 */;
import FavoritesHooks from "FavoritesHooks" /* 10877 */;
import openFavoritesGuildLimitUpsellDefault from "openFavoritesGuildLimitUpsell" /* 10879 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10886 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import PermissionStore from "PermissionStore" /* 4935 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4906 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5034 */;
import FavoriteStore from "FavoriteStore" /* 4858 */;
import FavoritesConstants from "FavoritesConstants" /* 4868 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5, parentId, set;

let closure_12;
let closure_14;
let closure_15;
let map1;
let tmp3;
let unpackModuleId;
const router_utils = tmp3(1114);
const f108416 = (type) => type.type !== closure_1_0(closure_1_2[13]).FavoriteChannelType.CATEGORY;
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
    tmp3Result.transitionTo(closure_15.CHANNEL(guildId));
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
            let UInt32Value = tmp2(1242).UInt32Value;
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
    if (favoriteChannels[id].parentId !== closure_12) {
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
  return arr.filter(arg0, f108416).length;
}
function getReachedLimit(favoriteChannels, arg1) {
  let canUpsellFavoriteLimit;
  let favoriteLimit;
  cleanFavoriteChannels(favoriteChannels);
  obj = _modDef12;
  if (obj.size(favoriteChannels) >= map1) {
    return { limit: tmp4, canUpsell: false };
  } else {
    const obj4 = FavoritesHooks;
    const favoritesLimits = obj4.getFavoritesLimits();
    ({ favoriteLimit, canUpsellFavoriteLimit } = favoritesLimits);
    let tmp5 = null;
    if (arg1 !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
      tmp5 = null;
      const tmp2Result = _modDef12;
      if (tmp2Result.filter(favoriteChannels, f108416).length >= favoriteLimit) {
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
    ifNecessary.catch(syncedClientThemes);
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
          tmp = closure_0.filter((item) => !closure_1_10.isFavorite(item));
          let tmp27 = tmp;
          if (0 !== tmp.length) {
            let tmp14 = tmp;
            let tmp15 = closure_5;
            let tmp16 = closure_133_10;
            closure_5 = !closure_133_10.favoriteGuildEnabled;
            let tmp17 = closure_133_25;
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
                        parentId = closure_2_12;
                      }
                      let tmp4 = parentId;
                      const iter = closure_1_4[Symbol.iterator]();
                      const nextResult = iter.next();
                      while (iter !== undefined) {
                        let tmp7 = nextResult;
                        let tmp8 = closure_2_22;
                        let tmp11 = closure_2_22(favoriteChannels.favoriteChannels, closure_0(closure_2[13]).FavoriteChannelType.REFERENCE_ORIGINAL);
                        if (null != tmp11) {
                          let tmp55 = closure_1_3;
                          if (!tmp55) {
                            let tmp57 = closure_2_23(tmp11);
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
                              let tmp16 = closure_2_27(favoriteChannels.favoriteChannels, tmp68.categoryName);
                              if (tmp16 == null) {
                                tmp16 = closure_2_26(favoriteChannels.favoriteChannels, tmp68.categoryName);
                              }
                              tmp4 = tmp16;
                              let tmp8Result = tmp8(favoriteChannels.favoriteChannels, closure_0(closure_2[13]).FavoriteChannelType.REFERENCE_ORIGINAL);
                              if (null != tmp8Result) {
                                let tmp23 = closure_1_3;
                                if (!tmp23) {
                                  let tmp26 = closure_2_23(tmp22);
                                }
                                iter.return();
                                return false;
                              }
                            }
                          }
                          channel = channel.getChannel(tmp7);
                          let tmp31 = channel;
                          favoriteChannels = favoriteChannels.favoriteChannels;
                          let FavoriteChannel = closure_0(closure_2[13]).FavoriteChannel;
                          obj = { nickname: "", type: closure_0(closure_2[13]).FavoriteChannelType.REFERENCE_ORIGINAL, channelType: obj5, position: closure_2_17(favoriteChannels.favoriteChannels), parentId: tmp4 };
                          let create = FavoriteChannel.create;
                          obj5 = undefined;
                          if (null != channel) {
                            let UInt32Value = closure_0(closure_2[14]).UInt32Value;
                            let obj2 = { value: tmp31.type };
                            obj5 = UInt32Value.create(obj2);
                          }
                          favoriteChannels[tmp7] = create(obj);
                          let tmp43 = closure_2_19(favoriteChannels.favoriteChannels);
                          let tmp46 = closure_2_20(favoriteChannels.favoriteChannels, tmp7);
                          flag = true;
                          let tmp49 = closure_0(closure_2[22]);
                          let type;
                          let trackFavoritesGuildAddToFavorites = tmp49.trackFavoritesGuildAddToFavorites;
                          let tmp50 = closure_1_2;
                          if (tmp31 != null) {
                            type = tmp31.type;
                          }
                          if (type == null) {
                            type = null;
                          }
                          let result = trackFavoritesGuildAddToFavorites(tmp50, type, closure_2_21(favoriteChannels.favoriteChannels));
                          continue;
                        }
                        if (flag) {
                          flag = closure_1_5;
                        }
                        if (flag) {
                          flag = !closure_1_3;
                        }
                        if (flag) {
                          let BoolValue = closure_0(closure_2[14]).BoolValue;
                          favoriteChannels.guildVisible = BoolValue.create({ value: true });
                          let obj3 = closure_0(closure_2[22]);
                          let str = "auto";
                          let result1 = obj3.trackFavoritesGuildVisibilitySettingToggled("auto", true);
                        }
                      }
                    }
            };
            const obj7 = { value: closure_133_25(obj6), done: false };
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
          someResult = tmp.some((item) => closure_1_10.isFavorite(item));
        }
        if (someResult) {
          let tmp10 = closure_5;
          let tmp11 = closure_133_1;
          let tmp12 = closure_133_2;
          let tmp13 = closure_133_1(closure_133_2[23])();
        }
      }
      await "IconComponent";
      let obj4 = closure_3;
      if (closure_3 === undefined) {
        obj4 = {};
      }
      flag = obj4.silent ?? false;
      return "Reflect";
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
    const tmp7 = closure_131_28;
    const tmp8 = c0;
    if (parentId == null) {
      parentId = null;
    }
    const obj5 = { parentId };
    await tmp7(tmp8, obj5, c2);
    await "IconComponent";
    ({ channelIds: c0, parentId: c1, source: c2 } = closure_0);
    return "Reflect";
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
      tmp18Result.transitionTo(closure_15.CHANNEL(guildId));
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
            const result = trackFavoritesGuildRemoveFromFavorites(tmp9, arr.filter(favoriteChannels, f108416).length);
          }
        }
    };
    ({ update, batched } = obj2);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = tmp18(tmp19[20]).PreloadedUserSettingsActionCreators;
    const updateAsync = PreloadedUserSettingsActionCreators.updateAsync;
    const UserSettingsDelay = tmp18(tmp19[20]).UserSettingsDelay;
    const tmp6 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    let tmp9 = update;
    updateAsync("favorites", update, tmp6, onSaveFailed);
  }
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
        return { value: "IconComponent", done: null };
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
                        obj = favoriteChannels(closure_1_2[24]);
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
                          closure_1_18(set);
                          for (const item10015 of found) {
                            delete favoriteChannels.favoriteChannels[item10015.id];
                            let obj2 = favoriteChannels(closure_1_2[22]);
                            let result = obj2.trackFavoritesGuildRemoveFromFavorites(item10015.type, closure_1_21(favoriteChannels.favoriteChannels));
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
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
        const CATEGORY = closure_2_0(closure_2_2[13]).FavoriteChannelType.CATEGORY;
        closure_2_19(favoriteChannels);
        obj = closure_2_1(closure_2_2[15]);
        if (obj.size(favoriteChannels) >= closure_2_13) {
          tmp6 = { limit: tmp5, canUpsell: false };
          const obj2 = { limit: tmp5, canUpsell: false };
        } else {
          const tmpResult = closure_2_0(closure_2_2[16]);
          const favoritesLimits = tmpResult.getFavoritesLimits();
          ({ favoriteLimit, canUpsellFavoriteLimit } = favoritesLimits);
          tmp6 = null;
          if (CATEGORY !== closure_2_0(closure_2_2[13]).FavoriteChannelType.CATEGORY) {
            tmp6 = null;
            const tmp4Result = closure_2_1(closure_2_2[15]);
            if (tmp4Result.filter(favoriteChannels, f108416).length >= favoriteLimit) {
              tmp6 = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
              const obj3 = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
            }
          }
        }
        if (null != tmp6) {
          const limit = tmp6.limit;
          if (tmp6.canUpsell) {
            closure_2_1(closure_2_2[17])(limit);
          } else {
            const obj4 = { title: intl.string(closure_2_0(closure_2_2[19]).t["+XYXtZ"]), body: intl2.formatToPlainString(closure_2_0(closure_2_2[19]).t.JaIyFi, obj5) };
            const show = closure_2_1(closure_2_2[18]).show;
            closure_2_1(closure_2_2[18]);
            intl = tmp(tmp2[19]).intl;
            intl2 = tmp(tmp2[19]).intl;
            obj5 = { count: limit };
            show(obj4);
          }
          return false;
        } else {
          closure_2_26(favoriteChannels.favoriteChannels, closure_0, closure_1);
        }
      }
    };
    await updateFavoritesProto(obj5);
    let tmp10 = null;
    if (null != closure_130_10.getFavorite(closure_1)) {
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
    await closure_130_28(c0, obj5, c2);
    await "IconComponent";
    ({ channelIds: c0, categoryName: c1, source: c2 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _autoAddJoinedThreadToFavorites() {
  let autoAddJoinedThreads;
  let categoryName;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj7 = autoAddJoinedThreads;
            if (autoAddJoinedThreads.autoAddJoinedThreads) {
              if (!obj7.isFavorite(closure_0)) {
                channel = channel.getChannel(tmp17);
                if (null != channel) {
                  if (channel.isThread()) {
                    const isPrivateResult = channel.isPrivate() || PermissionStore.can(constants.VIEW_CHANNEL, channel);
                    if (isPrivateResult) {
                      const items = [closure_0];
                      const obj4 = { categoryName };
                      c2 = 1;
                      c1 = 1;
                      const obj5 = { value: addFavoriteChannelsToParent(items, obj4, "auto_thread_join", { silent: true }), done: false };
                      return obj5;
                    }
                  }
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp13) {
        c1 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const resetFatigueCooldown = DismissibleContentShownStateStore.resetFatigueCooldown;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: unpackModuleId, FAVORITES_UNCATEGORIZED_PARENT_ID: closure_12, MAX_FAVORITE_CHANNELS: map1 } = FavoritesConstants);
({ NOOP: closure_14, Routes: closure_15 } = Constants);
const Permissions = Constants2.Permissions;
let result = size.fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

export const addFavoriteChannels = function addFavoriteChannels() {
  return obj(...arguments);
};
export { removeFavoriteChannel };
export const setFavoriteChannelNickname = function setFavoriteChannelNickname(categoryId, trimmed) {
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
};
export const removeInactiveFavoriteThreads = function removeInactiveFavoriteThreads() {
  return obj(...arguments);
};
export const addFavoriteCategory = function addFavoriteCategory() {
  return obj(...arguments);
};
export const addFavoriteChannelsToCategory = function addFavoriteChannelsToCategory() {
  return obj(...arguments);
};
export const removeFavoriteCategory = function removeFavoriteCategory(id) {
  removeFavoriteChannel(id);
};
export const autoAddJoinedThreadToFavorites = function autoAddJoinedThreadToFavorites() {
  return obj(...arguments);
};
export const setFavoritesAutoAddJoinedThreads = function setFavoritesAutoAddJoinedThreads(autoAddJoinedThreads) {
  let batched;
  let update;
  _require = autoAddJoinedThreads;
  ({ update, batched } = {
    update(autoAddJoinedThreads) {
      let canUpsellFavoriteLimit;
      let favoriteLimit;
      let intl;
      let intl2;
      let obj4;
      let tmp3 = autoAddJoinedThreads.autoAddJoinedThreads !== autoAddJoinedThreads;
      if (tmp3) {
        let tmp4 = !tmp2;
        if (autoAddJoinedThreads) {
          const favoriteChannels = autoAddJoinedThreads.favoriteChannels;
          let tmp8;
          const str = unpackModuleId.trim();
          const formatted = str.toLowerCase();
          const keys = Object.keys();
          if (keys !== undefined) {
            while (keys[tmp] !== undefined) {
              let tmp19 = favoriteChannels[tmp10];
              if (tmp19.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
                continue;
              } else {
                let str2 = tmp19.nickname;
                let str3 = str2.trim();
                tmp8 = tmp10;
                if (str3.toLowerCase() === formatted) {
                  break;
                }
              }
              continue;
            }
          }
          if (null == tmp8) {
            let tmp12;
            const CATEGORY = preloaded_user_settings.FavoriteChannelType.CATEGORY;
            cleanFavoriteChannels(favoriteChannels);
            const obj5 = _modDef12;
            if (obj5.size(favoriteChannels) >= map1) {
              tmp12 = { limit: tmp27, canUpsell: false };
              const obj2 = { limit: tmp27, canUpsell: false };
            } else {
              const tmp22Result = FavoritesHooks;
              const favoritesLimits = tmp22Result.getFavoritesLimits();
              ({ favoriteLimit, canUpsellFavoriteLimit } = favoritesLimits);
              tmp12 = null;
              if (CATEGORY !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
                tmp12 = null;
                const tmp26Result = _modDef12;
                if (tmp26Result.filter(favoriteChannels, f108416).length >= favoriteLimit) {
                  tmp12 = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
                  obj = { limit: favoriteLimit, canUpsell: canUpsellFavoriteLimit };
                }
              }
            }
            if (null == tmp12) {
              tmp8 = createFavoriteCategory(favoriteChannels, unpackModuleId);
            } else {
              const limit = tmp12.limit;
              if (tmp12.canUpsell) {
                openFavoritesGuildLimitUpsellDefault(limit);
              } else {
                const obj3 = { title: intl.string(intl3.t["+XYXtZ"]), body: intl2.formatToPlainString(intl3.t.JaIyFi, obj4) };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = tmp22(1128).intl;
                intl2 = tmp22(1128).intl;
                obj4 = { count: limit };
                show(obj3);
              }
            }
          }
          tmp4 = null != tmp8;
        }
        if (tmp4) {
          autoAddJoinedThreads.autoAddJoinedThreads = autoAddJoinedThreads;
        }
        tmp3 = tmp4;
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
};
export const setFavoriteCategoriesCollapsed = function setFavoriteCategoriesCollapsed(collapsed, id) {
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
};
export const updateFavoriteChannels = function updateFavoriteChannels(channelMoveUpdates) {
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
                parent_id = closure_12;
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
};
export const updateFavoriteChannelParent = function updateFavoriteChannelParent(arg0, arg1) {
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
        tmp3 = closure_12;
      }
      tmp2.parentId = tmp3;
      favoriteChannels = favoriteChannels.favoriteChannels;
      if (null != favoriteChannels[closure_0]) {
        if (favoriteChannels[closure_0].parentId !== closure_12) {
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
};
export const toggleFavoriteGuildMuted = function toggleFavoriteGuildMuted() {
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
};
export const resetFavoritesGuild = function resetFavoritesGuild() {
  let batched;
  let update;
  obj = {
    update(arg0) {
      arg0.favoriteChannels = {};
      arg0.guildVisible = undefined;
      arg0.muted = false;
      arg0.autoAddJoinedThreads = false;
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
  const result1 = tmpResult2.removeDismissedContent(tmp(4839).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS);
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0) {
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
};
export const setFavoritesGuildVisibilityFromSettings = function setFavoritesGuildVisibilityFromSettings(value) {
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
    tmpResult2.transitionTo(closure_15.ME);
  }
};
