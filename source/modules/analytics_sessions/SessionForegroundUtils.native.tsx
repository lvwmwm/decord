// Module ID: 5694
// Function ID: 49217
// Name: isForegrounded
// Dependencies: [27, 2]
// Exports: isForegrounded

// Module 5694 (isForegrounded)
import { AppState } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
