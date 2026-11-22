// Module ID: 12313
// Function ID: 12314
// Name: conjurePublishApprovalPrompt
// Dependencies: [12312, 12314, 12315, 5592, 2]
// Exports: promptPublishApproval

// Module 12313 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5592 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 12314 */;
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
    tmp4(tmp(12315).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
