// Module ID: 11474
// Function ID: 89364
// Name: set
// Dependencies: [11451, 2]
// Exports: default

// Module 11474 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11451) /* useUserCountryCode */.useIsTeenInCountrySet(set);
};
