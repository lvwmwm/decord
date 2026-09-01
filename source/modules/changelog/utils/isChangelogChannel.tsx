// Module ID: 8645
// Function ID: 8646
// Name: isChangelogChannel
// Dependencies: [1387, 1980, 2]
// Exports: default

// Module 8645 (isChangelogChannel)
import closure_0 from "ensureGuildLoaded" /* 1387 */;
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY" /* 1980 */;

const result = require("set").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
