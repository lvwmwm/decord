// Module ID: 14544
// Function ID: 14545
// Name: set
// Dependencies: [14545, 1236, 4162, 8670, 2]
// Exports: openBountyRewardClaimErrorToast

// Module 14544 (set)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4162 */;
import registerAssetDefault from "registerAsset" /* 8670 */;
import BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS from "BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS" /* 14545 */;
import set from "set" /* 2 */;

let closure_3 = BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
let set = new Set([260021]);
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(closure_0) {
  let obj = dispatcherDefault;
  let code;
  if (closure_0 != null) {
    code = closure_0.code;
  }
  if (null != code) {
    if (set.has(closure_0.code)) {
      let message;
      if (closure_0 != null) {
        message = closure_0.message;
      }
      if (null != message) {
        message = closure_0.message;
      }
      obj = { key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", content: null, icon: null, toastDurationMs: null };
      obj[1] = message;
      obj[2] = registerAssetDefault;
      obj[3] = closure_3;
      obj.open(obj);
    }
  }
  const intl = getSystemLocale.intl;
  message = intl.string(getSystemLocale.t.uLjCfn);
};
