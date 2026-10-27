// Module ID: 16351
// Function ID: 16352
// Name: BountyRewardClaimErrorUtils
// Dependencies: [1125, 2]
// Exports: resolveBountyRewardClaimErrorMessage

// Module 16351 (BountyRewardClaimErrorUtils)
import intl2 from "intl" /* 1125 */;
import size from "module_2" /* 2 */;

const set = new Set([260021]);
const result = size.fileFinishedImporting("modules/quests/utils/BountyRewardClaimErrorUtils.tsx");

export const resolveBountyRewardClaimErrorMessage = function resolveBountyRewardClaimErrorMessage(code) {
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
};
