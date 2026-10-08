// Module ID: 2113
// Function ID: 2114
// Name: isChangelogUser
// Dependencies: [2114, 2]
// Exports: default

// Module 2113 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 2114 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  return null != arg0 && arg0 === SYSTEM_UPDATES_USER_ID;
};
