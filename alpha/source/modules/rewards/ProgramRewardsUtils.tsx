// Module ID: 15573
// Function ID: 15574
// Name: ProgramRewardsUtils
// Dependencies: [1384, 1386, 4633, 15574, 15575, 2048, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isProgramRewardStale

// Module 15573 (ProgramRewardsUtils)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import isPastDefault from "isPast" /* 4633 */;
import useHasXboxMonthlyOrbsPerk from "useHasXboxMonthlyOrbsPerk" /* 15574 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15575 */;
import UserStore from "UserStore" /* 1384 */;
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

export function isProgramRewardStale(next_reward_date) {
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
}
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export function canFetchAnyProgramReward() {
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
}
export function hasNecessaryPremiumSubscriptionStatus(currentUser) {
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  const obj = PremiumUtils;
  return obj.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
