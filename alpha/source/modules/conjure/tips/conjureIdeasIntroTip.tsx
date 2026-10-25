// Module ID: 12333
// Function ID: 12334
// Name: conjureIdeasIntroTip
// Dependencies: [12334, 2]
// Exports: resolveIdeasIntroTip

// Module 12333 (conjureIdeasIntroTip)
import conjureBotPermissionsTip from "conjureBotPermissionsTip" /* 12334 */;
import size from "module_2" /* 2 */;

function resolveIdeasIntroTip(arg0) {
  let hasPublished;
  let justRemixed;
  let publish;
  let turn;
  ({ turn, publish, hasPublished, justRemixed } = arg0);
  let tmp = null;
  const obj = conjureBotPermissionsTip;
  if (!obj.isBotPermissionsReviewPending(publish)) {
    if (null == turn) {
      let str = null;
      tmp = str;
    }
    str = "card";
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = { id: "ideas_intro", priority: 1, resolve: resolveIdeasIntroTip, dismissal: "app" };
