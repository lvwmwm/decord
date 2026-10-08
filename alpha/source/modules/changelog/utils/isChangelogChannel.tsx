// Module ID: 6089
// Function ID: 6090
// Name: isChangelogChannel
// Dependencies: [2063, 2114, 2]
// Exports: default

// Module 6089 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 2114 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
