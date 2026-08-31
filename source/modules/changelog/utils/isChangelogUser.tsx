// Module ID: 1979
// Function ID: 1980
// Name: isChangelogUser
// Dependencies: [1980, 2]
// Exports: default

// Module 1979 (isChangelogUser)
import set from "set" /* 2 */;
import CHANGELOG_MODAL_KEY from "CHANGELOG_MODAL_KEY" /* 1980 */;

const SYSTEM_UPDATES_USER_ID = CHANGELOG_MODAL_KEY.SYSTEM_UPDATES_USER_ID;
const result = set.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === SYSTEM_UPDATES_USER_ID;
  }
  return tmp;
};
