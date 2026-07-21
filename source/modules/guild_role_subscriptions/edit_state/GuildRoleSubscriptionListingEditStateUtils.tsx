// Module ID: 13995
// Function ID: 106368
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useApplicationId, useChannelAccessFormat, useChannelBenefits, useClearEditStateOnUnmount, useCreateOrUpdateListingFromEditState, useDescription, useEditStateIds, useHasChanges, useHasChangesForEditStateIds, useImage, useIntangibleBenefits, useName, usePriceTier, useRole, useRoleColor, useRoleIcon, useSubscriptionPlan, useTierEmojiIds, useTrialInterval, useTrialLimit

// Module 13995 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function useListingEditState(listingId, priceTier, closure_6) {
  let tmp = closure_6;
  priceTier = listingId;
  const importDefault = priceTier;
  const importAll = closure_6;
  const tmp2 = callback3((setListing) => setListing.setListing);
  const dependencyMap = tmp2;
  const items = [tmp2, listingId, priceTier, closure_6];
  const callback = React.useCallback((arg0) => {
    tmp2(arg0, (arg0) => {
      let tmp;
      if (null != arg0) {
        tmp = arg0[closure_1];
      }
      if (null == tmp) {
        tmp = closure_2;
      }
      if ("function" === typeof arg0) {
        let tmp3 = arg0(tmp);
      } else {
        tmp3 = arg0;
      }
      const obj = {};
      obj[closure_1] = tmp3;
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
  arg1 = listingId;
  const importDefault = arg1;
  const items = [closure_8];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(arg0));
  const importAll = stateFromStores;
  const tmp2 = importDefault(dependencyMap[10])(() => arg1);
  const dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  return React.useMemo(() => tmp2(stateFromStores), items1);
}
function getRoleEmojis(arr) {
  if (0 === arr.length) {
    return set;
  } else {
    const found = arr.filter((roles) => {
      roles = roles.roles;
      return roles.includes(arg1);
    });
    const _Set = Set;
    const set = new Set(found.map((id) => id.id));
    return set;
  }
}
function clearEditState(NEW_LISTING_EDIT_STATE_ID) {
  function copyEditState(nonexistantEditStateId, NEW_LISTING_EDIT_STATE_ID) {
    const callback = "nonexistantEditStateId";
    callback(closure_3[19]).batchUpdates(() => {
      state.setState((listings) => {
        let obj = {};
        obj = {};
        const merged = Object.assign(listings.listings);
        obj[closure_1] = listings.listings[closure_0];
        obj.listings = obj;
        return obj;
      });
    });
  }("nonexistantEditStateId", NEW_LISTING_EDIT_STATE_ID);
}
function _updateListingPeripheralsFromEditState() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateListingPeripheralsFromEditState = obj;
  return obj(...arguments);
}
function _createListingFromEditState() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createListingFromEditState = obj;
  return obj(...arguments);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
({ AllChannelAccessOptions: closure_9, useEditStateStore: closure_10 } = arg1(dependencyMap[5]));
let closure_11 = arg1(dependencyMap[6]).GuildRoleSubscriptionBenefitTypes;
const tmp2 = arg1(dependencyMap[5]);
({ CurrencyCodes: closure_12, DEFAULT_ROLE_COLOR: closure_13 } = arg1(dependencyMap[7]));
const SubscriptionIntervalTypes = arg1(dependencyMap[8]).SubscriptionIntervalTypes;
let closure_15 = [];
let closure_16 = [];
const set = new Set();
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx");

export { useListingEditState };
export const useClearEditStateOnUnmount = function useClearEditStateOnUnmount(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => () => {
    callback(closure_0);
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
  return useListingEditState(editStateId, "image", useListingValue(editStateId, (image_asset) => {
    image_asset = undefined;
    if (null != image_asset) {
      image_asset = image_asset.image_asset;
    }
    if (null != image_asset) {
      return arg1(closure_3[11]).getAssetURL(image_asset.application_id, image_asset.image_asset, arg1);
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
  const tmp = importDefault(dependencyMap[12])(arg1, listingId);
  const arg1 = tmp;
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
  guildId = listingId;
  const tmp = importDefault(dependencyMap[12])(guildId, listingId);
  const importDefault = tmp;
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
    if (null != tmp) {
      let DEFAULT_PREVIEW_ROLE = tmp;
    } else {
      DEFAULT_PREVIEW_ROLE = arg0(tmp3[13]).DEFAULT_PREVIEW_ROLE;
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
    if (undefined !== tmp2) {
      obj.color = tmp2;
      obj.colorString = arg0(tmp3[14]).int2hex(tmp2);
      const obj2 = arg0(tmp3[14]);
    }
    return obj;
  }, items);
};
export const useRoleColor = function useRoleColor(editStateId, guildId) {
  const tmp = importDefault(dependencyMap[12])(guildId, editStateId);
  guildId = tmp;
  const items = [tmp];
  return useListingEditState(editStateId, "roleColor", React.useMemo(() => {
    let color;
    if (null != tmp) {
      color = tmp.color;
    }
    if (null == color) {
      color = closure_13;
    }
    return color;
  }, items));
};
export const useChannelAccessFormat = function useChannelAccessFormat(editStateId, guildId) {
  const tmp = importDefault(dependencyMap[12])(guildId, editStateId);
  guildId = tmp;
  const items = [tmp];
  return useListingEditState(editStateId, "channelAccessFormat", React.useMemo(() => {
    if (null == tmp) {
      let SOME_CHANNELS_ACCESS = constants.SOME_CHANNELS_ACCESS;
    } else {
      SOME_CHANNELS_ACCESS = tmp(closure_3[15]).hasViewChannelPermission(tmp) ? tmp4.ALL_CHANNELS_ACCESS : tmp4.SOME_CHANNELS_ACCESS;
      const obj = tmp(closure_3[15]);
    }
    return SOME_CHANNELS_ACCESS;
  }, items));
};
export const useChannelBenefits = function useChannelBenefits(listingId) {
  return useListingEditState(listingId, "channelBenefits", useListingValue(listingId, (role_benefits) => {
    if (null == role_benefits) {
      let found = closure_15;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(callback(closure_3[16]).isChannelBenefit);
    }
    return found;
  }));
};
export const useIntangibleBenefits = function useIntangibleBenefits(listingId) {
  return useListingEditState(listingId, "intangibleBenefits", useListingValue(listingId, (role_benefits) => {
    if (null == role_benefits) {
      let found = closure_16;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(callback(closure_3[16]).isIntangibleBenefit);
    }
    return found;
  }));
};
export const useTierEmojiIds = function useTierEmojiIds(listingId, guildId) {
  const tmp = importDefault(dependencyMap[12])(guildId, listingId);
  const importDefault = tmp;
  const items = [closure_7];
  const items1 = [guildId];
  const stateFromStoresArray = guildId(dependencyMap[9]).useStateFromStoresArray(items, () => guildEmoji.getGuildEmoji(arg1), items1);
  const importAll = stateFromStoresArray;
  const items2 = [stateFromStoresArray, tmp];
  return useListingEditState(listingId, "tierEmojiIds", React.useMemo(() => {
    if (null == tmp) {
      let tmp4 = closure_17;
    } else {
      tmp4 = callback(stateFromStoresArray, tmp.id);
    }
    return tmp4;
  }, items2));
};
export const useTrialInterval = function useTrialInterval(editStateId) {
  const subscriptionTrial = arg1(dependencyMap[17]).useSubscriptionTrial(editStateId);
  let active_trial;
  const obj = arg1(dependencyMap[17]);
  if (null != subscriptionTrial) {
    active_trial = subscriptionTrial.active_trial;
  }
  let tmp4 = null;
  if (null != active_trial) {
    tmp4 = active_trial;
  }
  const selectedOption = importDefault(dependencyMap[18])(tmp4).selectedOption;
  let tmp6 = null;
  if (null != selectedOption) {
    tmp6 = selectedOption;
  }
  return useListingEditState(editStateId, "trialInterval", tmp6);
};
export const useTrialLimit = function useTrialLimit(editStateId) {
  const subscriptionTrial = arg1(dependencyMap[17]).useSubscriptionTrial(editStateId);
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
  const arg1 = first;
  return callback3((arg0) => undefined !== arg0.listings[closure_0]);
};
export const useHasChangesForEditStateIds = function useHasChangesForEditStateIds(arg0) {
  const arg1 = arg0;
  return callback3((arg0) => {
    const tmp = callback(arg0);
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
  const arg1 = tmp;
  const first = callback2(useListingEditState(listingId, "priceTier", undefined), 1)[0];
  const importDefault = first;
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
        currency = constants.USD;
      }
      obj.currency = currency;
      let interval;
      if (null != tmp) {
        interval = tmp.interval;
      }
      if (null == interval) {
        interval = constants2.MONTH;
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
    handleCreateOrUpdateFromEditState: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), [])
  };
};
export const useEditStateIds = function useEditStateIds(groupListingId, guildId, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    let obj = { includeSoftDeleted: false };
    tmp = obj;
  }
  let importDefault;
  let importAll;
  let dependencyMap;
  let closure_4;
  const subscriptionListingsForGroup = guildId(dependencyMap[17]).useSubscriptionListingsForGroup(groupListingId, tmp);
  importDefault = subscriptionListingsForGroup;
  const tmp3 = callback3((arg0) => arg0.editStateIdsForGroup[closure_0]);
  importAll = tmp3;
  const tmp4 = callback3((setEditStateIdsForGroup) => setEditStateIdsForGroup.setEditStateIdsForGroup);
  dependencyMap = tmp4;
  const tmp5 = callback3((setListing) => setListing.setListing);
  closure_4 = tmp5;
  obj = {
    editStateIds: React.useMemo(() => {
      const items = [...closure_1.map((id) => id.id), ...tmp];
      return items;
    }, items),
    addNewEditStateId: React.useCallback(() => {
      const guildId = guildId(tmp4[26]).v4();
      tmp4(guildId, (arg0) => {
        let items = arg0;
        if (null == arg0) {
          items = [];
        }
        const items1 = [...items, closure_0];
        return items1;
      });
    }, items1),
    addNewEditStateFromTemplate: React.useCallback((listings) => {
      const arg1 = listings;
      const v4Result = arg1(tmp4[26]).v4();
      const subscriptionListingsForGroup = v4Result;
      tmp4(arg1, (arg0) => {
        let items = arg0;
        if (null == arg0) {
          items = [];
        }
        const items1 = [...items, v4Result];
        return items1;
      });
      listings = listings.listings;
      const item = listings.forEach((arg0) => {
        callback(v4Result, (self) => {
          let obj = { name: self.name, description: self.description, priceTier: self.price_tier, image: self.image, intangibleBenefits: self.additional_perks, channelBenefits: channels.map((id) => ({ ref_id: id.id, ref_type: constants.CHANNEL, description: id.description, name: id.name, emoji_name: id.emoji_name })), roleIcon: obj, roleColor: self.role_color, usedTemplate: self.category };
          const channels = self.channels;
          obj = { unicodeEmoji: undefined, icon: self.image };
          return obj;
        });
      });
      return v4Result;
    }, items2),
    removeEditStateId: React.useCallback((arg0) => {
      const arg1 = arg0;
      tmp4(arg1, (arg0) => {
        let items = arg0;
        if (null == arg0) {
          items = [];
        }
        return items.filter((arg0) => arg0 !== closure_0);
      });
    }, items3)
  };
  const items = [tmp3, subscriptionListingsForGroup];
  const items1 = [guildId, tmp4];
  const items2 = [guildId, tmp4, tmp5];
  const items3 = [guildId, tmp4];
  return obj;
};
