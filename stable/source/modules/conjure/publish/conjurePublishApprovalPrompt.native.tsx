// Module ID: 10956
// Function ID: 10957
// Name: conjurePublishApprovalPrompt
// Dependencies: [10955, 10957, 10958, 5709, 2]
// Exports: promptPublishApproval

// Module 10956 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5709 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10957 */;
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
    tmp4(tmp(10958).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
