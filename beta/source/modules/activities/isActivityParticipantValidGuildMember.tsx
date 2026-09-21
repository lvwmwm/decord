// Module ID: 1977
// Function ID: 1978
// Name: isActivityParticipantValidGuildMember
// Dependencies: [2]
// Exports: default

// Module 1977 (isActivityParticipantValidGuildMember)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/isActivityParticipantValidGuildMember.tsx");

export default function isActivityParticipantValidGuildMember(member) {
  let tmp = null != member.member && null != member.member.joined_at;
  if (tmp) {
    tmp = "" !== member.member.user.username;
  }
  return tmp;
};
