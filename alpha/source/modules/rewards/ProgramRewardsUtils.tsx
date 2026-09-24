// Module ID: 14093
// Function ID: 14094
// Name: ProgramRewardsUtils
// Dependencies: [1372, 1374, 4257, 14094, 14097, 14098, 4483, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isEligibleForProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 14093 (ProgramRewardsUtils)
import _modDef4257 from "module_4257" /* 4257 */;
import PremiumUtils from "PremiumUtils" /* 4483 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 14094 */;
import PremiumRewardsOrbsExperiment from "PremiumRewardsOrbsExperiment" /* 14097 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function canFetchNitroProgramReward(ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = ProgramRewardsTypes.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === NITRO) {
    let flag = tmp(14097).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(14097);
  } else {
    flag = false;
    if (tmp(14094).RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    flag = tmp(4483).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult2 = tmp(4483);
  }
  return flag;
}
function canFetchXboxProgramReward(ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = ProgramRewardsTypes.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === XBOX) {
    let flag = tmp(14097).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(14097);
  } else {
    flag = false;
    if (tmp(14094).RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    flag = tmp(14098).hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
    const tmpResult2 = tmp(14098);
  }
  return flag;
}
const PremiumTypes = fn(1374).PremiumTypes;
const dependencyMap = { [fn(14094).RewardProgram.NITRO]: canFetchNitroProgramReward, [fn(14094).RewardProgram.XBOX]: canFetchXboxProgramReward };
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

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
      tmp = _modDef4257(date);
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0, ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return tmp(14097).getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(14094).RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0, ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
  obj = PremiumRewardsOrbsExperiment;
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward(ProgramRewardsStore) {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(ProgramRewardsTypes.RewardProgram);
  for (const item10015 of values) {
    if (typeof item10015 === "number") {
      if (dependencyMap[tmp2](str)) {
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
    currentUser = UserStore.getCurrentUser();
  }
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};
