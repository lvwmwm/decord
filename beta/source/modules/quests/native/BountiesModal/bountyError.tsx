// Module ID: 17291
// Function ID: 17292
// Name: bountyError
// Dependencies: [17277, 5869, 17292, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17291 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17277 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17292 */;
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
