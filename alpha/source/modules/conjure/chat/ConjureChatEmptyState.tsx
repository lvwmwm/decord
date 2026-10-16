// Module ID: 12047
// Function ID: 12048
// Name: ConjureChatEmptyState
// Dependencies: [2]
// Exports: chatEmptyState

// Module 12047 (ConjureChatEmptyState)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatEmptyState.tsx");

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
