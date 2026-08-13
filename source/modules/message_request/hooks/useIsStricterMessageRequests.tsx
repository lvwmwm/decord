// Module ID: 11868
// Function ID: 11869
// Name: set
// Dependencies: [11846, 2]
// Exports: default

// Module 11868 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11846) /* set */.useIsTeenInCountrySet(set);
};
