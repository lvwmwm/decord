// Module ID: 5727
// Function ID: 5728
// Name: isForegrounded
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 5727 (isForegrounded)
import { AppState } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
