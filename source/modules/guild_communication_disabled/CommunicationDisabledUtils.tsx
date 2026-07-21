// Module ID: 3745
// Function ID: 28585
// Name: isCommunicationDisabled
// Dependencies: []
// Exports: isMemberCommunicationDisabled

// Module 3745 (isCommunicationDisabled)
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
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledUtils.tsx");

export { isCommunicationDisabled };
export const isMemberCommunicationDisabled = function isMemberCommunicationDisabled(member) {
  let prop;
  if (null != member) {
    prop = member.communicationDisabledUntil;
  }
  return isCommunicationDisabled(prop);
};
