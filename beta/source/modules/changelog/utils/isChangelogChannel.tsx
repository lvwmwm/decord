// Module ID: 6671
// Function ID: 6672
// Name: isChangelogChannel
// Dependencies: [4762, 4815, 2]
// Exports: default

// Module 6671 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4815 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
