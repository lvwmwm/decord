// Module ID: 10885
// Function ID: 84557
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 10885 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
