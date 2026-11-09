// Module ID: 9790
// Function ID: 9791
// Name: QuestRewardUtils
// Dependencies: [9791, 7927, 7918, 4566, 1113, 9792, 9793, 9794, 9795, 9796, 6839, 2]
// Exports: getCollectibleQuestRewardDuration, getCollectibleQuestRewardExtendableExpirationDate, getCollectiblesQuestReward, getDefaultPlatform, getDefaultRewardName, getDefaultRewardNameWithArticle, getInGameQuestReward, getQuestOrbMultiplier, getQuestOrbRewardQuantityForUser, getQuestPrimaryReward, getRewardCodeQuestReward, getVirtualCurrencyRewardOrbQuantity, hasCollectiblesQuestReward, hasFractionalPremiumQuestReward, hasInGameQuestReward, hasPremiumOrbQuantity, hasQuestRewardCode, hasVirtualCurrencyReward, isCollectibleQuestRewardPermanentWithPremiumSubscription, isCollectibleQuestRewardPremiumExtendable, isTieredRewardCodeQuest

// Module 9790 (QuestRewardUtils)
import intl5 from "intl" /* 1113 */;
import _mod4566 from "module_4566" /* 4566 */;
import QuestTypes from "QuestTypes" /* 6839 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7927 */;
import QuestRewardExpirationMode from "QuestRewardExpirationMode" /* 9791 */;
import QuestOrbMultiplierHooks from "QuestOrbMultiplierHooks" /* 9792 */;
import FractionalPremiumUtils from "FractionalPremiumUtils" /* 9794 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9795 */;
import QuestRewardAssignmentMethods from "QuestRewardAssignmentMethods" /* 9796 */;
import size from "module_2" /* 2 */;

let tmp3;
const QuestDataUtils = tmp3(7918);
const f96902 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE;
const f96903 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM;
const f96904 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY;
const f96905 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY;
const f96906 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY;
const f96907 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY;
function _getDefaultRewardName(rewardsConfig, stateFromStores, arg2) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  if (rewards.some(f96903)) {
    const obj4 = FractionalPremiumUtils;
    return obj4.getFractionalPremiumQuestRewardName(rewardsConfig);
  } else {
    const rewards2 = rewardsConfig.rewardsConfig.rewards;
    if (rewards2.some(f96904)) {
      const rewards1 = rewardsConfig.rewardsConfig.rewards;
      const found = rewards1.find(f96907);
      let num = null;
      if (null != found) {
        if (null == stateFromStores) {
          num = found.orbQuantity;
        } else {
          const rewards3 = rewardsConfig.rewardsConfig.rewards;
          const obj5 = QuestOrbMultiplierHooks;
          const questOrbMultiplierEligibilityForUser = obj5.getQuestOrbMultiplierEligibilityForUser(stateFromStores);
          const found1 = rewards3.find(f96905);
          let premiumOrbQuantity;
          const tmp15 = require;
          if (found1 != null) {
            premiumOrbQuantity = found1.premiumOrbQuantity;
          }
          const tmp8 = null != premiumOrbQuantity && premiumOrbQuantity > 0;
          if (tmp8) {
            let orbQuantity;
            const tmp15Result = tmp15(9793);
            if (tmp15Result.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
              let orbQuantity2 = found.premiumOrbQuantity;
              if (orbQuantity2 == null) {
                orbQuantity2 = found.orbQuantity;
              }
              orbQuantity = orbQuantity2;
            }
            num = orbQuantity;
          }
          orbQuantity = found.orbQuantity;
        }
      }
      if (num == null) {
        const rewards4 = rewardsConfig.rewardsConfig.rewards;
        const found2 = rewards4.find(f96906);
        let orbQuantity1;
        if (found2 != null) {
          orbQuantity1 = found2.orbQuantity;
        }
        num = orbQuantity1;
      }
      if (num == null) {
        num = 0;
      }
      const intl = intl5.intl;
      const obj2 = { orbAmount: num };
      return intl.formatToPlainString(intl5.t["nLXlh+"], obj2);
    } else {
      const obj = QuestCopyUtils;
      const messages = obj.getDefaultReward(rewardsConfig).messages;
      return arg2 ? messages.nameWithArticle : messages.name;
    }
  }
}
const items = [QuestRewardExpirationMode.QuestRewardExpirationMode.PREMIUM_EXTENSION, QuestRewardExpirationMode.QuestRewardExpirationMode.PREMIUM_PERMANENT];
const set = new Set(items);
let result = size.fileFinishedImporting("modules/quests/utils/QuestRewardUtils.tsx");

export function getCollectiblesQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find(f96902);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  return tmp3;
}
export function getCollectibleQuestRewardExtendableExpirationDate(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find(f96902);
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
        const tmp3Result = QuestDataUtils;
        questFormattedDate = tmp3Result.getQuestFormattedDate(tmp5.expiresAtPremium);
      }
    }
  }
  return questFormattedDate;
}
export function getCollectibleQuestRewardDuration(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f96902);
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
        const self = this;
        const self2 = this;
        const date = new Date(config.expiresAt);
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date1 = new Date(tmp5.expiresAt);
        const tmp3Result = _mod4566;
        const differenceInDaysResult = tmp3Result.differenceInDays(date1, date);
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
          const intl4 = tmp3(1113).intl;
          const obj2 = { years: rounded1 };
          return intl4.formatToPlainString(intl5.t.PClsrw, obj2);
        } else if (sum > 0) {
          const intl3 = tmp3(1113).intl;
          const obj3 = { months: sum };
          return intl3.formatToPlainString(intl5.t.kridzK, obj3);
        } else {
          const tmp3Result2 = _mod4566;
          const differenceInDaysResult1 = tmp3Result2.differenceInDays(date1, date);
          if (differenceInDaysResult1 >= 7) {
            const _Math = Math;
            const rounded2 = Math.ceil(differenceInDaysResult1 / 7);
            const intl2 = tmp3(1113).intl;
            const obj4 = { weeks: rounded2 };
            return intl2.formatToPlainString(intl5.t.EmoBD2, obj4);
          } else {
            const intl = tmp3(1113).intl;
            const obj = { days: differenceInDaysResult1 };
            return intl.formatToPlainString(intl5.t["k2UNz+"], obj);
          }
        }
      }
    }
  }
  return null;
}
export function hasFractionalPremiumQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.some(f96903);
}
export function hasVirtualCurrencyReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some(f96904);
}
export function hasPremiumOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f96905);
  let premiumOrbQuantity;
  if (found != null) {
    premiumOrbQuantity = found.premiumOrbQuantity;
  }
  return null != premiumOrbQuantity && premiumOrbQuantity > 0;
}
export function hasCollectiblesQuestReward(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f96902);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  return null != tmp3;
}
export function hasInGameQuestReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.IN_GAME);
}
export function hasQuestRewardCode(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE);
}
export function getInGameQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  let found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.IN_GAME);
  if (found == null) {
    found = null;
  }
  return found;
}
export function getVirtualCurrencyRewardOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f96906);
  let orbQuantity;
  if (found != null) {
    orbQuantity = found.orbQuantity;
  }
  return orbQuantity;
}
export function isCollectibleQuestRewardPremiumExtendable(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f96902);
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
  const hasItem = null != expirationMode && set.has(expirationMode);
  return hasItem;
}
export function isCollectibleQuestRewardPermanentWithPremiumSubscription(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f96902);
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
  let hasItem = null != expirationMode && set.has(expirationMode);
  if (hasItem) {
    const rewards1 = config.rewardsConfig.rewards;
    const found1 = rewards1.find(f96902);
    let type1;
    if (found1 != null) {
      type1 = found1.type;
    }
    let tmp11 = null;
    if (type1 === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
      tmp11 = found1;
    }
    let expirationMode1;
    if (tmp11 != null) {
      expirationMode1 = tmp11.expirationMode;
    }
    hasItem = expirationMode1 === tmp3(9791).QuestRewardExpirationMode.PREMIUM_PERMANENT;
  }
  return hasItem;
}
export function getQuestPrimaryReward(quest) {
  let tmp;
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
    tmp = config.rewardsConfig.rewards[num];
  } else {
    tmp = config.rewards[num];
  }
  return tmp;
}
export function getQuestOrbMultiplier(config) {
  let orbQuantity;
  let premiumOrbQuantity;
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
}
export function getQuestOrbRewardQuantityForUser(config, stateFromStores) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f96907);
  if (null == found) {
    return null;
  } else if (null == stateFromStores) {
    return found.orbQuantity;
  } else {
    const rewards1 = config.rewardsConfig.rewards;
    const obj2 = QuestOrbMultiplierHooks;
    const questOrbMultiplierEligibilityForUser = obj2.getQuestOrbMultiplierEligibilityForUser(stateFromStores);
    const found1 = rewards1.find(f96905);
    let premiumOrbQuantity;
    const tmp5 = require;
    if (found1 != null) {
      premiumOrbQuantity = found1.premiumOrbQuantity;
    }
    const tmp3 = null != premiumOrbQuantity && premiumOrbQuantity > 0;
    if (tmp3) {
      let orbQuantity;
      const tmp5Result = tmp5(9793);
      if (tmp5Result.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
        let orbQuantity2 = found.premiumOrbQuantity;
        if (orbQuantity2 == null) {
          orbQuantity2 = found.orbQuantity;
        }
        orbQuantity = orbQuantity2;
      }
      return orbQuantity;
    }
    orbQuantity = found.orbQuantity;
  }
}
export function getDefaultRewardName(config, stateFromStores) {
  return _getDefaultRewardName(config, stateFromStores, false);
}
export function getDefaultRewardNameWithArticle(config, stateFromStores) {
  return _getDefaultRewardName(config, stateFromStores, true);
}
export function getRewardCodeQuestReward(idx) {
  if (null == idx.idx) {
    return null;
  } else {
    let tmp5 = null;
    if (tmp.config.rewardsConfig.rewards[idx.idx].type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE) {
      tmp5 = tmp2;
    }
    return tmp5;
  }
}
export function isTieredRewardCodeQuest(quest) {
  const rewardsConfig = quest.quest.config.rewardsConfig;
  let everyResult = rewardsConfig.assignmentMethod === QuestRewardAssignmentMethods.QuestRewardAssignmentMethods.TIERED && rewardsConfig.rewards.length > 0;
  if (everyResult) {
    const rewards = rewardsConfig.rewards;
    everyResult = rewards.every((type) => type.type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE);
  }
  return everyResult;
}
export function getDefaultPlatform(config) {
  let CROSS_PLATFORM;
  const platforms = config.rewardsConfig.platforms;
  if (platforms.length > 0) {
    CROSS_PLATFORM = platforms[0];
  } else {
    CROSS_PLATFORM = QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  return CROSS_PLATFORM;
}
