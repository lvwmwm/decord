// Module ID: 17971
// Function ID: 17972
// Name: navigateToSystemDM
// Dependencies: [2063, 17970, 5885, 2]
// Exports: default

// Module 17971 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5885 */;
import Constants from "Constants" /* 17970 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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
