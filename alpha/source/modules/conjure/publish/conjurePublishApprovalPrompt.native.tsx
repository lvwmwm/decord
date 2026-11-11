// Module ID: 13067
// Function ID: 13068
// Name: conjurePublishApprovalPrompt
// Dependencies: [13066, 13057, 13058, 5949, 2]
// Exports: promptPublishApproval

// Module 13067 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5949 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 13057 */;
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
    tmp4(tmp(13058).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
