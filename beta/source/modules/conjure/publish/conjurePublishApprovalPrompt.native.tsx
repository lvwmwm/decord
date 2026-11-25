// Module ID: 12309
// Function ID: 12310
// Name: conjurePublishApprovalPrompt
// Dependencies: [12308, 12310, 12311, 5592, 2]
// Exports: promptPublishApproval

// Module 12309 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5592 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 12310 */;
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
    tmp4(tmp(12311).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
