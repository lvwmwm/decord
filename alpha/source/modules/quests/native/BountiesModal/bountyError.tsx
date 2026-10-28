// Module ID: 16578
// Function ID: 16579
// Name: bountyError
// Dependencies: [16564, 5699, 16579, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16578 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16564 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16579 */;
import size from "module_2" /* 2 */;

const duration = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
  let obj2;
  const obj = { text: obj2.resolveBountyRewardClaimErrorMessage(code), variant: "critical", duration };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  obj2 = BountyRewardClaimErrorUtils;
  open("QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", obj);
};
