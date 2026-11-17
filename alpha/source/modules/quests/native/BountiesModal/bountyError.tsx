// Module ID: 17597
// Function ID: 17598
// Name: bountyError
// Dependencies: [17583, 6009, 17598, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17597 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17583 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17598 */;
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
