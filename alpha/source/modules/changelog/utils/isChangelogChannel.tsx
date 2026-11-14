// Module ID: 7067
// Function ID: 7068
// Name: isChangelogChannel
// Dependencies: [5155, 5208, 2]
// Exports: default

// Module 7067 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 5208 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
