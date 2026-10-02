// Module ID: 17646
// Function ID: 17647
// Name: MessageSendFailureNotificationManager
// Dependencies: [2102, 4657, 1378, 1986, 1086, 8501, 12221, 12223, 8741, 1127, 6540, 2]

// Module 17646 (MessageSendFailureNotificationManager)
import intl3 from "intl" /* 1127 */;
import Constants2 from "Constants" /* 8501 */;
import PushNotificationDefault from "PushNotification" /* 8741 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 12221 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12223 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import UserStore from "UserStore" /* 1378 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Constants from "Constants" /* 1086 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
function handleMessageSendFailure(shouldNotify) {
  let channelId;
  let intl;
  let intl2;
  let messageId;
  let obj2;
  let obj5;
  ({ channelId, messageId } = shouldNotify);
  if (shouldNotify.shouldNotify) {
    if ("active" !== AppStateStore.getState()) {
      let obj = { category: "local", alertTitle: intl.string(intl3.t.LdlH2M), alertBody: intl2.string(intl3.t.xxRPOT), userInfo: obj2 };
      const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
      PushNotificationDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      obj2 = { channelId, messageId, type: LocalNotificationTypes.MESSAGE_SEND_FAILED };
      const result = presentLocalNotification(obj);
    } else if (channelId !== SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId())) {
      const MESSAGE_FAILED_TO_SEND = metroImportDefault.MESSAGE_FAILED_TO_SEND;
      const obj3 = InAppNotificationUtils;
      const notificationDuration = obj3.getNotificationDuration(MESSAGE_FAILED_TO_SEND);
      const obj4 = {
        type: MESSAGE_FAILED_TO_SEND,
        channelId,
        messageId,
        key: `${channelId}-${messageId}`,
        duration: notificationDuration,
        onDismiss() {
              const obj = InAppNotificationActionCreatorsDefault;
              obj.clearNotification();
            },
        inAppNotificationId: obj5.generateInAppNotificationId()
      };
      const enqueueNotification = InAppNotificationActionCreatorsDefault.enqueueNotification;
      InAppNotificationActionCreatorsDefault;
      obj5 = InAppNotificationUtils;
      enqueueNotification(obj4);
    }
  }
}
function handleMessageCreate(message) {
  message = message.message;
  const sendMessageOptions = message.sendMessageOptions;
  let prop;
  if (sendMessageOptions != null) {
    prop = sendMessageOptions.isHydratingExpiredPendingMessage;
  }
  if (prop) {
    prop = message.state === constants2.SEND_FAILED;
  }
  if (prop) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    const author = message.author;
    let id1;
    if (author != null) {
      id1 = author.id;
    }
    prop = id === id1;
  }
  if (prop) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const obj = { channelId: message.channel_id, messageId: message.id, shouldNotify: true };
      handleMessageSendFailure(obj);
    }, 3000);
  }
}
({ InAppNotificationTypes: metroImportDefault, MessageStates: metroImportAll } = Constants);
const LocalNotificationTypes = Constants2.LocalNotificationTypes;
class MessageSendFailureNotificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { MESSAGE_CREATE: handleMessageCreate, MESSAGE_SEND_FAILED: handleMessageSendFailure };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const messageSendFailureNotificationManager = new MessageSendFailureNotificationManager();
let result = size.fileFinishedImporting("modules/messages/native/MessageSendFailureNotificationManager.tsx");

export default messageSendFailureNotificationManager;
