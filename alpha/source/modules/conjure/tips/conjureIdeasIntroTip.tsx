// Module ID: 12070
// Function ID: 12071
// Name: conjureIdeasIntroTip
// Dependencies: [2]
// Exports: resolveIdeasIntroTip

// Module 12070 (conjureIdeasIntroTip)
import size from "module_2" /* 2 */;

function resolveIdeasIntroTip(turn) {
  let str = null;
  if (null != turn.turn) {
    str = null;
    if (tmp) {
      str = "card";
    }
  }
  return str;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = { id: "ideas_intro", priority: 1, resolve: resolveIdeasIntroTip, dismissal: "app" };
