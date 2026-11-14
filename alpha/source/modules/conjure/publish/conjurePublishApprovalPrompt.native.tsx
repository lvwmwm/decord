// Module ID: 13156
// Function ID: 13157
// Name: conjurePublishApprovalPrompt
// Dependencies: [13155, 13146, 13147, 6012, 2]
// Exports: promptPublishApproval

// Module 13156 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 6012 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 13146 */;
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
    tmp4(tmp(13147).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
