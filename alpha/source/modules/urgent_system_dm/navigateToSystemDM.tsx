// Module ID: 18718
// Function ID: 18719
// Name: navigateToSystemDM
// Dependencies: [4800, 18717, 6585, 2]
// Exports: default

// Module 18718 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6585 */;
import Constants from "Constants" /* 18717 */;
import ChannelStore from "ChannelStore" /* 4800 */;
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
