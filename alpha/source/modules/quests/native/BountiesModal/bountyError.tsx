// Module ID: 16390
// Function ID: 16391
// Name: bountyError
// Dependencies: [16376, 5474, 16391, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16390 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5474 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16376 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16391 */;
import size from "module_2" /* 2 */;

const duration = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export function openBountyRewardClaimErrorToast(code) {
  let obj2;
  const obj = { text: obj2.resolveBountyRewardClaimErrorMessage(code), variant: "critical", duration };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  obj2 = BountyRewardClaimErrorUtils;
  open("QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", obj);
}
