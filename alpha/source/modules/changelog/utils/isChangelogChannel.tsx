// Module ID: 6823
// Function ID: 6824
// Name: isChangelogChannel
// Dependencies: [4824, 4874, 2]
// Exports: default

// Module 6823 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4874 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
