// Module ID: 13158
// Function ID: 13159
// Name: conjurePublishApprovalPrompt
// Dependencies: [13157, 13148, 13149, 6002, 2]
// Exports: promptPublishApproval

// Module 13158 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 6002 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 13148 */;
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
    tmp4(tmp(13149).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
