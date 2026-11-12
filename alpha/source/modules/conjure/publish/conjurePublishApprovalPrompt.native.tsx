// Module ID: 13061
// Function ID: 13062
// Name: conjurePublishApprovalPrompt
// Dependencies: [13060, 13051, 13052, 5949, 2]
// Exports: promptPublishApproval

// Module 13061 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5949 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 13051 */;
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
    tmp4(tmp(13052).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
