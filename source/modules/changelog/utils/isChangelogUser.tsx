// Module ID: 2009
// Function ID: 2010
// Name: isChangelogUser
// Dependencies: [2010, 2]
// Exports: default

// Module 2009 (isChangelogUser)
import set from "set" /* 2 */;
import CHANGELOG_MODAL_KEY from "CHANGELOG_MODAL_KEY" /* 2010 */;

const SYSTEM_UPDATES_USER_ID = CHANGELOG_MODAL_KEY.SYSTEM_UPDATES_USER_ID;
const result = set.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === SYSTEM_UPDATES_USER_ID;
  }
  return tmp;
};
