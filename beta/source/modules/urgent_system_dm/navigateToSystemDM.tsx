// Module ID: 17907
// Function ID: 17908
// Name: navigateToSystemDM
// Dependencies: [2045, 17906, 5630, 2]
// Exports: default

// Module 17907 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5630 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const SYSTEM_USER = fn(17906).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
