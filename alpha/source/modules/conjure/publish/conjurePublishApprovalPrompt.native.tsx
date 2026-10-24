// Module ID: 10801
// Function ID: 10802
// Name: conjurePublishApprovalPrompt
// Dependencies: [10800, 10802, 10803, 5660, 2]
// Exports: promptPublishApproval

// Module 10801 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5660 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10802 */;
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
    tmp4(tmp(10803).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
};
