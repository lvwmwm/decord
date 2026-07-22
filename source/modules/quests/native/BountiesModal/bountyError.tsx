// Module ID: 13813
// Function ID: 104459
// Name: resolveBountyRewardClaimErrorMessage
// Dependencies: []
// Exports: openBountyRewardClaimErrorToast

// Module 13813 (resolveBountyRewardClaimErrorMessage)
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
  const intl = require(dependencyMap[1]).intl;
  message = intl.string(require(dependencyMap[1]).t.uLjCfn);
}
let closure_3 = require(dependencyMap[0]).BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const set = new Set([452984833]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
  let obj = importDefault(dependencyMap[2]);
  obj = { key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", content: resolveBountyRewardClaimErrorMessage(code), icon: importDefault(dependencyMap[3]), toastDurationMs: closure_3 };
  obj.open(obj);
};
