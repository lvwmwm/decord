// Module ID: 6084
// Function ID: 6085
// Name: isChangelogChannel
// Dependencies: [2065, 2115, 2]
// Exports: default

// Module 6084 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 2115 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
