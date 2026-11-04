// Module ID: 19001
// Function ID: 19002
// Name: navigateToSystemDM
// Dependencies: [4855, 19000, 6666, 2]
// Exports: default

// Module 19001 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6666 */;
import Constants from "Constants" /* 19000 */;
import ChannelStore from "ChannelStore" /* 4855 */;
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
