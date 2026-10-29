// Module ID: 10913
// Function ID: 10914
// Name: conjurePublishApproval
// Dependencies: [2]
// Exports: validPublishApproval

// Module 10913 (conjurePublishApproval)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishApproval.tsx");

export function validPublishApproval(approval_url, approval_kind) {
  let isMatch = ("enroll" === approval_kind || "publish" === approval_kind) && typeof approval_url === "string";
  if (isMatch) {
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const regExp = new RegExp("^https://client\\.vibeyard\\.tools/" + approval_kind + "/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$");
    isMatch = regExp.test(approval_url);
  }
  return isMatch;
}
