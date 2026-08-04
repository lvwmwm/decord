// Module ID: 8858
// Function ID: 8859
// Name: isChangelogChannel
// Dependencies: [1372, 1930, 2]
// Exports: default

// Module 8858 (isChangelogChannel)
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
