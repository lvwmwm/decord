// Module ID: 7031
// Function ID: 7032
// Name: isChangelogChannel
// Dependencies: [4992, 5045, 2]
// Exports: default

// Module 7031 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 5045 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
