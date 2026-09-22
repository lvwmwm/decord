// Module ID: 11427
// Function ID: 11428
// Name: QuestRewardUtils
// Dependencies: [7645, 11428, 7810, 7801, 3871, 1114, 11429, 11430, 11431, 11432, 11433, 5528, 2]
// Exports: getCollectibleQuestRewardDuration, getCollectibleQuestRewardExtendableExpirationDate, getCollectiblesQuestReward, getCollectiblesQuestRewardItem, getDefaultPlatform, getDefaultRewardName, getDefaultRewardNameWithArticle, getInGameQuestReward, getPlatformString, getQuestOrbMultiplier, getQuestOrbMultiplierForUser, getQuestOrbRewardQuantityForUser, getQuestPrimaryReward, getRewardCodeQuestReward, getVirtualCurrencyRewardOrbQuantity, getVirtualCurrencyRewardPremiumOrbQuantity, hasCollectiblesQuestReward, hasFractionalPremiumQuestReward, hasInGameQuestReward, hasPremiumOrbQuantity, hasQuestRewardCode, hasVirtualCurrencyReward, isCollectibleQuestRewardPermanentWithPremiumSubscription, isCollectibleQuestRewardPremiumExtendable, isTieredRewardCodeQuest

// Module 11427 (QuestRewardUtils)
import util from "util" /* 1114 */;
import QuestTypes from "QuestTypes" /* 5528 */;
import QuestDataUtils from "QuestDataUtils" /* 7801 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7810 */;
import QuestOrbMultiplierHooks from "QuestOrbMultiplierHooks" /* 11429 */;
import FractionalPremiumUtils from "FractionalPremiumUtils" /* 11431 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11432 */;
import QuestRewardAssignmentMethods from "QuestRewardAssignmentMethods" /* 11433 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7645 */;

require = fn;
function _getDefaultRewardName(rewardsConfig, stateFromStores, arg2) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  if (rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM)) {
    return FractionalPremiumUtils.getFractionalPremiumQuestRewardName(rewardsConfig);
  } else {
    const rewards2 = rewardsConfig.rewardsConfig.rewards;
    if (rewards2.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY)) {
      const rewards1 = rewardsConfig.rewardsConfig.rewards;
      const found = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
      let num = null;
      if (null != found) {
        if (null == stateFromStores) {
          num = found.orbQuantity;
        } else {
          const rewards3 = rewardsConfig.rewardsConfig.rewards;
          const questOrbMultiplierEligibilityForUser = QuestOrbMultiplierHooks.getQuestOrbMultiplierEligibilityForUser(stateFromStores);
          const found1 = rewards3.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
          let premiumOrbQuantity;
          if (found1 != null) {
            premiumOrbQuantity = found1.premiumOrbQuantity;
          }
          let tmp8 = null != premiumOrbQuantity;
          if (tmp8) {
            tmp8 = premiumOrbQuantity > 0;
          }
          if (tmp8) {
            if (tmp15Result.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
              let orbQuantity2 = found.premiumOrbQuantity;
              if (orbQuantity2 == null) {
                orbQuantity2 = found.orbQuantity;
              }
              let orbQuantity = orbQuantity2;
            }
            num = orbQuantity;
            tmp15Result = tmp15(11430);
          }
          orbQuantity = found.orbQuantity;
          tmp15 = require;
        }
      }
      if (num == null) {
        const rewards4 = rewardsConfig.rewardsConfig.rewards;
        const found2 = rewards4.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
        let orbQuantity1;
        if (found2 != null) {
          orbQuantity1 = found2.orbQuantity;
        }
        num = orbQuantity1;
      }
      if (num == null) {
        num = 0;
      }
      const intl = util.intl;
      const obj2 = { orbAmount: num };
      return intl.formatToPlainString(util.t["nLXlh+"], obj2);
    } else {
      const messages = QuestCopyUtils.getDefaultReward(rewardsConfig).messages;
      return arg2 ? messages.nameWithArticle : messages.name;
    }
  }
}
let items = [fn(11428).QuestRewardExpirationMode.PREMIUM_EXTENSION, fn(11428).QuestRewardExpirationMode.PREMIUM_PERMANENT];
const set = new Set(items);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/utils/QuestRewardUtils.tsx");

export const getCollectiblesQuestReward = function getCollectiblesQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  return tmp3;
};
export const getCollectibleQuestRewardExtendableExpirationDate = function getCollectibleQuestRewardExtendableExpirationDate(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp5 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp5 = found;
  }
  let questFormattedDate = null;
  if (null != tmp5) {
    questFormattedDate = null;
    if ("expiresAtPremium" in tmp5) {
      questFormattedDate = null;
      if (null != tmp5.expiresAtPremium) {
        questFormattedDate = QuestDataUtils.getQuestFormattedDate(tmp5.expiresAtPremium);
        const tmp3Result = QuestDataUtils;
      }
    }
  }
  return questFormattedDate;
};
export const getCollectibleQuestRewardDuration = function getCollectibleQuestRewardDuration(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp5 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp5 = found;
  }
  if (null != tmp5) {
    if ("expiresAt" in tmp5) {
      if (null != tmp5.expiresAt) {
        const _Date = Date;
        const date = new Date(config.expiresAt);
        const _Date2 = Date;
        const date1 = new Date(tmp5.expiresAt);
        const differenceInDaysResult = tmp3(3871).differenceInDays(date1, date);
        const _Math3 = Math;
        let num = 0;
        const rounded = Math.floor(differenceInDaysResult / 30);
        if (25 <= differenceInDaysResult % 30) {
          num = 1;
        }
        const sum = rounded + num;
        if (sum >= 12) {
          const _Math2 = Math;
          const rounded1 = Math.floor(sum / 12);
          const intl4 = tmp3(1114).intl;
          const obj2 = { years: rounded1 };
          return intl4.formatToPlainString(tmp3(1114).t.PClsrw, obj2);
        } else if (sum > 0) {
          const intl3 = tmp3(1114).intl;
          const obj3 = { months: sum };
          return intl3.formatToPlainString(tmp3(1114).t.kridzK, obj3);
        } else {
          const differenceInDaysResult1 = tmp3(3871).differenceInDays(date1, date);
          if (differenceInDaysResult1 >= 7) {
            const _Math = Math;
            const rounded2 = Math.ceil(differenceInDaysResult1 / 7);
            const intl2 = tmp3(1114).intl;
            const obj4 = { weeks: rounded2 };
            return intl2.formatToPlainString(tmp3(1114).t.EmoBD2, obj4);
          } else {
            const intl = tmp3(1114).intl;
            const obj = { days: differenceInDaysResult1 };
            return intl.formatToPlainString(tmp3(1114).t["k2UNz+"], obj);
          }
          const tmp3Result2 = tmp3(3871);
        }
        const tmp3Result = tmp3(3871);
      }
    }
  }
  return null;
};
export const hasFractionalPremiumQuestReward = function hasFractionalPremiumQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM);
};
export const hasVirtualCurrencyReward = function hasVirtualCurrencyReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
};
export const hasPremiumOrbQuantity = function hasPremiumOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let premiumOrbQuantity;
  if (found != null) {
    premiumOrbQuantity = found.premiumOrbQuantity;
  }
  let tmp3 = null != premiumOrbQuantity;
  if (tmp3) {
    tmp3 = premiumOrbQuantity > 0;
  }
  return tmp3;
};
export const hasCollectiblesQuestReward = function hasCollectiblesQuestReward(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  return null != tmp3;
};
export const hasInGameQuestReward = function hasInGameQuestReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.IN_GAME);
};
export const hasQuestRewardCode = function hasQuestRewardCode(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE);
};
export const getInGameQuestReward = function getInGameQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  let found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.IN_GAME);
  if (found == null) {
    found = null;
  }
  return found;
};
export const getCollectiblesQuestRewardItem = function getCollectiblesQuestRewardItem(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  let skuId;
  if (tmp3 != null) {
    skuId = tmp3.skuId;
  }
  const product = CollectiblesCategoryStore.getProduct(skuId);
  let first;
  if (product != null) {
    const items = product.items;
    if (items != null) {
      first = items[0];
    }
  }
  if (first == null) {
    first = null;
  }
  return first;
};
export const getVirtualCurrencyRewardOrbQuantity = function getVirtualCurrencyRewardOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let orbQuantity;
  if (found != null) {
    orbQuantity = found.orbQuantity;
  }
  return orbQuantity;
};
export const getVirtualCurrencyRewardPremiumOrbQuantity = function getVirtualCurrencyRewardPremiumOrbQuantity(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let type;
  if (found != null) {
    type = found.type;
  }
  if (type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
    return found.premiumOrbQuantity;
  }
};
export const isCollectibleQuestRewardPremiumExtendable = function isCollectibleQuestRewardPremiumExtendable(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  let expirationMode;
  if (tmp3 != null) {
    expirationMode = tmp3.expirationMode;
  }
  let hasItem = null != expirationMode;
  if (hasItem) {
    hasItem = set.has(expirationMode);
  }
  return hasItem;
};
export const isCollectibleQuestRewardPermanentWithPremiumSubscription = function isCollectibleQuestRewardPermanentWithPremiumSubscription(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp5 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp5 = found;
  }
  let expirationMode;
  if (tmp5 != null) {
    expirationMode = tmp5.expirationMode;
  }
  let hasItem = null != expirationMode;
  if (hasItem) {
    hasItem = set.has(expirationMode);
  }
  if (hasItem) {
    const rewards1 = config.rewardsConfig.rewards;
    const found1 = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
    let type1;
    if (found1 != null) {
      type1 = found1.type;
    }
    let tmp11 = null;
    if (type1 === tmp3(7810).QuestRewardTypes.COLLECTIBLE) {
      tmp11 = found1;
    }
    let expirationMode1;
    if (tmp11 != null) {
      expirationMode1 = tmp11.expirationMode;
    }
    hasItem = expirationMode1 === tmp3(11428).QuestRewardExpirationMode.PREMIUM_PERMANENT;
  }
  return hasItem;
};
export const getQuestPrimaryReward = function getQuestPrimaryReward(quest) {
  const userStatus = quest.userStatus;
  let num;
  if (userStatus != null) {
    num = userStatus.claimedTier;
  }
  if (num == null) {
    num = 0;
  }
  const config = quest.config;
  if ("rewardsConfig" in quest.config) {
    let tmp = config.rewardsConfig.rewards[num];
  } else {
    tmp = config.rewards[num];
  }
  return tmp;
};
export const getQuestOrbMultiplier = function getQuestOrbMultiplier(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let type;
  if (found != null) {
    type = found.type;
  }
  if (type !== QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
    return null;
  } else {
    ({ premiumOrbQuantity, orbQuantity } = found);
    let result = null;
    if (null != premiumOrbQuantity) {
      result = null;
      if (0 !== orbQuantity) {
        const _Math = Math;
        result = Math.round(premiumOrbQuantity / orbQuantity * 100) / 100;
      }
    }
    return result;
  }
};
export const getQuestOrbMultiplierForUser = function getQuestOrbMultiplierForUser(rewardsConfig, isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    return 1;
  } else {
    const rewards = rewardsConfig.rewardsConfig.rewards;
    const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
    let type;
    if (found != null) {
      type = found.type;
    }
    let num = null;
    if (type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
      ({ premiumOrbQuantity, orbQuantity } = found);
      let result = null;
      if (null != premiumOrbQuantity) {
        result = null;
        if (0 !== orbQuantity) {
          const _Math = Math;
          result = Math.round(premiumOrbQuantity / orbQuantity * 100) / 100;
        }
      }
      num = result;
    }
    if (num == null) {
      num = 1;
    }
    const rewards1 = rewardsConfig.rewardsConfig.rewards;
    const questOrbMultiplierEligibilityForUser = QuestOrbMultiplierHooks.getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub);
    const found1 = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
    let premiumOrbQuantity1;
    if (found1 != null) {
      premiumOrbQuantity1 = found1.premiumOrbQuantity;
    }
    let tmp9 = null != premiumOrbQuantity1;
    if (tmp9) {
      tmp9 = premiumOrbQuantity1 > 0;
    }
    let num6 = 1;
    if (tmp9) {
      num6 = 1;
      if (tmp2Result2.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
        num6 = num;
      }
      tmp2Result2 = tmp2(11430);
    }
    return num6;
  }
};
export const getQuestOrbRewardQuantityForUser = function getQuestOrbRewardQuantityForUser(config, stateFromStores) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  if (null == found) {
    return null;
  } else if (null == stateFromStores) {
    return found.orbQuantity;
  } else {
    const rewards1 = config.rewardsConfig.rewards;
    const questOrbMultiplierEligibilityForUser = QuestOrbMultiplierHooks.getQuestOrbMultiplierEligibilityForUser(stateFromStores);
    const found1 = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
    let premiumOrbQuantity;
    if (found1 != null) {
      premiumOrbQuantity = found1.premiumOrbQuantity;
    }
    let tmp3 = null != premiumOrbQuantity;
    if (tmp3) {
      tmp3 = premiumOrbQuantity > 0;
    }
    if (tmp3) {
      if (tmp5Result.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
        let orbQuantity2 = found.premiumOrbQuantity;
        if (orbQuantity2 == null) {
          orbQuantity2 = found.orbQuantity;
        }
        let orbQuantity = orbQuantity2;
      }
      return orbQuantity;
    }
    orbQuantity = found.orbQuantity;
  }
};
export const getDefaultRewardName = function getDefaultRewardName(config, stateFromStores) {
  return _getDefaultRewardName(config, stateFromStores, false);
};
export const getDefaultRewardNameWithArticle = function getDefaultRewardNameWithArticle(config, stateFromStores) {
  return _getDefaultRewardName(config, stateFromStores, true);
};
export const getRewardCodeQuestReward = function getRewardCodeQuestReward(idx) {
  if (null == idx.idx) {
    return null;
  } else {
    let tmp5 = null;
    if (tmp.config.rewardsConfig.rewards[idx].type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE) {
      tmp5 = tmp2;
    }
    return tmp5;
  }
};
export const isTieredRewardCodeQuest = function isTieredRewardCodeQuest(quest) {
  const rewardsConfig = quest.quest.config.rewardsConfig;
  let everyResult = rewardsConfig.assignmentMethod === QuestRewardAssignmentMethods.QuestRewardAssignmentMethods.TIERED;
  if (everyResult) {
    everyResult = rewardsConfig.rewards.length > 0;
  }
  if (everyResult) {
    const rewards = rewardsConfig.rewards;
    everyResult = rewards.every((type) => type.type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE);
  }
  return everyResult;
};
export const getDefaultPlatform = function getDefaultPlatform(config) {
  const platforms = config.rewardsConfig.platforms;
  if (platforms.length > 0) {
    let CROSS_PLATFORM = platforms[0];
  } else {
    CROSS_PLATFORM = QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  return CROSS_PLATFORM;
};
export const getPlatformString = function getPlatformString(arg0) {
  if (QuestTypes.QuestRewardCodePlatforms.XBOX === arg0) {
    const intl5 = tmp(1114).intl;
    return intl5.string(tmp(1114).t.G84UWZ);
  } else if (tmp(5528).QuestRewardCodePlatforms.PLAYSTATION === arg0) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t["6IeKx2"]);
  } else if (tmp(5528).QuestRewardCodePlatforms.SWITCH === arg0) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t["1pp0su"]);
  } else if (tmp(5528).QuestRewardCodePlatforms.PC === arg0) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["YK+wUg"]);
  } else if (tmp(5528).QuestRewardCodePlatforms.CROSS_PLATFORM === arg0) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.UWVbzV);
  }
};
