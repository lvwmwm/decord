// Module ID: 11099
// Function ID: 11100
// Name: conjurePublishApprovalPrompt
// Dependencies: [11098, 11100, 11101, 5864, 2]
// Exports: promptPublishApproval

// Module 11099 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5864 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11100 */;
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
    tmp4(tmp(11101).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
