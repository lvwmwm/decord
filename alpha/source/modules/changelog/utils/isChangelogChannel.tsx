// Module ID: 7004
// Function ID: 7005
// Name: isChangelogChannel
// Dependencies: [5092, 5145, 2]
// Exports: default

// Module 7004 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 5145 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
