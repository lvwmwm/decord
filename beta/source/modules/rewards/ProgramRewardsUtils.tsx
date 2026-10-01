// Module ID: 13270
// Function ID: 13271
// Name: ProgramRewardsUtils
// Dependencies: [1372, 1374, 4262, 13271, 13274, 13275, 4488, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isEligibleForProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 13270 (ProgramRewardsUtils)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import isPastDefault from "isPast" /* 4262 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 13271 */;
import PremiumRewardsOrbsExperiment from "PremiumRewardsOrbsExperiment" /* 13274 */;
import useHasXboxMonthlyOrbsPerk from "useHasXboxMonthlyOrbsPerk" /* 13275 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

function canFetchNitroProgramReward(ProgramRewardsUtils) {
  let flag;
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = ProgramRewardsTypes.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === NITRO) {
    const tmpResult = PremiumRewardsOrbsExperiment;
    flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    const tmpResult2 = PremiumUtils;
    flag = tmpResult2.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  }
  return flag;
}
function canFetchXboxProgramReward(ProgramRewardsUtils) {
  let flag;
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = ProgramRewardsTypes.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === XBOX) {
    const tmpResult = PremiumRewardsOrbsExperiment;
    flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    const tmpResult2 = useHasXboxMonthlyOrbsPerk;
    flag = tmpResult2.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
  }
  return flag;
}
const PremiumTypes = PremiumConstants.PremiumTypes;
let closure_5 = { [ProgramRewardsTypes.RewardProgram.NITRO]: canFetchNitroProgramReward, [ProgramRewardsTypes.RewardProgram.XBOX]: canFetchXboxProgramReward };
const result = size.fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

export const isProgramRewardStale = function isProgramRewardStale(next_reward_date) {
  if (null == next_reward_date) {
    return true;
  } else {
    next_reward_date = next_reward_date.next_reward_date;
    let tmp = null != next_reward_date && "" !== next_reward_date;
    if (tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const tmp4 = isPastDefault;
      const date = new Date(next_reward_date);
      tmp = tmp4(date);
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
    const tmpResult = PremiumRewardsOrbsExperiment;
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
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
  const obj = PremiumRewardsOrbsExperiment;
  const isInTreatment = obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
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
      if (closure_5[tmp2](str)) {
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
  const obj = PremiumUtils;
  return obj.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};
