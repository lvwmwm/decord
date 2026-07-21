// Module ID: 16386
// Function ID: 126609
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16386 (_isNativeReflectConstruct)
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
      let obj = importDefault(dependencyMap[13]);
      obj = { category: "local" };
      const intl = arg1(dependencyMap[14]).intl;
      obj.alertTitle = intl.string(arg1(dependencyMap[14]).t.LdlH2M);
      const intl2 = arg1(dependencyMap[14]).intl;
      obj.alertBody = intl2.string(arg1(dependencyMap[14]).t.xxRPOT);
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
              callback(closure_2[11]).clearNotification();
            }
      };
      const obj4 = importDefault(dependencyMap[11]);
      obj1.inAppNotificationId = arg1(dependencyMap[12]).generateInAppNotificationId();
      obj4.enqueueNotification(obj1);
      const obj6 = arg1(dependencyMap[12]);
    }
  }
}
function handleMessageCreate(message) {
  message = message.message;
  const arg1 = message;
  const sendMessageOptions = message.sendMessageOptions;
  let tmp = null != sendMessageOptions && sendMessageOptions.isHydratingExpiredPendingMessage;
  if (tmp) {
    tmp = message.state === constants2.SEND_FAILED;
  }
  if (tmp) {
    const currentUser = currentUser.getCurrentUser();
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
      callback({ channelId: message.channel_id, messageId: message.id, shouldNotify: true });
    }, 3000);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
({ InAppNotificationTypes: closure_12, MessageStates: closure_13 } = arg1(dependencyMap[9]));
const LocalNotificationTypes = arg1(dependencyMap[10]).LocalNotificationTypes;
let tmp3 = (arg0) => {
  class MessageSendFailureNotificationManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, MessageSendFailureNotificationManager);
      items1 = [...items];
      obj = closure_6(MessageSendFailureNotificationManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { MESSAGE_CREATE: closure_17, MESSAGE_SEND_FAILED: closure_16 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = MessageSendFailureNotificationManager;
  callback2(MessageSendFailureNotificationManager, arg0);
  return callback(MessageSendFailureNotificationManager);
}(importDefault(dependencyMap[15]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/messages/native/MessageSendFailureNotificationManager.tsx");

export default tmp3;
