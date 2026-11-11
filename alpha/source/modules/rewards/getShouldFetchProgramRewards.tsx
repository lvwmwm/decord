// Module ID: 17416
// Function ID: 17417
// Name: getShouldFetchProgramRewards
// Dependencies: [16112, 16115, 17417, 2]
// Exports: shouldFetchProgramRewards

// Module 17416 (getShouldFetchProgramRewards)
import ProgramRewardsStore2 from "ProgramRewardsStore" /* 16112 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 16115 */;
import shouldAggressivelyFetchNitroRewards from "shouldAggressivelyFetchNitroRewards" /* 17417 */;
import size from "module_2" /* 2 */;

const ProgramRewardsStore = ProgramRewardsStore2;

const DidNotFetchReason = ProgramRewardsStore2.DidNotFetchReason;
const result = size.fileFinishedImporting("modules/rewards/getShouldFetchProgramRewards.tsx");

export function shouldFetchProgramRewards() {
  const shouldFetchResult = ProgramRewardsStore.shouldFetch();
  const obj = ProgramRewardsStore;
  if (shouldFetchResult.shouldFetch) {
    return true;
  } else if (shouldFetchResult.reason !== DidNotFetchReason.CACHE_SHOULD_NOT_FETCH) {
    return false;
  } else {
    const rewardForProgram = obj.getRewardForProgram(ProgramRewardsTypes.RewardProgram.NITRO);
    const obj2 = shouldAggressivelyFetchNitroRewards;
    return obj2.shouldAggressivelyFetchNitroRewards(rewardForProgram);
  }
}
