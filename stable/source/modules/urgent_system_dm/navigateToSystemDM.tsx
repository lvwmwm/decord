// Module ID: 17613
// Function ID: 17614
// Name: navigateToSystemDM
// Dependencies: [1957, 17612, 5492, 2]
// Exports: default

// Module 17613 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5492 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const SYSTEM_USER = fn(17612).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
