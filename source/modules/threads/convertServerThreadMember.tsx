// Module ID: 7714
// Function ID: 7715
// Name: convertServerThreadMember
// Dependencies: [2]
// Exports: default

// Module 7714 (convertServerThreadMember)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return { id: id.id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
};
