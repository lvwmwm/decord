// Module ID: 7019
// Function ID: 56343
// Name: convertServerThreadMember
// Dependencies: []
// Exports: default

// Module 7019 (convertServerThreadMember)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return { id: id.id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
};
