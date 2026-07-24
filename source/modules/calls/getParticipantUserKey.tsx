// Module ID: 4960
// Function ID: 42651
// Name: getParticipantUserKey
// Dependencies: [2]
// Exports: default

// Module 4960 (getParticipantUserKey)
const result = require("set").fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};
