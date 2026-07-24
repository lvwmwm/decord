// Module ID: 11508
// Function ID: 89647
// Name: set
// Dependencies: [11488, 2]
// Exports: default

// Module 11508 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11488) /* useUserCountryCode */.useIsTeenInCountrySet(set);
};
