// Module ID: 7075
// Function ID: 7076
// Name: isChangelogChannel
// Dependencies: [5159, 5212, 2]
// Exports: default

// Module 7075 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 5212 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
