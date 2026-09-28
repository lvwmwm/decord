// Module ID: 6882
// Function ID: 6883
// Name: SessionForegroundUtils
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 6882 (SessionForegroundUtils)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const AppState = _mod17.AppState;
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
