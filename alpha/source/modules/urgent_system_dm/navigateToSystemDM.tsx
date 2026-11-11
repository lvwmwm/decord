// Module ID: 20262
// Function ID: 20263
// Name: navigateToSystemDM
// Dependencies: [5092, 20261, 6872, 2]
// Exports: default

// Module 20262 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6872 */;
import Constants from "Constants" /* 20261 */;
import ChannelStore from "ChannelStore" /* 5092 */;
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
