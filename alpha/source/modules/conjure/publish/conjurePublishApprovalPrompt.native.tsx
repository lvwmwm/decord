// Module ID: 11094
// Function ID: 11095
// Name: conjurePublishApprovalPrompt
// Dependencies: [11093, 11095, 11096, 5836, 2]
// Exports: promptPublishApproval

// Module 11094 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5836 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11095 */;
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
    tmp4(tmp(11096).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
