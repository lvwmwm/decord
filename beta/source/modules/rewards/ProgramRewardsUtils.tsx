// Module ID: 14034
// Function ID: 14035
// Name: ProgramRewardsUtils
// Dependencies: [1376, 1378, 4225, 14035, 14038, 558, 14039, 4450, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isEligibleForProgramReward, isProgramRewardStale

// Module 14034 (ProgramRewardsUtils)
import _modDef4225 from "module_4225" /* 4225 */;
import PremiumUtils from "PremiumUtils" /* 4450 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 14035 */;
import PremiumRewardsOrbsExperiment from "PremiumRewardsOrbsExperiment" /* 14038 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const ReactCompilerGating = fn(558);
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
    let flag = tmp(14038).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(14038);
  } else {
    flag = false;
    if (tmp(14035).RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    flag = tmp(4450).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult2 = tmp(4450);
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
    let flag = tmp(14038).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(14038);
  } else {
    flag = false;
    if (tmp(14035).RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    flag = tmp(14039).hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
    const tmpResult2 = tmp(14039);
  }
  return flag;
}
const obj2 = {};
function isEligibleForProgramReward(arg0, ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return tmp(14038).getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(14035).RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
}
function hasNecessaryPremiumSubscriptionStatus(stateFromStores) {
  let currentUser = stateFromStores;
  if (stateFromStores == null) {
    currentUser = UserStore.getCurrentUser();
  }
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
obj2[fn(14035).RewardProgram.NITRO] = canFetchNitroProgramReward;
obj2[fn(14035).RewardProgram.XBOX] = canFetchXboxProgramReward;
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
      tmp = _modDef4225(date);
    }
    return tmp;
  }
};
export { isEligibleForProgramReward };
export const useIsEligibleForProgramReward = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let str = "ProgramRewardsUtils";
  if (undefined !== arg1) {
    str = arg1;
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
  obj = PremiumRewardsOrbsExperiment;
}) : ((arg0) => {
  let str = arg1;
  if (arg1 === undefined) {
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
});
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
      if (obj2[tmp2](str)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export { hasNecessaryPremiumSubscriptionStatus };
