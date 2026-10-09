// Module ID: 18131
// Function ID: 18132
// Name: navigateToSystemDM
// Dependencies: [2064, 18130, 5886, 2]
// Exports: default

// Module 18131 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5886 */;
import Constants from "Constants" /* 18130 */;
import ChannelStore from "ChannelStore" /* 2064 */;
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
