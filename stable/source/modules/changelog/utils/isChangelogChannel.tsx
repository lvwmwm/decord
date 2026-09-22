// Module ID: 8492
// Function ID: 8493
// Name: isChangelogChannel
// Dependencies: [1957, 2010, 2]
// Exports: default

// Module 8492 (isChangelogChannel)
import ChannelStore from "ChannelStore" /* 1957 */;

const SYSTEM_UPDATES_USER_ID = fn(2010).SYSTEM_UPDATES_USER_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
