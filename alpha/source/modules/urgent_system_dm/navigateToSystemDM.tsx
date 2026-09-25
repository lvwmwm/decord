// Module ID: 17235
// Function ID: 17236
// Name: navigateToSystemDM
// Dependencies: [2044, 17234, 5718, 2]
// Exports: default

// Module 17235 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5718 */;
import ChannelStore from "ChannelStore" /* 2044 */;

const SYSTEM_USER = fn(17234).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
