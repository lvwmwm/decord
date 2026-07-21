// Module ID: 1904
// Function ID: 21371
// Name: isChangelogUser
// Dependencies: []
// Exports: default

// Module 1904 (isChangelogUser)
const SYSTEM_UPDATES_USER_ID = require(dependencyMap[0]).SYSTEM_UPDATES_USER_ID;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === SYSTEM_UPDATES_USER_ID;
  }
  return tmp;
};
