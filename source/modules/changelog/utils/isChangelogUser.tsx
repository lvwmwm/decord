// Module ID: 1905
// Function ID: 21389
// Name: isChangelogUser
// Dependencies: [1906, 2]
// Exports: default

// Module 1905 (isChangelogUser)
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY";

const result = require("set").fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === SYSTEM_UPDATES_USER_ID;
  }
  return tmp;
};
