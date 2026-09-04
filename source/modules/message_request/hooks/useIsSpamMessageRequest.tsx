// Module ID: 11297
// Function ID: 11298
// Name: useIsSpamMessageRequest
// Dependencies: [7160, 586, 2]
// Exports: useIsSpamMessageRequest

// Module 11297 (useIsSpamMessageRequest)
import closure_2 from "processChannel" /* 7160 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _require(586).useStateFromStores(items, () => closure_1_2.isSpam(closure_0), items1);
};
