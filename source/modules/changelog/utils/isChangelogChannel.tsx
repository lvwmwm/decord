// Module ID: 8340
// Function ID: 66086
// Name: isChangelogChannel
// Dependencies: [1348, 1905, 2]
// Exports: default

// Module 8340 (isChangelogChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY";

const result = require("set").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
