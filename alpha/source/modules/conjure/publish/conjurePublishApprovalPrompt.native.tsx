// Module ID: 14671
// Function ID: 14672
// Name: conjurePublishApprovalPrompt
// Dependencies: [14670, 14672, 14673, 5502, 2]
// Exports: promptPublishApproval

// Module 14671 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5502 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 14672 */;
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
    tmp4(tmp(14673).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
