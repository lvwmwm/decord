// Module ID: 11533
// Function ID: 11534
// Name: set
// Dependencies: [11510, 2]
// Exports: default

// Module 11533 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11510) /* set */.useIsTeenInCountrySet(set);
};
