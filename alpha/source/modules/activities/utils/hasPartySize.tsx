// Module ID: 12594
// Function ID: 12595
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 12594 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
}
