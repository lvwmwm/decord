// Module ID: 17257
// Function ID: 17258
// Name: bountyError
// Dependencies: [17243, 5837, 17258, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17257 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17243 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17258 */;
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
