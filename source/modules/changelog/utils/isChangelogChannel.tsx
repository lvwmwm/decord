// Module ID: 8142
// Function ID: 64966
// Name: isChangelogChannel
// Dependencies: [1348, 1906, 2]
// Exports: default

// Module 8142 (isChangelogChannel)
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
