// Module ID: 6550
// Function ID: 6551
// Name: isChangelogChannel
// Dependencies: [4641, 4694, 2]
// Exports: default

// Module 6550 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4694 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
