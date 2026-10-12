// Module ID: 18263
// Function ID: 18264
// Name: navigateToSystemDM
// Dependencies: [2065, 18262, 5889, 2]
// Exports: default

// Module 18263 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5889 */;
import Constants from "Constants" /* 18262 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
