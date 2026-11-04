// Module ID: 4904
// Function ID: 4905
// Name: isChangelogUser
// Dependencies: [4905, 2]
// Exports: default

// Module 4904 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 4905 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  return null != arg0 && arg0 === SYSTEM_UPDATES_USER_ID;
};
