// Module ID: 7162
// Function ID: 7163
// Name: convertServerThreadMember
// Dependencies: [2]
// Exports: default

// Module 7162 (convertServerThreadMember)
const result = require("set").fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return { id: id.id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
};
