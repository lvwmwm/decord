// Module ID: 17562
// Function ID: 17563
// Name: bountyError
// Dependencies: [17548, 6005, 17563, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17562 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6005 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17548 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17563 */;
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
