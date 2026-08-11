// Module ID: 3937
// Function ID: 3938
// Name: isCommunicationDisabled
// Dependencies: [2]
// Exports: isCommunicationDisabled, isMemberCommunicationDisabled

// Module 3937 (isCommunicationDisabled)
const result = require("set").fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledUtils.tsx");

export const isCommunicationDisabled = function isCommunicationDisabled(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const _Date = Date;
    const date = new Date(arg0);
    const _Date2 = Date;
    const date1 = new Date();
    tmp = date > date1;
  }
  return tmp;
};
export const isMemberCommunicationDisabled = function isMemberCommunicationDisabled(member) {
  let prop;
  if (member != null) {
    prop = member.communicationDisabledUntil;
  }
  let tmp2 = null != prop;
  if (tmp2) {
    const _Date = Date;
    const date = new Date(prop);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = date > date1;
  }
  return tmp2;
};
