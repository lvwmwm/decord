// Module ID: 6552
// Function ID: 6553
// Name: isChangelogChannel
// Dependencies: [4643, 4696, 2]
// Exports: default

// Module 6552 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4696 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
