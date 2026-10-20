// Module ID: 4849
// Function ID: 4850
// Name: isChangelogUser
// Dependencies: [4850, 2]
// Exports: default

// Module 4849 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 4850 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  return null != arg0 && arg0 === SYSTEM_UPDATES_USER_ID;
};
