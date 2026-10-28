// Module ID: 6857
// Function ID: 6858
// Name: isChangelogChannel
// Dependencies: [4856, 4906, 2]
// Exports: default

// Module 6857 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4906 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
