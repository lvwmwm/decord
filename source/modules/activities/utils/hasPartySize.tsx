// Module ID: 11205
// Function ID: 11206
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11205 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
