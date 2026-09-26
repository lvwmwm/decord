// Module ID: 14024
// Function ID: 14025
// Name: ProgramRewardsUtils
// Dependencies: [1372, 1374, 4221, 14025, 14028, 14029, 4446, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isEligibleForProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 14024 (ProgramRewardsUtils)
import _modDef4221 from "module_4221" /* 4221 */;
import PremiumUtils from "PremiumUtils" /* 4446 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 14025 */;
import PremiumRewardsOrbsExperiment from "PremiumRewardsOrbsExperiment" /* 14028 */;
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
    let flag = tmp(14028).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(14028);
  } else {
    flag = false;
    if (tmp(14025).RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    flag = tmp(4446).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult2 = tmp(4446);
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
    let flag = tmp(14028).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(14028);
  } else {
    flag = false;
    if (tmp(14025).RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    flag = tmp(14029).hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
    const tmpResult2 = tmp(14029);
  }
  return flag;
}
const PremiumTypes = fn(1374).PremiumTypes;
const dependencyMap = { [fn(14025).RewardProgram.NITRO]: canFetchNitroProgramReward, [fn(14025).RewardProgram.XBOX]: canFetchXboxProgramReward };
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
      tmp = _modDef4221(date);
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
    return tmp(14028).getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(14025).RewardProgram.XBOX === arg0) {
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
