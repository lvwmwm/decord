// Module ID: 15106
// Function ID: 15107
// Name: bountyError
// Dependencies: [15092, 1126, 4766, 5007, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 15106 (bountyError)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import BountiesModalConstants from "BountiesModalConstants" /* 15092 */;
import size from "module_2" /* 2 */;

let tmp;
const AssetRegistryDefault = tmp(5007);
const toastDurationMs = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
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
      const obj = { key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", content: message, icon: AssetRegistryDefault, toastDurationMs };
      open(obj);
    }
  }
  const intl = intl2.intl;
  message = intl.string(intl2.t.uLjCfn);
};
