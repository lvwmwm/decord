// Module ID: 17186
// Function ID: 17187
// Name: bountyError
// Dependencies: [17172, 5846, 17187, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17186 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17172 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17187 */;
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
