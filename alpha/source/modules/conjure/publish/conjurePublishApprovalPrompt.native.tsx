// Module ID: 11477
// Function ID: 11478
// Name: conjurePublishApprovalPrompt
// Dependencies: [11476, 11478, 11479, 5722, 2]
// Exports: promptPublishApproval

// Module 11477 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5722 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11478 */;
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
    tmp4(tmp(11479).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
