// Module ID: 11117
// Function ID: 11118
// Name: conjurePublishApprovalPrompt
// Dependencies: [11116, 11118, 11119, 5866, 2]
// Exports: promptPublishApproval

// Module 11117 (conjurePublishApprovalPrompt)
import LinkingDefault from "Linking" /* 5866 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11118 */;
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
    tmp4(tmp(11119).ConjurePublishBlockedReason.PUBLISH_APPROVAL_REQUIRED, undefined, () => {
      const obj = LinkingDefault;
      obj.openURL(approval_url);
    });
  }
}
