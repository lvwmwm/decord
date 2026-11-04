// Module ID: 7028
// Function ID: 7029
// Name: isChangelogChannel
// Dependencies: [4990, 5043, 2]
// Exports: default

// Module 7028 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 5043 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
