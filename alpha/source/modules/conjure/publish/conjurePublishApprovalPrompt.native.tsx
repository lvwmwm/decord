// Module ID: 14399
// Function ID: 14400
// Name: conjurePublishApprovalPrompt
// Dependencies: [14398, 14389, 14390, 6006, 2]
// Exports: promptPublishApproval

// Module 14399 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 6006 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 14389 */;
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
    tmp4(tmp(14390).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
