// Module ID: 8304
// Function ID: 8305
// Name: isChangelogChannel
// Dependencies: [1386, 1979, 2]
// Exports: default

// Module 8304 (isChangelogChannel)
import closure_0 from "ensureGuildLoaded" /* 1386 */;
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY" /* 1979 */;

const result = require("set").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
