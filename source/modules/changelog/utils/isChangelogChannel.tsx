// Module ID: 8374
// Function ID: 8375
// Name: isChangelogChannel
// Dependencies: [1957, 2010, 2]
// Exports: default

// Module 8374 (isChangelogChannel)
import closure_0 from "ensureGuildLoaded" /* 1957 */;
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY" /* 2010 */;

const result = require("set").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
