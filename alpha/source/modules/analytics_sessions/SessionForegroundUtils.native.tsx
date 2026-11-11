// Module ID: 8599
// Function ID: 8600
// Name: react-native
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 8599 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const AppState = react_native.AppState;
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export function isForegrounded() {
  return "active" === AppState.currentState;
}
