// Module ID: 7814
// Function ID: 7815
// Name: isChangelogChannel
// Dependencies: [2044, 2097, 2]
// Exports: default

// Module 7814 (isChangelogChannel)
import ChannelStore from "ChannelStore" /* 2044 */;

const SYSTEM_UPDATES_USER_ID = fn(2097).SYSTEM_UPDATES_USER_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
