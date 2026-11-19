// Module ID: 14657
// Function ID: 14658
// Name: conjurePublishApprovalPrompt
// Dependencies: [14656, 14658, 14659, 5471, 2]
// Exports: promptPublishApproval

// Module 14657 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5471 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 14658 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishApprovalPrompt.native.tsx");

export function promptPublishApproval(approval_url) {
  _require = approval_url;
  let str = "publish";
  if (approval_url.includes("/enroll/")) {
    str = "enroll";
  }
  let obj = require("conjurePublishApproval");
  const tmp = _require;
  if (obj.validPublishApproval(approval_url, str)) {
    const tmp4 = ConjurePublishBlockedSheetDefault;
    tmp4(tmp(14659).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
