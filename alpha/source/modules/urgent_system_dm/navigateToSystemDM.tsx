// Module ID: 19677
// Function ID: 19678
// Name: navigateToSystemDM
// Dependencies: [4762, 19676, 6529, 2]
// Exports: default

// Module 19677 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6529 */;
import Constants from "Constants" /* 19676 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import size from "module_2" /* 2 */;

const SYSTEM_USER = Constants.SYSTEM_USER;
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const obj = SelectedChannelActionCreatorsDefault;
    const privateChannel = obj.selectPrivateChannel(dMFromUserId);
  }
};
