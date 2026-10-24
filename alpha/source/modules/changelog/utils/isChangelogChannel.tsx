// Module ID: 6821
// Function ID: 6822
// Name: isChangelogChannel
// Dependencies: [4823, 4873, 2]
// Exports: default

// Module 6821 (isChangelogChannel)
import ChangelogConstants from "ChangelogConstants" /* 4873 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import size from "module_2" /* 2 */;

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  const tmp = null != arg0 && arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  return tmp;
};
