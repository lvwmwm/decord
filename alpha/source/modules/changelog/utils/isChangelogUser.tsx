// Module ID: 2096
// Function ID: 2097
// Name: isChangelogUser
// Dependencies: [2097, 2]
// Exports: default

// Module 2096 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 2097 */;
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
