// Module ID: 9499
// Function ID: 73917
// Name: getCollectiblesQuestReward
// Dependencies: [6774, 9500, 6946, 6939, 3355, 1212, 9501, 9502, 9503, 9504, 9505, 4979, 2]
// Exports: getCollectibleQuestRewardDuration, getCollectibleQuestRewardExtendableExpirationDate, getCollectiblesQuestRewardItem, getDefaultPlatform, getDefaultRewardName, getDefaultRewardNameWithArticle, getInGameQuestReward, getPlatformString, getQuestOrbMultiplierForUser, getQuestPrimaryReward, getRewardCodeQuestReward, getVirtualCurrencyRewardPremiumOrbQuantity, hasCollectiblesQuestReward, hasInGameQuestReward, hasQuestRewardCode, isCollectibleQuestRewardPermanentWithPremiumSubscription, isTieredRewardCodeQuest

// Module 9499 (getCollectiblesQuestReward)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "QuestRewardTypes";

const require = arg1;
function getCollectiblesQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.COLLECTIBLE);
  let type;
  if (null != found) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === require(6946) /* QuestRewardTypes */.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  return tmp3;
}
function hasFractionalPremiumQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.some((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.FRACTIONAL_PREMIUM);
}
function hasVirtualCurrencyReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
}
function hasPremiumOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
  let premiumOrbQuantity;
  if (null != found) {
    premiumOrbQuantity = found.premiumOrbQuantity;
  }
  let tmp3 = null != premiumOrbQuantity;
  if (tmp3) {
    tmp3 = premiumOrbQuantity > 0;
  }
  return tmp3;
}
function getVirtualCurrencyRewardOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
  let orbQuantity;
  if (null != found) {
    orbQuantity = found.orbQuantity;
  }
  return orbQuantity;
}
function isCollectibleQuestRewardPremiumExtendable(config) {
  let expirationMode;
  const tmp2 = getCollectiblesQuestReward(config);
  if (null != tmp2) {
    expirationMode = tmp2.expirationMode;
  }
  let hasItem = null != expirationMode;
  if (hasItem) {
    hasItem = set.has(expirationMode);
  }
  return hasItem;
}
function getQuestOrbMultiplier(config) {
  let orbQuantity;
  let premiumOrbQuantity;
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
  let type;
  if (null != found) {
    type = found.type;
  }
  if (type !== require(6946) /* QuestRewardTypes */.QuestRewardTypes.VIRTUAL_CURRENCY) {
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
}
function getQuestOrbRewardQuantityForUser(config, stateFromStores) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
  if (null == found) {
    return null;
  } else if (null == stateFromStores) {
    return found.orbQuantity;
  } else {
    const questOrbMultiplierEligibilityForUser = require(9501) /* getQuestOrbMultiplierEligibilityForUser */.getQuestOrbMultiplierEligibilityForUser(stateFromStores);
    if (hasPremiumOrbQuantity(config)) {
      return orbQuantity;
    }
    orbQuantity = found.orbQuantity;
    const obj = require(9501) /* getQuestOrbMultiplierEligibilityForUser */;
  }
}
function _getDefaultRewardName(config, stateFromStores, arg2) {
  if (hasFractionalPremiumQuestReward(config)) {
    return require(9503) /* getFractionalPremiumQuestRewards */.getFractionalPremiumQuestRewardName(config);
  } else if (hasVirtualCurrencyReward(config)) {
    let tmp7 = getQuestOrbRewardQuantityForUser(config, stateFromStores);
    if (null == tmp7) {
      tmp7 = getVirtualCurrencyRewardOrbQuantity(config);
    }
    let num2 = 0;
    if (null != tmp7) {
      num2 = tmp7;
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = { orbAmount: num2 };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["nLXlh+"], obj);
  } else {
    obj = require(9504) /* getQuestUrl */;
    const messages = obj.getDefaultReward(config).messages;
    return arg2 ? messages.nameWithArticle : messages.name;
  }
}
let items = [require("QuestRewardExpirationMode").QuestRewardExpirationMode.PREMIUM_EXTENSION, require("QuestRewardExpirationMode").QuestRewardExpirationMode.PREMIUM_PERMANENT];
let set = new Set(items);
let result = set.fileFinishedImporting("modules/quests/utils/QuestRewardUtils.tsx");

export { getCollectiblesQuestReward };
export const getCollectibleQuestRewardExtendableExpirationDate = function getCollectibleQuestRewardExtendableExpirationDate(config) {
  const tmp = getCollectiblesQuestReward(config);
  let questFormattedDate = null;
  if (null != tmp) {
    questFormattedDate = null;
    if ("expiresAtPremium" in tmp) {
      questFormattedDate = null;
      if (null != tmp.expiresAtPremium) {
        questFormattedDate = require(6939) /* _createForOfIteratorHelperLoose */.getQuestFormattedDate(tmp.expiresAtPremium);
        const obj = require(6939) /* _createForOfIteratorHelperLoose */;
      }
    }
  }
  return questFormattedDate;
};
export const getCollectibleQuestRewardDuration = function getCollectibleQuestRewardDuration(config) {
  const tmp = getCollectiblesQuestReward(config);
  if (null != tmp) {
    if ("expiresAt" in tmp) {
      if (null != tmp.expiresAt) {
        const _Date = Date;
        const date = new Date(config.expiresAt);
        const _Date2 = Date;
        const date1 = new Date(tmp.expiresAt);
        const differenceInDaysResult = require(3355).differenceInDays(date1, date);
        const _Math3 = Math;
        let num = 0;
        const rounded = Math.floor(differenceInDaysResult / 30);
        if (differenceInDaysResult % 30 >= 25) {
          num = 1;
        }
        const sum = rounded + num;
        if (sum >= 12) {
          const _Math2 = Math;
          const rounded1 = Math.floor(sum / 12);
          const intl4 = require(1212) /* getSystemLocale */.intl;
          let obj = { years: rounded1 };
          return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.PClsrw, obj);
        } else if (sum > 0) {
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj = { months: sum };
          return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.kridzK, obj);
        } else {
          const differenceInDaysResult1 = require(3355).differenceInDays(date1, date);
          if (differenceInDaysResult1 >= 7) {
            const _Math = Math;
            const rounded2 = Math.ceil(differenceInDaysResult1 / 7);
            const intl2 = require(1212) /* getSystemLocale */.intl;
            const obj1 = { weeks: rounded2 };
            return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.EmoBD2, obj1);
          } else {
            const intl = require(1212) /* getSystemLocale */.intl;
            obj = { days: differenceInDaysResult1 };
            return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["k2UNz+"], obj);
          }
          const obj6 = require(3355);
        }
        const obj5 = require(3355);
      }
    }
  }
  return null;
};
export { hasFractionalPremiumQuestReward };
export { hasVirtualCurrencyReward };
export { hasPremiumOrbQuantity };
export const hasCollectiblesQuestReward = function hasCollectiblesQuestReward(config) {
  return null != getCollectiblesQuestReward(config);
};
export const hasInGameQuestReward = function hasInGameQuestReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.IN_GAME);
};
export const hasQuestRewardCode = function hasQuestRewardCode(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.REWARD_CODE);
};
export const getInGameQuestReward = function getInGameQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.IN_GAME);
  let tmp2 = null;
  if (null != found) {
    tmp2 = found;
  }
  return tmp2;
};
export const getCollectiblesQuestRewardItem = function getCollectiblesQuestRewardItem(rewardsConfig) {
  const tmp = getCollectiblesQuestReward(rewardsConfig);
  let skuId;
  if (null != tmp) {
    skuId = tmp.skuId;
  }
  product = product.getProduct(skuId);
  let first;
  if (null != product) {
    const items = product.items;
    if (null != items) {
      first = items[0];
    }
  }
  let tmp5 = null;
  if (null != first) {
    tmp5 = first;
  }
  return tmp5;
};
export { getVirtualCurrencyRewardOrbQuantity };
export const getVirtualCurrencyRewardPremiumOrbQuantity = function getVirtualCurrencyRewardPremiumOrbQuantity(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
  let type;
  if (null != found) {
    type = found.type;
  }
  if (type === require(6946) /* QuestRewardTypes */.QuestRewardTypes.VIRTUAL_CURRENCY) {
    return found.premiumOrbQuantity;
  }
};
export { isCollectibleQuestRewardPremiumExtendable };
export const isCollectibleQuestRewardPermanentWithPremiumSubscription = function isCollectibleQuestRewardPermanentWithPremiumSubscription(config) {
  let tmp = isCollectibleQuestRewardPremiumExtendable(config);
  if (tmp) {
    const tmp3 = getCollectiblesQuestReward(config);
    let expirationMode;
    if (null != tmp3) {
      expirationMode = tmp3.expirationMode;
    }
    tmp = expirationMode === require(9500) /* QuestRewardExpirationMode */.QuestRewardExpirationMode.PREMIUM_PERMANENT;
  }
  return tmp;
};
export const getQuestPrimaryReward = function getQuestPrimaryReward(quest) {
  const userStatus = quest.userStatus;
  let claimedTier;
  if (null != userStatus) {
    claimedTier = userStatus.claimedTier;
  }
  let num = 0;
  if (null != claimedTier) {
    num = claimedTier;
  }
  const config = quest.config;
  if ("rewardsConfig" in quest.config) {
    let tmp2 = config.rewardsConfig.rewards[num];
  } else {
    tmp2 = config.rewards[num];
  }
  return tmp2;
};
export { getQuestOrbMultiplier };
export const getQuestOrbMultiplierForUser = function getQuestOrbMultiplierForUser(config, isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    return 1;
  } else {
    const tmp2 = getQuestOrbMultiplier(config);
    let num2 = 1;
    if (null != tmp2) {
      num2 = tmp2;
    }
    const questOrbMultiplierEligibilityForUser = require(9501) /* getQuestOrbMultiplierEligibilityForUser */.getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub);
    let num4 = 1;
    if (hasPremiumOrbQuantity(config)) {
      num4 = 1;
      if (obj2.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
        num4 = num2;
      }
      obj2 = require(9502) /* items */;
    }
    return num4;
  }
};
export { getQuestOrbRewardQuantityForUser };
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
    if (tmp.config.rewardsConfig.rewards[idx].type === require(6946) /* QuestRewardTypes */.QuestRewardTypes.REWARD_CODE) {
      tmp5 = tmp2;
    }
    return tmp5;
  }
};
export const isTieredRewardCodeQuest = function isTieredRewardCodeQuest(quest) {
  const rewardsConfig = quest.quest.config.rewardsConfig;
  let everyResult = rewardsConfig.assignmentMethod === require(9505) /* QuestRewardAssignmentMethods */.QuestRewardAssignmentMethods.TIERED;
  if (everyResult) {
    everyResult = rewardsConfig.rewards.length > 0;
  }
  if (everyResult) {
    const rewards = rewardsConfig.rewards;
    everyResult = rewards.every((type) => type.type === outer1_0(outer1_1[2]).QuestRewardTypes.REWARD_CODE);
  }
  return everyResult;
};
export const getDefaultPlatform = function getDefaultPlatform(config) {
  const platforms = config.rewardsConfig.platforms;
  if (platforms.length > 0) {
    let CROSS_PLATFORM = platforms[0];
  } else {
    CROSS_PLATFORM = require(4979) /* QuestsVisibleMessagesChangedSource */.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  return CROSS_PLATFORM;
};
export const getPlatformString = function getPlatformString(arg0) {
  if (require(4979) /* QuestsVisibleMessagesChangedSource */.QuestRewardCodePlatforms.XBOX === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.G84UWZ);
  } else if (require(4979) /* QuestsVisibleMessagesChangedSource */.QuestRewardCodePlatforms.PLAYSTATION === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t["6IeKx2"]);
  } else if (require(4979) /* QuestsVisibleMessagesChangedSource */.QuestRewardCodePlatforms.SWITCH === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["1pp0su"]);
  } else if (require(4979) /* QuestsVisibleMessagesChangedSource */.QuestRewardCodePlatforms.PC === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["YK+wUg"]);
  } else if (require(4979) /* QuestsVisibleMessagesChangedSource */.QuestRewardCodePlatforms.CROSS_PLATFORM === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.UWVbzV);
  }
};
