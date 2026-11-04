// Module ID: 6853
// Function ID: 6854
// Name: isChangelogChannel
// Dependencies: [4855, 4905, 2]
// Exports: default

// Module 6853 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4905 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
