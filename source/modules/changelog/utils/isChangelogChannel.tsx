// Module ID: 9083
// Function ID: 9084
// Name: isChangelogChannel
// Dependencies: [1391, 1980, 2]
// Exports: default

// Module 9083 (isChangelogChannel)
import closure_0 from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY" /* 1980 */;

const result = require("set").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
