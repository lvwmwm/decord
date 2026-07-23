// Module ID: 16590
// Function ID: 129428
// Name: onStageConnectionError
// Dependencies: [5, 7461, 6758, 1194, 1348, 1849, 5593, 653, 4195, 1354, 11453, 3, 3831, 1212, 9314, 3982, 1207, 7477, 4138, 5737, 8353, 3981, 15143, 6883, 8492, 5484, 4140, 8922, 675, 4324, 477, 10815, 21, 15141, 6707, 20, 6708, 4808, 12644, 11456, 566, 10804, 9878, 4111, 668, 9501, 8321, 7087, 686, 4337, 1198, 4336, 12857, 2]
// Exports: default

// Module 16590 (onStageConnectionError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { NotificationTypes } from "str2";
import ME from "ME";
import { StreamTypes } from "StreamIssueReportReasons";
import { GuildScheduledEventEntityTypes as closure_16 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { MultiAccountSwitchLocation as closure_17 } from "MAX_ACCOUNTS";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function onStageConnectionError() {
  let obj = importDefault(3831);
  obj = { key: "STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.ah3RLk);
  obj.icon = importDefault(9314);
  obj.open(obj);
}
function waitForConnection() {
  return new Promise((arg0) => {
    outer1_5(arg0);
  });
}
function waitForDataOrConnection() {
  return _waitForDataOrConnection(...arguments);
}
function _waitForDataOrConnection() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function waitForNavigationReady() {
  return _waitForNavigationReady(...arguments);
}
function _waitForNavigationReady() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _connectToStage() {
  return _connectToStage2(...arguments);
}
function _connectToStage2() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleStageNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleGuildEventNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleRelationshipAddNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleCallRingNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleCallConnectNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleFriendSuggestionCreateNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _maybeAckNotificationCenter() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function receiveNotification_(type) {
  const _require = type;
  let obj = _require(10804);
  const result = obj.initializeRouteManagerIfNeeded();
  let importDefault = false;
  if ("MESSAGE_CREATE" === type.type) {
    const _HermesInternal2 = HermesInternal;
    importDefaultResult.log("Notification clicked of type " + type.type + " with guild:" + type.guild_id + " channel:" + type.channel_id + " message:" + type.message_id);
    obj = {};
    ({ guild_id: obj10.guildId, channel_id: obj10.channelId, message_id: obj10.messageId } = type);
    obj.isPreload = true;
    const messages = importDefault(9878).fetchMessages(obj);
    importDefault = true;
    let flag = true;
    const obj9 = importDefault(9878);
  } else {
    flag = false;
    if ("GENERIC_PUSH_NOTIFICATION_SENT" === type.type) {
      flag = false;
      if (null != type.deeplink) {
        flag = false;
        if ("" !== type.deeplink) {
          const payload = importDefault(4111)(type.deeplink).payload;
          if (payload.type === _require(668).LinkingTypes.MESSAGE) {
            let tracking_type;
            if (null != type) {
              tracking_type = type.tracking_type;
            }
            if (null == tracking_type) {
              tracking_type = type.type;
            }
            if (tmp13) {
              _require(9501).receivedNotification(payload.messageId, payload.channelId, tracking_type);
              const obj6 = _require(9501);
            }
            obj = {};
            ({ guildId: obj8.guildId, channelId: obj8.channelId, messageId: obj8.messageId } = payload);
            obj.isPreload = true;
            const messages1 = importDefault(9878).fetchMessages(obj);
            importDefault = true;
            flag = true;
            let obj7 = importDefault(9878);
            tmp13 = null != tracking_type && null != payload.messageId && null != payload.channelId;
          } else {
            if (payload.type === _require(668).LinkingTypes.ICYMI) {
              if (null != type.channel_id) {
                if (null != type.message_id) {
                  const forNotification = importDefault(8321).fetchForNotification(type.channel_id, type.message_id);
                  flag = false;
                  let obj5 = importDefault(8321);
                }
              }
            }
            flag = false;
            if (payload.type === _require(668).LinkingTypes.ICYMI) {
              flag = false;
              if (null != type.user_id) {
                flag = false;
                if (null != type.notification_center_id) {
                  let status_emoji_id = null;
                  if (null != type.status_emoji_id) {
                    status_emoji_id = null;
                    if ("0" !== type.status_emoji_id) {
                      status_emoji_id = type.status_emoji_id;
                    }
                  }
                  let obj1 = { id: type.notification_center_id, type: _require(7087).ICYMIItemTypes.CUSTOM_STATUS, score: 1000 };
                  let obj2 = {};
                  ({ user_id: obj3.user_id, status_text: obj3.text } = type);
                  obj2.emoji_id = status_emoji_id;
                  obj2.emoji_name = type.status_emoji_name;
                  obj2.emoji_animated = type.status_emoji_animated;
                  obj1.data = obj2;
                  const forStatusNotification = importDefault(8321).fetchForStatusNotification(obj1);
                  flag = false;
                  const obj4 = importDefault(8321);
                }
              }
            }
          }
        }
      }
    }
    const _HermesInternal = HermesInternal;
    importDefaultResult.log("Notification clicked of type " + type.type);
  }
  type = type.type;
  if ("MESSAGE_CREATE" !== type) {
    if ("FORUM_THREAD_CREATED" !== type) {
      if ("RELATIONSHIP_ADD" !== type) {
        if ("CALL_RING" !== type) {
          if ("CALL_CONNECT" !== type) {
            if ("FRIEND_SUGGESTION_CREATE" !== type) {
              if ("STAGE_INSTANCE_CREATE" !== type) {
                if ("GUILD_SCHEDULED_EVENT_UPDATE" !== type) {
                  if ("GUILD_STREAM_START" !== type) {
                    if ("GENERIC_PUSH_NOTIFICATION_SENT" !== type) {
                      return flag;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (function dispatch() {
    let obj = _true(outer1_3[48]);
    obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
    let obj1 = _true(outer1_3[28]);
    obj = { notif_type: "tracking_type" in type ? tmp2.tracking_type : tmp2.type };
    let user_id = null;
    if ("user_id" in type) {
      user_id = type.user_id;
    }
    obj.notif_user_id = user_id;
    let message_id = null;
    if ("message_id" in type) {
      message_id = type.message_id;
    }
    obj.message_id = message_id;
    let message_type_ = null;
    if ("message_type_" in type) {
      message_type_ = type.message_type_;
    }
    obj.message_type = message_type_;
    let tmp9 = "message" in type;
    if (tmp9) {
      tmp9 = null != type.message;
    }
    obj.has_message = tmp9;
    let guild_id = null;
    if ("guild_id" in type) {
      guild_id = type.guild_id;
    }
    obj.guild_id = guild_id;
    let channel_id = null;
    if ("channel_id" in type) {
      channel_id = type.channel_id;
    }
    obj.channel_id = channel_id;
    let channel_type = null;
    if ("channel_type" in type) {
      channel_type = type.channel_type;
    }
    obj.channel_type = channel_type;
    let NumberResult = null;
    if ("rel_type" in type) {
      const _Number = Number;
      NumberResult = Number(type.rel_type);
    }
    obj.rel_type = NumberResult;
    let notification_id = null;
    if ("notification_id" in type) {
      notification_id = type.notification_id;
    }
    obj.notification_id = notification_id;
    let tmp22 = "image_url" in type;
    if (tmp22) {
      tmp22 = null != type.image_url;
    }
    obj.has_image_thumbnail = tmp22;
    let join_id = null;
    if ("join_id" in type) {
      join_id = type.join_id;
    }
    obj.join_id = join_id;
    let notif_instance_id = null;
    if ("notif_instance_id" in type) {
      notif_instance_id = type.notif_instance_id;
    }
    obj.notif_instance_id = notif_instance_id;
    let notif_type_id = null;
    if ("notif_type_id" in type) {
      notif_type_id = type.notif_type_id;
    }
    obj.notif_type_id = notif_type_id;
    let mention_type = null;
    if ("mention_type" in type) {
      mention_type = type.mention_type;
    }
    obj.mention_type = mention_type;
    obj1.track(outer1_11.NOTIFICATION_CLICKED, obj);
    (function maybeAckNotificationCenter(closure_0) {
      return outer2_33(...arguments);
    })(type);
    type = type.type;
    if ("MESSAGE_CREATE" === type) {
      if (null != type.message) {
        obj = { type: "MESSAGE_CREATE", channelId: type.message.channel_id, message: type.message, optimistic: true, isPushNotification: true };
        _true(outer1_3[48]).dispatch(obj);
        const obj5 = _true(outer1_3[48]);
      }
      _true(outer1_3[49]).popAll();
      const obj7 = _true(outer1_3[49]);
      obj1 = { navigationReplace: true, openChannel: true, skipMessageFetch: _true };
      type(outer1_3[50]).transitionTo(outer1_14.CHANNEL(type.guild_id, type.channel_id, type.message_id), obj1);
      const obj8 = type(outer1_3[50]);
    } else if ("FORUM_THREAD_CREATED" === type) {
      outer1_20().then(() => {
        callback(outer2_3[50]).transitionTo(outer2_14.CHANNEL(outer1_0.guild_id, outer1_0.channel_id), { navigationReplace: true, openChannel: true });
      });
      const promise = outer1_20();
    } else if ("RELATIONSHIP_ADD" === type) {
      !(function handleRelationshipAddNotification(closure_0) {
        return outer2_29(...arguments);
      })(type);
    } else if ("CALL_RING" === type) {
      !(function handleCallRingNotification(closure_0) {
        return outer2_30(...arguments);
      })(type);
    } else if ("CALL_CONNECT" === type) {
      !(function handleCallConnectNotification(closure_0) {
        return outer2_31(...arguments);
      })(type);
    } else if ("FRIEND_SUGGESTION_CREATE" === type) {
      !(function handleFriendSuggestionCreateNotification(closure_0) {
        return outer2_32(...arguments);
      })(type);
    } else if ("GUILD_STREAM_START" === type) {
      const obj2 = { streamType: outer1_15.GUILD };
      ({ user_id: obj4.ownerId, guild_id: obj4.guildId, channel_id: obj4.channelId } = type);
      _true(outer1_3[51])(obj2);
    } else if ("GUILD_SCHEDULED_EVENT_UPDATE" === type) {
      !(function handleGuildEventNotification(closure_0) {
        return outer2_28(...arguments);
      })(type);
    } else if ("STAGE_INSTANCE_CREATE" === type) {
      !(function handleStageNotification(closure_0) {
        return outer2_27(...arguments);
      })(type);
    } else if ("GENERIC_PUSH_NOTIFICATION_SENT" === type) {
      if (null != type.deeplink) {
        if ("" !== type.deeplink) {
          const obj3 = { payload: _true(outer1_3[43])(type.deeplink).payload, waitForConnection: false, skipMessageFetch: _true };
          _true(outer1_3[52])(obj3);
        }
      }
    }
  })();
  return flag;
}
require("shouldWaitForBlockingModals").addPostConnectionCallback;
({ AnalyticEvents: closure_11, ComponentActions: closure_12, RelationshipTypes: closure_13, Routes: closure_14 } = ME);
importDefaultResult = new importDefaultResult("receiveNotification");
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/push_notifications/native/receiveNotification.tsx");

export default function receiveNotification(getData) {
  if (null == getData.getData) {
    return false;
  } else {
    data(6707).trackAppOpened("notification");
    data = getData.getData();
    const obj2 = data(6707);
    const _HermesInternal = HermesInternal;
    importDefault(20).mark("\u2757", "Receive notification " + data.type);
    if (null != data.receiving_user_id) {
      if (null != store.getId()) {
        if (data.receiving_user_id !== store.getId()) {
          data(6708);
          data(4808);
          data(12644);
          let then = closure_17;
          const obj = data(11456);
          then = data(11456).switchAccount(data.receiving_user_id, false, arg1 ? then.PUSH_NOTIFICATION_INITIAL : then.PUSH_NOTIFICATION).then;
          then(() => {
            const Emitter = outer1_1(outer1_3[40]).Emitter;
            Emitter.batched(() => outer2_34(outer1_0));
          });
          const switchAccountResult = data(11456).switchAccount(data.receiving_user_id, false, arg1 ? then.PUSH_NOTIFICATION_INITIAL : then.PUSH_NOTIFICATION);
        }
      }
    }
    let Emitter = importDefault(566).Emitter;
    return Emitter.batched(() => outer1_34(data));
  }
};
