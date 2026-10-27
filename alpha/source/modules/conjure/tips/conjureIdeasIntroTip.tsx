// Module ID: 12333
// Function ID: 12334
// Name: conjureIdeasIntroTip
// Dependencies: [12330, 2]
// Exports: resolveIdeasIntroTip

// Module 12333 (conjureIdeasIntroTip)
import conjureBotPermissionsTip from "conjureBotPermissionsTip" /* 12330 */;
import size from "module_2" /* 2 */;

function resolveIdeasIntroTip(ideasIntroAnchorId) {
  let tmp5 = null;
  if (null != ideasIntroAnchorId.ideasIntroAnchorId) {
    tmp5 = null;
    const obj = conjureBotPermissionsTip;
    if (!obj.isBotPermissionsReviewPending(tmp2)) {
      if (null == tmp) {
        let str;
        if (!tmp3) {
          str = null;
        }
        tmp5 = str;
      }
      str = "card";
    }
  }
  return tmp5;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = { id: "ideas_intro", priority: 1, resolve: resolveIdeasIntroTip, dismissal: "anchor" };
