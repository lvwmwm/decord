// Module ID: 11739
// Function ID: 11740
// Name: set
// Dependencies: [11721, 2]
// Exports: default

// Module 11739 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11721) /* set */.useIsTeenInCountrySet(set);
};
