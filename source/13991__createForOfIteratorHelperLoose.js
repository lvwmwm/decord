// Module ID: 13991
// Function ID: 106430
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: announceCreateTemplateChannels, announceDeleteTemplateChannels, createChannelsFromTemplateTierBenefits, getTemplateTierCreationAnalyticsContext, isEligibleForNewBadge, useChannelWithTemplateFallback, useSuggestedUnusedPrices

// Module 13991 (_createForOfIteratorHelperLoose)
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
function getUsedTemplateChannelsForGuild(arg0) {
  let iter2;
  let arr = useEditStateStore.getState().editStateIdsForGroup[arg0];
  const arg1 = useEditStateStore.getState().listings;
  const set = new Set();
  const importDefault = set;
  if (null != arr) {
    const item = arr.forEach((arg0) => {
      let channelBenefits;
      if (null != listings[arg0]) {
        channelBenefits = tmp.channelBenefits;
      }
      if (null != channelBenefits) {
        const item = channelBenefits.forEach((ref_id) => {
          if (null != channel.getChannel(ref_id.ref_id)) {
            set.add(ref_id.ref_id);
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
      let tmp4 = closure_9;
      let channel = closure_9.getChannel(iter.value);
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
  const _createChannelsFromTemplateTierBenefits = obj;
  return obj(...arguments);
}
let closure_4 = importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[1]).useMemo;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const useEditStateStore = arg1(dependencyMap[4]).useEditStateStore;
let closure_9 = importDefault(dependencyMap[5]);
const GuildFeatures = arg1(dependencyMap[6]).GuildFeatures;
const ChannelFlags = arg1(dependencyMap[7]).ChannelFlags;
importDefault(dependencyMap[8]).shim();
let closure_12 = {};
const importDefaultResult = importDefault(dependencyMap[8]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx");

export const useChannelWithTemplateFallback = function useChannelWithTemplateFallback(ref_id) {
  const arg1 = ref_id;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => channel.getChannel(arg0));
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[9]);
  const items1 = [closure_9];
  let stateFromStores1 = arg1(dependencyMap[9]).useStateFromStores(items1, () => channel2.getChannel(arg0));
  const obj3 = arg1(dependencyMap[9]);
  const items2 = [closure_7];
  const stateFromStores2 = arg1(dependencyMap[9]).useStateFromStores(items2, () => benefitChannel.getBenefitChannel(arg0));
  const importAll = stateFromStores2;
  const items3 = [stateFromStores, stateFromStores2];
  const tmp3 = useMemo(() => {
    let mergeResult = null;
    if (null != stateFromStores) {
      mergeResult = null;
      if (stateFromStores.isObfuscated()) {
        mergeResult = null;
        if (null != stateFromStores2) {
          const obj = { name: stateFromStores2.name, flags: stateFromStores2(closure_3[10]).removeFlag(stateFromStores.flags, constants.OBFUSCATED) };
          mergeResult = stateFromStores.merge(obj);
          const obj2 = stateFromStores2(closure_3[10]);
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
  arr = guildId;
  const items = [closure_7];
  const stateFromStores = arr(dependencyMap[9]).useStateFromStores(items, () => subscriptionListingsForGuild.getSubscriptionListingsForGuild(arg0));
  const arr3 = useEditStateStore((arg0) => arg0.editStateIdsForGroup[closure_0]);
  let closure_1 = useEditStateStore((listings) => listings.listings);
  if (undefined !== price_tier) {
    if (undefined !== arr) {
      const found = stateFromStores.filter((soft_deleted) => !soft_deleted.soft_deleted && !soft_deleted.archived);
      const items1 = [];
      const importAll = items1;
      const mapped = found.map((arg0) => arg0.subscription_plans[0].price);
      if (undefined !== arr3) {
        const item = arr3.forEach((arg0) => {
          let priceTier;
          if (null != closure_1[arg0]) {
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
    const result = set.set("flags", constants.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    callback(closure_3[11]).dispatch({ type: "CHANNEL_CREATE", channel: result });
  });
};
export const announceDeleteTemplateChannels = function announceDeleteTemplateChannels(arg0) {
  let arr = closure_12[arg0];
  if (null == arr) {
    arr = getUsedTemplateChannelsForGuild(arg0);
  }
  const item = arr.forEach((channel) => {
    let obj = callback(closure_3[11]);
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
    return { INVALID_PARAMETER: false, HTML5_ERROR: false };
  } else {
    const templateWithCategory = templateWithCategory.getTemplateWithCategory(guildId, usedTemplate);
    if (null == templateWithCategory) {
      return { INVALID_PARAMETER: false, HTML5_ERROR: false };
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
  let result = arg1(dependencyMap[13]).canManageGuildRoleSubscriptions(features);
  if (result) {
    features = features.features;
    result = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  if (result) {
    result = arg1(dependencyMap[14]).isGuildEligibleForTierTemplates(features.id);
    const obj2 = arg1(dependencyMap[14]);
  }
  return result;
};
