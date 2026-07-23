// Module ID: 6698
// Function ID: 51882
// Name: isForegrounded
// Dependencies: [27, 2]
// Exports: isForegrounded

// Module 6698 (isForegrounded)
import { AppState } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
