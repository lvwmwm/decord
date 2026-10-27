// Module ID: 1996
// Function ID: 1997
// Name: isActivityParticipantValidGuildMember
// Dependencies: [2]
// Exports: default

// Module 1996 (isActivityParticipantValidGuildMember)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/isActivityParticipantValidGuildMember.tsx");

export default function isActivityParticipantValidGuildMember(member) {
  return null != member.member && null != member.member.joined_at && "" !== member.member.user.username;
};
