// Module ID: 10428
// Function ID: 10429
// Name: useIsSpamMessageRequest
// Dependencies: [5656, 589, 2]
// Exports: useIsSpamMessageRequest

// Module 10428 (useIsSpamMessageRequest)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  const _require = id;
  const items = [processChannel];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => outer1_2.isSpam(closure_0), items1);
};
