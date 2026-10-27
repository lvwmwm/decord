// Module ID: 4873
// Function ID: 4874
// Name: isChangelogUser
// Dependencies: [4874, 2]
// Exports: default

// Module 4873 (isChangelogUser)
import ChangelogConstants from "ChangelogConstants" /* 4874 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  return null != arg0 && arg0 === SYSTEM_UPDATES_USER_ID;
};
