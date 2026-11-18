// Module ID: 16399
// Function ID: 16400
// Name: bountyError
// Dependencies: [16385, 5505, 16400, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16399 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5505 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16385 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16400 */;
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
