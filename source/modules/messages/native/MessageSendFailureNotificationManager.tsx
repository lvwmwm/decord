// Module ID: 16558
// Function ID: 129149
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 1906, 3947, 1849, 6651, 653, 12690, 10265, 10266, 10667, 1212, 5078, 2]

// Module 16558 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { LocalNotificationTypes } from "LocalNotificationTypes";
import tmp3 from "AutomaticLifecycleManager";

let closure_12;
let closure_13;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleMessageSendFailure(shouldNotify) {
  let channelId;
  let messageId;
  ({ channelId, messageId } = shouldNotify);
  if (shouldNotify.shouldNotify) {
    if ("active" !== state.getState()) {
      let obj = importDefault(10667);
      obj = { category: "local" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.alertTitle = intl.string(require(1212) /* getSystemLocale */.t.LdlH2M);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.alertBody = intl2.string(require(1212) /* getSystemLocale */.t.xxRPOT);
      obj = { channelId, messageId, type: LocalNotificationTypes.MESSAGE_SEND_FAILED };
      obj.userInfo = obj;
      const result = obj.presentLocalNotification(obj);
    } else if (channelId !== channelId.getChannelId(guildId.getGuildId())) {
      const obj1 = {
        type: constants.MESSAGE_FAILED_TO_SEND,
        channelId,
        messageId,
        key: `${channelId}-${messageId}`,
        duration: 5000,
        onDismiss() {
              outer1_1(outer1_2[11]).clearNotification();
            }
      };
      const obj4 = importDefault(10265);
      obj1.inAppNotificationId = require(10266) /* hasMedia */.generateInAppNotificationId();
      obj4.enqueueNotification(obj1);
      const obj6 = require(10266) /* hasMedia */;
    }
  }
}
function handleMessageCreate(message) {
  message = message.message;
  const sendMessageOptions = message.sendMessageOptions;
  let tmp = null != sendMessageOptions && sendMessageOptions.isHydratingExpiredPendingMessage;
  if (tmp) {
    tmp = message.state === constants2.SEND_FAILED;
  }
  if (tmp) {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    const author = message.author;
    let id1;
    if (null != author) {
      id1 = author.id;
    }
    tmp = id === id1;
  }
  if (tmp) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      outer1_16({ channelId: message.channel_id, messageId: message.id, shouldNotify: true });
    }, 3000);
  }
}
({ InAppNotificationTypes: closure_12, MessageStates: closure_13 } = ME);
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/messages/native/MessageSendFailureNotificationManager.tsx");

export default tmp3;
