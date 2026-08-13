// Module ID: 7286
// Function ID: 7287
// Name: convertServerThreadMember
// Dependencies: [2]
// Exports: default

// Module 7286 (convertServerThreadMember)
const result = require("set").fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return { id: id.id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
};
