// Module ID: 2093
// Function ID: 2094
// Name: isChangelogUser
// Dependencies: [2094, 2]
// Exports: default

// Module 2093 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 2094 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === SYSTEM_UPDATES_USER_ID;
  }
  return tmp;
};
