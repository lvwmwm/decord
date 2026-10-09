// Module ID: 13943
// Function ID: 13944
// Name: ProgramRewardsUtils
// Dependencies: [1390, 1392, 4502, 13944, 13945, 4728, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isProgramRewardStale

// Module 13943 (ProgramRewardsUtils)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import isPastDefault from "isPast" /* 4502 */;
import PremiumUtils from "PremiumUtils" /* 4728 */;
import useHasXboxMonthlyOrbsPerk from "useHasXboxMonthlyOrbsPerk" /* 13944 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 13945 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

function canFetchNitroProgramReward() {
  const currentUser = UserStore.getCurrentUser();
  const obj = PremiumUtils;
  return obj.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
function canFetchXboxProgramReward() {
  const obj = useHasXboxMonthlyOrbsPerk;
  return obj.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
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
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward() {
  const values = Object.values(ProgramRewardsTypes.RewardProgram);
  for (const item10014 of values) {
    if (typeof item10014 === "number") {
      if (closure_5[tmp2]()) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export const hasNecessaryPremiumSubscriptionStatus = function hasNecessaryPremiumSubscriptionStatus(stateFromStores) {
  let currentUser = stateFromStores;
  if (stateFromStores == null) {
    currentUser = UserStore.getCurrentUser();
  }
  const obj = PremiumUtils;
  return obj.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};
