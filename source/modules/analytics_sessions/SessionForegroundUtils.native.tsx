// Module ID: 5722
// Function ID: 5723
// Name: isForegrounded
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 5722 (isForegrounded)
import { AppState } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
