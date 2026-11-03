// Module ID: 17082
// Function ID: 17083
// Name: bountyError
// Dependencies: [17068, 5832, 17083, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17082 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5832 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17068 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17083 */;
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
