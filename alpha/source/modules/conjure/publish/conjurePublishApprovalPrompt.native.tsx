// Module ID: 11146
// Function ID: 11147
// Name: conjurePublishApprovalPrompt
// Dependencies: [11145, 11147, 11148, 5846, 2]
// Exports: promptPublishApproval

// Module 11146 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5846 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11147 */;
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
    tmp4(tmp(11148).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
