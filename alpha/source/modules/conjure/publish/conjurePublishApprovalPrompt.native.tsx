// Module ID: 11085
// Function ID: 11086
// Name: conjurePublishApprovalPrompt
// Dependencies: [11084, 11086, 11087, 5834, 2]
// Exports: promptPublishApproval

// Module 11085 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5834 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11086 */;
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
    tmp4(tmp(11087).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
