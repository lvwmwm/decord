// Module ID: 16489
// Function ID: 16490
// Name: bountyError
// Dependencies: [16475, 5694, 16490, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16489 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16475 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16490 */;
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
