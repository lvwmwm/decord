// Module ID: 16333
// Function ID: 16334
// Name: bountyError
// Dependencies: [16319, 5595, 16334, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16333 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16319 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16334 */;
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
