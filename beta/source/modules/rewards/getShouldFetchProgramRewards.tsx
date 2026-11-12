// Module ID: 17257
// Function ID: 17258
// Name: getShouldFetchProgramRewards
// Dependencies: [15954, 15957, 17258, 2]
// Exports: shouldFetchProgramRewards

// Module 17257 (getShouldFetchProgramRewards)
import ProgramRewardsStore2 from "ProgramRewardsStore" /* 15954 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15957 */;
import shouldAggressivelyFetchNitroRewards from "shouldAggressivelyFetchNitroRewards" /* 17258 */;
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
