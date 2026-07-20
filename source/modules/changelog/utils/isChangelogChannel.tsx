// Module ID: 8329
// Function ID: 66014
// Name: isChangelogChannel
// Dependencies: []
// Exports: default

// Module 8329 (isChangelogChannel)
let closure_0 = importDefault(dependencyMap[0]);
const SYSTEM_UPDATES_USER_ID = arg1(dependencyMap[1]).SYSTEM_UPDATES_USER_ID;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
