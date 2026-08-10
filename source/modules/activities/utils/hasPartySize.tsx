// Module ID: 11155
// Function ID: 11156
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11155 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
