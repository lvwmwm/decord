// Module ID: 14778
// Function ID: 14779
// Name: GuildRoleSubscriptionTierTemplatesUtils
// Dependencies: [5, 19, 2045, 4462, 14773, 14779, 1074, 2052, 5093, 563, 1385, 573, 9014, 6678, 13437, 2]
// Exports: announceCreateTemplateChannels, announceDeleteTemplateChannels, createChannelsFromTemplateTierBenefits, getTemplateTierCreationAnalyticsContext, isEligibleForNewBadge, useChannelWithTemplateFallback, useSuggestedUnusedPrices

// Module 14778 (GuildRoleSubscriptionTierTemplatesUtils)
import react from "react" /* 19 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 6678 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 14773 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4462 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 14779 */;
import allSettled_mod from "allSettled" /* 5093 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, set;

let tmp;
const GuildRoleSubscriptionsExperimentUtils = tmp(13437);
function getUsedTemplateChannelsForGuild(arg0) {
  const arr = useEditStateStore.getState().editStateIdsForGroup[arg0];
  const listings = useEditStateStore.getState().listings;
  set = new Set();
  const tmp2 = set;
  if (null != arr) {
    let item = arr.forEach((item) => {
      let channelBenefits;
      if (listings[item] != null) {
        channelBenefits = tmp.channelBenefits;
      }
      if (channelBenefits != null) {
        item = channelBenefits.forEach((ref_id) => {
          if (null != channel.getChannel(ref_id.ref_id)) {
            set.add(ref_id.ref_id);
          }
        });
      }
    });
  }
  const items = [];
  const tmp4 = tmp2[Symbol.iterator]();
  while (tmp4 !== undefined) {
    let channel = GuildRoleSubscriptionTierTemplatesStore.getChannel(tmp5);
    obj = channel;
    if (null != channel) {
      let arr2 = items.push(obj.set("guild_id", arg0));
    }
    continue;
  }
  return items;
}
let obj = function _createChannelsFromTemplateTierBenefits() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let tmp;
    let closure_1 = value;
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            const items = [];
            let closure_3 = [];
            let item = closure_1.forEach((ref_id) => {
              channel = channel.getChannel(ref_id.ref_id);
              if (null != channel) {
                const push = navigation.push;
                obj = closure_2_1(closure_2_3[12]);
                push(obj.createRoleSubscriptionTemplateChannel(closure_1_0, channel.name, channel.type, channel.topic));
                closure_1_3.push(channel);
              }
            });
            if (0 !== items.length) {
              c3 = 1;
              c4 = 1;
              const obj4 = { value: Promise.allSettled(items), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const item1 = value.forEach((status, index) => {
            const id = closure_1_3[index].id;
            if ("fulfilled" === status.status) {
              const body = status.value.body;
              const arr2 = closure_2_8.getState().editStateIdsForGroup[closure_1_0];
              const listings = closure_2_8.getState().listings;
              if (null != arr2) {
                let item = arr2.forEach((item) => {
                  let channelBenefits;
                  if (listings[item] != null) {
                    channelBenefits = tmp.channelBenefits;
                  }
                  if (channelBenefits != null) {
                    item = channelBenefits.forEach((ref_id) => {
                      if (ref_id.ref_id === closure_1_0) {
                        ref_id.ref_id = id.id;
                      }
                    });
                  }
                });
              }
            } else {
              const tmp = null;
              if (null != closure_1_1) {
                const findIndexResult = closure_1_1.findIndex((ref_id) => ref_id.ref_id === id);
                if (-1 !== findIndexResult) {
                  if (closure_1_1 != null) {
                    closure_1_1.splice(findIndexResult, 1);
                  }
                }
              }
            }
          });
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp8) {
        c4 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
const useMemo = react.useMemo;
const useEditStateStore = GuildRoleSubscriptionEditStore.useEditStateStore;
const GuildFeatures = Constants.GuildFeatures;
const ChannelFlags = ChannelConstants.ChannelFlags;
let allSettled = allSettled_mod;
allSettled = allSettled.shim();
let closure_12 = {};
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx");

export const useChannelWithTemplateFallback = function useChannelWithTemplateFallback(ref_id) {
  _require = ref_id;
  obj = require("useStateFromStores");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(ref_id));
  let obj3 = require("useStateFromStores");
  const items1 = [GuildRoleSubscriptionTierTemplatesStore];
  let stateFromStores1 = obj3.useStateFromStores(items1, () => GuildRoleSubscriptionTierTemplatesStore.getChannel(ref_id));
  const items2 = [GuildRoleSubscriptionsStore];
  const obj4 = require("useStateFromStores");
  const stateFromStores2 = obj4.useStateFromStores(items2, () => GuildRoleSubscriptionsStore.getBenefitChannel(ref_id));
  const items3 = [stateFromStores, stateFromStores2];
  let tmp3 = useMemo(() => {
    let obj3;
    let mergeResult = null;
    if (null != stateFromStores) {
      mergeResult = null;
      if (stateFromStores.isObfuscated()) {
        mergeResult = null;
        if (null != stateFromStores2) {
          const merge = obj.merge;
          const obj2 = { name: tmp2.name, flags: obj3.removeFlag(stateFromStores.flags, ChannelFlags.OBFUSCATED) };
          obj3 = FlagUtilsAll;
          mergeResult = merge(obj2);
        }
      }
    }
    return mergeResult;
  }, items3);
  if (null != stateFromStores) {
    let tmp4 = stateFromStores;
    if (stateFromStores.isObfuscated()) {
      if (tmp3 == null) {
        tmp3 = stateFromStores;
      }
      tmp4 = tmp3;
    }
    stateFromStores1 = tmp4;
  }
  return stateFromStores1;
};
export const useSuggestedUnusedPrices = function useSuggestedUnusedPrices(guildId, priceTiers, price_tier) {
  _require = guildId;
  const items = [GuildRoleSubscriptionsStore];
  obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionListingsForGuild(guildId));
  const arr3 = useEditStateStore((arg0) => arg0.editStateIdsForGroup[guildId]);
  let closure_1 = useEditStateStore((listings) => listings.listings);
  if (undefined !== price_tier) {
    if (undefined !== priceTiers) {
      const found = stateFromStores.filter((soft_deleted) => !soft_deleted.soft_deleted && !soft_deleted.archived);
      const items1 = [];
      const mapped = found.map((item) => item.subscription_plans[0].price);
      if (undefined !== arr3) {
        const item = arr3.forEach((item) => {
          let priceTier;
          if (closure_1[item] != null) {
            priceTier = tmp.priceTier;
          }
          if (null != priceTier) {
            items1.push(priceTier);
          }
        });
      }
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(items1.concat(mapped));
      if (set.has(price_tier)) {
        const index = priceTiers.indexOf(price_tier);
        if (-1 === index) {
          return null;
        } else {
          const items2 = [];
          let sum = index + 1;
          if (sum < priceTiers.length) {
            while (true) {
              if (!set.has(priceTiers[sum])) {
                let arr = items2.push(priceTiers[sum]);
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
    obj = DispatcherDefault;
    obj.dispatch({ type: "CHANNEL_CREATE", channel: result });
  });
};
export const announceDeleteTemplateChannels = function announceDeleteTemplateChannels(arg0) {
  let arr = closure_12[arg0];
  if (arr == null) {
    arr = getUsedTemplateChannelsForGuild(arg0);
  }
  const item = arr.forEach((channel) => {
    obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_DELETE", channel };
    obj.dispatch(obj2);
  });
};
export const createChannelsFromTemplateTierBenefits = function createChannelsFromTemplateTierBenefits() {
  return obj(...arguments);
};
export const getTemplateTierCreationAnalyticsContext = function getTemplateTierCreationAnalyticsContext(c1, c0) {
  const tmp = useEditStateStore.getState().listings[c1];
  let usedTemplate;
  if (tmp != null) {
    usedTemplate = tmp.usedTemplate;
  }
  if (null == usedTemplate) {
    return { templateCategory: null, hasChangeFromTemplate: null };
  } else {
    const templateWithCategory = GuildRoleSubscriptionTierTemplatesStore.getTemplateWithCategory(c0, usedTemplate);
    if (null == templateWithCategory) {
      return { templateCategory: null, hasChangeFromTemplate: null };
    } else {
      const first = templateWithCategory.listings[0];
      let name;
      if (tmp != null) {
        name = tmp.name;
      }
      if (name === first.name) {
        let description;
        if (tmp != null) {
          description = tmp.description;
        }
        if (description === first.description) {
          let priceTier;
          if (tmp != null) {
            priceTier = tmp.priceTier;
          }
          if (priceTier === first.price_tier) {
            let image;
            if (tmp != null) {
              image = tmp.image;
            }
            if (image === first.image) {
              let roleColor;
              if (tmp != null) {
                roleColor = tmp.roleColor;
              }
              if (roleColor === first.role_color) {
                let length;
                if (tmp != null) {
                  const channelBenefits = tmp.channelBenefits;
                  if (channelBenefits != null) {
                    length = channelBenefits.length;
                  }
                }
                if (length === first.channels.length) {
                  let length1;
                  if (tmp != null) {
                    const intangibleBenefits = tmp.intangibleBenefits;
                    if (intangibleBenefits != null) {
                      length1 = intangibleBenefits.length;
                    }
                  }
                  if (length1 === first.additional_perks.length) {
                    let num4 = 0;
                    if (0 < first.channels.length) {
                      while (tmp.channelBenefits[num4].name === first.channels[num4].name) {
                        if (tmp10.description !== tmp11.description) {
                          break;
                        } else if (tmp10.emoji_name !== tmp11.emoji_name) {
                          break;
                        } else {
                          num4 = num4 + 1;
                        }
                      }
                      return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                    }
                    let num = 0;
                    if (0 < first.additional_perks.length) {
                      while (tmp.intangibleBenefits[num].name === first.additional_perks[num].name) {
                        if (tmp13.description !== tmp14.description) {
                          break;
                        } else if (tmp13.emoji_name !== tmp14.emoji_name) {
                          break;
                        } else {
                          num = num + 1;
                        }
                      }
                      return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                    }
                    return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: false };
                  }
                }
                return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
              }
            }
          }
        }
      }
      return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
    }
  }
};
export const isEligibleForNewBadge = function isEligibleForNewBadge(features) {
  obj = GuildRoleSubscriptionSettingUtils;
  let result = obj.canManageGuildRoleSubscriptions(features);
  if (result) {
    features = features.features;
    result = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  if (result) {
    const tmpResult = GuildRoleSubscriptionsExperimentUtils;
    result = tmpResult.isGuildEligibleForTierTemplates(features.id);
  }
  return result;
};
