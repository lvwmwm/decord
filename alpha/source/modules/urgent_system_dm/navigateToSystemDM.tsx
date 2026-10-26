// Module ID: 18963
// Function ID: 18964
// Name: navigateToSystemDM
// Dependencies: [4823, 18962, 6634, 2]
// Exports: default

// Module 18963 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6634 */;
import Constants from "Constants" /* 18962 */;
import ChannelStore from "ChannelStore" /* 4823 */;
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
