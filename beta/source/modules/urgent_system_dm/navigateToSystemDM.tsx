// Module ID: 19634
// Function ID: 19635
// Name: navigateToSystemDM
// Dependencies: [4863, 19633, 6706, 2]
// Exports: default

// Module 19634 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6706 */;
import Constants from "Constants" /* 19633 */;
import ChannelStore from "ChannelStore" /* 4863 */;
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
