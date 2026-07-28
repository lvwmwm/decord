// Module ID: 14034
// Function ID: 107244
// Name: resolveBountyRewardClaimErrorMessage
// Dependencies: [14035, 1212, 3866, 9148, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 14034 (resolveBountyRewardClaimErrorMessage)
import { BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS as closure_3 } from "BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS";
import set from "dispatcher";

function resolveBountyRewardClaimErrorMessage(code) {
  code = undefined;
  if (null != code) {
    code = code.code;
  }
  if (null != code) {
    if (set.has(code.code)) {
      let message;
      if (null != code) {
        message = code.message;
      }
      if (null != message) {
        message = code.message;
      }
      return message;
    }
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  message = intl.string(require(1212) /* getSystemLocale */.t.uLjCfn);
}
let set = new Set([260021]);
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
  let obj = importDefault(3866);
  obj = { key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", content: resolveBountyRewardClaimErrorMessage(code), icon: importDefault(9148), toastDurationMs: closure_3 };
  obj.open(obj);
};
