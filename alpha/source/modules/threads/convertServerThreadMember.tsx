// Module ID: 7196
// Function ID: 7197
// Name: convertServerThreadMember
// Dependencies: [2]
// Exports: default

// Module 7196 (convertServerThreadMember)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return { id: id.id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
};
