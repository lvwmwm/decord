// Module ID: 18618
// Function ID: 18619
// Name: conjureIdeasIntroTip
// Dependencies: [18615, 2]
// Exports: resolveIdeasIntroTip

// Module 18618 (conjureIdeasIntroTip)
import conjureBotPermissionsTip from "conjureBotPermissionsTip" /* 18615 */;
import size from "module_2" /* 2 */;

function resolveIdeasIntroTip(agentIdle) {
  let tmp5 = null;
  if (agentIdle.agentIdle) {
    tmp5 = null;
    if (null != agentIdle.ideasIntroAnchorId) {
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
  }
  return tmp5;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = { id: "ideas_intro", priority: 1, resolve: resolveIdeasIntroTip, dismissal: "anchor" };
