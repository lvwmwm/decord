// Module ID: 7822
// Function ID: 7823
// Name: isChangelogChannel
// Dependencies: [2045, 2098, 2]
// Exports: default

// Module 7822 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 2098 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
