// Module ID: 11478
// Function ID: 89402
// Name: set
// Dependencies: [11458, 2]
// Exports: default

// Module 11478 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11458) /* useUserCountryCode */.useIsTeenInCountrySet(set);
};
