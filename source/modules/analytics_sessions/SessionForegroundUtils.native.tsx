// Module ID: 6818
// Function ID: 6819
// Name: isForegrounded
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 6818 (isForegrounded)
import { AppState } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
