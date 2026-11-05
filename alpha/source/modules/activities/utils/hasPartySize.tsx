// Module ID: 11887
// Function ID: 11888
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11887 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
}
