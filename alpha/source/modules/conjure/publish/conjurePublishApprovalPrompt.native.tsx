// Module ID: 10753
// Function ID: 10754
// Name: conjurePublishApprovalPrompt
// Dependencies: [10752, 10754, 10755, 5642, 2]
// Exports: promptPublishApproval

// Module 10753 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5642 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10754 */;
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
    tmp4(tmp(10755).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
};
