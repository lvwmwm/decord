// Module ID: 14772
// Function ID: 14773
// Name: GuildRoleSubscriptionListingEditStateUtils
// Dependencies: [5, 32, 19, 5771, 4462, 14773, 14750, 1074, 1374, 504, 5910, 5092, 14774, 14775, 1092, 4460, 14776, 14757, 14777, 1248, 38, 5832, 6673, 12, 9797, 14778, 1255, 2]
// Exports: useApplicationId, useChannelAccessFormat, useChannelBenefits, useClearEditStateOnUnmount, useCreateOrUpdateListingFromEditState, useDescription, useEditStateIds, useHasChanges, useHasChangesForEditStateIds, useImage, useIntangibleBenefits, useListingEditState, useName, usePriceTier, useRole, useRoleColor, useRoleIcon, useSubscriptionPlan, useTierEmojiIds, useTrialInterval, useTrialLimit

// Module 14772 (GuildRoleSubscriptionListingEditStateUtils)
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import v1 from "v1" /* 1255 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import RolePermissionUtils from "RolePermissionUtils" /* 4460 */;
import reactDefault from "react" /* 5910 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 14757 */;
import useSubscriptionRoleDefault from "useSubscriptionRole" /* 14774 */;
import Contants from "Contants" /* 14775 */;
import useTrialIntervalOptionsDefault from "useTrialIntervalOptions" /* 14777 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4462 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 14773 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, analyticsContext, can_access_all_channels, dependencyMap, importDefault, listings, onBeforeDispatchNewListing;

let c10;
let c9;
let closure_12;
let map1;
const f100802 = (setListing) => setListing.setListing;
const f100809 = (id) => id.id;
const f118663 = () => {
  state.setState((listings) => {
    let obj2;
    obj = { listings: obj2 };
    obj2 = {};
    const merged = Object.assign(listings.listings);
    obj2[closure_1_0] = listings.listings.nonexistantEditStateId;
    return obj;
  });
};
function getRoleEmojis(arr, arg1) {
  let closure_0 = arg1;
  if (0 === arr.length) {
    return set;
  } else {
    const found = arr.filter((roles) => {
      roles = roles.roles;
      return roles.includes(id);
    });
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(found.map(f100809));
    return set;
  }
}
function clearEditState(NEW_LISTING_EDIT_STATE_ID) {
  _require = NEW_LISTING_EDIT_STATE_ID;
  obj = require("react-native");
  obj.batchUpdates(f118663);
}
let obj = function _updateListingPeripheralsFromEditState() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let closure_0;
    let closure_2;
    let icon;
    let obj7;
    let unicodeEmoji;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        let subscriptionListing;
        let role_id;
        let id;
        let closure_5;
        let roleColor;
        let roleIcon;
        let trialLimit;
        let trialInterval;
        let tierEmojiIds;
        let subscriptionTrial;
        let closure_13;
        let closure_14;
        c4 = 2;
        const tmp5 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ guildId: c0, editStateId: c1 } = guildId);
            subscriptionListing = undefined;
            role_id = undefined;
            id = undefined;
            closure_5 = undefined;
            roleColor = undefined;
            roleIcon = undefined;
            trialLimit = undefined;
            trialInterval = undefined;
            tierEmojiIds = undefined;
            subscriptionTrial = undefined;
            closure_12 = undefined;
            closure_13 = undefined;
            closure_14 = undefined;
            closure_15 = undefined;
            closure_16 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "flex", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              subscriptionListing = closure_130_8.getSubscriptionListing(c1);
              closure_130_1(closure_130_3[20])(null != subscriptionListing, "listing doesnt exist");
              role_id = subscriptionListing.role_id;
              id = subscriptionListing.id;
              closure_5 = closure_130_10.getState().listings[c1];
              closure_130_1(closure_130_3[20])(null != closure_5, "edit state does not exist");
              roleColor = closure_5.roleColor;
              roleIcon = closure_5.roleIcon;
              trialLimit = closure_5.trialLimit;
              trialInterval = closure_5.trialInterval;
              tierEmojiIds = closure_5.tierEmojiIds;
              let tmp8 = undefined === roleColor;
              if (tmp8) {
                tmp8 = undefined === roleIcon;
              }
              if (!tmp8) {
                const obj5 = { color: roleColor, icon, unicodeEmoji };
                icon = undefined;
                const updateRole = closure_130_1(closure_130_3[21]).updateRole;
                const tmp13 = closure_130_1(closure_130_3[21]);
                const tmp14 = c0;
                const tmp15 = role_id;
                if (roleIcon != null) {
                  icon = roleIcon.icon;
                }
                unicodeEmoji = undefined;
                if (roleIcon != null) {
                  unicodeEmoji = roleIcon.unicodeEmoji;
                }
                c3 = 2;
                c4 = 1;
                const obj6 = { value: updateRole(tmp14, tmp15, obj5), done: false };
                return obj6;
              }
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (undefined !== tierEmojiIds) {
                closure_12 = closure_130_18(closure_130_7.getGuildEmoji(c0), role_id);
                let items = [];
                const difference = closure_130_0(closure_130_3[23]).difference;
                const tmp43 = closure_130_0(closure_130_3[23]);
                HermesBuiltin.arraySpread(items, tierEmojiIds, 0);
                const items1 = [];
                HermesBuiltin.arraySpread(items1, closure_12, 0);
                closure_13 = difference(items, items1);
                const items2 = [];
                const difference2 = closure_130_0(closure_130_3[23]).difference;
                const tmp51 = closure_130_0(closure_130_3[23]);
                HermesBuiltin.arraySpread(items2, closure_12, 0);
                const items3 = [];
                HermesBuiltin.arraySpread(items3, tierEmojiIds, 0);
                closure_14 = difference2(items2, items3);
                closure_15 = closure_13.map((item) => {
                  let items;
                  const customEmojiById = closure_2_7.getCustomEmojiById(item);
                  if (null != customEmojiById) {
                    const obj2 = { guildId, emojiId: customEmojiById.id, roles: items };
                    items = [];
                    items[HermesBuiltin.arraySpread(items, customEmojiById.roles, 0)] = closure_1_3;
                    obj = guildId(c3[24]);
                    return obj.updateEmoji(obj2);
                  }
                });
                closure_16 = closure_14.map((item) => {
                  const customEmojiById = closure_2_7.getCustomEmojiById(item);
                  if (null != customEmojiById) {
                    let updateEmojiResult;
                    const roles = customEmojiById.roles;
                    const found = roles.filter((item) => item !== closure_1_3);
                    if (found.length > 0) {
                      const obj3 = { guildId, emojiId: customEmojiById.id, roles: found };
                      const obj2 = guildId(c3[24]);
                      updateEmojiResult = obj2.updateEmoji(obj3);
                    } else {
                      obj = guildId(c3[24]);
                      updateEmojiResult = obj.deleteEmoji(guildId, customEmojiById.id);
                    }
                    return updateEmojiResult;
                  }
                });
                const items4 = [];
                HermesBuiltin.arraySpread(items4, closure_16, HermesBuiltin.arraySpread(items4, closure_15, 0));
                c3 = 3;
                c4 = 1;
                const obj10 = { value: all(items4), done: false };
                return obj10;
              }
            } else {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
          subscriptionTrial = closure_130_8.getSubscriptionTrial(id);
          let tmp26 = null != trialLimit || null != trialInterval;
          if (!tmp26) {
            const tmp31 = null != subscriptionTrial && null == trialInterval;
            tmp26 = tmp31;
          }
          if (tmp26) {
            const obj11 = { trial: trialInterval, max_num_active_trial_users: trialLimit };
            c3 = 4;
            c4 = 1;
            const obj12 = { value: obj7.updateSubscriptionTrial(c0, id, obj11), done: false };
            obj7 = closure_130_2(closure_130_3[22]);
            return obj12;
          }
        }
      } catch (tmp74) {
        c4 = 3;
        throw tmp74;
      }
    }
  });
  return obj(...arguments);
};
obj = function _createListingFromEditState() {
  obj = _asyncToGenerator(async (guildId) => {
    let c6 = 0;
    let c7 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let obj10;
      let obj13;
      let obj4;
      let obj8;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_4;
          let name;
          let description;
          let channelBenefits;
          let intangibleBenefits;
          let priceTier;
          let image;
          let channelAccessFormat;
          let id;
          let items;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              c4 = 0;
              guildId = undefined;
              c1 = undefined;
              c2 = undefined;
              onBeforeDispatchNewListing = undefined;
              ({ guildId: c0, editStateId: c1, groupListingId: c2, onBeforeDispatchNewListing: c3 } = closure_0);
              closure_4 = undefined;
              name = undefined;
              description = undefined;
              channelBenefits = undefined;
              intangibleBenefits = undefined;
              priceTier = undefined;
              image = undefined;
              channelAccessFormat = undefined;
              can_access_all_channels = undefined;
              id = undefined;
              items = undefined;
              analyticsContext = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "flex", done: true };
            }
          } else {
            if (1 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                closure_4 = closure_133_10.getState().listings[c1];
                closure_133_1(closure_133_3[20])(null != closure_4, "edit state does not exist");
                name = closure_4.name;
                description = closure_4.description;
                channelBenefits = closure_4.channelBenefits;
                intangibleBenefits = closure_4.intangibleBenefits;
                priceTier = closure_4.priceTier;
                image = closure_4.image;
                channelAccessFormat = closure_4.channelAccessFormat;
                closure_133_1(closure_133_3[20])(null != name, "no name provided");
                closure_133_1(closure_133_3[20])(null != description, "no description provided");
                closure_133_1(closure_133_3[20])(null != priceTier, "no priceTier provided");
                closure_133_1(closure_133_3[20])(null != image, "no image provided");
                can_access_all_channels = channelAccessFormat === closure_133_9.ALL_CHANNELS_ACCESS;
                id = c2;
                if (null == id) {
                  c6 = 2;
                  c7 = 1;
                  const obj7 = { value: obj10.createSubscriptionGroupListing(guildId, {}), done: false };
                  obj10 = closure_133_2(closure_133_3[22]);
                  return obj7;
                } else {
                  const tmp9 = null != channelBenefits && channelBenefits.length > 0;
                  if (tmp9) {
                    c6 = 3;
                    c7 = 1;
                    const obj9 = { value: obj8.createChannelsFromTemplateTierBenefits(guildId, channelBenefits), done: false };
                    obj8 = closure_133_0(closure_133_3[25]);
                    return obj9;
                  }
                }
              }
            } else if (2 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                id = value.id;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            }
            closure_1 = 0;
            closure_2 = channelBenefits;
            if (channelBenefits == null) {
              closure_2 = [];
            }
            items = [];
            closure_1 = HermesBuiltin.arraySpread(items, closure_2, closure_1);
            let closure_3 = intangibleBenefits;
            if (intangibleBenefits == null) {
              closure_3 = [];
            }
            closure_1 = HermesBuiltin.arraySpread(items, closure_3, closure_1);
            const obj3 = closure_133_0(closure_133_3[25]);
            analyticsContext = obj3.getTemplateTierCreationAnalyticsContext(c1, guildId);
            const obj12 = { guildId, groupListingId: id, data: obj13, analyticsContext, onBeforeDispatchNewListing };
            c7 = 3;
            obj13 = { can_access_all_channels, image, name, description, benefits: items, priceTier };
            const obj14 = { value: obj4.createSubscriptionListing(obj12), done: true };
            obj4 = closure_133_2(closure_133_3[22]);
            return obj14;
          }
        } catch (tmp52) {
          c7 = 3;
          throw tmp52;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ AllChannelAccessOptions: c9, useEditStateStore: c10 } = GuildRoleSubscriptionEditStore);
let closure_11 = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
({ CurrencyCodes: closure_12, DEFAULT_ROLE_COLOR: map1 } = Constants);
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
let closure_15 = [];
let closure_16 = [];
let set = new Set();
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx");

export const useListingEditState = function useListingEditState(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = arg2;
  let closure_2 = arg2;
  const tmp2 = authStore(f100802);
  let closure_3 = tmp2;
  const items = [tmp2, arg0, arg1, arg2];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp4 = authStore((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp4) {
    tmp = tmp4;
  }
  const items1 = [tmp, callback];
  return items1;
};
export const useClearEditStateOnUnmount = function useClearEditStateOnUnmount(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => () => {
    let state;
    closure_0 = closure_1_0;
    obj = closure_0(dependencyMap[19]);
    obj.batchUpdates(f118663);
  }, items);
};
export const useName = function useName(arg0) {
  let closure_0;
  let closure_3;
  _require = arg0;
  const f100813 = (name) => {
    let str;
    if (name != null) {
      str = name.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  };
  const items = [GuildRoleSubscriptionsStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(closure_0));
  const tmp2 = f100813(5910)(() => f100830);
  const items1 = [stateFromStores, tmp2];
  let memo = react.useMemo(() => closure_3(stateFromStores), items1);
  _require = arg0;
  const name = "name";
  const tmp4 = closure_10(f100802);
  dependencyMap = tmp4;
  const items2 = [tmp4, arg0, "name", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const usePriceTier = function usePriceTier(editStateId) {
  let closure_3;
  _require = editStateId;
  const f100814 = (arg0) => {
    let price;
    if (arg0 != null) {
      const first = arg0.subscription_plans[0];
      if (first != null) {
        price = first.price;
      }
    }
    return price;
  };
  const items = [GuildRoleSubscriptionsStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(closure_0));
  const tmp2 = f100814(5910)(() => f100830);
  const items1 = [stateFromStores, tmp2];
  let memo = react.useMemo(() => closure_3(stateFromStores), items1);
  _require = editStateId;
  const priceTier = "priceTier";
  const tmp4 = closure_10(f100802);
  dependencyMap = tmp4;
  const items2 = [tmp4, editStateId, "priceTier", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useDescription = function useDescription(arg0) {
  let closure_0;
  let closure_3;
  _require = arg0;
  const f100815 = (description) => {
    let str;
    if (description != null) {
      str = description.description;
    }
    if (str == null) {
      str = "";
    }
    return str;
  };
  const items = [GuildRoleSubscriptionsStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(closure_0));
  const tmp2 = f100815(5910)(() => f100830);
  const items1 = [stateFromStores, tmp2];
  let memo = react.useMemo(() => closure_3(stateFromStores), items1);
  _require = arg0;
  const description = "description";
  const tmp4 = closure_10(f100802);
  dependencyMap = tmp4;
  const items2 = [tmp4, arg0, "description", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useImage = function useImage(editStateId, arg1) {
  let closure_0;
  _require = editStateId;
  const f100816 = (image_asset) => {
    image_asset = undefined;
    if (image_asset != null) {
      image_asset = image_asset.image_asset;
    }
    if (null != image_asset) {
      obj = closure_0(dependencyMap[11]);
      return obj.getAssetURL(image_asset.application_id, image_asset.image_asset, closure_0);
    }
  };
  obj = require("get initialized");
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(closure_0));
  const tmp2 = reactDefault(() => f100830);
  const items1 = [stateFromStores, tmp2];
  let memo = react.useMemo(() => closure_3(stateFromStores), items1);
  _require = editStateId;
  const image = "image";
  const tmp4 = closure_10(f100802);
  let closure_3 = tmp4;
  const items2 = [tmp4, editStateId, "image", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useApplicationId = function useApplicationId(listingId) {
  let closure_3;
  _require = listingId;
  const f100817 = (application_id) => {
    application_id = undefined;
    if (application_id != null) {
      application_id = application_id.application_id;
    }
    return application_id;
  };
  const items = [GuildRoleSubscriptionsStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(closure_0));
  const tmp2 = f100817(5910)(() => f100830);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  return react.useMemo(() => closure_3(stateFromStores), items1);
};
export const useRoleIcon = function useRoleIcon(editStateId, guildId) {
  const tmp = useSubscriptionRoleDefault(guildId, editStateId);
  const items = [tmp];
  let memo = react.useMemo(() => {
    let unicodeEmoji;
    let icon;
    if (closure_0 != null) {
      icon = tmp.icon;
    }
    obj = { icon, unicodeEmoji };
    unicodeEmoji = undefined;
    if (closure_0 != null) {
      unicodeEmoji = tmp.unicodeEmoji;
    }
    return obj;
  }, items);
  let closure_0 = editStateId;
  const roleIcon = "roleIcon";
  const tmp3 = authStore(f100802);
  let closure_3 = tmp3;
  const items1 = [tmp3, editStateId, "roleIcon", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = authStore((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp5) {
    memo = tmp5;
  }
  const items2 = [memo, callback];
  return items2;
};
export const useRole = function useRole(listingId, guildId) {
  let closure_1;
  let closure_3;
  let closure_0 = listingId;
  const tmp = useSubscriptionRoleDefault(guildId, listingId);
  importDefault = tmp;
  const tmp2 = closure_10((arg0) => {
    let roleColor;
    if (arg0.listings[listingId] != null) {
      roleColor = tmp.roleColor;
    }
    return roleColor;
  });
  const color = tmp2;
  const tmp3 = closure_10((arg0) => {
    let roleIcon;
    if (arg0.listings[listingId] != null) {
      roleIcon = tmp.roleIcon;
    }
    return roleIcon;
  });
  dependencyMap = tmp3;
  const items = [tmp, tmp3, tmp2];
  return react.useMemo(() => {
    let DEFAULT_PREVIEW_ROLE = closure_1;
    if (closure_1 == null) {
      DEFAULT_PREVIEW_ROLE = Contants.DEFAULT_PREVIEW_ROLE;
    }
    obj = {};
    const merged = Object.assign(DEFAULT_PREVIEW_ROLE);
    if (undefined !== closure_3) {
      let str = tmp4.icon;
      if (str == null) {
        str = "";
      }
      obj.icon = str;
      let str2 = tmp4.unicodeEmoji;
      if (str2 == null) {
        str2 = "";
      }
      obj.unicodeEmoji = str2;
    }
    if (undefined !== color) {
      obj.color = color;
      const obj2 = utils_ColorUtils;
      obj.colorString = obj2.int2hex(color);
    }
    return obj;
  }, items);
};
export const useRoleColor = function useRoleColor(editStateId, guildId) {
  const tmp = useSubscriptionRoleDefault(guildId, editStateId);
  const items = [tmp];
  let memo = react.useMemo(() => {
    color = undefined;
    if (color != null) {
      color = color.color;
    }
    if (color == null) {
      color = map1;
    }
    return color;
  }, items);
  let color = editStateId;
  const roleColor = "roleColor";
  const tmp3 = closure_10(f100802);
  let closure_3 = tmp3;
  const items1 = [tmp3, editStateId, "roleColor", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp5) {
    memo = tmp5;
  }
  const items2 = [memo, callback];
  return items2;
};
export const useChannelAccessFormat = function useChannelAccessFormat(editStateId, guildId) {
  const tmp = useSubscriptionRoleDefault(guildId, editStateId);
  const items = [tmp];
  let memo = react.useMemo(() => {
    let SOME_CHANNELS_ACCESS;
    if (null == closure_0) {
      SOME_CHANNELS_ACCESS = constants.SOME_CHANNELS_ACCESS;
    } else {
      obj = RolePermissionUtils;
      SOME_CHANNELS_ACCESS = obj.hasViewChannelPermission(tmp) ? tmp4.ALL_CHANNELS_ACCESS : tmp4.SOME_CHANNELS_ACCESS;
    }
    return SOME_CHANNELS_ACCESS;
  }, items);
  let closure_0 = editStateId;
  const channelAccessFormat = "channelAccessFormat";
  const tmp3 = closure_10(f100802);
  let closure_3 = tmp3;
  const items1 = [tmp3, editStateId, "channelAccessFormat", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp5) {
    memo = tmp5;
  }
  const items2 = [memo, callback];
  return items2;
};
export const useChannelBenefits = function useChannelBenefits(listingId) {
  let closure_3;
  _require = listingId;
  const f100824 = (role_benefits) => {
    let found;
    if (null == role_benefits) {
      found = closure_1_15;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(listingId(closure_3[16]).isChannelBenefit);
    }
    return found;
  };
  const items = [GuildRoleSubscriptionsStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(closure_0));
  const tmp2 = f100824(5910)(() => f100830);
  const items1 = [stateFromStores, tmp2];
  let memo = react.useMemo(() => closure_3(stateFromStores), items1);
  _require = listingId;
  const channelBenefits = "channelBenefits";
  const tmp4 = closure_10(f100802);
  dependencyMap = tmp4;
  const items2 = [tmp4, listingId, "channelBenefits", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useIntangibleBenefits = function useIntangibleBenefits(listingId) {
  let closure_3;
  _require = listingId;
  const f100825 = (role_benefits) => {
    let found;
    if (null == role_benefits) {
      found = closure_1_16;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(listingId(closure_3[16]).isIntangibleBenefit);
    }
    return found;
  };
  const items = [GuildRoleSubscriptionsStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(closure_0));
  const tmp2 = f100825(5910)(() => f100830);
  const items1 = [stateFromStores, tmp2];
  let memo = react.useMemo(() => closure_3(stateFromStores), items1);
  _require = listingId;
  const intangibleBenefits = "intangibleBenefits";
  const tmp4 = closure_10(f100802);
  dependencyMap = tmp4;
  const items2 = [tmp4, listingId, "intangibleBenefits", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useTierEmojiIds = function useTierEmojiIds(listingId, guildId) {
  let closure_1;
  _require = guildId;
  const tmp = useSubscriptionRoleDefault(guildId, listingId);
  importDefault = tmp;
  const items = [EmojiStore];
  const items1 = [guildId];
  obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => EmojiStore.getGuildEmoji(guildId), items1);
  const items2 = [stateFromStoresArray, tmp];
  let memo = react.useMemo(function() {
    if (null != closure_1) {
      const id = tmp.id;
      const arr = stateFromStoresArray;
      if (0 !== stateFromStoresArray.length) {
        const found = arr.filter((roles) => {
          roles = roles.roles;
          return roles.includes(id);
        });
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(found.map(f100809));
      }
    }
    return set;
  }, items2);
  _require = listingId;
  const tierEmojiIds = "tierEmojiIds";
  const tmp4 = closure_10(f100802);
  let closure_3 = tmp4;
  const items3 = [tmp4, listingId, "tierEmojiIds", memo];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items3);
  const tmp6 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items4 = [memo, callback];
  return items4;
};
export const useTrialInterval = function useTrialInterval(editStateId) {
  obj = GuildRoleSubscriptionsHooks;
  const subscriptionTrial = obj.useSubscriptionTrial(editStateId);
  let active_trial;
  const tmp2 = useTrialIntervalOptionsDefault;
  if (subscriptionTrial != null) {
    active_trial = subscriptionTrial.active_trial;
  }
  if (active_trial == null) {
    active_trial = null;
  }
  let selectedOption = tmp2(active_trial).selectedOption;
  if (selectedOption == null) {
    selectedOption = null;
  }
  let closure_0 = editStateId;
  const trialInterval = "trialInterval";
  const tmp5 = authStore(f100802);
  let closure_3 = tmp5;
  const items = [tmp5, editStateId, "trialInterval", selectedOption];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp7 = authStore((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp7) {
    selectedOption = tmp7;
  }
  const items1 = [selectedOption, callback];
  return items1;
};
export const useTrialLimit = function useTrialLimit(editStateId) {
  obj = GuildRoleSubscriptionsHooks;
  const subscriptionTrial = obj.useSubscriptionTrial(editStateId);
  let prop;
  if (subscriptionTrial != null) {
    prop = subscriptionTrial.max_num_active_trial_users;
  }
  if (prop == null) {
    prop = null;
  }
  let closure_0 = editStateId;
  const trialLimit = "trialLimit";
  const tmp3 = authStore(f100802);
  let closure_3 = tmp3;
  const items = [tmp3, editStateId, "trialLimit", prop];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp5 = authStore((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  if (undefined !== tmp5) {
    prop = tmp5;
  }
  const items1 = [prop, callback];
  return items1;
};
export const useHasChanges = function useHasChanges(arg0) {
  let closure_0 = arg0;
  return authStore((arg0) => undefined !== arg0.listings[closure_0]);
};
export const useHasChangesForEditStateIds = function useHasChangesForEditStateIds(arg0) {
  let closure_0 = arg0;
  return authStore((arg0) => {
    for (const item10006 of closure_0) {
      if (undefined !== arg0.listings[item10006]) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  });
};
export const useSubscriptionPlan = function useSubscriptionPlan(listingId) {
  let first;
  let memo;
  let subscriptionListing;
  const f100830 = (arg0) => {
    first = undefined;
    if (arg0 != null) {
      first = arg0.subscription_plans[0];
    }
    return first;
  };
  obj = memo(504);
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(closure_0));
  let tmp2 = first(5910)(() => f100830);
  const items1 = [stateFromStores, tmp2];
  memo = react.useMemo(() => closure_3(stateFromStores), items1);
  let closure_0 = listingId;
  const priceTier = "priceTier";
  let c2;
  let tmp4 = closure_10(f100802);
  let closure_3 = tmp4;
  const items2 = [tmp4, listingId, "priceTier", undefined];
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[priceTier];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      obj = {};
      obj[priceTier] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[priceTier];
    }
    return tmp2;
  });
  let tmp7;
  const obj2 = react;
  if (undefined !== tmp6) {
    tmp7 = tmp6;
  }
  const items3 = [tmp7, callback];
  first = _slicedToArray(items3, 1)[0];
  const items4 = [memo, first];
  const items5 = [
    obj2.useMemo(() => {
      let currency;
      let interval;
      let num2;
      let str;
      let num = first;
      if (first == null) {
        let price;
        if (memo != null) {
          price = memo.price;
        }
        num = price;
      }
      if (num == null) {
        num = 0;
      }
      obj = { price: num, currency, interval, interval_count: num2, id: str };
      currency = undefined;
      if (memo != null) {
        currency = tmp2.currency;
      }
      if (currency == null) {
        currency = constants.USD;
      }
      interval = undefined;
      if (memo != null) {
        interval = tmp2.interval;
      }
      if (interval == null) {
        interval = SubscriptionIntervalTypes.MONTH;
      }
      num2 = undefined;
      if (memo != null) {
        num2 = tmp2.interval_count;
      }
      if (num2 == null) {
        num2 = 1;
      }
      str = undefined;
      if (memo != null) {
        str = tmp2.id;
      }
      if (str == null) {
        str = "";
      }
      return obj;
    }, items4)
  ];
  return items5;
};
export { clearEditState };
export const useCreateOrUpdateListingFromEditState = function useCreateOrUpdateListingFromEditState() {
  let closure_1;
  let first;
  let require;
  let tmp2;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, require] = tmp;
  [first, closure_1] = react.useState();
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      function updateListingFromEditState(editStateId) {
        let channelAccessFormat;
        let channelBenefits;
        let description;
        let image;
        let intangibleBenefits;
        let name;
        let priceTier;
        editStateId = editStateId.editStateId;
        ({ guildId, groupListingId } = editStateId);
        subscriptionListing = subscriptionListing.getSubscriptionListing(editStateId);
        closure_1_1(onBeforeDispatchNewListing[20])(null != subscriptionListing, "listing doesnt exist");
        const tmp5 = closure_1_10.getState().listings[editStateId];
        closure_1_1(onBeforeDispatchNewListing[20])(null != tmp5, "edit state does not exist");
        ({ name, description, channelBenefits, intangibleBenefits, priceTier, image, channelAccessFormat } = tmp5);
        obj = {};
        if (name !== subscriptionListing.name) {
          obj.name = name;
        }
        if (description !== subscriptionListing.description) {
          obj.description = description;
        }
        const first = subscriptionListing.subscription_plans[0];
        let price;
        if (first != null) {
          price = first.price;
        }
        if (priceTier !== price) {
          obj.priceTier = priceTier;
        }
        if (null != image) {
          obj.image = image;
        }
        if (null != channelAccessFormat) {
          obj.can_access_all_channels = channelAccessFormat === constants.ALL_CHANNELS_ACCESS;
        }
        if (null != channelBenefits) {
          const benefits = subscriptionListing.role_benefits.benefits;
          const benefits1 = subscriptionListing.role_benefits.benefits;
          const found = benefits.filter(closure_1_0(tmp3[16]).isChannelBenefit);
          const found1 = benefits1.filter(closure_1_0(tmp3[16]).isIntangibleBenefit);
          if (channelBenefits == null) {
            channelBenefits = found;
          }
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items, channelBenefits, 0);
          if (intangibleBenefits == null) {
            intangibleBenefits = found1;
          }
          HermesBuiltin.arraySpread(items, intangibleBenefits, arraySpreadResult);
          obj.benefits = items;
        }
        const obj2 = closure_1_0(onBeforeDispatchNewListing[23]);
        if (!obj2.isEmpty(obj)) {
          const obj4 = { guildId, groupListingId, listingId: editStateId, data: obj };
          const obj3 = closure_1_2(onBeforeDispatchNewListing[22]);
          subscriptionListing = obj3.updateSubscriptionListing(obj4);
        }
        return subscriptionListing;
      }
      function createListingFromEditState() {
        return closure_1_21(...arguments);
      }
      function moveEditState(c1, id) {
        closure_0 = c1;
        closure_1 = id;
        obj = closure_0(closure_3[19]);
        obj.batchUpdates(() => {
          closure_2_10.setState((listings) => {
            let obj2;
            obj = { listings: obj2 };
            obj2 = {};
            const merged = Object.assign(listings.listings);
            obj2[id] = listings.listings[closure_1_0];
            obj2[closure_1_0] = undefined;
            return obj;
          });
        });
      }
      function updateListingPeripheralsFromEditState() {
        return closure_1_20(...arguments);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let subscriptionListing2;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              closure_1 = tmp4;
              guildId = undefined;
              c1 = undefined;
              groupListingId = undefined;
              onBeforeDispatchNewListing = undefined;
              c4 = undefined;
              ({ guildId: c0, editStateId: c1, groupListingId: c2, onBeforeDispatchNewListing: c3, onAfterDispatchNewListing: c4 } = guildId);
              subscriptionListing2 = undefined;
              id = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "flex", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              id = c1;
              subscriptionListing2 = subscriptionListing.getSubscriptionListing(id);
              c4 = 2;
              guildId(true);
              closure_1(undefined);
              if (null != subscriptionListing2) {
                closure_2_1(closure_2_3[20])(null != groupListingId, "groupListingId is null");
                c5 = 4;
                c6 = 1;
                const obj5 = { guildId, editStateId: id, groupListingId };
                const obj6 = { value: updateListingFromEditState(obj5), done: false };
                return obj6;
              } else {
                c5 = 5;
                c6 = 1;
                const obj7 = { guildId, editStateId: id, groupListingId, onBeforeDispatchNewListing };
                const obj8 = { value: createListingFromEditState(obj7), done: false };
                return obj8;
              }
            }
          } else if (2 === c5) {
            c4 = 0;
            guildId(false);
            throw closure_3;
          } else if (3 === c5) {
            c4 = 1;
            subscriptionListing = closure_3;
            if ("getAnyErrorMessage" in subscriptionListing) {
              closure_1(subscriptionListing);
              c4 = 0;
              guildId(false);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              throw subscriptionListing;
            }
          } else {
            if (4 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                guildId(false);
                c6 = 3;
                return { value, done: true };
              }
            } else if (5 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                guildId(false);
                c6 = 3;
                return { value, done: true };
              } else {
                id = value;
                id = id.id;
                moveEditState(c1, id);
                if (c4 != null) {
                  tmp20(id);
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              guildId(false);
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let tmp5 = closure_1;
              closure_2_19(id);
              c4 = 0;
              guildId(false);
              c6 = 3;
              return { value: true, done: true };
            }
            c5 = 6;
            c6 = 1;
            const obj11 = { guildId, editStateId: id };
            const obj12 = { value: updateListingPeripheralsFromEditState(obj11), done: false };
            return obj12;
          }
        } catch (tmp65) {
          closure_3 = tmp65;
          if (0 === c4) {
            c6 = 3;
            throw tmp65;
          } else if (1 === tmp67) {
            c5 = 2;
          } else {
            c5 = 3;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  obj = {
    loading: tmp2,
    error: first,
    handleCreateOrUpdateFromEditState: useCallback(function() {
      return closure_0(...arguments);
    }, [])
  };
  return obj;
};
export const useEditStateIds = function useEditStateIds(groupListingId, guildId, arg2) {
  let closure_3;
  let items;
  let items1;
  let items2;
  let items3;
  _require = guildId;
  obj = arg2;
  if (arg2 === undefined) {
    obj = { includeSoftDeleted: false };
  }
  const obj2 = require("GuildRoleSubscriptionsHooks");
  let subscriptionListingsForGroup = obj2.useSubscriptionListingsForGroup(groupListingId, obj);
  const tmp2 = closure_10((arg0) => arg0.editStateIdsForGroup[guildId]);
  let closure_2 = tmp2;
  const tmp3 = closure_10((setEditStateIdsForGroup) => setEditStateIdsForGroup.setEditStateIdsForGroup);
  dependencyMap = tmp3;
  const tmp4 = closure_10((setListing) => setListing.setListing);
  let closure_4 = tmp4;
  const obj3 = {
    editStateIds: react.useMemo(() => {
      const items = [...subscriptionListingsForGroup.map((id) => id.id)];
      let items1 = closure_2;
      if (closure_2 == null) {
        items1 = [];
      }
      HermesBuiltin.arraySpread(items, items1, tmp2);
      return items;
    }, items),
    addNewEditStateId: react.useCallback(() => {
      obj = v1;
      let closure_0 = obj.v4();
      closure_3(closure_0, (arg0) => {
        let items = arg0;
        if (arg0 == null) {
          items = [];
        }
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, items, 0)] = closure_0;
        return items1;
      });
    }, items1),
    addNewEditStateFromTemplate: react.useCallback((listings) => {
      guildId = listings;
      obj = guildId(closure_3[26]);
      const v4Result = obj.v4();
      subscriptionListingsForGroup = v4Result;
      closure_3(guildId, (arg0) => {
        let items = arg0;
        if (arg0 == null) {
          items = [];
        }
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, items, 0)] = subscriptionListingsForGroup;
        return items1;
      });
      listings = listings.listings;
      let item = listings.forEach((item) => {
        closure_1_4(closure_1, () => {
          let channels;
          obj = { name: item.name, description: item.description, priceTier: item.price_tier, image: item.image, intangibleBenefits: item.additional_perks, channelBenefits: channels.map((id) => ({ ref_id: id.id, ref_type: constants.CHANNEL, description: id.description, name: id.name, emoji_name: id.emoji_name })), roleIcon: obj2, roleColor: item.role_color, usedTemplate: item.category };
          channels = item.channels;
          return obj;
        });
      });
      return v4Result;
    }, items2),
    removeEditStateId: react.useCallback((arg0) => {
      let closure_0 = arg0;
      closure_3(closure_0, (arg0) => {
        let items = arg0;
        if (arg0 == null) {
          items = [];
        }
        return items.filter((item) => item !== closure_1_0);
      });
    }, items3)
  };
  items = [tmp2, subscriptionListingsForGroup];
  items1 = [guildId, tmp3];
  items2 = [guildId, tmp3, tmp4];
  items3 = [guildId, tmp3];
  return obj3;
};
