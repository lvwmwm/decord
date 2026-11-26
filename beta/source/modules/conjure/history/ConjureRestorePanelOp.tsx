// Module ID: 18382
// Function ID: 18383
// Name: ConjureRestorePanelOp
// Dependencies: [2]
// Exports: restorePanelEnvironments

// Module 18382 (ConjureRestorePanelOp)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/history/ConjureRestorePanelOp.tsx");

export const RESTORE_WINDOW_DAYS = 30;
export function restorePanelEnvironments(arg0) {
  return arg0 ? ["stable", "preview"] : ["stable"];
}
