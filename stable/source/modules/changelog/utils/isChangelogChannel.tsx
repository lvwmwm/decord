// Module ID: 7826
// Function ID: 7827
// Name: isChangelogChannel
// Dependencies: [2051, 2101, 2]
// Exports: default

// Module 7826 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 2101 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
