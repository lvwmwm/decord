// Module ID: 19736
// Function ID: 19737
// Name: navigateToSystemDM
// Dependencies: [4672, 19735, 6437, 2]
// Exports: default

// Module 19736 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6437 */;
import Constants from "Constants" /* 19735 */;
import ChannelStore from "ChannelStore" /* 4672 */;
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
