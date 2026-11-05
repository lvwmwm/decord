// Module ID: 5044
// Function ID: 5045
// Name: isChangelogUser
// Dependencies: [5045, 2]
// Exports: default

// Module 5044 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 5045 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  return null != arg0 && arg0 === SYSTEM_UPDATES_USER_ID;
};
