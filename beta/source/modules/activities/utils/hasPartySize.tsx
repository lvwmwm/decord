// Module ID: 12185
// Function ID: 12186
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 12185 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
}
