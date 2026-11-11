// Module ID: 5144
// Function ID: 5145
// Name: isChangelogUser
// Dependencies: [5145, 2]
// Exports: default

// Module 5144 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 5145 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  return null != arg0 && arg0 === SYSTEM_UPDATES_USER_ID;
};
