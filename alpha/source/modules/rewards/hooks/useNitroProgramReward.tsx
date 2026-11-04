// Module ID: 17154
// Function ID: 17155
// Name: useNitroProgramReward
// Dependencies: [15858, 504, 15861, 17155, 17157, 2]
// Exports: useNitroProgramReward

// Module 17154 (useNitroProgramReward)
import get_initialized from "get initialized" /* 504 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15861 */;
import getShouldFetchProgramRewards from "getShouldFetchProgramRewards" /* 17155 */;
import nitroProgramRewardInvariants from "nitroProgramRewardInvariants" /* 17157 */;
import ProgramRewardsStore from "ProgramRewardsStore" /* 15858 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/rewards/hooks/useNitroProgramReward.tsx");

export function useNitroProgramReward() {
  let isReady;
  let obj4;
  let obj5;
  let programReward;
  let result;
  let totalDays;
  let obj = get_initialized;
  const items = [ProgramRewardsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isReady: ProgramRewardsStore.isReady(), programReward: ProgramRewardsStore.getRewardForProgram(ProgramRewardsTypes.RewardProgram.NITRO), totalDays: ProgramRewardsStore.getTotalDaysInDuration(ProgramRewardsTypes.RewardProgram.NITRO) };
    return obj;
  });
  ({ programReward, totalDays, isReady } = stateFromStoresObject);
  const obj3 = { isEligible: true, isReady, passesGeneralUIInvariant: obj4.passesNitroGeneralUIInvariant(programReward), passesProgressBarInvariant: obj5.passesNitroProgressBarInvariant(programReward, totalDays), programReward, shouldFetch: result, totalDays };
  const obj2 = getShouldFetchProgramRewards;
  result = obj2.shouldFetchProgramRewards();
  obj4 = nitroProgramRewardInvariants;
  obj5 = nitroProgramRewardInvariants;
  return obj3;
}
