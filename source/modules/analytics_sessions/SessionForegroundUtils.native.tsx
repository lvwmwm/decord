// Module ID: 6966
// Function ID: 6967
// Name: isForegrounded
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 6966 (isForegrounded)
import { AppState } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
