// Module ID: 17289
// Function ID: 17290
// Name: bountyError
// Dependencies: [17275, 5869, 17290, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17289 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17275 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17290 */;
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
