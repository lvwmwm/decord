// Module ID: 10771
// Function ID: 10772
// Name: conjurePublishApprovalPrompt
// Dependencies: [10770, 10772, 10773, 5646, 2]
// Exports: promptPublishApproval

// Module 10771 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5646 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10772 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishApprovalPrompt.native.tsx");

export const promptPublishApproval = function promptPublishApproval(approval_url) {
  _require = approval_url;
  let str = "publish";
  if (approval_url.includes("/enroll/")) {
    str = "enroll";
  }
  let obj = require("conjurePublishApproval");
  const tmp = _require;
  if (obj.validPublishApproval(approval_url, str)) {
    const tmp4 = ConjurePublishBlockedSheetDefault;
    tmp4(tmp(10773).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
};
