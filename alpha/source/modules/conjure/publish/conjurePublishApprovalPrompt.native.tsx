// Module ID: 10800
// Function ID: 10801
// Name: conjurePublishApprovalPrompt
// Dependencies: [10799, 10801, 10802, 5658, 2]
// Exports: promptPublishApproval

// Module 10800 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5658 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10801 */;
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
    tmp4(tmp(10802).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
};
