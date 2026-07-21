// Module ID: 12532
// Function ID: 96277
// Name: isEligibleForProgramReward
// Dependencies: []
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 12532 (isEligibleForProgramReward)
function isEligibleForProgramReward(NITRO, canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (canUseMonthlyOrbs(dependencyMap[3]).RewardProgram.NITRO === NITRO) {
    return canUseMonthlyOrbs(dependencyMap[4]).getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (canUseMonthlyOrbs(dependencyMap[3]).RewardProgram.XBOX === NITRO) {
    return canUseMonthlyOrbs(dependencyMap[5]).getIsCrepeEnabled(str);
  } else {
    return false;
  }
}
function canFetchNitroProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  let tmp = isEligibleForProgramReward(arg1(dependencyMap[3]).RewardProgram.NITRO, str);
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
  let result = isEligibleForProgramReward(arg1(dependencyMap[3]).RewardProgram.XBOX, str);
  if (result) {
    result = arg1(dependencyMap[6]).hasCrepeMonthlyOrbsPerk(authStore.getCurrentUser());
    const obj = arg1(dependencyMap[6]);
  }
  return result;
}
function hasNecessaryPremiumSubscriptionStatus(currentUser) {
  if (null == currentUser) {
    currentUser = authStore.getCurrentUser();
  }
  return arg1(dependencyMap[7]).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
let closure_3 = importDefault(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
let closure_5 = { [arg1(dependencyMap[3]).RewardProgram.NITRO]: canFetchNitroProgramReward, [arg1(dependencyMap[3]).RewardProgram.XBOX]: canFetchXboxProgramReward };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

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
      tmp = importDefault(dependencyMap[2])(date);
      const tmp4 = importDefault(dependencyMap[2]);
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
  const obj = location(dependencyMap[4]);
  const isCrepeEnabled = location(dependencyMap[5]).useIsCrepeEnabled(str);
  if (location(dependencyMap[3]).RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (location(dependencyMap[3]).RewardProgram.XBOX === arg0) {
    return isCrepeEnabled;
  } else {
    return false;
  }
  const obj2 = location(dependencyMap[5]);
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward(ProgramRewardsStore) {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(arg1(dependencyMap[3]).RewardProgram);
  let num = 0;
  if (0 < values.length) {
    while (true) {
      let tmp = values[num];
      if ("number" === typeof tmp) {
        let tmp2 = closure_5;
        if (closure_5[tmp](str)) {
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
