// Module ID: 17903
// Function ID: 17904
// Name: navigateToSystemDM
// Dependencies: [2041, 17902, 5628, 2]
// Exports: default

// Module 17903 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5628 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const SYSTEM_USER = fn(17902).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
