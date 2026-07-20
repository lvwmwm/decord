// Module ID: 1880
// Function ID: 20956
// Name: isActivityParticipantValidGuildMember
// Dependencies: []
// Exports: default

// Module 1880 (isActivityParticipantValidGuildMember)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/isActivityParticipantValidGuildMember.tsx");

export default function isActivityParticipantValidGuildMember(member) {
  let tmp = null != member.member && null != member.member.joined_at;
  if (tmp) {
    tmp = "" !== member.member.user.username;
  }
  return tmp;
};
