// Module ID: 12187
// Function ID: 12188
// Name: conjureIdeasIntroTip
// Dependencies: [2]
// Exports: resolveIdeasIntroTip

// Module 12187 (conjureIdeasIntroTip)
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
