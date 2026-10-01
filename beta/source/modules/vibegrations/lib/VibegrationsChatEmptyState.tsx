// Module ID: 16387
// Function ID: 16388
// Name: VibegrationsChatEmptyState
// Dependencies: [2]
// Exports: chatEmptyState

// Module 16387 (VibegrationsChatEmptyState)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsChatEmptyState.tsx");

export const chatEmptyState = function chatEmptyState(connState) {
  connState = connState.connState;
  let str = "unavailable";
  if (!connState.historyUnavailable) {
    let str2 = "greeting";
    if (!tmp) {
      let str4;
      if ("failed" === connState) {
        str4 = "unavailable";
      } else {
        str4 = "loading";
      }
      str2 = str4;
    }
    str = str2;
  }
  return str;
};
