// Module ID: 16540
// Function ID: 16541
// Name: bountyError
// Dependencies: [16526, 5725, 16541, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16540 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16526 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16541 */;
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
