// Module ID: 14172
// Function ID: 109004
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 31, 1348, 3752, 14167, 14173, 653, 1355, 4370, 624, 1360, 686, 8455, 5641, 12952, 2]
// Exports: announceCreateTemplateChannels, announceDeleteTemplateChannels, createChannelsFromTemplateTierBenefits, getTemplateTierCreationAnalyticsContext, isEligibleForNewBadge, useChannelWithTemplateFallback, useSuggestedUnusedPrices

// Module 14172 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useMemo } from "result";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { useEditStateStore } from "AllChannelAccessOptions";
import closure_9 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import { ChannelFlags } from "set";
import importDefaultResult from "allSettled";

const require = arg1;
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
function getUsedTemplateChannelsForGuild(arg0) {
  let iter2;
  let arr = useEditStateStore.getState().editStateIdsForGroup[arg0];
  const listings = useEditStateStore.getState().listings;
  const set = new Set();
  if (null != arr) {
    let item = arr.forEach((arg0) => {
      let channelBenefits;
      if (null != listings[arg0]) {
        channelBenefits = tmp.channelBenefits;
      }
      if (null != channelBenefits) {
        const item = channelBenefits.forEach((ref_id) => {
          if (null != outer2_9.getChannel(ref_id.ref_id)) {
            outer1_1.add(ref_id.ref_id);
          }
        });
      }
    });
  }
  const items = [];
  const tmp3 = _createForOfIteratorHelperLoose(set);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let tmp4 = store;
      let channel = store.getChannel(iter.value);
      if (null != channel) {
        arr = items.push(channel.set("guild_id", arg0));
      }
      iter2 = tmp3();
      iter = iter2;
    } while (!iter2.done);
  }
  return items;
}
function _createChannelsFromTemplateTierBenefits() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
require("allSettled").shim();
let closure_12 = {};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx");

export const useChannelWithTemplateFallback = function useChannelWithTemplateFallback(ref_id) {
  const _require = ref_id;
  const items = [closure_6];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_6.getChannel(closure_0));
  let obj = _require(624);
  const items1 = [closure_9];
  let stateFromStores1 = _require(624).useStateFromStores(items1, () => outer1_9.getChannel(closure_0));
  const obj3 = _require(624);
  const items2 = [closure_7];
  const stateFromStores2 = _require(624).useStateFromStores(items2, () => outer1_7.getBenefitChannel(closure_0));
  const items3 = [stateFromStores, stateFromStores2];
  const tmp3 = useMemo(() => {
    let mergeResult = null;
    if (null != stateFromStores) {
      mergeResult = null;
      if (stateFromStores.isObfuscated()) {
        mergeResult = null;
        if (null != stateFromStores2) {
          const obj = { name: stateFromStores2.name, flags: stateFromStores2(outer1_3[10]).removeFlag(stateFromStores.flags, outer1_11.OBFUSCATED) };
          mergeResult = stateFromStores.merge(obj);
          const obj2 = stateFromStores2(outer1_3[10]);
        }
      }
    }
    return mergeResult;
  }, items3);
  if (null != stateFromStores) {
    let tmp4 = stateFromStores;
    if (stateFromStores.isObfuscated()) {
      tmp4 = stateFromStores;
      if (null != tmp3) {
        tmp4 = tmp3;
      }
    }
    stateFromStores1 = tmp4;
  }
  return stateFromStores1;
};
export const useSuggestedUnusedPrices = function useSuggestedUnusedPrices(guildId, arr, price_tier) {
  const _require = guildId;
  const items = [closure_7];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_7.getSubscriptionListingsForGuild(closure_0));
  const arr3 = useEditStateStore((arg0) => arg0.editStateIdsForGroup[closure_0]);
  let closure_1 = useEditStateStore((listings) => listings.listings);
  if (undefined !== price_tier) {
    if (undefined !== arr) {
      const found = stateFromStores.filter((soft_deleted) => !soft_deleted.soft_deleted && !soft_deleted.archived);
      const items1 = [];
      const mapped = found.map((arg0) => arg0.subscription_plans[0].price);
      if (undefined !== arr3) {
        const item = arr3.forEach((arg0) => {
          let priceTier;
          if (null != table[arg0]) {
            priceTier = tmp.priceTier;
          }
          if (null != priceTier) {
            items1.push(priceTier);
          }
        });
      }
      const _Set = Set;
      const set = new Set(items1.concat(mapped));
      if (set.has(price_tier)) {
        const index = arr.indexOf(price_tier);
        if (-1 === index) {
          return null;
        } else {
          const items2 = [];
          let sum = index + 1;
          if (sum < arr.length) {
            while (true) {
              if (!set.has(arr[sum])) {
                arr = items2.push(arr[sum]);
              }
              if (3 === items2.length) {
                break;
              } else {
                sum = sum + 1;
              }
            }
            return items2;
          }
          return items2;
        }
      } else {
        return null;
      }
    }
  }
  return null;
};
export const announceCreateTemplateChannels = function announceCreateTemplateChannels(arg0) {
  const arr = getUsedTemplateChannelsForGuild(arg0);
  closure_12[arg0] = arr;
  const item = arr.forEach((set) => {
    const result = set.set("flags", outer1_11.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    outer1_1(outer1_3[11]).dispatch({ type: "CHANNEL_CREATE", channel: result });
  });
};
export const announceDeleteTemplateChannels = function announceDeleteTemplateChannels(arg0) {
  let arr = table[arg0];
  if (null == arr) {
    arr = getUsedTemplateChannelsForGuild(arg0);
  }
  const item = arr.forEach((channel) => {
    let obj = outer1_1(outer1_3[11]);
    obj = { type: "CHANNEL_DELETE", channel };
    obj.dispatch(obj);
  });
};
export const createChannelsFromTemplateTierBenefits = function createChannelsFromTemplateTierBenefits(guildId, channelBenefits) {
  return _createChannelsFromTemplateTierBenefits(...arguments);
};
export const getTemplateTierCreationAnalyticsContext = function getTemplateTierCreationAnalyticsContext(editStateId, guildId) {
  const tmp = useEditStateStore.getState().listings[editStateId];
  let usedTemplate;
  if (null != tmp) {
    usedTemplate = tmp.usedTemplate;
  }
  if (null == usedTemplate) {
    return { templateCategory: null, hasChangeFromTemplate: null };
  } else {
    const templateWithCategory = store.getTemplateWithCategory(guildId, usedTemplate);
    if (null == templateWithCategory) {
      return { templateCategory: null, hasChangeFromTemplate: null };
    } else {
      const first = templateWithCategory.listings[0];
      let name;
      if (null != tmp) {
        name = tmp.name;
      }
      if (name === first.name) {
        let description;
        if (null != tmp) {
          description = tmp.description;
        }
        if (description === first.description) {
          let priceTier;
          if (null != tmp) {
            priceTier = tmp.priceTier;
          }
          if (priceTier === first.price_tier) {
            let image;
            if (null != tmp) {
              image = tmp.image;
            }
            if (image === first.image) {
              let roleColor;
              if (null != tmp) {
                roleColor = tmp.roleColor;
              }
              if (roleColor === first.role_color) {
                let length;
                if (null != tmp) {
                  const channelBenefits = tmp.channelBenefits;
                  if (null != channelBenefits) {
                    length = channelBenefits.length;
                  }
                }
                if (length === first.channels.length) {
                  let length1;
                  if (null != tmp) {
                    const intangibleBenefits = tmp.intangibleBenefits;
                    if (null != intangibleBenefits) {
                      length1 = intangibleBenefits.length;
                    }
                  }
                  if (length1 === first.additional_perks.length) {
                    let num3 = 0;
                    if (0 < first.channels.length) {
                      while (tmp.channelBenefits[num3].name === first.channels[num3].name) {
                        if (tmp10.description !== tmp11.description) {
                          break;
                        } else if (tmp10.emoji_name !== tmp11.emoji_name) {
                          break;
                        } else {
                          num3 = num3 + 1;
                        }
                      }
                      let obj = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                      return obj;
                    }
                    let num = 0;
                    if (0 < first.additional_perks.length) {
                      while (tmp.intangibleBenefits[num].name === first.additional_perks[num].name) {
                        if (tmp12.description !== tmp13.description) {
                          break;
                        } else if (tmp12.emoji_name !== tmp13.emoji_name) {
                          break;
                        } else {
                          num = num + 1;
                        }
                      }
                      obj = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                      return obj;
                    }
                    obj = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: false };
                    return obj;
                  }
                }
                const obj1 = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                return obj1;
              }
            }
          }
        }
      }
      const obj2 = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
      return obj2;
    }
  }
};
export const isEligibleForNewBadge = function isEligibleForNewBadge(features) {
  let result = require(5641) /* canSeeGuildRoleSubscriptionSettingsContent */.canManageGuildRoleSubscriptions(features);
  if (result) {
    features = features.features;
    result = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  if (result) {
    result = require(12952) /* GuildFeatures */.isGuildEligibleForTierTemplates(features.id);
    const obj2 = require(12952) /* GuildFeatures */;
  }
  return result;
};
