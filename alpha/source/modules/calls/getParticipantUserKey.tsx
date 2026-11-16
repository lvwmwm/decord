// Module ID: 6936
// Function ID: 6937
// Name: getParticipantUserKey
// Dependencies: [2]
// Exports: default

// Module 6936 (getParticipantUserKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};
