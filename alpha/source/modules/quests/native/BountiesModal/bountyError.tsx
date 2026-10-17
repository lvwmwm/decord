// Module ID: 16062
// Function ID: 16063
// Name: bountyError
// Dependencies: [16048, 1128, 4904, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 16062 (bountyError)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4904 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16048 */;
import size from "module_2" /* 2 */;

const duration = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const set = new Set([260021]);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
  code = undefined;
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  if (code != null) {
    code = code.code;
  }
  if (null != code) {
    if (set.has(code.code)) {
      let message;
      let message1;
      if (code != null) {
        message1 = code.message;
      }
      if (null != message1) {
        message = code.message;
      }
      const obj = { text: message, variant: "critical", duration };
      open("QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", obj);
    }
  }
  const intl = intl2.intl;
  message = intl.string(intl2.t.uLjCfn);
};
