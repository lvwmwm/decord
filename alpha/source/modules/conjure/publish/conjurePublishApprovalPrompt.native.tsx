// Module ID: 10838
// Function ID: 10839
// Name: conjurePublishApprovalPrompt
// Dependencies: [10837, 10839, 10840, 5696, 2]
// Exports: promptPublishApproval

// Module 10838 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5696 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10839 */;
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
    tmp4(tmp(10840).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
};
