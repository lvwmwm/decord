// Module ID: 12332
// Function ID: 12333
// Name: conjureIdeasIntroTip
// Dependencies: [2]
// Exports: resolveIdeasIntroTip

// Module 12332 (conjureIdeasIntroTip)
import size from "module_2" /* 2 */;

function resolveIdeasIntroTip(turn) {
  if (null == turn.turn) {
    let str = null;
    return str;
  }
  str = "card";
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = { id: "ideas_intro", priority: 1, resolve: resolveIdeasIntroTip, dismissal: "app" };
