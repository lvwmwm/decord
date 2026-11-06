// Module ID: 6973
// Function ID: 6974
// Name: isChangelogChannel
// Dependencies: [5019, 5072, 2]
// Exports: default

// Module 6973 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 5072 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
