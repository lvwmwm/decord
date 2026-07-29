// Module ID: 8204
// Function ID: 8205
// Name: isChangelogChannel
// Dependencies: [1372, 1930, 2]
// Exports: default

// Module 8204 (isChangelogChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY";

const result = require("set").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
