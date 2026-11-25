// Module ID: 19820
// Function ID: 19821
// Name: navigateToSystemDM
// Dependencies: [4861, 19819, 6766, 2]
// Exports: default

// Module 19820 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6766 */;
import Constants from "Constants" /* 19819 */;
import ChannelStore from "ChannelStore" /* 4861 */;
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
