// Module ID: 10425
// Function ID: 80406
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10425 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const NotificationTypes = arg1(dependencyMap[5]).NotificationTypes;
let closure_6 = null;
let closure_7 = {};
let tmp2 = (PersistedStore) => {
  class PushFeedbackStore {
    constructor() {
      self = this;
      tmp = PushFeedbackStore(this, PushFeedbackStore);
      obj = closure_3(PushFeedbackStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = PushFeedbackStore;
  callback2(PushFeedbackStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(pushFeedback) {
      if (null != pushFeedback) {
        pushFeedback = pushFeedback.pushFeedback;
        if (null != pushFeedback.pushFeedbackMap) {
          const pushFeedbackMap = pushFeedback.pushFeedbackMap;
        }
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return { pushFeedback: closure_6, pushFeedbackMap: closure_7 };
    }
  };
  items[1] = obj;
  obj = {
    key: "isEligible",
    value() {
      return null != closure_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isUserPushMessage",
    value(arg0) {
      let messageId;
      if (null != closure_6) {
        messageId = closure_6.messageId;
      }
      return messageId === arg0;
    }
  };
  items[4] = {
    key: "getPushFeedback",
    value(arg0, arg1) {
      let messageId;
      if (null != closure_6) {
        messageId = closure_6.messageId;
      }
      let tmp2 = null;
      if (messageId === arg1) {
        tmp2 = null;
        if (closure_6.channelId === arg0) {
          tmp2 = closure_6;
        }
      }
      return tmp2;
    }
  };
  return callback(PushFeedbackStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "PushFeedbackStore";
tmp2.persistKey = "PushFeedbackPersistedStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  PUSH_FEEDBACK_RECEIVED_NOTIFICATION: function handleReceivedNotification(arg0) {
    let channelId;
    let eligibleAt;
    let messageId;
    let notificationType;
    let viewCount;
    ({ notificationType, messageId, channelId } = arg0);
    if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType) {
      let flag = true;
    } else {
      flag = false;
    }
    if (flag) {
      let tmp3 = closure_7[notificationType];
      if (null == tmp3) {
        let obj = { messageId, channelId, pushType: notificationType };
        tmp3 = obj;
      }
      let userViewInfo = tmp3.userViewInfo;
      if (null == userViewInfo) {
        userViewInfo = { isOverdue: false, _beaconUrl: true };
      }
      ({ eligibleAt, viewCount } = userViewInfo);
      const _Date = Date;
      const timestamp = Date.now();
      if (eligibleAt < timestamp) {
        eligibleAt = timestamp + 604800000;
        let num2 = 1;
      } else if (viewCount >= 10) {
        if (null != null) {
          obj = { messageId, channelId, pushType: notificationType, userViewInfo: null };
          let closure_6 = obj;
          closure_7[notificationType] = obj;
        } else {
          closure_6 = null;
        }
      } else {
        num2 = viewCount + 1;
      }
      obj = { eligibleAt, viewCount: num2 };
    }
  },
  PUSH_FEEDBACK_CLEANUP: function handleCleanup() {
    let closure_6 = null;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != channelId) {
        if (channelId !== channelId.channelId) {
          channelId = null;
        }
      }
    }
    return false;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/push_feedback/PushFeedbackStore.tsx");

export default tmp2;
