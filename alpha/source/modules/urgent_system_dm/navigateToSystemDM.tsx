// Module ID: 18542
// Function ID: 18543
// Name: navigateToSystemDM
// Dependencies: [2065, 18541, 6105, 2]
// Exports: default

// Module 18542 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6105 */;
import Constants from "Constants" /* 18541 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
