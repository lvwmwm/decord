// Module ID: 17614
// Function ID: 17615
// Name: navigateToSystemDM
// Dependencies: [2051, 17613, 5568, 2]
// Exports: default

// Module 17614 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5568 */;
import Constants from "Constants" /* 17613 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const SYSTEM_USER = Constants.SYSTEM_USER;
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const obj = SelectedChannelActionCreatorsDefault;
    const privateChannel = obj.selectPrivateChannel(dMFromUserId);
  }
};
