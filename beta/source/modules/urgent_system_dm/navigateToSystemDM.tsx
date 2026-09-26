// Module ID: 17908
// Function ID: 17909
// Name: navigateToSystemDM
// Dependencies: [2041, 17907, 5660, 2]
// Exports: default

// Module 17908 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5660 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const SYSTEM_USER = fn(17907).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
