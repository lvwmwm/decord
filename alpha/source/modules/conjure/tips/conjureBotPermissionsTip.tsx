// Module ID: 12334
// Function ID: 12335
// Name: conjureBotPermissionsTip
// Dependencies: [2]
// Exports: isBotPermissionsReviewPending, resolveBotPermissionsTip

// Module 12334 (conjureBotPermissionsTip)
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

export const isBotPermissionsReviewPending = function isBotPermissionsReviewPending(publish) {
  return null != publish && !publish.publishing && "review_permissions" === publish.action;
};
export { resolveBotPermissionsTip };
export const CONJURE_BOT_PERMISSIONS_TIP_BASE = { id: "bot_permissions", priority: 3, resolve: resolveBotPermissionsTip };
