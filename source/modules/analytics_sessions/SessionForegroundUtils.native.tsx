// Module ID: 7136
// Function ID: 7137
// Name: isForegrounded
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 7136 (isForegrounded)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const AppState = get_ActivityIndicator.AppState;
const result = set.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
