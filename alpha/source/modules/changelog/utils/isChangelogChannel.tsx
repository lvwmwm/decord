// Module ID: 6772
// Function ID: 6773
// Name: isChangelogChannel
// Dependencies: [4800, 4850, 2]
// Exports: default

// Module 6772 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4850 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
