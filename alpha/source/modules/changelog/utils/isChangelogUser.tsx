// Module ID: 4910
// Function ID: 4911
// Name: isChangelogUser
// Dependencies: [4911, 2]
// Exports: default

// Module 4910 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 4911 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  return null != arg0 && arg0 === SYSTEM_UPDATES_USER_ID;
};
