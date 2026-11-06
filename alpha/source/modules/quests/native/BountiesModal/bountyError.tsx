// Module ID: 17198
// Function ID: 17199
// Name: bountyError
// Dependencies: [17184, 5867, 17199, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 17198 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17184 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17199 */;
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
