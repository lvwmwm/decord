// Module ID: 17265
// Function ID: 17266
// Name: navigateToSystemDM
// Dependencies: [2045, 17264, 5723, 2]
// Exports: default

// Module 17265 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const SYSTEM_USER = fn(17264).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
