// Module ID: 5145
// Function ID: 5146
// Name: getParticipantUserKey
// Dependencies: [2]
// Exports: default

// Module 5145 (getParticipantUserKey)
const result = require("set").fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};
