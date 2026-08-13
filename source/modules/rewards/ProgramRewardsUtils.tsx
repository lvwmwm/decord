// Module ID: 13053
// Function ID: 13054
// Name: canFetchNitroProgramReward
// Dependencies: [1922, 1924, 3784, 13054, 13057, 7063, 13058, 4007, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isEligibleForProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 13053 (canFetchNitroProgramReward)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function canFetchNitroProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = require(13054) /* RewardProgram */.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (require(13054) /* RewardProgram */.RewardProgram.NITRO === NITRO) {
    let tmpResult = tmp(13057);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(13054).RewardProgram.XBOX === NITRO) {
      tmpResult = tmp(7063);
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    const currentUser = authStore.getCurrentUser();
    flag = tmp(4007).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult1 = tmp(4007);
  }
  return flag;
}
function canFetchXboxProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = require(13054) /* RewardProgram */.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (require(13054) /* RewardProgram */.RewardProgram.NITRO === XBOX) {
    let tmpResult = tmp(13057);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(13054).RewardProgram.XBOX === XBOX) {
      tmpResult = tmp(7063);
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    flag = tmp(13058).hasCrepeMonthlyOrbsPerk(authStore.getCurrentUser());
    const tmpResult1 = tmp(13058);
  }
  return flag;
}
let closure_5 = { [arg1(13054).RewardProgram.NITRO]: canFetchNitroProgramReward, [arg1(13054).RewardProgram.XBOX]: canFetchXboxProgramReward };
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
      tmp = importDefault(3784)(date);
      const tmp4 = importDefault(3784);
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0, canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (require(13054) /* RewardProgram */.RewardProgram.NITRO === arg0) {
    let tmpResult = tmp(13057);
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(13054).RewardProgram.XBOX === arg0) {
    tmpResult = tmp(7063);
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
  const obj = require(13057) /* PremiumRewardsOrbsTreatment */;
  const tmp = require;
  const isCrepeEnabled = require(7063) /* apexExperiment */.useIsCrepeEnabled(str);
  if (require(13054) /* RewardProgram */.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(13054).RewardProgram.XBOX === arg0) {
    return isCrepeEnabled;
  } else {
    return false;
  }
  const obj2 = require(7063) /* apexExperiment */;
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward(ProgramRewardsStore) {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(require(13054) /* RewardProgram */.RewardProgram);
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
  return require(4007) /* getPremiumPlanItem */.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};
