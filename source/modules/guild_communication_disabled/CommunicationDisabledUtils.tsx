// Module ID: 3747
// Function ID: 28590
// Name: isCommunicationDisabled
// Dependencies: [2]
// Exports: isMemberCommunicationDisabled

// Module 3747 (isCommunicationDisabled)
function isCommunicationDisabled(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const _Date = Date;
    const date = new Date(arg0);
    const _Date2 = Date;
    const date1 = new Date();
    tmp = date > date1;
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledUtils.tsx");

export { isCommunicationDisabled };
export const isMemberCommunicationDisabled = function isMemberCommunicationDisabled(member) {
  let prop;
  if (null != member) {
    prop = member.communicationDisabledUntil;
  }
  return isCommunicationDisabled(prop);
};
