// Module ID: 6880
// Function ID: 6881
// Name: isChangelogChannel
// Dependencies: [4857, 4907, 2]
// Exports: default

// Module 6880 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4907 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
