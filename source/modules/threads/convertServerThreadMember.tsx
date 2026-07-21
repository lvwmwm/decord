// Module ID: 7018
// Function ID: 56331
// Name: convertServerThreadMember
// Dependencies: [284214097]
// Exports: default

// Module 7018 (convertServerThreadMember)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return { id: id.id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
};
