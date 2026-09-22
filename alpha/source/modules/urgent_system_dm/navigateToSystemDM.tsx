// Module ID: 17915
// Function ID: 17916
// Name: navigateToSystemDM
// Dependencies: [2042, 17914, 5630, 2]
// Exports: default

// Module 17915 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5630 */;
import ChannelStore from "ChannelStore" /* 2042 */;

const SYSTEM_USER = fn(17914).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
