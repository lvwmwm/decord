// Module ID: 10205
// Function ID: 78760
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10205 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function handleAlertMessage() {
  let obj = arg1(dependencyMap[27]);
  if (obj.allowInAppNotifications()) {
    let obj1 = arg1(dependencyMap[36]);
    const result = obj1.shouldShowRaidInAppNotification();
    const guildId = result.guildId;
    if (result.show) {
      if (null != guildId) {
        const guild = store2.getGuild(guildId);
        const arg1 = guild;
        if (null == guild) {
          return false;
        } else {
          const channel = store.getChannel(importDefault(dependencyMap[37])(guild));
          const importDefault = channel;
          let tmp15 = null != channel;
          if (tmp15) {
            let tmp6 = channelId.getChannelId() !== channel.id;
            if (tmp6) {
              obj = { guild, channel };
              const tmp8 = !tmp3.wasRecentlyDismissed(obj);
              if (tmp8) {
                obj = {};
                obj1 = {
                  type: constants3.ALERT,
                  key: guildId,
                  duration: 30 * importDefault(dependencyMap[31]).Millis.SECOND,
                  onDismiss() {
                                  let obj = channel(closure_2[32]);
                                  obj.clearNotification();
                                  obj = { guild, channel };
                                  closure_25.dismissNotification(obj);
                                },
                  channel,
                  guild,
                  inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
                };
                obj.notification = obj1;
                handleEnqueueNotification(obj);
                const obj6 = arg1(dependencyMap[33]);
              }
              tmp6 = tmp8;
            }
            tmp15 = tmp6;
          }
          return tmp15;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function getCurrentRestrictedSchedule() {
  const currentUser = authStore.getCurrentUser();
  let restrictedSchedule;
  if (null != currentUser) {
    restrictedSchedule = currentUser.restrictedSchedule;
  }
  let tmp3 = null;
  if (null != restrictedSchedule) {
    tmp3 = null;
    if (0 !== restrictedSchedule.rules.length) {
      tmp3 = restrictedSchedule;
    }
  }
  return tmp3;
}
function handleEnqueueNotification(notification) {
  let channelId;
  let guildId;
  let messageId;
  notification = notification.notification;
  if (closure_28) {
    trackDismissed(notification, "restricted_hours");
    return false;
  } else {
    let obj = arg1(dependencyMap[33]);
    const result = obj.extractMetadataFromNotification(notification);
    ({ guildId, channelId, messageId } = result);
    obj = { type: notification.type, guild_id: guildId, channel_id: channelId, in_app_notification_id: notification.inAppNotificationId, message_id: messageId };
    importDefault(dependencyMap[44]).trackWithMetadata(constants.IN_APP_NOTIFICATION_CREATED, obj);
    constants.enqueue(notification);
    const obj2 = importDefault(dependencyMap[44]);
    const result1 = arg1(dependencyMap[43]).playInAppMessageSound(notification);
    if (null == closure_26) {
      showNextNotification();
    }
  }
}
function trackDismissed(type, dismiss_reason) {
  let channelId;
  let guildId;
  let messageId;
  let obj = dismiss_reason(dependencyMap[33]);
  const result = obj.extractMetadataFromNotification(type);
  ({ guildId, channelId, messageId } = result);
  obj = { type: type.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason, in_app_notification_id: type.inAppNotificationId };
  importDefault(dependencyMap[44]).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
}
function showNextNotification() {
  let closure_26 = tmp5.tryDrain();
}
function rejectNotifications(predicate) {
  tmp5.removeAll(predicate);
  if (null != closure_26) {
    if (predicate(closure_26)) {
      closure_26 = null;
      showNextNotification();
      const tmp5 = showNextNotification;
    }
    return true;
  }
  if (null != closure_26) {
    return false;
  } else {
    showNextNotification();
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
let closure_11 = arg1(dependencyMap[8]).trackMessageNotificationTimestamps;
const importDefaultResult = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
({ AnalyticEvents: closure_21, ChannelTypes: closure_22, InAppNotificationTypes: closure_23, MessageTypesSets: closure_24 } = arg1(dependencyMap[18]));
let tmp3 = () => {
  class AlertDismissalHandler {
    constructor() {
      tmp = closure_6(this, AlertDismissalHandler);
      obj = {};
      map = new Map();
      obj[AlertDismissalHandler(closure_2[19]).GuildIncidentAlertTypes.JOIN_RAID] = map;
      map1 = new Map();
      obj[AlertDismissalHandler(closure_2[19]).GuildIncidentAlertTypes.DM_RAID] = map1;
      this.dissmissedAlertsMap = obj;
      this.threshold = { "Bool(true)": "\u{1FAF1}\u{1F3FF}\u200D\u{1FAF2}\u{1F3FE}", "Bool(true)": true };
      return;
    }
  }
  const arg1 = AlertDismissalHandler;
  let obj = {
    key: "key",
    value(guild) {
      return guild.guild.id + guild.channel.id;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "dismissNotification",
    value(guild) {
      const self = this;
      guild = guild.guild;
      let obj = AlertDismissalHandler(closure_2[20]);
      const incidentAlertType = obj.getIncidentAlertType(store.getGuildIncident(guild.id));
      if (null != incidentAlertType) {
        obj = { guild, channel: guild.channel };
        const result = self.dissmissedAlertsMap[incidentAlertType].set(self.key(obj), callback(closure_2[21])());
        const keyResult = self.key(obj);
        const obj3 = self.dissmissedAlertsMap[incidentAlertType];
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "wasRecentlyDismissed",
    value(guild) {
      const self = this;
      guild = guild.guild;
      let obj = AlertDismissalHandler(closure_2[20]);
      const incidentAlertType = obj.getIncidentAlertType(store.getGuildIncident(guild.id));
      if (null == incidentAlertType) {
        return false;
      } else {
        obj = { guild, channel: guild.channel };
        const value = self.dissmissedAlertsMap[incidentAlertType].get(self.key(obj));
        let tmp4 = undefined !== value;
        if (tmp4) {
          tmp4 = callback(closure_2[21])().diff(callback(closure_2[21])(value), self.threshold.unitOfTime) < self.threshold.amount;
          const obj2 = callback(closure_2[21])();
        }
        return tmp4;
      }
    }
  };
  items[2] = obj;
  return callback2(AlertDismissalHandler, items);
}();
tmp3 = new tmp3();
let closure_26 = null;
let tmp5 = () => {
  class NotificationQueue {
    constructor() {
      tmp = closure_6(this, NotificationQueue);
      this.queue = [];
      return;
    }
  }
  const arg1 = NotificationQueue;
  let obj = {
    key: "enqueue",
    value(arg0) {
      const self = this;
      if (this.isFull()) {
        const queue = self.queue;
        let arr = queue.shift();
        if (null != arr) {
          callback4(arr, "evicted_from_queue");
        }
      }
      const queue1 = self.queue;
      arr = queue1.push(arg0);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "tryDrain",
    value() {
      const queue = this.queue;
      return queue.shift();
    }
  };
  items[1] = obj;
  obj = {
    key: "isFull",
    value() {
      return this.queue.length >= 2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "removeAll",
    value(arg0) {
      let done;
      const tmp = callback3(callback(closure_2[22]).remove(this.queue, arg0));
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_37;
          let tmp3 = closure_37(iter.value, "rejected_from_queue");
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  return callback2(NotificationQueue, items);
}();
tmp5 = new tmp5();
let closure_28 = importDefaultResult.isCurrentUserInRestrictedHours();
let closure_29 = false;
const EMPTY_SCHEDULE_SNAPSHOT = arg1(dependencyMap[23]).EMPTY_SCHEDULE_SNAPSHOT;
let tmp7 = (Store) => {
  class InAppNotificationStore {
    constructor() {
      self = this;
      tmp = closure_6(this, InAppNotificationStore);
      obj = closure_4(InAppNotificationStore);
      tmp2 = closure_3;
      if (closure_31()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = InAppNotificationStore;
  callback(InAppNotificationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_14, closure_8, closure_12, closure_10, closure_15, closure_16, closure_17, closure_18, closure_19, closure_13, closure_20);
      const items = [closure_10];
      this.syncWith(items, closure_34);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getCurrentNotification",
    value() {
      return closure_26;
    }
  };
  items[1] = obj;
  return callback2(InAppNotificationStore, items);
}(importDefault(dependencyMap[46]).Store);
tmp7.displayName = "InAppNotificationStore";
tmp7 = new tmp7(importDefault(dependencyMap[47]), {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    let closure_29 = true;
    let closure_30 = arg1(dependencyMap[23]).toScheduleSnapshot(getCurrentRestrictedSchedule());
    handleAlertMessage();
  },
  LOGOUT: function handleLogout() {
    let closure_29 = false;
    const EMPTY_SCHEDULE_SNAPSHOT = arg1(dependencyMap[23]).EMPTY_SCHEDULE_SNAPSHOT;
    let closure_26 = null;
    tmp5.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const channel_id = message.channel_id;
    let obj = arg1(dependencyMap[24]);
    if (obj.canViewPotentiallyNSFWChannel(channel_id)) {
      if (obj2.shouldShowSpoilerGateForChannelId(channel_id)) {
        return false;
      } else {
        if (importDefault(dependencyMap[26])(message)) {
          const SELF_MENTIONABLE_SYSTEM = constants4.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            return false;
          }
        }
        if (!message.optimistic) {
          if (obj3.allowInAppNotifications()) {
            if (!obj4.isEnabled()) {
              if (!uiStore.getChatOpen(channel_id)) {
                const result = arg1(dependencyMap[27]).shouldIncludeSelectedChannel();
                const obj5 = arg1(dependencyMap[27]);
                if (obj6.shouldNotify(message, channel_id, result)) {
                  const channel = store.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const messageRecord = arg1(dependencyMap[29]).createMessageRecord(message);
                    const obj11 = arg1(dependencyMap[29]);
                    if (obj12.isMessageContentPreviewable(messageRecord)) {
                      callback3(message, channel.guild_id);
                      obj = {};
                      obj = {
                        type: constants3.MESSAGE,
                        guild: store2.getGuild(channel.getGuildId()),
                        channel,
                        message: messageRecord,
                        key: messageRecord.id,
                        duration: 5 * importDefault(dependencyMap[31]).Millis.SECOND,
                        onDismiss() {
                                            callback(closure_2[32]).clearNotification();
                                          },
                        parentChannel: store.getChannel(channel.parent_id),
                        inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId(),
                        mentionCount: mentionCount.getMentionCount(channel.id)
                      };
                      obj.notification = obj;
                      handleEnqueueNotification(obj);
                    } else {
                      return false;
                    }
                    const obj12 = arg1(dependencyMap[30]);
                  }
                } else {
                  return false;
                }
                const obj6 = arg1(dependencyMap[27]);
              }
            }
            const obj4 = importDefault(dependencyMap[28]);
          }
          const obj3 = arg1(dependencyMap[27]);
        }
        return false;
      }
      const obj2 = arg1(dependencyMap[25]);
    } else {
      return false;
    }
  },
  MESSAGE_REQUEST_NOTIFICATION_SENT: function handleMessageRequest(triggeringUserId) {
    triggeringUserId = triggeringUserId.triggeringUserId;
    let obj = importDefault(dependencyMap[35]);
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      const user = authStore.getUser(triggeringUserId);
      if (null == user) {
        return false;
      } else {
        obj = {};
        obj = { type: constants3.MESSAGE_REQUEST, author: user, numMutualGuilds: triggeringUserId.numMutualGuilds };
        const _HermesInternal = HermesInternal;
        obj.key = "message-request-" + triggeringUserId;
        obj.duration = 5 * importDefault(dependencyMap[31]).Millis.SECOND;
        obj.onDismiss = function onDismiss() {
          callback(closure_2[32]).clearNotification();
        };
        obj.inAppNotificationId = arg1(dependencyMap[33]).generateInAppNotificationId();
        obj.notification = obj;
        handleEnqueueNotification(obj);
      }
    } else {
      return false;
    }
  },
  MESSAGE_ACK: function handleMessageAck(arg0) {
    ({ channelId: closure_0, messageId: closure_1 } = arg0);
    function predicate(closure_26) {
      let tmp = closure_26.type === constants.MESSAGE;
      if (tmp) {
        tmp = closure_26.channel.id === closure_0;
      }
      if (tmp) {
        tmp = callback(closure_2[45]).compare(closure_26.message.id, callback) <= 0;
        const obj = callback(closure_2[45]);
      }
      return tmp;
    }
    let predicateResult = null != closure_26;
    if (predicateResult) {
      predicateResult = predicate(closure_26);
    }
    if (predicateResult) {
      trackDismissed(closure_26, "message_acked");
    }
    return rejectNotifications(predicate);
  },
  REACTION_NOTIFICATION_SENT: function handleReactionNotification(arg0) {
    let channelId;
    let emoji;
    let guildId;
    let message;
    ({ message, emoji } = arg0);
    const arg1 = emoji;
    if (null != message) {
      if (null != message.reactions) {
        if (null != emoji) {
          if (obj13.allowInAppNotifications()) {
            let obj = arg1(dependencyMap[38]);
            let tryParseChannelPathResult = obj.tryParseChannelPath(tmp);
            if (null == tryParseChannelPathResult) {
              tryParseChannelPathResult = { effectDuration: "o", passiveEffectDuration: "o" };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = arg1(dependencyMap[39]).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === arg1(dependencyMap[40]).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
                  return false;
                } else {
                  const channel = store.getChannel(channelId);
                  let type;
                  if (null != channel) {
                    type = channel.type;
                  }
                  let result = null != type;
                  if (result) {
                    result = channel.type === constants2.GUILD_ANNOUNCEMENT;
                  }
                  if (null != channel) {
                    type = channel.type;
                  }
                  if (!result) {
                    result = obj3.isReactionMilestoneNotification(message.reactions, type);
                  }
                  const guild = store2.getGuild(guildId);
                  const user = authStore.getUser(tmp2);
                  if (null != channel) {
                    if (!obj4.isEnabled()) {
                      if (!uiStore.getChatOpen(channelId)) {
                        const result1 = arg1(dependencyMap[27]).shouldIncludeSelectedChannel();
                        const obj5 = arg1(dependencyMap[27]);
                        obj = { message, channel, reactor: user, includeSelectedChannel: result1 };
                        if (obj6.shouldNotifyForReaction(obj)) {
                          const messageRecord = arg1(dependencyMap[29]).createMessageRecord(message);
                          const obj8 = arg1(dependencyMap[29]);
                          if (obj9.isMessageContentPreviewable(messageRecord)) {
                            const reactions = message.reactions;
                            const found = reactions.find((emoji) => {
                              let tmp = emoji.emoji.id === emoji.id;
                              if (tmp) {
                                tmp = null != emoji.id;
                              }
                              if (!tmp) {
                                tmp = emoji.emoji.name === emoji.name;
                              }
                              return tmp;
                            });
                            let tmp25;
                            if (null != found) {
                              tmp25 = found;
                            }
                            if (null == tmp25) {
                              if (tmp10) {
                                return false;
                              }
                            }
                            obj = {};
                            const obj1 = {
                              type: constants3.REACTION,
                              key: channelId,
                              duration: 5 * importDefault(dependencyMap[31]).Millis.SECOND,
                              onDismiss() {
                                                        callback(closure_2[32]).clearNotification();
                                                      },
                              channel,
                              guild,
                              user,
                              message: messageRecord,
                              parentChannel: store.getChannel(channel.parent_id),
                              reaction: tmp25,
                              inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
                            };
                            obj.notification = obj1;
                            handleEnqueueNotification(obj);
                          } else {
                            return false;
                          }
                          const obj9 = arg1(dependencyMap[30]);
                        } else {
                          return false;
                        }
                        const obj6 = arg1(dependencyMap[27]);
                      }
                    }
                    return false;
                  }
                  return false;
                }
              }
            }
            return false;
          }
          const obj13 = arg1(dependencyMap[27]);
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    savedMessage = savedMessage.savedMessage;
    let obj = importDefault(dependencyMap[41]);
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      if (null != savedMessage.message) {
        const channel = store.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          obj = {};
          obj = {
            type: constants3.MESSAGE_REMINDER,
            key: "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId,
            duration: 10 * importDefault(dependencyMap[31]).Millis.SECOND,
            onDismiss() {
                    callback(closure_2[32]).clearNotification();
                  },
            channel,
            author: savedMessage.message.author,
            savedMessage,
            inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
          };
          obj.notification = obj;
          handleEnqueueNotification(obj);
          const obj4 = arg1(dependencyMap[33]);
        }
      }
    }
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    let subtitle;
    let title;
    ({ title, subtitle } = arg0);
    let obj = arg1(dependencyMap[42]);
    const tmp = !obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" });
    let tmp2 = !tmp;
    if (!tmp) {
      if (!!obj.screenDowntimeReminder) {
        obj = {};
        obj = {
          type: constants3.RESTRICTED_HOURS_WARNING,
          key: "restricted-hours-warning",
          duration: 10 * importDefault(dependencyMap[31]).Millis.SECOND,
          onDismiss() {
                callback(closure_2[32]).clearNotification();
              },
          title,
          subtitle,
          inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
        };
        obj.notification = obj;
        handleEnqueueNotification(obj);
        const obj4 = arg1(dependencyMap[33]);
      }
      tmp2 = !!obj.screenDowntimeReminder;
      const tmp5 = !!obj.screenDowntimeReminder;
    }
    return tmp2;
  },
  RESTRICTED_HOURS_STATE_CHANGE: function handleRestrictedHoursStateChange(isInRestrictedHours) {
    isInRestrictedHours = isInRestrictedHours.isInRestrictedHours;
    let closure_28 = isInRestrictedHours;
    if (isInRestrictedHours) {
      if (null != closure_26) {
        trackDismissed(closure_26, "restricted_hours");
      }
      rejectNotifications(() => true);
    } else {
      return false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    channel = store.getChannel(channel.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (channel.isNewlyCreated) {
          if (obj2.allowInAppNotifications()) {
            const obj3 = arg1(dependencyMap[27]);
            if (obj3.shouldNotifyForForumThreadCreation(channel, channel, !obj4.isChannelFocused())) {
              const user = authStore.getUser(channel.ownerId);
              if (null == user) {
                return false;
              } else {
                const guild = store2.getGuild(channel.guild_id);
                if (null == guild) {
                  return false;
                } else {
                  let obj = {};
                  obj = {
                    type: constants3.FORUM_THREAD_CREATED,
                    thread: channel,
                    threadCreator: user,
                    parentChannel: channel,
                    guild,
                    key: channel.id,
                    duration: 5 * importDefault(dependencyMap[31]).Millis.SECOND,
                    onDismiss() {
                                    callback(closure_2[32]).clearNotification();
                                  },
                    inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
                  };
                  obj.notification = obj;
                  handleEnqueueNotification(obj);
                }
              }
            }
            const obj4 = arg1(dependencyMap[34]);
          }
          return false;
        } else {
          return false;
        }
      }
    }
    return false;
  },
  CLEAR_IN_APP_NOTIFICATION: function handleClearInAppNotification() {
    let closure_26 = null;
    showNextNotification();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    const arg1 = channelId.channelId;
    function predicate(closure_26) {
      let tmp = closure_26.type === constants.MESSAGE;
      if (tmp) {
        tmp = closure_26.channel.id === channelId;
      }
      if (!tmp) {
        let tmp4 = closure_26.type === constants.MESSAGE_FAILED_TO_SEND;
        if (tmp4) {
          tmp4 = closure_26.channelId === channelId;
        }
        tmp = tmp4;
      }
      if (!tmp) {
        let tmp7 = closure_26.type === constants.ALERT;
        if (tmp7) {
          tmp7 = closure_26.channel.id === channelId;
        }
        tmp = tmp7;
      }
      return tmp;
    }
    let predicateResult = null != closure_26;
    if (predicateResult) {
      predicateResult = predicate(closure_26);
    }
    if (predicateResult) {
      trackDismissed(closure_26, "notification_clicked");
    }
    return rejectNotifications(predicate);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleVoiceChatOpen(arg0) {
    ({ channelId: closure_0, chatOpen: closure_1 } = arg0);
    function predicate(closure_26) {
      let tmp = closure_26.type === constants.MESSAGE;
      if (tmp) {
        tmp = closure_26.channel.id === closure_0;
      }
      if (tmp) {
        tmp = closure_1;
      }
      return tmp;
    }
    let predicateResult = null != closure_26;
    if (predicateResult) {
      predicateResult = predicate(closure_26);
    }
    if (predicateResult) {
      trackDismissed(closure_26, "notification_clicked");
    }
    return rejectNotifications(predicate);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsUpdate() {
    let flag = !arg1(dependencyMap[27]).allowInAppNotifications();
    if (flag) {
      if (null != closure_26) {
        const tmp5 = trackDismissed(closure_26, "settings_updated");
        closure_26 = null;
      }
      tmp5.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (closure_29) {
      let obj = arg1(dependencyMap[42]);
      obj = { location: "InAppNotificationStore" };
      if (obj.getIsFamilyCenterV3Enabled(obj)) {
        const toScheduleSnapshotResult = arg1(dependencyMap[23]).toScheduleSnapshot(getCurrentRestrictedSchedule());
        const EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
        const obj3 = arg1(dependencyMap[23]);
        const diffSchedulesResult = arg1(dependencyMap[23]).diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult);
        let setting = null != diffSchedulesResult;
        if (setting) {
          const EnableScreenDowntimeScheduleNotifications = arg1(dependencyMap[39]).EnableScreenDowntimeScheduleNotifications;
          setting = EnableScreenDowntimeScheduleNotifications.getSetting();
        }
        if (setting) {
          setting = arg1(dependencyMap[27]).allowInAppNotifications();
          const obj5 = arg1(dependencyMap[27]);
        }
        if (setting) {
          obj = {};
          const obj1 = {
            type: constants3.RESTRICTED_SCHEDULE_UPDATED,
            key: arg1(dependencyMap[23]).restrictedScheduleNotificationKey(diffSchedulesResult.kind),
            duration: 7 * importDefault(dependencyMap[31]).Millis.SECOND,
            onDismiss() {
                    callback(closure_2[32]).clearNotification();
                  }
          };
          const obj8 = arg1(dependencyMap[23]);
          obj1.title = arg1(dependencyMap[23]).getRestrictedScheduleNotificationTitle(diffSchedulesResult.kind);
          const obj9 = arg1(dependencyMap[23]);
          obj1.subtitle = arg1(dependencyMap[23]).getRestrictedScheduleNotificationSubtitle(diffSchedulesResult.rule);
          const obj10 = arg1(dependencyMap[23]);
          obj1.inAppNotificationId = arg1(dependencyMap[33]).generateInAppNotificationId();
          obj.notification = obj1;
          handleEnqueueNotification(obj);
          const obj11 = arg1(dependencyMap[33]);
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
});
const obj = {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    let closure_29 = true;
    let closure_30 = arg1(dependencyMap[23]).toScheduleSnapshot(getCurrentRestrictedSchedule());
    handleAlertMessage();
  },
  LOGOUT: function handleLogout() {
    let closure_29 = false;
    const EMPTY_SCHEDULE_SNAPSHOT = arg1(dependencyMap[23]).EMPTY_SCHEDULE_SNAPSHOT;
    let closure_26 = null;
    tmp5.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const channel_id = message.channel_id;
    let obj = arg1(dependencyMap[24]);
    if (obj.canViewPotentiallyNSFWChannel(channel_id)) {
      if (obj2.shouldShowSpoilerGateForChannelId(channel_id)) {
        return false;
      } else {
        if (importDefault(dependencyMap[26])(message)) {
          const SELF_MENTIONABLE_SYSTEM = constants4.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            return false;
          }
        }
        if (!message.optimistic) {
          if (obj3.allowInAppNotifications()) {
            if (!obj4.isEnabled()) {
              if (!uiStore.getChatOpen(channel_id)) {
                const result = arg1(dependencyMap[27]).shouldIncludeSelectedChannel();
                const obj5 = arg1(dependencyMap[27]);
                if (obj6.shouldNotify(message, channel_id, result)) {
                  const channel = store.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const messageRecord = arg1(dependencyMap[29]).createMessageRecord(message);
                    const obj11 = arg1(dependencyMap[29]);
                    if (obj12.isMessageContentPreviewable(messageRecord)) {
                      callback3(message, channel.guild_id);
                      obj = {};
                      obj = {
                        type: constants3.MESSAGE,
                        guild: store2.getGuild(channel.getGuildId()),
                        channel,
                        message: messageRecord,
                        key: messageRecord.id,
                        duration: 5 * importDefault(dependencyMap[31]).Millis.SECOND,
                        onDismiss() {
                                            callback(closure_2[32]).clearNotification();
                                          },
                        parentChannel: store.getChannel(channel.parent_id),
                        inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId(),
                        mentionCount: mentionCount.getMentionCount(channel.id)
                      };
                      obj.notification = obj;
                      handleEnqueueNotification(obj);
                    } else {
                      return false;
                    }
                    const obj12 = arg1(dependencyMap[30]);
                  }
                } else {
                  return false;
                }
                const obj6 = arg1(dependencyMap[27]);
              }
            }
            const obj4 = importDefault(dependencyMap[28]);
          }
          const obj3 = arg1(dependencyMap[27]);
        }
        return false;
      }
      const obj2 = arg1(dependencyMap[25]);
    } else {
      return false;
    }
  },
  MESSAGE_REQUEST_NOTIFICATION_SENT: function handleMessageRequest(triggeringUserId) {
    triggeringUserId = triggeringUserId.triggeringUserId;
    let obj = importDefault(dependencyMap[35]);
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      const user = authStore.getUser(triggeringUserId);
      if (null == user) {
        return false;
      } else {
        obj = {};
        obj = { type: constants3.MESSAGE_REQUEST, author: user, numMutualGuilds: triggeringUserId.numMutualGuilds };
        const _HermesInternal = HermesInternal;
        obj.key = "message-request-" + triggeringUserId;
        obj.duration = 5 * importDefault(dependencyMap[31]).Millis.SECOND;
        obj.onDismiss = function onDismiss() {
          callback(closure_2[32]).clearNotification();
        };
        obj.inAppNotificationId = arg1(dependencyMap[33]).generateInAppNotificationId();
        obj.notification = obj;
        handleEnqueueNotification(obj);
      }
    } else {
      return false;
    }
  },
  MESSAGE_ACK: function handleMessageAck(arg0) {
    ({ channelId: closure_0, messageId: closure_1 } = arg0);
    function predicate(closure_26) {
      let tmp = closure_26.type === constants.MESSAGE;
      if (tmp) {
        tmp = closure_26.channel.id === closure_0;
      }
      if (tmp) {
        tmp = callback(closure_2[45]).compare(closure_26.message.id, callback) <= 0;
        const obj = callback(closure_2[45]);
      }
      return tmp;
    }
    let predicateResult = null != closure_26;
    if (predicateResult) {
      predicateResult = predicate(closure_26);
    }
    if (predicateResult) {
      trackDismissed(closure_26, "message_acked");
    }
    return rejectNotifications(predicate);
  },
  REACTION_NOTIFICATION_SENT: function handleReactionNotification(arg0) {
    let channelId;
    let emoji;
    let guildId;
    let message;
    ({ message, emoji } = arg0);
    const arg1 = emoji;
    if (null != message) {
      if (null != message.reactions) {
        if (null != emoji) {
          if (obj13.allowInAppNotifications()) {
            let obj = arg1(dependencyMap[38]);
            let tryParseChannelPathResult = obj.tryParseChannelPath(tmp);
            if (null == tryParseChannelPathResult) {
              tryParseChannelPathResult = { effectDuration: "o", passiveEffectDuration: "o" };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = arg1(dependencyMap[39]).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === arg1(dependencyMap[40]).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
                  return false;
                } else {
                  const channel = store.getChannel(channelId);
                  let type;
                  if (null != channel) {
                    type = channel.type;
                  }
                  let result = null != type;
                  if (result) {
                    result = channel.type === constants2.GUILD_ANNOUNCEMENT;
                  }
                  if (null != channel) {
                    type = channel.type;
                  }
                  if (!result) {
                    result = obj3.isReactionMilestoneNotification(message.reactions, type);
                  }
                  const guild = store2.getGuild(guildId);
                  const user = authStore.getUser(tmp2);
                  if (null != channel) {
                    if (!obj4.isEnabled()) {
                      if (!uiStore.getChatOpen(channelId)) {
                        const result1 = arg1(dependencyMap[27]).shouldIncludeSelectedChannel();
                        const obj5 = arg1(dependencyMap[27]);
                        obj = { message, channel, reactor: user, includeSelectedChannel: result1 };
                        if (obj6.shouldNotifyForReaction(obj)) {
                          const messageRecord = arg1(dependencyMap[29]).createMessageRecord(message);
                          const obj8 = arg1(dependencyMap[29]);
                          if (obj9.isMessageContentPreviewable(messageRecord)) {
                            const reactions = message.reactions;
                            const found = reactions.find((emoji) => {
                              let tmp = emoji.emoji.id === emoji.id;
                              if (tmp) {
                                tmp = null != emoji.id;
                              }
                              if (!tmp) {
                                tmp = emoji.emoji.name === emoji.name;
                              }
                              return tmp;
                            });
                            let tmp25;
                            if (null != found) {
                              tmp25 = found;
                            }
                            if (null == tmp25) {
                              if (tmp10) {
                                return false;
                              }
                            }
                            obj = {};
                            const obj1 = {
                              type: constants3.REACTION,
                              key: channelId,
                              duration: 5 * importDefault(dependencyMap[31]).Millis.SECOND,
                              onDismiss() {
                                                        callback(closure_2[32]).clearNotification();
                                                      },
                              channel,
                              guild,
                              user,
                              message: messageRecord,
                              parentChannel: store.getChannel(channel.parent_id),
                              reaction: tmp25,
                              inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
                            };
                            obj.notification = obj1;
                            handleEnqueueNotification(obj);
                          } else {
                            return false;
                          }
                          const obj9 = arg1(dependencyMap[30]);
                        } else {
                          return false;
                        }
                        const obj6 = arg1(dependencyMap[27]);
                      }
                    }
                    return false;
                  }
                  return false;
                }
              }
            }
            return false;
          }
          const obj13 = arg1(dependencyMap[27]);
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    savedMessage = savedMessage.savedMessage;
    let obj = importDefault(dependencyMap[41]);
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      if (null != savedMessage.message) {
        const channel = store.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          obj = {};
          obj = {
            type: constants3.MESSAGE_REMINDER,
            key: "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId,
            duration: 10 * importDefault(dependencyMap[31]).Millis.SECOND,
            onDismiss() {
                    callback(closure_2[32]).clearNotification();
                  },
            channel,
            author: savedMessage.message.author,
            savedMessage,
            inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
          };
          obj.notification = obj;
          handleEnqueueNotification(obj);
          const obj4 = arg1(dependencyMap[33]);
        }
      }
    }
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    let subtitle;
    let title;
    ({ title, subtitle } = arg0);
    let obj = arg1(dependencyMap[42]);
    const tmp = !obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" });
    let tmp2 = !tmp;
    if (!tmp) {
      if (!!obj.screenDowntimeReminder) {
        obj = {};
        obj = {
          type: constants3.RESTRICTED_HOURS_WARNING,
          key: "restricted-hours-warning",
          duration: 10 * importDefault(dependencyMap[31]).Millis.SECOND,
          onDismiss() {
                callback(closure_2[32]).clearNotification();
              },
          title,
          subtitle,
          inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
        };
        obj.notification = obj;
        handleEnqueueNotification(obj);
        const obj4 = arg1(dependencyMap[33]);
      }
      tmp2 = !!obj.screenDowntimeReminder;
      const tmp5 = !!obj.screenDowntimeReminder;
    }
    return tmp2;
  },
  RESTRICTED_HOURS_STATE_CHANGE: function handleRestrictedHoursStateChange(isInRestrictedHours) {
    isInRestrictedHours = isInRestrictedHours.isInRestrictedHours;
    let closure_28 = isInRestrictedHours;
    if (isInRestrictedHours) {
      if (null != closure_26) {
        trackDismissed(closure_26, "restricted_hours");
      }
      rejectNotifications(() => true);
    } else {
      return false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    channel = store.getChannel(channel.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (channel.isNewlyCreated) {
          if (obj2.allowInAppNotifications()) {
            const obj3 = arg1(dependencyMap[27]);
            if (obj3.shouldNotifyForForumThreadCreation(channel, channel, !obj4.isChannelFocused())) {
              const user = authStore.getUser(channel.ownerId);
              if (null == user) {
                return false;
              } else {
                const guild = store2.getGuild(channel.guild_id);
                if (null == guild) {
                  return false;
                } else {
                  let obj = {};
                  obj = {
                    type: constants3.FORUM_THREAD_CREATED,
                    thread: channel,
                    threadCreator: user,
                    parentChannel: channel,
                    guild,
                    key: channel.id,
                    duration: 5 * importDefault(dependencyMap[31]).Millis.SECOND,
                    onDismiss() {
                                    callback(closure_2[32]).clearNotification();
                                  },
                    inAppNotificationId: arg1(dependencyMap[33]).generateInAppNotificationId()
                  };
                  obj.notification = obj;
                  handleEnqueueNotification(obj);
                }
              }
            }
            const obj4 = arg1(dependencyMap[34]);
          }
          return false;
        } else {
          return false;
        }
      }
    }
    return false;
  },
  CLEAR_IN_APP_NOTIFICATION: function handleClearInAppNotification() {
    let closure_26 = null;
    showNextNotification();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    const arg1 = channelId.channelId;
    function predicate(closure_26) {
      let tmp = closure_26.type === constants.MESSAGE;
      if (tmp) {
        tmp = closure_26.channel.id === channelId;
      }
      if (!tmp) {
        let tmp4 = closure_26.type === constants.MESSAGE_FAILED_TO_SEND;
        if (tmp4) {
          tmp4 = closure_26.channelId === channelId;
        }
        tmp = tmp4;
      }
      if (!tmp) {
        let tmp7 = closure_26.type === constants.ALERT;
        if (tmp7) {
          tmp7 = closure_26.channel.id === channelId;
        }
        tmp = tmp7;
      }
      return tmp;
    }
    let predicateResult = null != closure_26;
    if (predicateResult) {
      predicateResult = predicate(closure_26);
    }
    if (predicateResult) {
      trackDismissed(closure_26, "notification_clicked");
    }
    return rejectNotifications(predicate);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleVoiceChatOpen(arg0) {
    ({ channelId: closure_0, chatOpen: closure_1 } = arg0);
    function predicate(closure_26) {
      let tmp = closure_26.type === constants.MESSAGE;
      if (tmp) {
        tmp = closure_26.channel.id === closure_0;
      }
      if (tmp) {
        tmp = closure_1;
      }
      return tmp;
    }
    let predicateResult = null != closure_26;
    if (predicateResult) {
      predicateResult = predicate(closure_26);
    }
    if (predicateResult) {
      trackDismissed(closure_26, "notification_clicked");
    }
    return rejectNotifications(predicate);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsUpdate() {
    let flag = !arg1(dependencyMap[27]).allowInAppNotifications();
    if (flag) {
      if (null != closure_26) {
        const tmp5 = trackDismissed(closure_26, "settings_updated");
        closure_26 = null;
      }
      tmp5.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (closure_29) {
      let obj = arg1(dependencyMap[42]);
      obj = { location: "InAppNotificationStore" };
      if (obj.getIsFamilyCenterV3Enabled(obj)) {
        const toScheduleSnapshotResult = arg1(dependencyMap[23]).toScheduleSnapshot(getCurrentRestrictedSchedule());
        const EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
        const obj3 = arg1(dependencyMap[23]);
        const diffSchedulesResult = arg1(dependencyMap[23]).diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult);
        let setting = null != diffSchedulesResult;
        if (setting) {
          const EnableScreenDowntimeScheduleNotifications = arg1(dependencyMap[39]).EnableScreenDowntimeScheduleNotifications;
          setting = EnableScreenDowntimeScheduleNotifications.getSetting();
        }
        if (setting) {
          setting = arg1(dependencyMap[27]).allowInAppNotifications();
          const obj5 = arg1(dependencyMap[27]);
        }
        if (setting) {
          obj = {};
          const obj1 = {
            type: constants3.RESTRICTED_SCHEDULE_UPDATED,
            key: arg1(dependencyMap[23]).restrictedScheduleNotificationKey(diffSchedulesResult.kind),
            duration: 7 * importDefault(dependencyMap[31]).Millis.SECOND,
            onDismiss() {
                    callback(closure_2[32]).clearNotification();
                  }
          };
          const obj8 = arg1(dependencyMap[23]);
          obj1.title = arg1(dependencyMap[23]).getRestrictedScheduleNotificationTitle(diffSchedulesResult.kind);
          const obj9 = arg1(dependencyMap[23]);
          obj1.subtitle = arg1(dependencyMap[23]).getRestrictedScheduleNotificationSubtitle(diffSchedulesResult.rule);
          const obj10 = arg1(dependencyMap[23]);
          obj1.inAppNotificationId = arg1(dependencyMap[33]).generateInAppNotificationId();
          obj.notification = obj1;
          handleEnqueueNotification(obj);
          const obj11 = arg1(dependencyMap[33]);
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};
const tmp2 = arg1(dependencyMap[18]);
const result = arg1(dependencyMap[48]).fileFinishedImporting("stores/native/InAppNotificationStore.tsx");

export default tmp7;
