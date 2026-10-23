// Module ID: 7570
// Function ID: 7571
// Name: react-native
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 7570 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const AppState = react_native.AppState;
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
