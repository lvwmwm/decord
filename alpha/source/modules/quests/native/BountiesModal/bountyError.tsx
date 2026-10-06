// Module ID: 14845
// Function ID: 14846
// Name: bountyError
// Dependencies: [14831, 1126, 4574, 4813, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 14845 (bountyError)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import BountiesModalConstants from "BountiesModalConstants" /* 14831 */;
import size from "module_2" /* 2 */;

let tmp;
const AssetRegistryDefault = tmp(4813);
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
