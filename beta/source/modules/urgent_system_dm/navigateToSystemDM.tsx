// Module ID: 17917
// Function ID: 17918
// Name: navigateToSystemDM
// Dependencies: [2045, 17916, 5662, 2]
// Exports: default

// Module 17917 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5662 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const SYSTEM_USER = fn(17916).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
