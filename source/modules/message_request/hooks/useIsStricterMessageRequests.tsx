// Module ID: 11806
// Function ID: 11807
// Name: set
// Dependencies: [11788, 2]
// Exports: default

// Module 11806 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11788) /* set */.useIsTeenInCountrySet(set);
};
