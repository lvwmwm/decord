// Module ID: 4020
// Function ID: 33437
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: boostedGuildTierToAnalyticsObjectType, generateBlockGuildSubscriptionPurchasesNode, getAppliedGuildBoostMonths, getAvailableSoundboardSoundCount, getAvailableStickerSlotCount, getGracePeriodEndingDate, getGuildBoostingProgressBarFillFactor, getMaxEmojiSlots, getNextGuildTierFromGuild, getNextTier, getNumberOfAppliedBoostsNeededForTier, getShortenedTierName, getTierName, getTiers, getUserLevel, isAppliedGuildBoostActive, isInGracePeriod, isTierUnlocked

// Module 4020 (_createForOfIteratorHelperLoose)
let AppliedGuildBoostsRequiredForBoostedGuildTier;
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
function getTotalStickerCountForTier(TIER_1, guild) {
  if (null != guild) {
    const features = guild.features;
    if (features.has(closure_11.MORE_STICKERS)) {
      if (TIER_1 === BoostedGuildTiers.TIER_3) {
        let MAX_STICKER_SLOTS = guild(dependencyMap[8]).PremiumGuildOverrides.MAX_STICKER_SLOTS;
      }
      return MAX_STICKER_SLOTS;
    }
  }
  MAX_STICKER_SLOTS = closure_24[TIER_1];
}
function getIncrementalStickerCountForTier(TIER_1) {
  return closure_22[TIER_1];
}
function getTotalSoundboardSoundCountForTier(TIER_1) {
  if (null != arg1) {
    const features = arg1.features;
    if (features.has(closure_11.MORE_SOUNDBOARD)) {
      let tmp2 = closure_20;
    }
    return tmp2;
  }
  tmp2 = closure_23[TIER_1];
}
function getIncrementalSoundboardSoundCountForTier(TIER_1) {
  if (TIER_1 === BoostedGuildTiers.NONE) {
    return closure_23[TIER_1];
  } else {
    return closure_23[TIER_1] - closure_23[closure_28[closure_28.indexOf(closure_28, TIER_1) - 1]];
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
  const values = importDefault(dependencyMap[13]).values(boostSlots);
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
    return AppliedGuildBoostsRequiredForBoostedGuildTier[closure_38(undefined, guildId)] - (arr.length - arr.filter((endsAt) => null != endsAt.endsAt).length);
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
  const arg1 = guildPowerupBoostLevelProgress;
  let NONE = reversed.find((arg0) => arg0 >= closure_9[arg0]);
  if (null == NONE) {
    NONE = BoostedGuildTiers.NONE;
  }
  return NONE;
}
function getNextPremiumTierForSubscriberCount(guildPowerupBoostLevelProgress) {
  const arg1 = guildPowerupBoostLevelProgress;
  let TIER_3 = items.find((arg0) => arg0 < closure_9[arg0]);
  if (null == TIER_3) {
    TIER_3 = BoostedGuildTiers.TIER_3;
  }
  return TIER_3;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[4]);
({ AnalyticsObjectTypes: closure_8, AppliedGuildBoostsRequiredForBoostedGuildTier } = tmp2);
const BoostedGuildTiers = tmp2.BoostedGuildTiers;
({ GuildFeatures: closure_11, HelpdeskArticles: closure_12, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: closure_13, MAX_STAGE_VIDEO_USER_LIMIT_TIER3: closure_14, SubscriptionStatusTypes: closure_15 } = tmp2);
({ DEFAULT_EMOJI_SLOTS: closure_16, EMOJI_MAX_SLOTS_MORE: closure_17 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ BoostedGuildFeatures: closure_18, DEFAULT_SOUND_SLOTS: closure_19, MORE_SOUNDBOARD_SOUNDS: closure_20, FractionalPremiumStates: closure_21, IncrementalStickerCountsByTier: closure_22, TotalSoundboardSoundCountsByTier: closure_23, TotalStickerCountsByTier: closure_24 } = arg1(dependencyMap[6]));
let closure_25 = arg1(dependencyMap[7]).getPremiumGroupProductName;
let obj = { LEVEL_1: 1, [1]: "LEVEL_1", LEVEL_2: 2, [2]: "LEVEL_2", LEVEL_3: 3, [3]: "LEVEL_3", LEVEL_4: 4, [4]: "LEVEL_4", LEVEL_5: 5, [5]: "LEVEL_5", LEVEL_6: 6, [6]: "LEVEL_6", LEVEL_7: 7, [7]: "LEVEL_7", LEVEL_8: 8, [8]: "LEVEL_8", LEVEL_9: 9, [9]: "LEVEL_9" };
let closure_26 = Object.freeze({ [obj.LEVEL_1]: 1, [obj.LEVEL_2]: 2, [obj.LEVEL_3]: 3, [obj.LEVEL_4]: 6, [obj.LEVEL_5]: 9, [obj.LEVEL_6]: 12, [obj.LEVEL_7]: 15, [obj.LEVEL_8]: 18, [obj.LEVEL_9]: 24 });
obj = { EMOJI: 1, [1]: "EMOJI", AUDIO: 2, [2]: "AUDIO", ANIMATED: 3, [3]: "ANIMATED", CUSTOMIZATION: 4, [4]: "CUSTOMIZATION", UPLOAD: 5, [5]: "UPLOAD", VANITY: 6, [6]: "VANITY", STREAM: 7, [7]: "STREAM", STICKER: 8, [8]: "STICKER", CUSTOM_ROLE_ICON: 11, [11]: "CUSTOM_ROLE_ICON", STAGE_VIDEO: 12, [12]: "STAGE_VIDEO", SOUNDBOARD: 13, [13]: "SOUNDBOARD" };
const items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
const substr = items.slice();
const reversed = substr.reverse();
const tmp4 = arg1(dependencyMap[6]);
obj = { tier: BoostedGuildTiers.TIER_3, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_3], nextTier: null };
const items1 = [obj, { tier: BoostedGuildTiers.TIER_2, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_2], nextTier: BoostedGuildTiers.TIER_3 }, { tier: BoostedGuildTiers.TIER_1, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_1], nextTier: BoostedGuildTiers.TIER_2 }];
const obj1 = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
const importDefaultResult = importDefault(dependencyMap[13]);
const memoizeResult = importDefault(dependencyMap[13]).memoize((arg0) => {
  const features = closure_18[closure_10.TIER_1].features;
  if (features.includes(arg0)) {
    let TIER_1 = BoostedGuildTiers.TIER_1;
  } else {
    const features2 = closure_18[closure_10.TIER_2].features;
    if (features2.includes(arg0)) {
      TIER_1 = BoostedGuildTiers.TIER_2;
    } else {
      const features3 = closure_18[closure_10.TIER_3].features;
      TIER_1 = null;
      if (features3.includes(arg0)) {
        TIER_1 = BoostedGuildTiers.TIER_3;
      }
    }
  }
  return TIER_1;
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("utils/GuildBoostingUtils.tsx");

export const PerkIcons = obj;
export const OrderedTiers = items;
export const ReverseOrderedTiers = reversed;
export const getNextTier = function getNextTier(GIFTING, arg1) {
  arg1 = GIFTING;
  if (GIFTING === BoostedGuildTiers.NONE) {
    let nextTier = BoostedGuildTiers.TIER_1;
  } else {
    const found = items1.find((tier) => tier.tier === tier);
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
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t.lK+WOT);
  obj = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj = { adding: closure_18[closure_10.TIER_1].limits.emoji - closure_18[closure_10.NONE].limits.emoji, total: closure_18[closure_10.TIER_1].limits.emoji };
  obj.title = intl2.formatToPlainString(arg1(dependencyMap[9]).t.dnLAwl, obj);
  const intl3 = arg1(dependencyMap[9]).intl;
  obj.description = intl3.string(arg1(dependencyMap[9]).t./Guvxs);
  obj.icon = obj.EMOJI;
  const items = [obj, , , , , , ];
  const obj1 = {};
  const intl4 = arg1(dependencyMap[9]).intl;
  const obj2 = { adding: getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_1), total: getTotalStickerCountForTier(BoostedGuildTiers.TIER_1) };
  obj1.title = intl4.formatToPlainString(arg1(dependencyMap[9]).t./9p2/g, obj2);
  const intl5 = arg1(dependencyMap[9]).intl;
  obj1.description = intl5.string(arg1(dependencyMap[9]).t.JfsnDQ);
  obj1.icon = obj.STICKER;
  items[1] = obj1;
  const obj3 = {};
  const intl6 = arg1(dependencyMap[9]).intl;
  const obj4 = { soundCount: getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_1), totalSoundCount: getTotalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_1) };
  obj3.title = intl6.formatToPlainString(arg1(dependencyMap[9]).t.NRuk5m, obj4);
  const intl7 = arg1(dependencyMap[9]).intl;
  obj3.description = intl7.string(arg1(dependencyMap[9]).t.Oq7OVl);
  obj3.icon = obj.SOUNDBOARD;
  items[2] = obj3;
  const obj5 = {};
  const intl8 = arg1(dependencyMap[9]).intl;
  obj5.title = intl8.formatToPlainString(arg1(dependencyMap[9]).t.zoT1ZE, { bitrate: closure_18[closure_10.TIER_1].limits.bitrate / 1000 });
  const intl9 = arg1(dependencyMap[9]).intl;
  obj5.description = intl9.string(arg1(dependencyMap[9]).t.8a03jk);
  obj5.icon = obj.AUDIO;
  items[3] = obj5;
  const obj7 = {};
  const intl10 = arg1(dependencyMap[9]).intl;
  obj7.title = intl10.string(arg1(dependencyMap[9]).t.h0s84V);
  const intl11 = arg1(dependencyMap[9]).intl;
  obj7.description = intl11.format(arg1(dependencyMap[9]).t.t+0cbk, {});
  obj7.icon = obj.ANIMATED;
  items[4] = obj7;
  const obj8 = {};
  const intl12 = arg1(dependencyMap[9]).intl;
  obj8.title = intl12.string(arg1(dependencyMap[9]).t.vjPGPp);
  const intl13 = arg1(dependencyMap[9]).intl;
  obj8.description = intl13.string(arg1(dependencyMap[9]).t.tG4MMU);
  obj8.icon = obj.CUSTOMIZATION;
  items[5] = obj8;
  const obj9 = {};
  const intl14 = arg1(dependencyMap[9]).intl;
  obj9.title = intl14.string(arg1(dependencyMap[9]).t.cObMZD);
  const intl15 = arg1(dependencyMap[9]).intl;
  obj9.description = intl15.string(arg1(dependencyMap[9]).t.puH/9R);
  obj9.icon = obj.STREAM;
  items[6] = obj9;
  obj.perks = items.filter(arg1(dependencyMap[10]).isNotNullish);
  const items1 = [obj, , ];
  const obj10 = { tier: BoostedGuildTiers.TIER_2 };
  const intl16 = arg1(dependencyMap[9]).intl;
  obj10.title = intl16.string(arg1(dependencyMap[9]).t.34GpBc);
  const obj11 = {};
  const intl17 = arg1(dependencyMap[9]).intl;
  obj11.title = intl17.formatToPlainString(arg1(dependencyMap[9]).t.dnLAwl, { adding: closure_18[closure_10.TIER_2].limits.emoji - closure_18[closure_10.TIER_1].limits.emoji, total: closure_18[closure_10.TIER_2].limits.emoji });
  const intl18 = arg1(dependencyMap[9]).intl;
  obj11.description = intl18.string(arg1(dependencyMap[9]).t.fRiNhw);
  obj11.icon = obj.EMOJI;
  const items2 = [obj11, , , , , , , , ];
  const obj13 = {};
  const intl19 = arg1(dependencyMap[9]).intl;
  const obj14 = { adding: getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_2), total: getTotalStickerCountForTier(BoostedGuildTiers.TIER_2) };
  obj13.title = intl19.formatToPlainString(arg1(dependencyMap[9]).t./9p2/g, obj14);
  const intl20 = arg1(dependencyMap[9]).intl;
  obj13.description = intl20.string(arg1(dependencyMap[9]).t.t4TM28);
  obj13.icon = obj.STICKER;
  items2[1] = obj13;
  const obj15 = {};
  const intl21 = arg1(dependencyMap[9]).intl;
  const obj16 = { soundCount: getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_2), totalSoundCount: getTotalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_2) };
  obj15.title = intl21.formatToPlainString(arg1(dependencyMap[9]).t.NRuk5m, obj16);
  const intl22 = arg1(dependencyMap[9]).intl;
  obj15.description = intl22.string(arg1(dependencyMap[9]).t.pEYlPZ);
  obj15.icon = obj.SOUNDBOARD;
  items2[2] = obj15;
  const obj17 = {};
  const intl23 = arg1(dependencyMap[9]).intl;
  obj17.title = intl23.formatToPlainString(arg1(dependencyMap[9]).t.zoT1ZE, { bitrate: closure_18[closure_10.TIER_2].limits.bitrate / 1000 });
  const intl24 = arg1(dependencyMap[9]).intl;
  obj17.description = intl24.string(arg1(dependencyMap[9]).t.nzRo/I);
  obj17.icon = obj.AUDIO;
  items2[3] = obj17;
  const obj19 = {};
  const intl25 = arg1(dependencyMap[9]).intl;
  obj19.title = intl25.string(arg1(dependencyMap[9]).t.+KhQKM);
  const intl26 = arg1(dependencyMap[9]).intl;
  obj19.description = intl26.string(arg1(dependencyMap[9]).t.ZWf10P);
  obj19.icon = obj.CUSTOMIZATION;
  items2[4] = obj19;
  const obj20 = {};
  const intl27 = arg1(dependencyMap[9]).intl;
  const obj21 = {};
  let obj24 = arg1(dependencyMap[11]);
  obj21.fileSize = obj24.formatSize(closure_18[closure_10.TIER_2].limits.fileSize / 1024, { useKibibytes: true });
  obj20.title = intl27.formatToPlainString(arg1(dependencyMap[9]).t.t95LnM, obj21);
  const intl28 = arg1(dependencyMap[9]).intl;
  obj20.description = intl28.format(arg1(dependencyMap[9]).t.yvht65, {});
  obj20.icon = obj.UPLOAD;
  items2[5] = obj20;
  const obj22 = {};
  const intl29 = arg1(dependencyMap[9]).intl;
  obj22.title = intl29.string(arg1(dependencyMap[9]).t.bmaoNI);
  const intl30 = arg1(dependencyMap[9]).intl;
  obj22.description = intl30.string(arg1(dependencyMap[9]).t.WZW2Bj);
  obj22.icon = obj.STREAM;
  items2[6] = obj22;
  const obj23 = {};
  const intl31 = arg1(dependencyMap[9]).intl;
  obj23.title = intl31.string(arg1(dependencyMap[9]).t.BHtqcV);
  const intl32 = arg1(dependencyMap[9]).intl;
  obj23.description = intl32.string(arg1(dependencyMap[9]).t.ukVcEe);
  obj23.icon = obj.CUSTOM_ROLE_ICON;
  items2[7] = obj23;
  let tmp = null;
  if (arg0) {
    obj24 = {};
    const intl33 = arg1(dependencyMap[9]).intl;
    const obj25 = { limit: closure_13 };
    obj24.title = intl33.formatToPlainString(arg1(dependencyMap[9]).t.T8P3TH, obj25);
    const intl34 = arg1(dependencyMap[9]).intl;
    const obj26 = { limit: closure_13 };
    obj24.description = intl34.formatToPlainString(arg1(dependencyMap[9]).t.T8P3TH, obj26);
    obj24.icon = obj.STAGE_VIDEO;
    tmp = obj24;
  }
  items2[8] = tmp;
  obj10.perks = items2.filter(arg1(dependencyMap[10]).isNotNullish);
  items1[1] = obj10;
  const obj27 = { tier: BoostedGuildTiers.TIER_3 };
  const intl35 = arg1(dependencyMap[9]).intl;
  obj27.title = intl35.string(arg1(dependencyMap[9]).t.P7LdcQ);
  const obj28 = {};
  const intl36 = arg1(dependencyMap[9]).intl;
  obj28.title = intl36.formatToPlainString(arg1(dependencyMap[9]).t.dnLAwl, { adding: closure_18[closure_10.TIER_3].limits.emoji - closure_18[closure_10.TIER_2].limits.emoji, total: closure_18[closure_10.TIER_3].limits.emoji });
  const intl37 = arg1(dependencyMap[9]).intl;
  obj28.description = intl37.string(arg1(dependencyMap[9]).t.AfJxnV);
  obj28.icon = obj.EMOJI;
  const items3 = [obj28, , , , , , , ];
  const obj30 = {};
  const intl38 = arg1(dependencyMap[9]).intl;
  const obj31 = { adding: getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_3), total: getTotalStickerCountForTier(BoostedGuildTiers.TIER_3) };
  obj30.title = intl38.formatToPlainString(arg1(dependencyMap[9]).t./9p2/g, obj31);
  const intl39 = arg1(dependencyMap[9]).intl;
  obj30.description = intl39.string(arg1(dependencyMap[9]).t.+ZI4QZ);
  obj30.icon = obj.STICKER;
  items3[1] = obj30;
  const obj32 = {};
  const intl40 = arg1(dependencyMap[9]).intl;
  const obj33 = { soundCount: getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_3), totalSoundCount: getTotalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_3) };
  obj32.title = intl40.formatToPlainString(arg1(dependencyMap[9]).t.NRuk5m, obj33);
  const intl41 = arg1(dependencyMap[9]).intl;
  obj32.description = intl41.string(arg1(dependencyMap[9]).t.8omJSY);
  obj32.icon = obj.SOUNDBOARD;
  items3[2] = obj32;
  const obj34 = {};
  const intl42 = arg1(dependencyMap[9]).intl;
  obj34.title = intl42.formatToPlainString(arg1(dependencyMap[9]).t.zoT1ZE, { bitrate: closure_18[closure_10.TIER_3].limits.bitrate / 1000 });
  const intl43 = arg1(dependencyMap[9]).intl;
  obj34.description = intl43.string(arg1(dependencyMap[9]).t.cOkbp/);
  obj34.icon = obj.AUDIO;
  items3[3] = obj34;
  const obj36 = {};
  const intl44 = arg1(dependencyMap[9]).intl;
  obj36.title = intl44.string(arg1(dependencyMap[9]).t.C2w2cM);
  const intl45 = arg1(dependencyMap[9]).intl;
  const obj37 = {};
  let obj41 = importDefault(dependencyMap[12]);
  obj37.helpdeskArticle = obj41.getArticleURL(constants.GUILD_VANITY_URL);
  obj36.description = intl45.format(arg1(dependencyMap[9]).t.3Reosx, obj37);
  obj36.icon = obj.VANITY;
  items3[4] = obj36;
  const obj38 = {};
  const intl46 = arg1(dependencyMap[9]).intl;
  const obj39 = { fileSize: arg1(dependencyMap[11]).formatSize(closure_18[closure_10.TIER_3].limits.fileSize / 1024, { useKibibytes: true }) };
  obj38.title = intl46.formatToPlainString(arg1(dependencyMap[9]).t.t95LnM, obj39);
  const intl47 = arg1(dependencyMap[9]).intl;
  obj38.description = intl47.format(arg1(dependencyMap[9]).t.IwDqSL, {});
  obj38.icon = obj.UPLOAD;
  items3[5] = obj38;
  const obj40 = {};
  const intl48 = arg1(dependencyMap[9]).intl;
  obj40.title = intl48.string(arg1(dependencyMap[9]).t.z0GtBG);
  const intl49 = arg1(dependencyMap[9]).intl;
  obj40.description = intl49.string(arg1(dependencyMap[9]).t.v92GNV);
  obj40.icon = obj.ANIMATED;
  items3[6] = obj40;
  let tmp6 = null;
  if (arg0) {
    obj41 = {};
    const intl50 = arg1(dependencyMap[9]).intl;
    const obj42 = { limit: closure_14 };
    obj41.title = intl50.formatToPlainString(arg1(dependencyMap[9]).t.T8P3TH, obj42);
    const intl51 = arg1(dependencyMap[9]).intl;
    const obj43 = { limit: closure_14 };
    obj41.description = intl51.formatToPlainString(arg1(dependencyMap[9]).t.T8P3TH, obj43);
    obj41.icon = obj.STAGE_VIDEO;
    tmp6 = obj41;
  }
  items3[7] = tmp6;
  obj27.perks = items3.filter(arg1(dependencyMap[10]).isNotNullish);
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
    const intl4 = arg1(dependencyMap[9]).intl;
    const string = intl4.string;
    const t = arg1(dependencyMap[9]).t;
    if (tmp) {
      let stringResult = string(t.LcKgJd);
    } else {
      stringResult = string(t.mx8j2m);
    }
    return stringResult;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    const intl3 = arg1(dependencyMap[9]).intl;
    return intl3.string(arg1(dependencyMap[9]).t.nzXtaS);
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    const intl2 = arg1(dependencyMap[9]).intl;
    return intl2.string(arg1(dependencyMap[9]).t.h33/uW);
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.BfF6ED);
  } else {
    const _Error = Error;
    const error = new Error("Not a valid tier type");
    throw error;
  }
  const tmp = undefined === useLevels || useLevels;
};
export const getShortenedTierName = function getShortenedTierName(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    const intl4 = arg1(dependencyMap[9]).intl;
    return intl4.string(arg1(dependencyMap[9]).t.LcKgJd);
  } else if (BoostedGuildTiers.TIER_1 === arg0) {
    const intl3 = arg1(dependencyMap[9]).intl;
    return intl3.string(arg1(dependencyMap[9]).t.xRjU1V);
  } else if (BoostedGuildTiers.TIER_2 === arg0) {
    const intl2 = arg1(dependencyMap[9]).intl;
    return intl2.string(arg1(dependencyMap[9]).t.C7e2Bo);
  } else if (BoostedGuildTiers.TIER_3 === arg0) {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.avGxmk);
  } else {
    const _Error = Error;
    const error = new Error("Not a valid tier type");
    throw error;
  }
};
export const minimumRequiredTierForGuildFeature = memoizeResult;
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
  const diffResult = importDefault(dependencyMap[14])().diff(importDefault(dependencyMap[14])(arg0), "months");
  let num = 1;
  if (null != diffResult) {
    num = diffResult;
  }
  return num;
};
export const getUserLevel = function getUserLevel(arg0) {
  const obj = importDefault(dependencyMap[14])();
  const keys = Object.keys(closure_26);
  let num = 0;
  let num2 = 1;
  let num3 = 1;
  if (0 < keys.length) {
    do {
      let tmp2 = keys[num];
      let tmp3 = closure_26;
      if (diffResult >= closure_26[tmp2]) {
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
  const premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
  const currentUser = currentUser.getCurrentUser();
  let isFetching = closure_6.hasFetched;
  if (!isFetching) {
    isFetching = closure_6.isFetching;
  }
  if (!isFetching) {
    const guildBoostSlots = arg1(dependencyMap[15]).fetchGuildBoostSlots();
    const obj2 = arg1(dependencyMap[15]);
  }
  let prop;
  getAvailableGuildBoostSlots(closure_6.boostSlots);
  if (null != premiumTypeSubscription) {
    prop = premiumTypeSubscription.isPausedOrPausePending;
  }
  if (prop) {
    if (fractionalState.fractionalState === constants3.NONE) {
      if (!tmp8) {
        const intl = arg1(dependencyMap[9]).intl;
        return intl.string(arg1(dependencyMap[9]).t.mOWsF1);
      }
    }
  }
  if (null != currentUser) {
    if (currentUser.isPremiumGroupMember()) {
      const intl7 = arg1(dependencyMap[9]).intl;
      const obj = { premiumGroupProductName: callback() };
      return intl7.formatToPlainString(importDefault(dependencyMap[16]).5xN/C1, obj);
    }
  }
  const values = Object.values(closure_6.boostSlots);
  const reduced = values.reduce((numCanceledGuildBoostSlots, isAvailable) => {
    if (callback(isAvailable)) {
      numCanceledGuildBoostSlots.numCanceledGuildBoostSlots = numCanceledGuildBoostSlots.numCanceledGuildBoostSlots + 1;
    }
    if (isAvailable.isAvailable()) {
      numCanceledGuildBoostSlots.numAvailableGuildBoostSlots = numCanceledGuildBoostSlots.numAvailableGuildBoostSlots + 1;
    }
    return numCanceledGuildBoostSlots;
  }, { extractCaptchaPropsFromResponse: "%FunctionPrototype%", GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED: "paddingStart" });
  if (null != premiumTypeSubscription) {
    if (reduced.numAvailableGuildBoostSlots <= 0) {
      if (premiumTypeSubscription.status === constants2.PAST_DUE) {
        const intl6 = arg1(dependencyMap[9]).intl;
        return intl6.string(arg1(dependencyMap[9]).t.De4Vm6);
      } else if (premiumTypeSubscription.status === constants2.ACCOUNT_HOLD) {
        const intl5 = arg1(dependencyMap[9]).intl;
        return intl5.string(arg1(dependencyMap[9]).t.JakNQ8);
      } else if (tmp13 > 0) {
        const intl4 = arg1(dependencyMap[9]).intl;
        return intl4.string(arg1(dependencyMap[9]).t.x25mZR);
      } else if (null == premiumTypeSubscription.renewalMutations) {
        return null;
      } else {
        const numPremiumGuildSubscriptions = importAll(dependencyMap[17]).getNumPremiumGuildSubscriptions(premiumTypeSubscription.renewalMutations.additionalPlans);
        const obj4 = importAll(dependencyMap[17]);
        if (obj5.getNumPremiumGuildSubscriptions(premiumTypeSubscription.additionalPlans) > numPremiumGuildSubscriptions) {
          const intl3 = arg1(dependencyMap[9]).intl;
          let stringResult = intl3.string(arg1(dependencyMap[9]).t.x25mZR);
        } else {
          const intl2 = arg1(dependencyMap[9]).intl;
          stringResult = intl2.string(arg1(dependencyMap[9]).t.W/bb8f);
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
export const getGracePeriodEndingDate = function getGracePeriodEndingDate(arr, guildId) {
  const tmp = appliedGuildBoostsRequiredForPerks(arr, guildId);
  if (tmp > 0) {
    const found = function sortAppliedGuildBoostsByEndsAt(arr) {
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
    }(arr).filter((endsAt) => null != endsAt.endsAt);
    const diff = found.length - tmp;
    if (diff < 0) {
      let obj = importDefault(dependencyMap[18]);
      obj = { style: null, textStyle: null };
      obj = { subscriptionLength: arr.length, subscriptionsNeededForPremiumTier: AppliedGuildBoostsRequiredForBoostedGuildTier[closure_38(undefined, guildId)], endingSubscriptionLength: found.length };
      obj.data = obj;
      obj.addBreadcrumb(obj);
    }
    const _Math = Math;
    let endsAt;
    if (null != found[Math.max(Math, diff, 0)]) {
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
  const tmp = getIncrementalStickerCountForTier(tier);
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
  return Math.max(0, AppliedGuildBoostsRequiredForBoostedGuildTier[arg1] - arg1(dependencyMap[19]).getGuildPowerupsBoostCount(id.id).available);
};
export { isGuildBoostSlotCanceled };
export { getTheoreticalPremiumTierForSubscriberCount };
export { getNextPremiumTierForSubscriberCount };
export const TierMarkerPositions = obj1;
export const getGuildBoostingProgressBarFillFactor = function getGuildBoostingProgressBarFillFactor(guild) {
  let obj = arg1(dependencyMap[20]);
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
