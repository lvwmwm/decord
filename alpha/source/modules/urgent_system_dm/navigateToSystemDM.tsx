// Module ID: 17458
// Function ID: 17459
// Name: navigateToSystemDM
// Dependencies: [2045, 17457, 5890, 2]
// Exports: default

// Module 17458 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5890 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const SYSTEM_USER = fn(17457).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
