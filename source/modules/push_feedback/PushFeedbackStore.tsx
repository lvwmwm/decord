// Module ID: 10442
// Function ID: 80503
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5593, 566, 686, 2]

// Module 10442 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { NotificationTypes } from "str2";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let c6 = null;
let closure_7 = {};
let tmp2 = ((PersistedStore) => {
  class PushFeedbackStore {
    constructor() {
      self = this;
      tmp = PushFeedbackStore(this, PushFeedbackStore);
      obj = outer1_3(PushFeedbackStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PushFeedbackStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(pushFeedback) {
      if (null != pushFeedback) {
        const outer1_6 = pushFeedback.pushFeedback;
        if (null != pushFeedback.pushFeedbackMap) {
          const outer1_7 = pushFeedback.pushFeedbackMap;
        }
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return { pushFeedback: outer1_6, pushFeedbackMap: outer1_7 };
    }
  };
  items[1] = obj;
  obj = {
    key: "isEligible",
    value() {
      return null != outer1_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isUserPushMessage",
    value(arg0) {
      let messageId;
      if (null != outer1_6) {
        messageId = outer1_6.messageId;
      }
      return messageId === arg0;
    }
  };
  items[4] = {
    key: "getPushFeedback",
    value(arg0, arg1) {
      let messageId;
      if (null != outer1_6) {
        messageId = outer1_6.messageId;
      }
      let tmp2 = null;
      if (messageId === arg1) {
        tmp2 = null;
        if (outer1_6.channelId === arg0) {
          tmp2 = outer1_6;
        }
      }
      return tmp2;
    }
  };
  return callback(PushFeedbackStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "PushFeedbackStore";
tmp2.persistKey = "PushFeedbackPersistedStore";
tmp2 = new tmp2(require("dispatcher"), {
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
      let tmp3 = table[notificationType];
      if (null == tmp3) {
        let obj = { messageId, channelId, pushType: notificationType };
        tmp3 = obj;
      }
      let userViewInfo = tmp3.userViewInfo;
      if (null == userViewInfo) {
        userViewInfo = { eligibleAt: 0, viewCount: 0 };
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
          let c6 = obj;
          table[notificationType] = obj;
        } else {
          c6 = null;
        }
      } else {
        num2 = viewCount + 1;
      }
      obj = { eligibleAt, viewCount: num2 };
    }
  },
  PUSH_FEEDBACK_CLEANUP: function handleCleanup() {
    let c6 = null;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != _null) {
        if (channelId !== _null.channelId) {
          _null = null;
        }
      }
    }
    return false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/push_feedback/PushFeedbackStore.tsx");

export default tmp2;
