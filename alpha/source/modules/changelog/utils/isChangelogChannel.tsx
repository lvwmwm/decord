// Module ID: 6893
// Function ID: 6894
// Name: isChangelogChannel
// Dependencies: [4863, 4916, 2]
// Exports: default

// Module 6893 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4916 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
