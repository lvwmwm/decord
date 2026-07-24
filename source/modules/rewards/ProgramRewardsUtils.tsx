// Module ID: 12704
// Function ID: 98804
// Name: isEligibleForProgramReward
// Dependencies: [1849, 1851, 3553, 12701, 12705, 6788, 12706, 3776, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 12704 (isEligibleForProgramReward)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function isEligibleForProgramReward(NITRO, canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (require(12701) /* RewardProgram */.RewardProgram.NITRO === NITRO) {
    return require(12705) /* PremiumRewardsOrbsTreatment */.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (require(12701) /* RewardProgram */.RewardProgram.XBOX === NITRO) {
    return require(6788) /* apexExperiment */.getIsCrepeEnabled(str);
  } else {
    return false;
  }
}
function canFetchNitroProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  let tmp = isEligibleForProgramReward(require(12701) /* RewardProgram */.RewardProgram.NITRO, str);
  if (tmp) {
    tmp = hasNecessaryPremiumSubscriptionStatus();
  }
  return tmp;
}
function canFetchXboxProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  let result = isEligibleForProgramReward(require(12701) /* RewardProgram */.RewardProgram.XBOX, str);
  if (result) {
    result = require(12706) /* hasCrepeMonthlyOrbsPerk */.hasCrepeMonthlyOrbsPerk(authStore.getCurrentUser());
    const obj = require(12706) /* hasCrepeMonthlyOrbsPerk */;
  }
  return result;
}
function hasNecessaryPremiumSubscriptionStatus(currentUser) {
  if (null == currentUser) {
    currentUser = authStore.getCurrentUser();
  }
  return require(3776) /* _createForOfIteratorHelperLoose */.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
let closure_5 = { [arg1(12701).RewardProgram.NITRO]: canFetchNitroProgramReward, [arg1(12701).RewardProgram.XBOX]: canFetchXboxProgramReward };
let result = require("isPast").fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

export const isProgramRewardStale = function isProgramRewardStale(next_reward_date) {
  if (null == next_reward_date) {
    return true;
  } else {
    next_reward_date = next_reward_date.next_reward_date;
    let tmp = null != next_reward_date;
    if (tmp) {
      tmp = "" !== next_reward_date;
    }
    if (tmp) {
      const _Date = Date;
      const date = new Date(next_reward_date);
      tmp = importDefault(3553)(date);
      const tmp4 = importDefault(3553);
    }
    return tmp;
  }
};
export { isEligibleForProgramReward };
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0, location) {
  let str = location;
  if (location === undefined) {
    str = "ProgramRewardsUtils";
  }
  const obj = require(12705) /* PremiumRewardsOrbsTreatment */;
  const isCrepeEnabled = require(6788) /* apexExperiment */.useIsCrepeEnabled(str);
  if (require(12701) /* RewardProgram */.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (require(12701) /* RewardProgram */.RewardProgram.XBOX === arg0) {
    return isCrepeEnabled;
  } else {
    return false;
  }
  const obj2 = require(6788) /* apexExperiment */;
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward(ProgramRewardsStore) {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(require(12701) /* RewardProgram */.RewardProgram);
  let num = 0;
  if (0 < values.length) {
    while (true) {
      let tmp = values[num];
      if ("number" === typeof tmp) {
        let tmp2 = dependencyMap;
        if (dependencyMap[tmp](str)) {
          break;
        }
      }
      num = num + 1;
    }
    return true;
  }
  return false;
};
export { hasNecessaryPremiumSubscriptionStatus };
