// Module ID: 17122
// Function ID: 17123
// Name: ConjureRestorePanelOp
// Dependencies: [2]
// Exports: restorePanelEnvironments

// Module 17122 (ConjureRestorePanelOp)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/history/ConjureRestorePanelOp.tsx");

export const RESTORE_WINDOW_DAYS = 30;
export function restorePanelEnvironments(arg0) {
  return "user" === arg0 ? ["stable"] : ["stable", "preview"];
}
