// Module ID: 6579
// Function ID: 6580
// Name: isChangelogChannel
// Dependencies: [4672, 4725, 2]
// Exports: default

// Module 6579 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4725 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
