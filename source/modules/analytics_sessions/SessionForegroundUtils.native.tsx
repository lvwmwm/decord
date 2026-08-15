// Module ID: 5055
// Function ID: 5056
// Name: isForegrounded
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 5055 (isForegrounded)
import { AppState } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
