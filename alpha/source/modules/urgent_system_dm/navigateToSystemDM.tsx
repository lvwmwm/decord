// Module ID: 19274
// Function ID: 19275
// Name: navigateToSystemDM
// Dependencies: [4856, 19273, 6669, 2]
// Exports: default

// Module 19274 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6669 */;
import Constants from "Constants" /* 19273 */;
import ChannelStore from "ChannelStore" /* 4856 */;
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
