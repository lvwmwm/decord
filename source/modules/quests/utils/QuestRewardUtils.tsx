// Module ID: 9455
// Function ID: 73654
// Name: getCollectiblesQuestReward
// Dependencies: []
// Exports: getCollectibleQuestRewardDuration, getCollectibleQuestRewardExtendableExpirationDate, getCollectiblesQuestRewardItem, getDefaultPlatform, getDefaultRewardName, getDefaultRewardNameWithArticle, getInGameQuestReward, getPlatformString, getQuestOrbMultiplierForUser, getQuestPrimaryReward, getRewardCodeQuestReward, getVirtualCurrencyRewardPremiumOrbQuantity, hasCollectiblesQuestReward, hasInGameQuestReward, hasQuestRewardCode, isCollectibleQuestRewardPermanentWithPremiumSubscription, isTieredRewardCodeQuest

// Module 9455 (getCollectiblesQuestReward)
function getCollectiblesQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === callback(closure_1[2]).QuestRewardTypes.COLLECTIBLE);
  let type;
  if (null != found) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === arg1(dependencyMap[2]).QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  return tmp3;
}
function hasFractionalPremiumQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.some((type) => type.type === callback(closure_1[2]).QuestRewardTypes.FRACTIONAL_PREMIUM);
}
function hasVirtualCurrencyReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === callback(closure_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
}
function hasPremiumOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === callback(closure_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
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
  const found = rewards.find((type) => type.type === callback(closure_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
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
  const found = rewards.find((type) => type.type === callback(closure_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
  let type;
  if (null != found) {
    type = found.type;
  }
  if (type !== arg1(dependencyMap[2]).QuestRewardTypes.VIRTUAL_CURRENCY) {
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
  const found = rewards.find((type) => type.type === callback(closure_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
  if (null == found) {
    return null;
  } else if (null == stateFromStores) {
    return found.orbQuantity;
  } else {
    const questOrbMultiplierEligibilityForUser = stateFromStores(dependencyMap[6]).getQuestOrbMultiplierEligibilityForUser(stateFromStores);
    if (hasPremiumOrbQuantity(config)) {
      return orbQuantity;
    }
    const orbQuantity = found.orbQuantity;
    const obj = stateFromStores(dependencyMap[6]);
  }
}
function _getDefaultRewardName(config, stateFromStores, arg2) {
  if (hasFractionalPremiumQuestReward(config)) {
    return stateFromStores(dependencyMap[8]).getFractionalPremiumQuestRewardName(config);
  } else if (hasVirtualCurrencyReward(config)) {
    let tmp7 = getQuestOrbRewardQuantityForUser(config, stateFromStores);
    if (null == tmp7) {
      tmp7 = getVirtualCurrencyRewardOrbQuantity(config);
    }
    let num2 = 0;
    if (null != tmp7) {
      num2 = tmp7;
    }
    const intl = stateFromStores(dependencyMap[5]).intl;
    let obj = { orbAmount: num2 };
    return intl.formatToPlainString(stateFromStores(dependencyMap[5]).t.nLXlh+, obj);
  } else {
    obj = stateFromStores(dependencyMap[9]);
    const messages = obj.getDefaultReward(config).messages;
    return arg2 ? messages.nameWithArticle : messages.name;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
const items = [arg1(dependencyMap[1]).QuestRewardExpirationMode.PREMIUM_EXTENSION, arg1(dependencyMap[1]).QuestRewardExpirationMode.PREMIUM_PERMANENT];
const set = new Set(items);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/quests/utils/QuestRewardUtils.tsx");

export { getCollectiblesQuestReward };
export const getCollectibleQuestRewardExtendableExpirationDate = function getCollectibleQuestRewardExtendableExpirationDate(config) {
  const tmp = getCollectiblesQuestReward(config);
  let questFormattedDate = null;
  if (null != tmp) {
    questFormattedDate = null;
    if ("expiresAtPremium" in tmp) {
      questFormattedDate = null;
      if (null != tmp.expiresAtPremium) {
        questFormattedDate = arg1(dependencyMap[3]).getQuestFormattedDate(tmp.expiresAtPremium);
        const obj = arg1(dependencyMap[3]);
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
        const differenceInDaysResult = arg1(dependencyMap[4]).differenceInDays(date1, date);
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
          const intl4 = arg1(dependencyMap[5]).intl;
          let obj = { years: rounded1 };
          return intl4.formatToPlainString(arg1(dependencyMap[5]).t.PClsrw, obj);
        } else if (sum > 0) {
          const intl3 = arg1(dependencyMap[5]).intl;
          obj = { months: sum };
          return intl3.formatToPlainString(arg1(dependencyMap[5]).t.kridzK, obj);
        } else {
          const differenceInDaysResult1 = arg1(dependencyMap[4]).differenceInDays(date1, date);
          if (differenceInDaysResult1 >= 7) {
            const _Math = Math;
            const rounded2 = Math.ceil(differenceInDaysResult1 / 7);
            const intl2 = arg1(dependencyMap[5]).intl;
            const obj1 = { weeks: rounded2 };
            return intl2.formatToPlainString(arg1(dependencyMap[5]).t.EmoBD2, obj1);
          } else {
            const intl = arg1(dependencyMap[5]).intl;
            obj = { days: differenceInDaysResult1 };
            return intl.formatToPlainString(arg1(dependencyMap[5]).t.k2UNz+, obj);
          }
          const obj6 = arg1(dependencyMap[4]);
        }
        const obj5 = arg1(dependencyMap[4]);
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
  return rewards.some((type) => type.type === callback(closure_1[2]).QuestRewardTypes.IN_GAME);
};
export const hasQuestRewardCode = function hasQuestRewardCode(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === callback(closure_1[2]).QuestRewardTypes.REWARD_CODE);
};
export const getInGameQuestReward = function getInGameQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === callback(closure_1[2]).QuestRewardTypes.IN_GAME);
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
  const product = product.getProduct(skuId);
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
  const found = rewards.find((type) => type.type === callback(closure_1[2]).QuestRewardTypes.VIRTUAL_CURRENCY);
  let type;
  if (null != found) {
    type = found.type;
  }
  if (type === arg1(dependencyMap[2]).QuestRewardTypes.VIRTUAL_CURRENCY) {
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
    tmp = expirationMode === arg1(dependencyMap[1]).QuestRewardExpirationMode.PREMIUM_PERMANENT;
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
    const questOrbMultiplierEligibilityForUser = isFractionalPremiumWithNoStandardSub(dependencyMap[6]).getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub);
    let num4 = 1;
    if (hasPremiumOrbQuantity(config)) {
      num4 = 1;
      if (obj2.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
        num4 = num2;
      }
      const obj2 = isFractionalPremiumWithNoStandardSub(dependencyMap[7]);
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
    if (tmp.config.rewardsConfig.rewards[idx].type === arg1(dependencyMap[2]).QuestRewardTypes.REWARD_CODE) {
      tmp5 = tmp2;
    }
    return tmp5;
  }
};
export const isTieredRewardCodeQuest = function isTieredRewardCodeQuest(quest) {
  const rewardsConfig = quest.quest.config.rewardsConfig;
  let everyResult = rewardsConfig.assignmentMethod === arg1(dependencyMap[10]).QuestRewardAssignmentMethods.TIERED;
  if (everyResult) {
    everyResult = rewardsConfig.rewards.length > 0;
  }
  if (everyResult) {
    const rewards = rewardsConfig.rewards;
    everyResult = rewards.every((type) => type.type === callback(closure_1[2]).QuestRewardTypes.REWARD_CODE);
  }
  return everyResult;
};
export const getDefaultPlatform = function getDefaultPlatform(config) {
  const platforms = config.rewardsConfig.platforms;
  if (platforms.length > 0) {
    let CROSS_PLATFORM = platforms[0];
  } else {
    CROSS_PLATFORM = arg1(dependencyMap[11]).QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  return CROSS_PLATFORM;
};
export const getPlatformString = function getPlatformString(arg0) {
  if (arg1(dependencyMap[11]).QuestRewardCodePlatforms.XBOX === arg0) {
    const intl5 = arg1(dependencyMap[5]).intl;
    return intl5.string(arg1(dependencyMap[5]).t.G84UWZ);
  } else if (arg1(dependencyMap[11]).QuestRewardCodePlatforms.PLAYSTATION === arg0) {
    const intl4 = arg1(dependencyMap[5]).intl;
    return intl4.string(arg1(dependencyMap[5]).t.6IeKx2);
  } else if (arg1(dependencyMap[11]).QuestRewardCodePlatforms.SWITCH === arg0) {
    const intl3 = arg1(dependencyMap[5]).intl;
    return intl3.string(arg1(dependencyMap[5]).t.1pp0su);
  } else if (arg1(dependencyMap[11]).QuestRewardCodePlatforms.PC === arg0) {
    const intl2 = arg1(dependencyMap[5]).intl;
    return intl2.string(arg1(dependencyMap[5]).t.YK+wUg);
  } else if (arg1(dependencyMap[11]).QuestRewardCodePlatforms.CROSS_PLATFORM === arg0) {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.UWVbzV);
  }
};
