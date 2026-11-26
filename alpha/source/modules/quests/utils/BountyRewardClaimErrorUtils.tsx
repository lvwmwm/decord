// Module ID: 16541
// Function ID: 16542
// Name: BountyRewardClaimErrorUtils
// Dependencies: [1112, 2]
// Exports: resolveBountyRewardClaimErrorMessage

// Module 16541 (BountyRewardClaimErrorUtils)
import intl2 from "intl" /* 1112 */;
import size from "module_2" /* 2 */;

const set = new Set([260021]);
const result = size.fileFinishedImporting("modules/quests/utils/BountyRewardClaimErrorUtils.tsx");

export function resolveBountyRewardClaimErrorMessage(code) {
  code = undefined;
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
      return message;
    }
  }
  const intl = intl2.intl;
  message = intl.string(intl2.t.uLjCfn);
}
