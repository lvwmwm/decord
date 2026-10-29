// Module ID: 16816
// Function ID: 16817
// Name: bountyError
// Dependencies: [16802, 5701, 16817, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16816 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16802 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16817 */;
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
