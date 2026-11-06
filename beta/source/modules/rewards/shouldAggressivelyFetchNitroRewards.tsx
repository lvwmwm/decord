// Module ID: 16904
// Function ID: 16905
// Name: shouldAggressivelyFetchNitroRewards
// Dependencies: [7772, 1383, 15613, 15611, 2047, 2]
// Exports: shouldAggressivelyFetchNitroRewards

// Module 16904 (shouldAggressivelyFetchNitroRewards)
import PremiumUtils from "PremiumUtils" /* 2047 */;
import ProgramRewardsUtils from "ProgramRewardsUtils" /* 15611 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15613 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rewards/shouldAggressivelyFetchNitroRewards.tsx");

export function shouldAggressivelyFetchNitroRewards(rewardForProgram) {
  if (null != rewardForProgram) {
    if (rewardForProgram.reward_program !== ProgramRewardsTypes.RewardProgram.NITRO) {
      return false;
    }
  }
  const obj = ProgramRewardsUtils;
  if (obj.canFetchNitroProgramReward()) {
    let prop;
    if (rewardForProgram != null) {
      prop = rewardForProgram.program_current_state;
    }
    if (prop === ProgramRewardsTypes.ProgramCurrentState.PAYMENT_PROCESSING) {
      return true;
    } else {
      const currentUser = UserStore.getCurrentUser();
      let tmp8 = null;
      if (null != currentUser) {
        const userProfile = UserProfileStore.getUserProfile(currentUser.id);
        let premiumSince;
        if (userProfile != null) {
          premiumSince = userProfile.premiumSince;
        }
        tmp8 = premiumSince;
      }
      const tmp3Result = PremiumUtils;
      const tmp12 = tmp3Result.getDaysSincePremium(tmp8) < 1 && null == rewardForProgram;
      return tmp12;
    }
  } else {
    return false;
  }
}
