// Module ID: 10944
// Function ID: 10945
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 10944 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
