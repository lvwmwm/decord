// Module ID: 17906
// Function ID: 17907
// Name: navigateToSystemDM
// Dependencies: [2045, 17905, 5630, 2]
// Exports: default

// Module 17906 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5630 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const SYSTEM_USER = fn(17905).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
