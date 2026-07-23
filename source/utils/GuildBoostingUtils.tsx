// Module ID: 4022
// Function ID: 33446
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1838, 1849, 4023, 3782, 653, 1852, 1851, 3790, 4024, 1212, 1327, 4025, 1920, 22, 3712, 4026, 2780, 3776, 1184, 4037, 4056, 2]
// Exports: boostedGuildTierToAnalyticsObjectType, generateBlockGuildSubscriptionPurchasesNode, getAppliedGuildBoostMonths, getAvailableSoundboardSoundCount, getAvailableStickerSlotCount, getGracePeriodEndingDate, getGuildBoostingProgressBarFillFactor, getMaxEmojiSlots, getNextGuildTierFromGuild, getNextTier, getNumberOfAppliedBoostsNeededForTier, getShortenedTierName, getTierName, getTiers, getUserLevel, isAppliedGuildBoostActive, isInGracePeriod, isTierUnlocked

// Module 4022 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "set";
import GuildFeatures from "GuildFeatures";
import { getPremiumGroupProductName as closure_25 } from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";
import importDefaultResult from "apply";
import set from "_isNativeReflectConstruct";

let AppliedGuildBoostsRequiredForBoostedGuildTier;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_8;
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
function getTotalStickerCountForTier(TIER_1, guild) {
  if (null != guild) {
    const features = guild.features;
    if (features.has(closure_11.MORE_STICKERS)) {
      if (TIER_1 === BoostedGuildTiers.TIER_3) {
        let MAX_STICKER_SLOTS = require(4024) /* PremiumGuildOverrides */.PremiumGuildOverrides.MAX_STICKER_SLOTS;
      }
      return MAX_STICKER_SLOTS;
    }
  }
  MAX_STICKER_SLOTS = table2[TIER_1];
}
function getIncrementalStickerCountForTier(TIER_1) {
  return table[TIER_1];
}
function getTotalSoundboardSoundCountForTier(TIER_1) {
  if (null != arg1) {
    const features = arg1.features;
    if (features.has(closure_11.MORE_SOUNDBOARD)) {
      let tmp2 = closure_20;
    }
    return tmp2;
  }
  tmp2 = dependencyMap2[TIER_1];
}
function getIncrementalSoundboardSoundCountForTier(TIER_1) {
  if (TIER_1 === BoostedGuildTiers.NONE) {
    return dependencyMap2[TIER_1];
  } else {
    return dependencyMap2[TIER_1] - dependencyMap2[items[items.indexOf(items, TIER_1) - 1]];
  }
}
function getGuildTierFromGuild(id) {
  const guild = store.getGuild(id);
  let premiumTier;
  if (null != guild) {
    premiumTier = guild.premiumTier;
  }
  if (null == premiumTier) {
    premiumTier = BoostedGuildTiers.NONE;
  }
  return premiumTier;
}
function isGuildBoostedAtLeast(premiumTier, guildPremiumTier) {
  let tmp = null == guildPremiumTier;
  if (!tmp) {
    tmp = null != premiumTier && premiumTier >= guildPremiumTier;
    const tmp2 = null != premiumTier && premiumTier >= guildPremiumTier;
  }
  return tmp;
}
function getAvailableGuildBoostSlots(boostSlots) {
  const values = importDefault(22).values(boostSlots);
  return values.filter((isAvailable) => isAvailable.isAvailable());
}
function appliedGuildBoostsRequiredForPerks(arr, guildId) {
  const guild = store.getGuild(guildId);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(closure_11.PREMIUM_TIER_3_OVERRIDE);
  }
  if (true === hasItem) {
    return 0;
  } else {
    return AppliedGuildBoostsRequiredForBoostedGuildTier[getGuildTierFromGuild(undefined, guildId)] - (arr.length - arr.filter((endsAt) => null != endsAt.endsAt).length);
  }
}
function getMaxSoundboardSlots(premiumFeatures) {
  premiumFeatures = premiumFeatures.premiumFeatures;
  let additionalSoundSlots;
  if (null != premiumFeatures) {
    additionalSoundSlots = premiumFeatures.additionalSoundSlots;
  }
  let num = 0;
  if (null != additionalSoundSlots) {
    num = additionalSoundSlots;
  }
  const features = premiumFeatures.features;
  const sum = closure_19 + num;
  return Math.max(features.has(closure_11.MORE_SOUNDBOARD) ? closure_20 : closure_19, sum);
}
function isGuildBoostSlotCanceled(subscription) {
  subscription = subscription.subscription;
  let status;
  if (null != subscription) {
    status = subscription.status;
  }
  return status === constants2.CANCELED || subscription.canceled;
}
function getTheoreticalPremiumTierForSubscriberCount(guildPowerupBoostLevelProgress) {
  let closure_0 = guildPowerupBoostLevelProgress;
  let NONE = reversed.find((arg0) => closure_0 >= outer1_9[arg0]);
  if (null == NONE) {
    NONE = BoostedGuildTiers.NONE;
  }
  return NONE;
}
function getNextPremiumTierForSubscriberCount(guildPowerupBoostLevelProgress) {
  let closure_0 = guildPowerupBoostLevelProgress;
  let TIER_3 = items.find((arg0) => closure_0 < outer1_9[arg0]);
  if (null == TIER_3) {
    TIER_3 = BoostedGuildTiers.TIER_3;
  }
  return TIER_3;
}
({ AnalyticsObjectTypes: closure_8, AppliedGuildBoostsRequiredForBoostedGuildTier } = ME);
const BoostedGuildTiers = ME.BoostedGuildTiers;
({ GuildFeatures: closure_11, HelpdeskArticles: closure_12, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: closure_13, MAX_STAGE_VIDEO_USER_LIMIT_TIER3: closure_14, SubscriptionStatusTypes: closure_15 } = ME);
({ DEFAULT_EMOJI_SLOTS: closure_16, EMOJI_MAX_SLOTS_MORE: closure_17 } = set);
({ BoostedGuildFeatures: closure_18, DEFAULT_SOUND_SLOTS: closure_19, MORE_SOUNDBOARD_SOUNDS: closure_20, FractionalPremiumStates: closure_21, IncrementalStickerCountsByTier: closure_22, TotalSoundboardSoundCountsByTier: closure_23, TotalStickerCountsByTier: closure_24 } = GuildFeatures);
let obj = { LEVEL_1: 1, [1]: "LEVEL_1", LEVEL_2: 2, [2]: "LEVEL_2", LEVEL_3: 3, [3]: "LEVEL_3", LEVEL_4: 4, [4]: "LEVEL_4", LEVEL_5: 5, [5]: "LEVEL_5", LEVEL_6: 6, [6]: "LEVEL_6", LEVEL_7: 7, [7]: "LEVEL_7", LEVEL_8: 8, [8]: "LEVEL_8", LEVEL_9: 9, [9]: "LEVEL_9" };
let closure_26 = Object.freeze({ [obj.LEVEL_1]: 1, [obj.LEVEL_2]: 2, [obj.LEVEL_3]: 3, [obj.LEVEL_4]: 6, [obj.LEVEL_5]: 9, [obj.LEVEL_6]: 12, [obj.LEVEL_7]: 15, [obj.LEVEL_8]: 18, [obj.LEVEL_9]: 24 });
obj = { EMOJI: 1, [1]: "EMOJI", AUDIO: 2, [2]: "AUDIO", ANIMATED: 3, [3]: "ANIMATED", CUSTOMIZATION: 4, [4]: "CUSTOMIZATION", UPLOAD: 5, [5]: "UPLOAD", VANITY: 6, [6]: "VANITY", STREAM: 7, [7]: "STREAM", STICKER: 8, [8]: "STICKER", CUSTOM_ROLE_ICON: 11, [11]: "CUSTOM_ROLE_ICON", STAGE_VIDEO: 12, [12]: "STAGE_VIDEO", SOUNDBOARD: 13, [13]: "SOUNDBOARD" };
let items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
let substr = items.slice();
const reversed = substr.reverse();
obj = { tier: BoostedGuildTiers.TIER_3, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_3], nextTier: null };
let items1 = [obj, { tier: BoostedGuildTiers.TIER_2, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_2], nextTier: BoostedGuildTiers.TIER_3 }, { tier: BoostedGuildTiers.TIER_1, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_1], nextTier: BoostedGuildTiers.TIER_2 }];
let obj1 = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
const result = set.fileFinishedImporting("utils/GuildBoostingUtils.tsx");

export const PerkIcons = obj;
export const OrderedTiers = items;
export const ReverseOrderedTiers = reversed;
export const getNextTier = function getNextTier(GIFTING, arg1) {
  let closure_0 = GIFTING;
  if (GIFTING === BoostedGuildTiers.NONE) {
    let nextTier = BoostedGuildTiers.TIER_1;
  } else {
    const found = items1.find((tier) => tier.tier === closure_0);
    if (null != found) {
      nextTier = found.nextTier;
    }
  }
  return nextTier;
};
export { getTotalStickerCountForTier };
export { getIncrementalStickerCountForTier };
export { getTotalSoundboardSoundCountForTier };
export { getIncrementalSoundboardSoundCountForTier };
export const getTiers = (arg0) => {
  let obj = { tier: BoostedGuildTiers.TIER_1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["lK+WOT"]);
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { adding: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji - dependencyMap[BoostedGuildTiers.NONE].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji };
  obj.title = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.dnLAwl, obj);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl3.string(require(1212) /* getSystemLocale */.t["/Guvxs"]);
  obj.icon = obj.EMOJI;
  const items = [obj, , , , , , ];
  const obj1 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  const obj2 = { adding: getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_1), total: getTotalStickerCountForTier(BoostedGuildTiers.TIER_1) };
  obj1.title = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t["/9p2/g"], obj2);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj1.description = intl5.string(require(1212) /* getSystemLocale */.t.JfsnDQ);
  obj1.icon = obj.STICKER;
  items[1] = obj1;
  const obj3 = {};
  const intl6 = require(1212) /* getSystemLocale */.intl;
  const obj4 = { soundCount: getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_1), totalSoundCount: getTotalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_1) };
  obj3.title = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.NRuk5m, obj4);
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj3.description = intl7.string(require(1212) /* getSystemLocale */.t.Oq7OVl);
  obj3.icon = obj.SOUNDBOARD;
  items[2] = obj3;
  const obj5 = {};
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj5.title = intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 });
  const intl9 = require(1212) /* getSystemLocale */.intl;
  obj5.description = intl9.string(require(1212) /* getSystemLocale */.t["8a03jk"]);
  obj5.icon = obj.AUDIO;
  items[3] = obj5;
  const obj7 = {};
  const intl10 = require(1212) /* getSystemLocale */.intl;
  obj7.title = intl10.string(require(1212) /* getSystemLocale */.t.h0s84V);
  const intl11 = require(1212) /* getSystemLocale */.intl;
  obj7.description = intl11.format(require(1212) /* getSystemLocale */.t["t+0cbk"], {});
  obj7.icon = obj.ANIMATED;
  items[4] = obj7;
  const obj8 = {};
  const intl12 = require(1212) /* getSystemLocale */.intl;
  obj8.title = intl12.string(require(1212) /* getSystemLocale */.t.vjPGPp);
  const intl13 = require(1212) /* getSystemLocale */.intl;
  obj8.description = intl13.string(require(1212) /* getSystemLocale */.t.tG4MMU);
  obj8.icon = obj.CUSTOMIZATION;
  items[5] = obj8;
  const obj9 = {};
  const intl14 = require(1212) /* getSystemLocale */.intl;
  obj9.title = intl14.string(require(1212) /* getSystemLocale */.t.cObMZD);
  const intl15 = require(1212) /* getSystemLocale */.intl;
  obj9.description = intl15.string(require(1212) /* getSystemLocale */.t["puH/9R"]);
  obj9.icon = obj.STREAM;
  items[6] = obj9;
  obj.perks = items.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  const items1 = [obj, , ];
  const obj10 = { tier: BoostedGuildTiers.TIER_2 };
  const intl16 = require(1212) /* getSystemLocale */.intl;
  obj10.title = intl16.string(require(1212) /* getSystemLocale */.t["34GpBc"]);
  const obj11 = {};
  const intl17 = require(1212) /* getSystemLocale */.intl;
  obj11.title = intl17.formatToPlainString(require(1212) /* getSystemLocale */.t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji });
  const intl18 = require(1212) /* getSystemLocale */.intl;
  obj11.description = intl18.string(require(1212) /* getSystemLocale */.t.fRiNhw);
  obj11.icon = obj.EMOJI;
  const items2 = [obj11, , , , , , , , ];
  const obj13 = {};
  const intl19 = require(1212) /* getSystemLocale */.intl;
  const obj14 = { adding: getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_2), total: getTotalStickerCountForTier(BoostedGuildTiers.TIER_2) };
  obj13.title = intl19.formatToPlainString(require(1212) /* getSystemLocale */.t["/9p2/g"], obj14);
  const intl20 = require(1212) /* getSystemLocale */.intl;
  obj13.description = intl20.string(require(1212) /* getSystemLocale */.t.t4TM28);
  obj13.icon = obj.STICKER;
  items2[1] = obj13;
  const obj15 = {};
  const intl21 = require(1212) /* getSystemLocale */.intl;
  const obj16 = { soundCount: getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_2), totalSoundCount: getTotalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_2) };
  obj15.title = intl21.formatToPlainString(require(1212) /* getSystemLocale */.t.NRuk5m, obj16);
  const intl22 = require(1212) /* getSystemLocale */.intl;
  obj15.description = intl22.string(require(1212) /* getSystemLocale */.t.pEYlPZ);
  obj15.icon = obj.SOUNDBOARD;
  items2[2] = obj15;
  const obj17 = {};
  const intl23 = require(1212) /* getSystemLocale */.intl;
  obj17.title = intl23.formatToPlainString(require(1212) /* getSystemLocale */.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 });
  const intl24 = require(1212) /* getSystemLocale */.intl;
  obj17.description = intl24.string(require(1212) /* getSystemLocale */.t["nzRo/I"]);
  obj17.icon = obj.AUDIO;
  items2[3] = obj17;
  const obj19 = {};
  const intl25 = require(1212) /* getSystemLocale */.intl;
  obj19.title = intl25.string(require(1212) /* getSystemLocale */.t["+KhQKM"]);
  const intl26 = require(1212) /* getSystemLocale */.intl;
  obj19.description = intl26.string(require(1212) /* getSystemLocale */.t.ZWf10P);
  obj19.icon = obj.CUSTOMIZATION;
  items2[4] = obj19;
  const obj20 = {};
  const intl27 = require(1212) /* getSystemLocale */.intl;
  const obj21 = {};
  let obj24 = require(4025) /* formatSize */;
  obj21.fileSize = obj24.formatSize(dependencyMap[BoostedGuildTiers.TIER_2].limits.fileSize / 1024, { useKibibytes: true });
  obj20.title = intl27.formatToPlainString(require(1212) /* getSystemLocale */.t.t95LnM, obj21);
  const intl28 = require(1212) /* getSystemLocale */.intl;
  obj20.description = intl28.format(require(1212) /* getSystemLocale */.t.yvht65, {});
  obj20.icon = obj.UPLOAD;
  items2[5] = obj20;
  const obj22 = {};
  const intl29 = require(1212) /* getSystemLocale */.intl;
  obj22.title = intl29.string(require(1212) /* getSystemLocale */.t.bmaoNI);
  const intl30 = require(1212) /* getSystemLocale */.intl;
  obj22.description = intl30.string(require(1212) /* getSystemLocale */.t.WZW2Bj);
  obj22.icon = obj.STREAM;
  items2[6] = obj22;
  const obj23 = {};
  const intl31 = require(1212) /* getSystemLocale */.intl;
  obj23.title = intl31.string(require(1212) /* getSystemLocale */.t.BHtqcV);
  const intl32 = require(1212) /* getSystemLocale */.intl;
  obj23.description = intl32.string(require(1212) /* getSystemLocale */.t.ukVcEe);
  obj23.icon = obj.CUSTOM_ROLE_ICON;
  items2[7] = obj23;
  let tmp = null;
  if (arg0) {
    obj24 = {};
    const intl33 = require(1212) /* getSystemLocale */.intl;
    const obj25 = { limit: closure_13 };
    obj24.title = intl33.formatToPlainString(require(1212) /* getSystemLocale */.t.T8P3TH, obj25);
    const intl34 = require(1212) /* getSystemLocale */.intl;
    const obj26 = { limit: closure_13 };
    obj24.description = intl34.formatToPlainString(require(1212) /* getSystemLocale */.t.T8P3TH, obj26);
    obj24.icon = obj.STAGE_VIDEO;
    tmp = obj24;
  }
  items2[8] = tmp;
  obj10.perks = items2.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  items1[1] = obj10;
  const obj27 = { tier: BoostedGuildTiers.TIER_3 };
  const intl35 = require(1212) /* getSystemLocale */.intl;
  obj27.title = intl35.string(require(1212) /* getSystemLocale */.t.P7LdcQ);
  const obj28 = {};
  const intl36 = require(1212) /* getSystemLocale */.intl;
  obj28.title = intl36.formatToPlainString(require(1212) /* getSystemLocale */.t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji });
  const intl37 = require(1212) /* getSystemLocale */.intl;
  obj28.description = intl37.string(require(1212) /* getSystemLocale */.t.AfJxnV);
  obj28.icon = obj.EMOJI;
  const items3 = [obj28, , , , , , , ];
  const obj30 = {};
  const intl38 = require(1212) /* getSystemLocale */.intl;
  const obj31 = { adding: getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_3), total: getTotalStickerCountForTier(BoostedGuildTiers.TIER_3) };
  obj30.title = intl38.formatToPlainString(require(1212) /* getSystemLocale */.t["/9p2/g"], obj31);
  const intl39 = require(1212) /* getSystemLocale */.intl;
  obj30.description = intl39.string(require(1212) /* getSystemLocale */.t["+ZI4QZ"]);
  obj30.icon = obj.STICKER;
  items3[1] = obj30;
  const obj32 = {};
  const intl40 = require(1212) /* getSystemLocale */.intl;
  const obj33 = { soundCount: getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_3), totalSoundCount: getTotalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_3) };
  obj32.title = intl40.formatToPlainString(require(1212) /* getSystemLocale */.t.NRuk5m, obj33);
  const intl41 = require(1212) /* getSystemLocale */.intl;
  obj32.description = intl41.string(require(1212) /* getSystemLocale */.t["8omJSY"]);
  obj32.icon = obj.SOUNDBOARD;
  items3[2] = obj32;
  const obj34 = {};
  const intl42 = require(1212) /* getSystemLocale */.intl;
  obj34.title = intl42.formatToPlainString(require(1212) /* getSystemLocale */.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 });
  const intl43 = require(1212) /* getSystemLocale */.intl;
  obj34.description = intl43.string(require(1212) /* getSystemLocale */.t["cOkbp/"]);
  obj34.icon = obj.AUDIO;
  items3[3] = obj34;
  const obj36 = {};
  const intl44 = require(1212) /* getSystemLocale */.intl;
  obj36.title = intl44.string(require(1212) /* getSystemLocale */.t.C2w2cM);
  const intl45 = require(1212) /* getSystemLocale */.intl;
  const obj37 = {};
  let obj41 = importDefault(1920);
  obj37.helpdeskArticle = obj41.getArticleURL(constants.GUILD_VANITY_URL);
  obj36.description = intl45.format(require(1212) /* getSystemLocale */.t["3Reosx"], obj37);
  obj36.icon = obj.VANITY;
  items3[4] = obj36;
  const obj38 = {};
  const intl46 = require(1212) /* getSystemLocale */.intl;
  const obj39 = { fileSize: require(4025) /* formatSize */.formatSize(dependencyMap[BoostedGuildTiers.TIER_3].limits.fileSize / 1024, { useKibibytes: true }) };
  obj38.title = intl46.formatToPlainString(require(1212) /* getSystemLocale */.t.t95LnM, obj39);
  const intl47 = require(1212) /* getSystemLocale */.intl;
  obj38.description = intl47.format(require(1212) /* getSystemLocale */.t.IwDqSL, {});
  obj38.icon = obj.UPLOAD;
  items3[5] = obj38;
  const obj40 = {};
  const intl48 = require(1212) /* getSystemLocale */.intl;
  obj40.title = intl48.string(require(1212) /* getSystemLocale */.t.z0GtBG);
  const intl49 = require(1212) /* getSystemLocale */.intl;
  obj40.description = intl49.string(require(1212) /* getSystemLocale */.t.v92GNV);
  obj40.icon = obj.ANIMATED;
  items3[6] = obj40;
  let tmp6 = null;
  if (arg0) {
    obj41 = {};
    const intl50 = require(1212) /* getSystemLocale */.intl;
    const obj42 = { limit: closure_14 };
    obj41.title = intl50.formatToPlainString(require(1212) /* getSystemLocale */.t.T8P3TH, obj42);
    const intl51 = require(1212) /* getSystemLocale */.intl;
    const obj43 = { limit: closure_14 };
    obj41.description = intl51.formatToPlainString(require(1212) /* getSystemLocale */.t.T8P3TH, obj43);
    obj41.icon = obj.STAGE_VIDEO;
    tmp6 = obj41;
  }
  items3[7] = tmp6;
  obj27.perks = items3.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  items1[2] = obj27;
  return items1;
};
export const getTierName = function getTierName(tier, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const useLevels = obj.useLevels;
  if (BoostedGuildTiers.NONE === tier) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const string = intl4.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (tmp) {
      let stringResult = string(t.LcKgJd);
    } else {
      stringResult = string(t.mx8j2m);
    }
    return stringResult;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.nzXtaS);
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["h33/uW"]);
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.BfF6ED);
  } else {
    const _Error = Error;
    const error = new Error("Not a valid tier type");
    throw error;
  }
  tmp = undefined === useLevels || useLevels;
};
export const getShortenedTierName = function getShortenedTierName(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.LcKgJd);
  } else if (BoostedGuildTiers.TIER_1 === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.xRjU1V);
  } else if (BoostedGuildTiers.TIER_2 === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.C7e2Bo);
  } else if (BoostedGuildTiers.TIER_3 === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.avGxmk);
  } else {
    const _Error = Error;
    const error = new Error("Not a valid tier type");
    throw error;
  }
};
export const minimumRequiredTierForGuildFeature = require("apply").memoize((arg0) => {
  const features = dependencyMap[BoostedGuildTiers.TIER_1].features;
  if (features.includes(arg0)) {
    let TIER_1 = BoostedGuildTiers.TIER_1;
  } else {
    const features2 = dependencyMap[BoostedGuildTiers.TIER_2].features;
    if (features2.includes(arg0)) {
      TIER_1 = BoostedGuildTiers.TIER_2;
    } else {
      const features3 = dependencyMap[BoostedGuildTiers.TIER_3].features;
      TIER_1 = null;
      if (features3.includes(arg0)) {
        TIER_1 = BoostedGuildTiers.TIER_3;
      }
    }
  }
  return TIER_1;
});
export const boostedGuildTierToAnalyticsObjectType = function boostedGuildTierToAnalyticsObjectType(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    return closure_8.NONE;
  } else if (BoostedGuildTiers.TIER_1 === arg0) {
    return closure_8.TIER_1;
  } else if (BoostedGuildTiers.TIER_2 === arg0) {
    return closure_8.TIER_2;
  } else if (BoostedGuildTiers.TIER_3 === arg0) {
    return closure_8.TIER_3;
  } else {
    return null;
  }
};
export { getGuildTierFromGuild };
export const getNextGuildTierFromGuild = function getNextGuildTierFromGuild(id) {
  const tmp2 = _createForOfIteratorHelperLoose(items1);
  const iter = tmp2();
  let iter2 = iter;
  if (!iter.done) {
    const value = iter2.value;
    while (tmp !== value.tier) {
      let iter3 = tmp2();
      iter2 = iter3;
    }
    return value.nextTier;
  }
  return BoostedGuildTiers.TIER_1;
};
export const getAppliedGuildBoostMonths = function getAppliedGuildBoostMonths(arg0) {
  const diffResult = importDefault(3712)().diff(importDefault(3712)(arg0), "months");
  let num = 1;
  if (null != diffResult) {
    num = diffResult;
  }
  return num;
};
export const getUserLevel = function getUserLevel(arg0) {
  const obj = importDefault(3712)();
  const keys = Object.keys(table3);
  let num = 0;
  let num2 = 1;
  let num3 = 1;
  if (0 < keys.length) {
    do {
      let tmp2 = keys[num];
      let tmp3 = table3;
      if (diffResult >= table3[tmp2]) {
        num2 = +tmp2;
      }
      num = num + 1;
      num3 = num2;
    } while (num < keys.length);
  }
  return num3;
};
export { isGuildBoostedAtLeast };
export const isTierUnlocked = function isTierUnlocked(premiumTier, guildPremiumTier) {
  return isGuildBoostedAtLeast(premiumTier.premiumTier, guildPremiumTier);
};
export { getAvailableGuildBoostSlots };
export const generateBlockGuildSubscriptionPurchasesNode = function generateBlockGuildSubscriptionPurchasesNode(fractionalState) {
  premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
  currentUser = currentUser.getCurrentUser();
  let isFetching = closure_6.hasFetched;
  if (!isFetching) {
    isFetching = closure_6.isFetching;
  }
  if (!isFetching) {
    const guildBoostSlots = require(4026) /* _fetchAppliedGuildBoostsForGuild */.fetchGuildBoostSlots();
    const obj2 = require(4026) /* _fetchAppliedGuildBoostsForGuild */;
  }
  let prop;
  getAvailableGuildBoostSlots(closure_6.boostSlots);
  if (null != premiumTypeSubscription) {
    prop = premiumTypeSubscription.isPausedOrPausePending;
  }
  if (prop) {
    if (fractionalState.fractionalState === constants3.NONE) {
      if (!tmp8) {
        const intl = require(1212) /* getSystemLocale */.intl;
        return intl.string(require(1212) /* getSystemLocale */.t.mOWsF1);
      }
    }
  }
  if (null != currentUser) {
    if (currentUser.isPremiumGroupMember()) {
      const intl7 = require(1212) /* getSystemLocale */.intl;
      const obj = { premiumGroupProductName: callback() };
      return intl7.formatToPlainString(importDefault(2780)["5xN/C1"], obj);
    }
  }
  const values = Object.values(closure_6.boostSlots);
  const reduced = values.reduce((numCanceledGuildBoostSlots, isAvailable) => {
    if (outer1_43(isAvailable)) {
      numCanceledGuildBoostSlots.numCanceledGuildBoostSlots = numCanceledGuildBoostSlots.numCanceledGuildBoostSlots + 1;
    }
    if (isAvailable.isAvailable()) {
      numCanceledGuildBoostSlots.numAvailableGuildBoostSlots = numCanceledGuildBoostSlots.numAvailableGuildBoostSlots + 1;
    }
    return numCanceledGuildBoostSlots;
  }, { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 });
  if (null != premiumTypeSubscription) {
    if (reduced.numAvailableGuildBoostSlots <= 0) {
      if (premiumTypeSubscription.status === constants2.PAST_DUE) {
        const intl6 = require(1212) /* getSystemLocale */.intl;
        return intl6.string(require(1212) /* getSystemLocale */.t.De4Vm6);
      } else if (premiumTypeSubscription.status === constants2.ACCOUNT_HOLD) {
        const intl5 = require(1212) /* getSystemLocale */.intl;
        return intl5.string(require(1212) /* getSystemLocale */.t.JakNQ8);
      } else if (tmp13 > 0) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        return intl4.string(require(1212) /* getSystemLocale */.t.x25mZR);
      } else if (null == premiumTypeSubscription.renewalMutations) {
        return null;
      } else {
        const numPremiumGuildSubscriptions = importAll(3776).getNumPremiumGuildSubscriptions(premiumTypeSubscription.renewalMutations.additionalPlans);
        const obj4 = importAll(3776);
        if (obj5.getNumPremiumGuildSubscriptions(premiumTypeSubscription.additionalPlans) > numPremiumGuildSubscriptions) {
          const intl3 = require(1212) /* getSystemLocale */.intl;
          let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.x25mZR);
        } else {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          stringResult = intl2.string(require(1212) /* getSystemLocale */.t["W/bb8f"]);
        }
        return stringResult;
      }
    }
  }
  return null;
};
export const isAppliedGuildBoostActive = function isAppliedGuildBoostActive(ended) {
  let tmp = !ended.ended;
  if (tmp) {
    let tmp3 = null == ended.endsAt;
    if (!tmp3) {
      const endsAt = ended.endsAt;
      const _Date = Date;
      const time = endsAt.getTime();
      tmp3 = time > Date.now();
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isInGracePeriod = function isInGracePeriod(arr, guildId) {
  return appliedGuildBoostsRequiredForPerks(arr, guildId) > 0;
};
export { appliedGuildBoostsRequiredForPerks };
export const GuildTierSubscriptionsOrdered = items1;
export const getGracePeriodEndingDate = function getGracePeriodEndingDate(arr, id) {
  const tmp = appliedGuildBoostsRequiredForPerks(arr, id);
  if (tmp > 0) {
    const found = (function sortAppliedGuildBoostsByEndsAt(arr) {
      return arr.sort((endsAt, endsAt2) => {
        let num = -1;
        if (null != endsAt.endsAt) {
          num = -1;
          if (null != endsAt2.endsAt) {
            endsAt = endsAt.endsAt;
            endsAt2 = endsAt2.endsAt;
            const time = endsAt.getTime();
            num = time - endsAt2.getTime();
          }
        }
        return num;
      });
    })(arr).filter((endsAt) => null != endsAt.endsAt);
    const diff = found.length - tmp;
    if (diff < 0) {
      let obj = importDefault(1184);
      obj = { category: "premium", message: "Negative index while checking grace period ending date." };
      obj = { subscriptionLength: arr.length, subscriptionsNeededForPremiumTier: AppliedGuildBoostsRequiredForBoostedGuildTier[getGuildTierFromGuild(undefined, id)], endingSubscriptionLength: found.length };
      obj.data = obj;
      obj.addBreadcrumb(obj);
    }
    const _Math = Math;
    const tmp10 = found[Math.max(Math, diff, 0)];
    let endsAt;
    if (null != tmp10) {
      endsAt = tmp10.endsAt;
    }
    return endsAt;
  } else {
    return null;
  }
};
export const getAvailableStickerSlotCount = function getAvailableStickerSlotCount(stickers, tier) {
  const index = items.indexOf(tier);
  if (-1 === index) {
    return 0;
  } else {
    let num3 = 0;
    if (null != items[index - 1]) {
      num3 = getTotalStickerCountForTier(tmp4);
    }
    const _Math = Math;
    return Math.max(0, tmp - stickers.slice(num3, getTotalStickerCountForTier(tier)).length);
  }
  tmp = getIncrementalStickerCountForTier(tier);
};
export const getAvailableSoundboardSoundCount = function getAvailableSoundboardSoundCount(premiumFeatures) {
  if (-1 === items.indexOf(arg2)) {
    return 0;
  } else {
    const _Math = Math;
    return Math.max(0, getMaxSoundboardSlots(premiumFeatures) - arg1.length);
  }
};
export { getMaxSoundboardSlots };
export const getMaxEmojiSlots = function getMaxEmojiSlots(stateFromStores) {
  const premiumFeatures = stateFromStores.premiumFeatures;
  let additionalEmojiSlots;
  if (null != premiumFeatures) {
    additionalEmojiSlots = premiumFeatures.additionalEmojiSlots;
  }
  let num = 0;
  if (null != additionalEmojiSlots) {
    num = additionalEmojiSlots;
  }
  const features = stateFromStores.features;
  const sum = closure_16 + num;
  return Math.max(features.has(closure_11.MORE_EMOJI) ? closure_17 : closure_16, sum);
};
export const getNumberOfAppliedBoostsNeededForTier = function getNumberOfAppliedBoostsNeededForTier(id) {
  return Math.max(0, AppliedGuildBoostsRequiredForBoostedGuildTier[arg1] - require(4037) /* useGuildAppliedBoostCount */.getGuildPowerupsBoostCount(id.id).available);
};
export { isGuildBoostSlotCanceled };
export { getTheoreticalPremiumTierForSubscriberCount };
export { getNextPremiumTierForSubscriberCount };
export const TierMarkerPositions = obj1;
export const getGuildBoostingProgressBarFillFactor = function getGuildBoostingProgressBarFillFactor(guild) {
  let obj = require(4056) /* useGuildPowerupBoostLevelProgress */;
  const guildPowerupBoostLevelProgress = obj.getGuildPowerupBoostLevelProgress(guild.id);
  const tmp2 = getTheoreticalPremiumTierForSubscriberCount(guildPowerupBoostLevelProgress);
  getNextPremiumTierForSubscriberCount(guildPowerupBoostLevelProgress);
  obj = {};
  let num = 1;
  if (tmp2 !== BoostedGuildTiers.TIER_3) {
    num = (guildPowerupBoostLevelProgress - tmp4) / (tmp5 - tmp4) * (tmp7 - tmp6) + tmp6;
  }
  obj.fillFactor = num;
  obj.totalAvailableBoostsCount = guildPowerupBoostLevelProgress;
  return obj;
};
