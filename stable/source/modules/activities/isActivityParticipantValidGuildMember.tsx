// Module ID: 1984
// Function ID: 1985
// Name: isActivityParticipantValidGuildMember
// Dependencies: [2]
// Exports: default

// Module 1984 (isActivityParticipantValidGuildMember)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/isActivityParticipantValidGuildMember.tsx");

export default function isActivityParticipantValidGuildMember(member) {
  return null != member.member && null != member.member.joined_at && "" !== member.member.user.username;
};
