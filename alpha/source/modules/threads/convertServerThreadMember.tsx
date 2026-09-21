// Module ID: 8024
// Function ID: 8025
// Name: convertServerThreadMember
// Dependencies: [2]
// Exports: default

// Module 8024 (convertServerThreadMember)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return { id: id.id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
};
