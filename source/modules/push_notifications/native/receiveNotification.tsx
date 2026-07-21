// Module ID: 16465
// Function ID: 127212
// Name: onStageConnectionError
// Dependencies: []
// Exports: default

// Module 16465 (onStageConnectionError)
function onStageConnectionError() {
  let obj = importDefault(dependencyMap[12]);
  obj = { key: "STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC" };
  const intl = arg1(dependencyMap[13]).intl;
  obj.content = intl.string(arg1(dependencyMap[13]).t.ah3RLk);
  obj.icon = importDefault(dependencyMap[14]);
  obj.open(obj);
}
function waitForConnection() {
  return new Promise((arg0) => {
    callback(arg0);
  });
}
function waitForDataOrConnection() {
  return _waitForDataOrConnection(...arguments);
}
function _waitForDataOrConnection() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _waitForDataOrConnection = obj;
  return obj(...arguments);
}
function waitForNavigationReady() {
  return _waitForNavigationReady(...arguments);
}
function _waitForNavigationReady() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _waitForNavigationReady = obj;
  return obj(...arguments);
}
function _connectToStage() {
  return _connectToStage2(...arguments);
}
function _connectToStage2() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _connectToStage2 = obj;
  return obj(...arguments);
}
function _handleStageNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleStageNotification = obj;
  return obj(...arguments);
}
function _handleGuildEventNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleGuildEventNotification = obj;
  return obj(...arguments);
}
function _handleRelationshipAddNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleRelationshipAddNotification = obj;
  return obj(...arguments);
}
function _handleCallRingNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleCallRingNotification = obj;
  return obj(...arguments);
}
function _handleCallConnectNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleCallConnectNotification = obj;
  return obj(...arguments);
}
function _handleFriendSuggestionCreateNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleFriendSuggestionCreateNotification = obj;
  return obj(...arguments);
}
function _maybeAckNotificationCenter() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _maybeAckNotificationCenter = obj;
  return obj(...arguments);
}
function receiveNotification_(type) {
  const arg1 = type;
  let obj = arg1(dependencyMap[41]);
  const result = obj.initializeRouteManagerIfNeeded();
  let importDefault = false;
  if ("MESSAGE_CREATE" === type.type) {
    const _HermesInternal2 = HermesInternal;
    importDefaultResult.log("Notification clicked of type " + type.type + " with guild:" + type.guild_id + " channel:" + type.channel_id + " message:" + type.message_id);
    obj = {};
    ({ guild_id: obj10.guildId, channel_id: obj10.channelId, message_id: obj10.messageId } = type);
    obj.isPreload = true;
    const messages = importDefault(dependencyMap[42]).fetchMessages(obj);
    importDefault = true;
    let flag = true;
    const obj9 = importDefault(dependencyMap[42]);
  } else {
    flag = false;
    if ("GENERIC_PUSH_NOTIFICATION_SENT" === type.type) {
      flag = false;
      if (null != type.deeplink) {
        flag = false;
        if ("" !== type.deeplink) {
          const payload = importDefault(dependencyMap[43])(type.deeplink).payload;
          if (payload.type === arg1(dependencyMap[44]).LinkingTypes.MESSAGE) {
            let tracking_type;
            if (null != type) {
              tracking_type = type.tracking_type;
            }
            if (null == tracking_type) {
              tracking_type = type.type;
            }
            if (tmp13) {
              arg1(dependencyMap[45]).receivedNotification(payload.messageId, payload.channelId, tracking_type);
              const obj6 = arg1(dependencyMap[45]);
            }
            obj = {};
            ({ guildId: obj8.guildId, channelId: obj8.channelId, messageId: obj8.messageId } = payload);
            obj.isPreload = true;
            const messages1 = importDefault(dependencyMap[42]).fetchMessages(obj);
            importDefault = true;
            flag = true;
            const obj7 = importDefault(dependencyMap[42]);
            const tmp13 = null != tracking_type && null != payload.messageId && null != payload.channelId;
          } else {
            if (payload.type === arg1(dependencyMap[44]).LinkingTypes.ICYMI) {
              if (null != type.channel_id) {
                if (null != type.message_id) {
                  const forNotification = importDefault(dependencyMap[46]).fetchForNotification(type.channel_id, type.message_id);
                  flag = false;
                  const obj5 = importDefault(dependencyMap[46]);
                }
              }
            }
            flag = false;
            if (payload.type === arg1(dependencyMap[44]).LinkingTypes.ICYMI) {
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
                  const obj1 = { id: type.notification_center_id, type: arg1(dependencyMap[47]).ICYMIItemTypes.CUSTOM_STATUS, score: 1000 };
                  const obj2 = {};
                  ({ user_id: obj3.user_id, status_text: obj3.text } = type);
                  obj2.emoji_id = status_emoji_id;
                  obj2.emoji_name = type.status_emoji_name;
                  obj2.emoji_animated = type.status_emoji_animated;
                  obj1.data = obj2;
                  const forStatusNotification = importDefault(dependencyMap[46]).fetchForStatusNotification(obj1);
                  flag = false;
                  const obj4 = importDefault(dependencyMap[46]);
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
  function dispatch(self) {
    let obj = _true(closure_3[48]);
    obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
    let obj1 = _true(closure_3[28]);
    obj = { notif_type: "tracking_type" in self ? tmp2.tracking_type : tmp2.type };
    let user_id = null;
    if ("user_id" in self) {
      user_id = self.user_id;
    }
    obj.notif_user_id = user_id;
    let message_id = null;
    if ("message_id" in self) {
      message_id = self.message_id;
    }
    obj.message_id = message_id;
    let message_type_ = null;
    if ("message_type_" in self) {
      message_type_ = self.message_type_;
    }
    obj.message_type = message_type_;
    let tmp9 = "message" in self;
    if (tmp9) {
      tmp9 = null != self.message;
    }
    obj.has_message = tmp9;
    let guild_id = null;
    if ("guild_id" in self) {
      guild_id = self.guild_id;
    }
    obj.guild_id = guild_id;
    let channel_id = null;
    if ("channel_id" in self) {
      channel_id = self.channel_id;
    }
    obj.channel_id = channel_id;
    let channel_type = null;
    if ("channel_type" in self) {
      channel_type = self.channel_type;
    }
    obj.channel_type = channel_type;
    let NumberResult = null;
    if ("rel_type" in self) {
      const _Number = Number;
      NumberResult = Number(self.rel_type);
    }
    obj.rel_type = NumberResult;
    let notification_id = null;
    if ("notification_id" in self) {
      notification_id = self.notification_id;
    }
    obj.notification_id = notification_id;
    let tmp22 = "image_url" in self;
    if (tmp22) {
      tmp22 = null != self.image_url;
    }
    obj.has_image_thumbnail = tmp22;
    let join_id = null;
    if ("join_id" in self) {
      join_id = self.join_id;
    }
    obj.join_id = join_id;
    let notif_instance_id = null;
    if ("notif_instance_id" in self) {
      notif_instance_id = self.notif_instance_id;
    }
    obj.notif_instance_id = notif_instance_id;
    let notif_type_id = null;
    if ("notif_type_id" in self) {
      notif_type_id = self.notif_type_id;
    }
    obj.notif_type_id = notif_type_id;
    let mention_type = null;
    if ("mention_type" in self) {
      mention_type = self.mention_type;
    }
    obj.mention_type = mention_type;
    obj1.track(constants.NOTIFICATION_CLICKED, obj);
    function maybeAckNotificationCenter(arg0) {
      return callback7(...arguments);
    }(self);
    const type = self.type;
    if ("MESSAGE_CREATE" === type) {
      if (null != self.message) {
        obj = { channelId: self.message.channel_id, message: self.message };
        _true(closure_3[48]).dispatch(obj);
        const obj5 = _true(closure_3[48]);
      }
      _true(closure_3[49]).popAll();
      const obj7 = _true(closure_3[49]);
      obj1 = { "Bool(false)": null, "Bool(false)": null, skipMessageFetch: _true };
      self(closure_3[50]).transitionTo(closure_14.CHANNEL(self.guild_id, self.channel_id, self.message_id), obj1);
      const obj8 = self(closure_3[50]);
    } else if ("FORUM_THREAD_CREATED" === type) {
      callback().then(() => {
        lib(closure_3[50]).transitionTo(closure_14.CHANNEL(lib.guild_id, lib.channel_id), { "Bool(false)": null, "Bool(false)": null });
      });
      const promise = callback();
    } else if ("RELATIONSHIP_ADD" === type) {
      !function handleRelationshipAddNotification(arg0) {
        return callback3(...arguments);
      }(self);
    } else if ("CALL_RING" === type) {
      !function handleCallRingNotification(arg0) {
        return callback4(...arguments);
      }(self);
    } else if ("CALL_CONNECT" === type) {
      !function handleCallConnectNotification(arg0) {
        return callback5(...arguments);
      }(self);
    } else if ("FRIEND_SUGGESTION_CREATE" === type) {
      !function handleFriendSuggestionCreateNotification(arg0) {
        return callback6(...arguments);
      }(self);
    } else if ("GUILD_STREAM_START" === type) {
      const obj2 = { streamType: constants2.GUILD };
      ({ user_id: obj4.ownerId, guild_id: obj4.guildId, channel_id: obj4.channelId } = self);
      _true(closure_3[51])(obj2);
    } else if ("GUILD_SCHEDULED_EVENT_UPDATE" === type) {
      !function handleGuildEventNotification(arg0) {
        return callback2(...arguments);
      }(self);
    } else if ("STAGE_INSTANCE_CREATE" === type) {
      !function handleStageNotification(arg0) {
        return callback(...arguments);
      }(self);
    } else if ("GENERIC_PUSH_NOTIFICATION_SENT" === type) {
      if (null != self.deeplink) {
        if ("" !== self.deeplink) {
          const obj3 = { payload: _true(closure_3[43])(self.deeplink).payload, waitForConnection: false, skipMessageFetch: _true };
          _true(closure_3[52])(obj3);
        }
      }
    }
  }();
  return flag;
}
let closure_4 = importDefault(dependencyMap[0]);
arg1(dependencyMap[1]).addPostConnectionCallback;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const NotificationTypes = arg1(dependencyMap[6]).NotificationTypes;
({ AnalyticEvents: closure_11, ComponentActions: closure_12, RelationshipTypes: closure_13, Routes: closure_14 } = arg1(dependencyMap[7]));
const StreamTypes = arg1(dependencyMap[8]).StreamTypes;
let closure_16 = arg1(dependencyMap[9]).GuildScheduledEventEntityTypes;
let closure_17 = arg1(dependencyMap[10]).MultiAccountSwitchLocation;
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("receiveNotification");
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[53]).fileFinishedImporting("modules/push_notifications/native/receiveNotification.tsx");

export default function receiveNotification(getData) {
  if (null == getData.getData) {
    return false;
  } else {
    arg1(dependencyMap[34]).trackAppOpened("notification");
    const data = getData.getData();
    const arg1 = data;
    const obj2 = arg1(dependencyMap[34]);
    const _HermesInternal = HermesInternal;
    importDefault(dependencyMap[35]).mark("\u2757", "Receive notification " + data.type);
    if (null != data.receiving_user_id) {
      if (null != store.getId()) {
        if (data.receiving_user_id !== store.getId()) {
          arg1(dependencyMap[36]);
          arg1(dependencyMap[37]);
          arg1(dependencyMap[38]);
          let then = closure_17;
          const obj = arg1(dependencyMap[39]);
          then = arg1(dependencyMap[39]).switchAccount(data.receiving_user_id, false, arg1 ? then.PUSH_NOTIFICATION_INITIAL : then.PUSH_NOTIFICATION).then;
          then(() => {
            const Emitter = callback(closure_3[40]).Emitter;
            Emitter.batched(() => callback(closure_0));
          });
          const switchAccountResult = arg1(dependencyMap[39]).switchAccount(data.receiving_user_id, false, arg1 ? then.PUSH_NOTIFICATION_INITIAL : then.PUSH_NOTIFICATION);
        }
      }
    }
    const Emitter = importDefault(dependencyMap[40]).Emitter;
    return Emitter.batched(() => callback2(data));
  }
};
