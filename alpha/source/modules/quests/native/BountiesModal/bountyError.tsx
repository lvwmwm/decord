// Module ID: 17174
// Function ID: 17175
// Name: bountyError
// Dependencies: [17160, 5846, 17175, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17174 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17160 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17175 */;
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
