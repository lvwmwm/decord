// Module ID: 16350
// Function ID: 16351
// Name: bountyError
// Dependencies: [16336, 5664, 16351, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16350 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5664 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16336 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16351 */;
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
