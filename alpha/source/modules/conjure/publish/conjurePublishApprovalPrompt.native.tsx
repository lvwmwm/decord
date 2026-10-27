// Module ID: 10805
// Function ID: 10806
// Name: conjurePublishApprovalPrompt
// Dependencies: [10804, 10806, 10807, 5661, 2]
// Exports: promptPublishApproval

// Module 10805 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5661 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10806 */;
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
    tmp4(tmp(10807).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
};
