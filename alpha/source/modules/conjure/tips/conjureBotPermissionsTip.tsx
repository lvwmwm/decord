// Module ID: 12589
// Function ID: 12590
// Name: conjureBotPermissionsTip
// Dependencies: [2]
// Exports: isBotPermissionsReviewPending, resolveBotPermissionsTip

// Module 12589 (conjureBotPermissionsTip)
import size from "module_2" /* 2 */;

function resolveBotPermissionsTip(publish) {
  publish = publish.publish;
  let str = null;
  if (null != publish.turn) {
    str = null;
    const tmp = null != publish && !publish.publishing && "review_permissions" === publish.action;
    if (tmp) {
      str = "hint";
    }
  }
  return str;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureBotPermissionsTip.tsx");

export function isBotPermissionsReviewPending(publishing) {
  return null != publishing && !publishing.publishing && "review_permissions" === publishing.action;
}
export { resolveBotPermissionsTip };
export const CONJURE_BOT_PERMISSIONS_TIP_BASE = { id: "bot_permissions", priority: 3, resolve: resolveBotPermissionsTip };
