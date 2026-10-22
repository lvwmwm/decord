// Module ID: 6806
// Function ID: 6807
// Name: isChangelogChannel
// Dependencies: [4821, 4871, 2]
// Exports: default

// Module 6806 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4871 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
