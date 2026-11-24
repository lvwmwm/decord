// Module ID: 16368
// Function ID: 16369
// Name: bountyError
// Dependencies: [16354, 5599, 16369, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16368 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16354 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16369 */;
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
