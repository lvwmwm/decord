// Module ID: 19625
// Function ID: 19626
// Name: UrgentSystemDMManagerBase
// Dependencies: [4863, 4917, 1383, 19626, 1072, 8752, 7287, 2]

// Module 19625 (UrgentSystemDMManagerBase)
import Constants from "Constants" /* 1072 */;
import UserActionCreatorsAll from "UserActionCreators" /* 8752 */;
import Constants2 from "Constants" /* 19626 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import UserStore from "UserStore" /* 1383 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
import size from "module_2" /* 2 */;

function maybeShowUrgentMessageModal(handleShowUrgentMessageAlert) {
  const currentUser = UserStore.getCurrentUser();
  const obj = UserStore;
  if (null != currentUser) {
    const channelId = SelectedChannelStore.getChannelId();
    const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
    const obj3 = ChannelStore;
    const tmp3 = SYSTEM_USER;
    if (currentUser.hasUrgentMessages()) {
      if (dMFromUserId !== channelId) {
        const tmp5 = c7;
        if (!tmp5) {
          c7 = true;
          handleShowUrgentMessageAlert();
        }
      }
    }
    const currentUser1 = obj.getCurrentUser();
    let hasUrgentMessagesResult = null != currentUser1;
    const dMFromUserId1 = obj3.getDMFromUserId(tmp3);
    if (hasUrgentMessagesResult) {
      hasUrgentMessagesResult = currentUser1.hasUrgentMessages();
    }
    if (hasUrgentMessagesResult) {
      hasUrgentMessagesResult = channelId === dMFromUserId1;
    }
    if (hasUrgentMessagesResult) {
      c7 = false;
      const obj5 = UserActionCreatorsAll;
      obj5.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
    }
  }
}
function maybeClearUrgentMessage(channelId) {
  channelId = channelId.channelId;
  const currentUser = UserStore.getCurrentUser();
  let hasUrgentMessagesResult = null != currentUser;
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = currentUser.hasUrgentMessages();
  }
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = channelId === dMFromUserId;
  }
  if (hasUrgentMessagesResult) {
    c7 = false;
    const obj2 = UserActionCreatorsAll;
    obj2.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
  }
}
const SYSTEM_USER = Constants2.SYSTEM_USER;
const UserFlags = Constants.UserFlags;
let c7 = false;
class UrgentSystemDMManagerBase extends AutomaticLifecycleManager {
  constructor(handleShowUrgentMessageAlert) {
    const tmp2 = new UrgentSystemDMManagerBase(tmp, new.target);
    let closure_0 = tmp2;
    const obj = {
      POST_CONNECTION_OPEN() {
        maybeShowUrgentMessageModal(closure_0.handleShowUrgentMessageAlert);
      },
      MESSAGE_CREATE() {
        maybeShowUrgentMessageModal(closure_0.handleShowUrgentMessageAlert);
      },
      CHANNEL_SELECT: maybeClearUrgentMessage
    };
    tmp2.actions = obj;
    tmp2.handleShowUrgentMessageAlert = handleShowUrgentMessageAlert;
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx");

export default UrgentSystemDMManagerBase;
