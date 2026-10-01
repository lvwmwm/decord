// Module ID: 14557
// Function ID: 14558
// Name: bountyError
// Dependencies: [14543, 1115, 4528, 5909, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 14557 (bountyError)
import intl2 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import BountiesModalConstants from "BountiesModalConstants" /* 14543 */;
import size from "module_2" /* 2 */;

let tmp;
const AssetRegistryDefault = tmp(5909);
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
