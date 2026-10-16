// Module ID: 6309
// Function ID: 6310
// Name: isChangelogChannel
// Dependencies: [2068, 2118, 2]
// Exports: default

// Module 6309 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 2118 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
