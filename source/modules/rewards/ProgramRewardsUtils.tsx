// Module ID: 12902
// Function ID: 12903
// Name: canFetchNitroProgramReward
// Dependencies: [1903, 1905, 3707, 12903, 12906, 6936, 12907, 3930, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isEligibleForProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 12902 (canFetchNitroProgramReward)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function canFetchNitroProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = require(12903) /* RewardProgram */.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (require(12903) /* RewardProgram */.RewardProgram.NITRO === NITRO) {
    let tmpResult = tmp(12906);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(12903).RewardProgram.XBOX === NITRO) {
      tmpResult = tmp(6936);
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    const currentUser = authStore.getCurrentUser();
    flag = tmp(3930).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult1 = tmp(3930);
  }
  return flag;
}
function canFetchXboxProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = require(12903) /* RewardProgram */.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (require(12903) /* RewardProgram */.RewardProgram.NITRO === XBOX) {
    let tmpResult = tmp(12906);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(12903).RewardProgram.XBOX === XBOX) {
      tmpResult = tmp(6936);
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    flag = tmp(12907).hasCrepeMonthlyOrbsPerk(authStore.getCurrentUser());
    const tmpResult1 = tmp(12907);
  }
  return flag;
}
let closure_5 = { [arg1(12903).RewardProgram.NITRO]: canFetchNitroProgramReward, [arg1(12903).RewardProgram.XBOX]: canFetchXboxProgramReward };
const result = require("isPast").fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

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
      tmp = importDefault(3707)(date);
      const tmp4 = importDefault(3707);
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0, canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (require(12903) /* RewardProgram */.RewardProgram.NITRO === arg0) {
    let tmpResult = tmp(12906);
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(12903).RewardProgram.XBOX === arg0) {
    tmpResult = tmp(6936);
    return tmpResult.getIsCrepeEnabled(str);
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0, location) {
  let str = location;
  if (location === undefined) {
    str = "ProgramRewardsUtils";
  }
  const obj = require(12906) /* PremiumRewardsOrbsTreatment */;
  const tmp = require;
  const isCrepeEnabled = require(6936) /* apexExperiment */.useIsCrepeEnabled(str);
  if (require(12903) /* RewardProgram */.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(12903).RewardProgram.XBOX === arg0) {
    return isCrepeEnabled;
  } else {
    return false;
  }
  const obj2 = require(6936) /* apexExperiment */;
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward(ProgramRewardsStore) {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(require(12903) /* RewardProgram */.RewardProgram);
  for (const item10015 of values) {
    if (typeof item10015 === "number") {
      let tmp4 = dependencyMap;
      let tmp5 = item10015;
      if (dependencyMap[tmp2](str)) {
        let tmp3 = obj;
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export const hasNecessaryPremiumSubscriptionStatus = function hasNecessaryPremiumSubscriptionStatus(currentUser) {
  if (currentUser == null) {
    currentUser = authStore.getCurrentUser();
  }
  return require(3930) /* getPremiumPlanItem */.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};
