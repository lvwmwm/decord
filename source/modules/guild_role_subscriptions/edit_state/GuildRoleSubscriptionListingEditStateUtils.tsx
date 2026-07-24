// Module ID: 14166
// Function ID: 108887
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 4991, 3752, 14167, 14144, 653, 1851, 566, 5450, 4369, 14168, 14169, 665, 3750, 14170, 14151, 14171, 682, 44, 5048, 5636, 22, 9427, 14172, 491, 2]
// Exports: useApplicationId, useChannelAccessFormat, useChannelBenefits, useClearEditStateOnUnmount, useCreateOrUpdateListingFromEditState, useDescription, useEditStateIds, useHasChanges, useHasChangesForEditStateIds, useImage, useIntangibleBenefits, useName, usePriceTier, useRole, useRoleColor, useRoleIcon, useSubscriptionPlan, useTierEmojiIds, useTrialInterval, useTrialLimit

// Module 14166 (_createForOfIteratorHelperLoose)
import closure_4 from "AllChannelAccessOptions";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import AllChannelAccessOptions from "AllChannelAccessOptions";
import { GuildRoleSubscriptionBenefitTypes as closure_11 } from "MAX_SUBSCRIPTION_TIERS";
import ME from "ME";
import { SubscriptionIntervalTypes } from "GuildFeatures";
import set from "result";

let closure_10;
let closure_12;
let closure_13;
let closure_9;
let require = arg1;
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
function useListingEditState(listingId, priceTier, result) {
  let tmp = result;
  let closure_0 = listingId;
  let closure_1 = priceTier;
  let closure_2 = result;
  let tmp2 = callback3((setListing) => setListing.setListing);
  const dependencyMap = tmp2;
  const items = [tmp2, listingId, priceTier, result];
  const callback = React.useCallback((arg0) => {
    let closure_0 = arg0;
    tmp2(closure_0, (arg0) => {
      let tmp;
      if (null != arg0) {
        tmp = arg0[outer1_1];
      }
      if (null == tmp) {
        tmp = outer1_2;
      }
      if ("function" === typeof callback) {
        let tmp3 = callback(tmp);
      } else {
        tmp3 = callback;
      }
      const obj = {};
      obj[outer1_1] = tmp3;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp4 = callback3((arg0) => {
    let tmp2;
    if (null != arg0.listings[closure_0]) {
      tmp2 = tmp[closure_1];
    }
    return tmp2;
  });
  if (undefined !== tmp4) {
    tmp = tmp4;
  }
  const items1 = [tmp, callback];
  return items1;
}
function useListingValue(listingId, arg1) {
  const _require = listingId;
  const importDefault = arg1;
  const items = [closure_8];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_8.getSubscriptionListing(closure_0));
  const tmp2 = importDefault(5450)(() => closure_1);
  const dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  return React.useMemo(() => tmp2(stateFromStores), items1);
}
function getRoleEmojis(arr) {
  let closure_0 = arg1;
  if (0 === arr.length) {
    return set;
  } else {
    const found = arr.filter((roles) => {
      roles = roles.roles;
      return roles.includes(closure_0);
    });
    const _Set = Set;
    set = new Set(found.map((id) => id.id));
    return set;
  }
}
function clearEditState(NEW_LISTING_EDIT_STATE_ID) {
  (function copyEditState(nonexistantEditStateId, NEW_LISTING_EDIT_STATE_ID) {
    nonexistantEditStateId = "nonexistantEditStateId";
    let closure_1 = NEW_LISTING_EDIT_STATE_ID;
    outer1_0(outer1_3[19]).batchUpdates(() => {
      outer2_10.setState((listings) => {
        let obj = {};
        obj = {};
        const merged = Object.assign(listings.listings);
        obj[outer1_1] = listings.listings[outer1_0];
        obj.listings = obj;
        return obj;
      });
    });
  })("nonexistantEditStateId", NEW_LISTING_EDIT_STATE_ID);
}
function _updateListingPeripheralsFromEditState() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _createListingFromEditState() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AllChannelAccessOptions: closure_9, useEditStateStore: closure_10 } = AllChannelAccessOptions);
({ CurrencyCodes: closure_12, DEFAULT_ROLE_COLOR: closure_13 } = ME);
let closure_15 = [];
let closure_16 = [];
let set = new Set();
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx");

export { useListingEditState };
export const useClearEditStateOnUnmount = function useClearEditStateOnUnmount(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => () => {
    outer2_23(outer1_0);
  }, items);
};
export const useName = function useName(listingId) {
  return useListingEditState(listingId, "name", useListingValue(listingId, (name) => {
    name = undefined;
    if (null != name) {
      name = name.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    return str;
  }));
};
export const usePriceTier = function usePriceTier(editStateId) {
  return useListingEditState(editStateId, "priceTier", useListingValue(editStateId, (arg0) => {
    let price;
    if (null != arg0) {
      const first = arg0.subscription_plans[0];
      if (null != first) {
        price = first.price;
      }
    }
    return price;
  }));
};
export const useDescription = function useDescription(listingId) {
  return useListingEditState(listingId, "description", useListingValue(listingId, (description) => {
    description = undefined;
    if (null != description) {
      description = description.description;
    }
    let str = "";
    if (null != description) {
      str = description;
    }
    return str;
  }));
};
export const useImage = function useImage(editStateId, arg1) {
  let closure_0 = arg1;
  return useListingEditState(editStateId, "image", useListingValue(editStateId, (image_asset) => {
    image_asset = undefined;
    if (null != image_asset) {
      image_asset = image_asset.image_asset;
    }
    if (null != image_asset) {
      return callback(outer1_3[11]).getAssetURL(image_asset.application_id, image_asset.image_asset, callback);
    }
  }));
};
export const useApplicationId = function useApplicationId(listingId) {
  return useListingValue(listingId, (application_id) => {
    application_id = undefined;
    if (null != application_id) {
      application_id = application_id.application_id;
    }
    return application_id;
  });
};
export const useRoleIcon = function useRoleIcon(listingId) {
  const tmp = importDefault(14168)(arg1, listingId);
  const require = tmp;
  const items = [tmp];
  return useListingEditState(listingId, "roleIcon", React.useMemo(() => {
    const obj = {};
    let icon;
    if (null != tmp) {
      icon = tmp.icon;
    }
    let tmp3;
    if (null != icon) {
      tmp3 = icon;
    }
    obj.icon = tmp3;
    let unicodeEmoji;
    if (null != tmp) {
      unicodeEmoji = tmp.unicodeEmoji;
    }
    let tmp6;
    if (null != unicodeEmoji) {
      tmp6 = unicodeEmoji;
    }
    obj.unicodeEmoji = tmp6;
    return obj;
  }, items));
};
export const useRole = function useRole(listingId, guildId) {
  let closure_0 = listingId;
  const tmp = importDefault(14168)(guildId, listingId);
  importDefault = tmp;
  const tmp2 = callback3((arg0) => {
    let roleColor;
    if (null != arg0.listings[closure_0]) {
      roleColor = tmp.roleColor;
    }
    return roleColor;
  });
  const importAll = tmp2;
  const tmp3 = callback3((arg0) => {
    let roleIcon;
    if (null != arg0.listings[closure_0]) {
      roleIcon = tmp.roleIcon;
    }
    return roleIcon;
  });
  const dependencyMap = tmp3;
  const items = [tmp, tmp3, tmp2];
  return React.useMemo(() => {
    const obj = {};
    if (null != closure_1) {
      let DEFAULT_PREVIEW_ROLE = closure_1;
    } else {
      DEFAULT_PREVIEW_ROLE = listingId(tmp3[13]).DEFAULT_PREVIEW_ROLE;
    }
    const merged = Object.assign(DEFAULT_PREVIEW_ROLE);
    if (undefined !== tmp3) {
      const icon = tmp3.icon;
      let str = "";
      let str2 = "";
      if (null != icon) {
        str2 = icon;
      }
      obj.icon = str2;
      const unicodeEmoji = tmp3.unicodeEmoji;
      if (null != unicodeEmoji) {
        str = unicodeEmoji;
      }
      obj.unicodeEmoji = str;
    }
    if (undefined !== closure_2) {
      obj.color = closure_2;
      obj.colorString = listingId(tmp3[14]).int2hex(closure_2);
      const obj2 = listingId(tmp3[14]);
    }
    return obj;
  }, items);
};
export const useRoleColor = function useRoleColor(editStateId, guildId) {
  const tmp = importDefault(14168)(guildId, editStateId);
  const require = tmp;
  const items = [tmp];
  return useListingEditState(editStateId, "roleColor", React.useMemo(() => {
    let color;
    if (null != tmp) {
      color = tmp.color;
    }
    if (null == color) {
      color = outer1_13;
    }
    return color;
  }, items));
};
export const useChannelAccessFormat = function useChannelAccessFormat(editStateId, guildId) {
  const tmp = importDefault(14168)(guildId, editStateId);
  const require = tmp;
  const items = [tmp];
  return useListingEditState(editStateId, "channelAccessFormat", React.useMemo(() => {
    if (null == tmp) {
      let SOME_CHANNELS_ACCESS = outer1_9.SOME_CHANNELS_ACCESS;
    } else {
      SOME_CHANNELS_ACCESS = tmp(outer1_3[15]).hasViewChannelPermission(tmp) ? tmp4.ALL_CHANNELS_ACCESS : tmp4.SOME_CHANNELS_ACCESS;
      const obj = tmp(outer1_3[15]);
    }
    return SOME_CHANNELS_ACCESS;
  }, items));
};
export const useChannelBenefits = function useChannelBenefits(listingId) {
  return useListingEditState(listingId, "channelBenefits", useListingValue(listingId, (role_benefits) => {
    if (null == role_benefits) {
      let found = outer1_15;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(outer1_0(outer1_3[16]).isChannelBenefit);
    }
    return found;
  }));
};
export const useIntangibleBenefits = function useIntangibleBenefits(listingId) {
  return useListingEditState(listingId, "intangibleBenefits", useListingValue(listingId, (role_benefits) => {
    if (null == role_benefits) {
      let found = outer1_16;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(outer1_0(outer1_3[16]).isIntangibleBenefit);
    }
    return found;
  }));
};
export const useTierEmojiIds = function useTierEmojiIds(listingId, guildId) {
  const _require = guildId;
  const tmp = importDefault(14168)(guildId, listingId);
  importDefault = tmp;
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items, () => outer1_7.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStoresArray, tmp];
  return useListingEditState(listingId, "tierEmojiIds", React.useMemo(() => {
    if (null == tmp) {
      let tmp4 = outer1_17;
    } else {
      tmp4 = outer1_22(stateFromStoresArray, tmp.id);
    }
    return tmp4;
  }, items2));
};
export const useTrialInterval = function useTrialInterval(editStateId) {
  const subscriptionTrial = require(14151) /* _createForOfIteratorHelperLoose */.useSubscriptionTrial(editStateId);
  let active_trial;
  const obj = require(14151) /* _createForOfIteratorHelperLoose */;
  if (null != subscriptionTrial) {
    active_trial = subscriptionTrial.active_trial;
  }
  let tmp4 = null;
  if (null != active_trial) {
    tmp4 = active_trial;
  }
  const selectedOption = importDefault(14171)(tmp4).selectedOption;
  let tmp6 = null;
  if (null != selectedOption) {
    tmp6 = selectedOption;
  }
  return useListingEditState(editStateId, "trialInterval", tmp6);
};
export const useTrialLimit = function useTrialLimit(editStateId) {
  const subscriptionTrial = require(14151) /* _createForOfIteratorHelperLoose */.useSubscriptionTrial(editStateId);
  let prop;
  if (null != subscriptionTrial) {
    prop = subscriptionTrial.max_num_active_trial_users;
  }
  let tmp4 = null;
  if (null != prop) {
    tmp4 = prop;
  }
  return useListingEditState(editStateId, "trialLimit", tmp4);
};
export const useHasChanges = function useHasChanges(first) {
  let closure_0 = first;
  return callback3((arg0) => undefined !== arg0.listings[closure_0]);
};
export const useHasChangesForEditStateIds = function useHasChangesForEditStateIds(arg0) {
  let closure_0 = arg0;
  return callback3((arg0) => {
    const tmp = outer1_18(closure_0);
    let iter = tmp();
    if (!iter.done) {
      while (undefined === arg0.listings[iter.value]) {
        let iter2 = tmp();
        iter = iter2;
      }
      return true;
    }
    return false;
  });
};
export const useSubscriptionPlan = function useSubscriptionPlan(listingId) {
  const tmp = useListingValue(listingId, (arg0) => {
    let first;
    if (null != arg0) {
      first = arg0.subscription_plans[0];
    }
    return first;
  });
  const require = tmp;
  let first = callback2(useListingEditState(listingId, "priceTier", undefined), 1)[0];
  const items = [tmp, first];
  const items1 = [
    React.useMemo(() => {
      const obj = {};
      if (null != first) {
        let price = first;
      } else if (null != tmp) {
        price = tmp.price;
      }
      let num = 0;
      if (null != price) {
        num = price;
      }
      obj.price = num;
      let currency;
      if (null != tmp) {
        currency = tmp.currency;
      }
      if (null == currency) {
        currency = outer1_12.USD;
      }
      obj.currency = currency;
      let interval;
      if (null != tmp) {
        interval = tmp.interval;
      }
      if (null == interval) {
        interval = outer1_14.MONTH;
      }
      obj.interval = interval;
      let interval_count;
      if (null != tmp) {
        interval_count = tmp.interval_count;
      }
      let num2 = 1;
      if (null != interval_count) {
        num2 = interval_count;
      }
      obj.interval_count = num2;
      let id;
      if (null != tmp) {
        id = tmp.id;
      }
      let str = "";
      if (null != id) {
        str = id;
      }
      obj.id = str;
      return obj;
    }, items)
  ];
  return items1;
};
export { clearEditState };
export const useCreateOrUpdateListingFromEditState = function useCreateOrUpdateListingFromEditState() {
  const tmp = callback2(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(), 2);
  let closure_1 = tmp2[1];
  return {
    loading: tmp[0],
    error: tmp2[0],
    handleCreateOrUpdateFromEditState: React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_4(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), [])
  };
};
export const useEditStateIds = function useEditStateIds(groupListingId, guildId, arg2) {
  let tmp = arg2;
  const _require = guildId;
  if (arg2 === undefined) {
    let obj = { includeSoftDeleted: false };
    tmp = obj;
  }
  let subscriptionListingsForGroup;
  let c2;
  let dependencyMap;
  let c4;
  subscriptionListingsForGroup = _require(14151).useSubscriptionListingsForGroup(groupListingId, tmp);
  const tmp3 = callback3((arg0) => arg0.editStateIdsForGroup[closure_0]);
  c2 = tmp3;
  const tmp4 = callback3((setEditStateIdsForGroup) => setEditStateIdsForGroup.setEditStateIdsForGroup);
  dependencyMap = tmp4;
  const tmp5 = callback3((setListing) => setListing.setListing);
  c4 = tmp5;
  obj = {
    editStateIds: React.useMemo(() => {
      const items = [...subscriptionListingsForGroup.map((id) => id.id), ...tmp];
      return items;
    }, items),
    addNewEditStateId: React.useCallback(() => {
      guildId = guildId(_undefined[26]).v4();
      _undefined(guildId, (arg0) => {
        let items = arg0;
        if (null == arg0) {
          items = [];
        }
        const items1 = [...items, closure_0];
        return items1;
      });
    }, items1),
    addNewEditStateFromTemplate: React.useCallback((listings) => {
      const guildId = listings;
      const v4Result = guildId(_undefined[26]).v4();
      const subscriptionListingsForGroup = v4Result;
      _undefined(guildId, (arg0) => {
        let items = arg0;
        if (null == arg0) {
          items = [];
        }
        const items1 = [...items, closure_1];
        return items1;
      });
      listings = listings.listings;
      const item = listings.forEach((arg0) => {
        let closure_0 = arg0;
        outer1_4(closure_1, () => {
          obj = { name: closure_0.name, description: closure_0.description, priceTier: closure_0.price_tier, image: closure_0.image, intangibleBenefits: closure_0.additional_perks, channelBenefits: channels.map((id) => ({ ref_id: id.id, ref_type: outer4_11.CHANNEL, description: id.description, name: id.name, emoji_name: id.emoji_name })), roleIcon: obj, roleColor: closure_0.role_color, usedTemplate: closure_0.category };
          channels = closure_0.channels;
          obj = { unicodeEmoji: undefined, icon: closure_0.image };
          return obj;
        });
      });
      return v4Result;
    }, items2),
    removeEditStateId: React.useCallback((arg0) => {
      let closure_0 = arg0;
      _undefined(closure_0, (arg0) => {
        let items = arg0;
        if (null == arg0) {
          items = [];
        }
        return items.filter((arg0) => arg0 !== outer1_0);
      });
    }, items3)
  };
  items = [tmp3, subscriptionListingsForGroup];
  items1 = [guildId, tmp4];
  items2 = [guildId, tmp4, tmp5];
  items3 = [guildId, tmp4];
  return obj;
};
