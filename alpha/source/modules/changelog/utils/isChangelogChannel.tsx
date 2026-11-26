// Module ID: 6983
// Function ID: 6984
// Name: isChangelogChannel
// Dependencies: [4892, 4945, 2]
// Exports: default

// Module 6983 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4945 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
