// Module ID: 6948
// Function ID: 6949
// Name: isChangelogChannel
// Dependencies: [4989, 5042, 2]
// Exports: default

// Module 6948 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 5042 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
