// Module ID: 1905
// Function ID: 1906
// Name: isActivityParticipantValidGuildMember
// Dependencies: [2]
// Exports: default

// Module 1905 (isActivityParticipantValidGuildMember)
const result = require("set").fileFinishedImporting("modules/activities/isActivityParticipantValidGuildMember.tsx");

export default function isActivityParticipantValidGuildMember(member) {
  let tmp = null != member.member && null != member.member.joined_at;
  if (tmp) {
    tmp = "" !== member.member.user.username;
  }
  return tmp;
};
