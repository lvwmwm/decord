// Module ID: 19950
// Function ID: 19951
// Name: navigateToSystemDM
// Dependencies: [4992, 19949, 6844, 2]
// Exports: default

// Module 19950 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6844 */;
import Constants from "Constants" /* 19949 */;
import ChannelStore from "ChannelStore" /* 4992 */;
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
