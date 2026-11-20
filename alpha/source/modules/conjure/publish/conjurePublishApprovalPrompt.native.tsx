// Module ID: 12184
// Function ID: 12185
// Name: conjurePublishApprovalPrompt
// Dependencies: [12183, 12185, 12186, 5473, 2]
// Exports: promptPublishApproval

// Module 12184 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5473 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 12185 */;
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
    tmp4(tmp(12186).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
