// Module ID: 17284
// Function ID: 17285
// Name: bountyError
// Dependencies: [17270, 5839, 17285, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17284 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17270 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17285 */;
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
