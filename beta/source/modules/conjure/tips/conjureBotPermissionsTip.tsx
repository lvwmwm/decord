// Module ID: 18461
// Function ID: 18462
// Name: conjureBotPermissionsTip
// Dependencies: [2]
// Exports: isBotPermissionsReviewPending, resolveBotPermissionsTip

// Module 18461 (conjureBotPermissionsTip)
import size from "module_2" /* 2 */;

function resolveBotPermissionsTip(publish) {
  publish = publish.publish;
  let str = null;
  if (null != publish.turn) {
    let state;
    if (publish != null) {
      state = publish.state;
    }
    str = null;
    const tmp2 = "action_needed" === state && "review_permissions" === publish.action;
    if (tmp2) {
      str = "hint";
    }
  }
  return str;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureBotPermissionsTip.tsx");

export function isBotPermissionsReviewPending(state) {
  state = undefined;
  if (state != null) {
    state = state.state;
  }
  return "action_needed" === state && "review_permissions" === state.action;
}
export { resolveBotPermissionsTip };
export const CONJURE_BOT_PERMISSIONS_TIP_BASE = { id: "bot_permissions", priority: 3, resolve: resolveBotPermissionsTip };
