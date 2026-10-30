// Module ID: 16870
// Function ID: 16871
// Name: bountyError
// Dependencies: [16856, 5707, 16871, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16870 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16856 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16871 */;
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
