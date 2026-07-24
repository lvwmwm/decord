// Module ID: 10248
// Function ID: 79036
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 1347, 4143, 10249, 5074, 6769, 1316, 1348, 1838, 10250, 4142, 1906, 1342, 1849, 653, 7793, 7791, 3712, 22, 10251, 10253, 5723, 5651, 10254, 10263, 4351, 10264, 664, 10265, 10266, 10259, 10268, 10269, 10273, 4321, 3803, 1282, 9571, 6828, 10274, 4324, 21, 566, 686, 2]

// Module 10248 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "ME";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { trackMessageNotificationTimestamps as closure_11 } from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_createForOfIteratorHelperLoose";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import ME from "ME";
import { EMPTY_SCHEDULE_SNAPSHOT } from "_createForOfIteratorHelperLoose";

let closure_21;
let closure_22;
let closure_23;
let closure_24;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  let obj = guild(10254);
  if (obj.allowInAppNotifications()) {
    let obj1 = guild(10269);
    const result = obj1.shouldShowRaidInAppNotification();
    const guildId = result.guildId;
    if (result.show) {
      if (null != guildId) {
        guild = store2.getGuild(guildId);
        if (null == guild) {
          return false;
        } else {
          channel = store.getChannel(channel(10273)(guild));
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
                  duration: 30 * channel(664).Millis.SECOND,
                  onDismiss() {
                                  let obj = channel(outer1_2[32]);
                                  obj.clearNotification();
                                  obj = { guild, channel };
                                  outer1_25.dismissNotification(obj);
                                },
                  channel,
                  guild,
                  inAppNotificationId: guild(10266).generateInAppNotificationId()
                };
                obj.notification = obj1;
                handleEnqueueNotification(obj);
                const obj6 = guild(10266);
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
    let obj = require(10266) /* hasMedia */;
    const result = obj.extractMetadataFromNotification(notification);
    ({ guildId, channelId, messageId } = result);
    obj = { type: notification.type, guild_id: guildId, channel_id: channelId, in_app_notification_id: notification.inAppNotificationId, message_id: messageId };
    importDefault(4324).trackWithMetadata(constants.IN_APP_NOTIFICATION_CREATED, obj);
    constants.enqueue(notification);
    const obj2 = importDefault(4324);
    const result1 = require(10274) /* playInAppMessageSound */.playInAppMessageSound(notification);
    if (null == c26) {
      showNextNotification();
    }
  }
}
function trackDismissed(type, dismiss_reason) {
  let channelId;
  let guildId;
  let messageId;
  let obj = require(10266) /* hasMedia */;
  const result = obj.extractMetadataFromNotification(type);
  ({ guildId, channelId, messageId } = result);
  obj = { type: type.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason, in_app_notification_id: type.inAppNotificationId };
  importDefault(4324).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
}
function showNextNotification() {
  let closure_26 = tmp5.tryDrain();
}
function rejectNotifications(predicate) {
  tmp5.removeAll(predicate);
  if (null != c26) {
    if (predicate(c26)) {
      c26 = null;
      showNextNotification();
      tmp5 = showNextNotification;
    }
    return true;
  }
  if (null != c26) {
    return false;
  } else {
    showNextNotification();
  }
}
({ AnalyticEvents: closure_21, ChannelTypes: closure_22, InAppNotificationTypes: closure_23, MessageTypesSets: closure_24 } = ME);
let tmp3 = (() => {
  class AlertDismissalHandler {
    constructor() {
      tmp = outer1_6(this, AlertDismissalHandler);
      obj = {};
      map = new Map();
      obj[AlertDismissalHandler(outer1_2[19]).GuildIncidentAlertTypes.JOIN_RAID] = map;
      map1 = new Map();
      obj[AlertDismissalHandler(outer1_2[19]).GuildIncidentAlertTypes.DM_RAID] = map1;
      this.dissmissedAlertsMap = obj;
      this.threshold = { amount: 1, unitOfTime: "hour" };
      return;
    }
  }
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
      let obj = AlertDismissalHandler(outer1_2[20]);
      const incidentAlertType = obj.getIncidentAlertType(outer1_10.getGuildIncident(guild.id));
      if (null != incidentAlertType) {
        obj = { guild, channel: guild.channel };
        const result = self.dissmissedAlertsMap[incidentAlertType].set(self.key(obj), outer1_1(outer1_2[21])());
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
      let obj = AlertDismissalHandler(outer1_2[20]);
      const incidentAlertType = obj.getIncidentAlertType(outer1_10.getGuildIncident(guild.id));
      if (null == incidentAlertType) {
        return false;
      } else {
        obj = { guild, channel: guild.channel };
        const value = self.dissmissedAlertsMap[incidentAlertType].get(self.key(obj));
        let tmp4 = undefined !== value;
        if (tmp4) {
          tmp4 = outer1_1(outer1_2[21])().diff(outer1_1(outer1_2[21])(value), self.threshold.unitOfTime) < self.threshold.amount;
          const obj2 = outer1_1(outer1_2[21])();
        }
        return tmp4;
      }
    }
  };
  items[2] = obj;
  return callback2(AlertDismissalHandler, items);
})();
tmp3 = new tmp3();
let closure_25 = tmp3;
let c26 = null;
let tmp5 = (() => {
  class NotificationQueue {
    constructor() {
      tmp = outer1_6(this, NotificationQueue);
      this.queue = [];
      return;
    }
  }
  let obj = {
    key: "enqueue",
    value(arg0) {
      const self = this;
      if (this.isFull()) {
        const queue = self.queue;
        let arr = queue.shift();
        if (null != arr) {
          outer1_37(arr, "evicted_from_queue");
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
      const tmp = outer1_32(outer1_1(outer1_2[22]).remove(this.queue, arg0));
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = outer1_37;
          let tmp3 = outer1_37(iter.value, "rejected_from_queue");
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  return callback2(NotificationQueue, items);
})();
tmp5 = new tmp5();
let closure_27 = tmp5;
let closure_28 = importDefaultResult.isCurrentUserInRestrictedHours();
let c29 = false;
let tmp7 = ((Store) => {
  class InAppNotificationStore {
    constructor() {
      self = this;
      tmp = outer1_6(this, InAppNotificationStore);
      obj = outer1_4(InAppNotificationStore);
      tmp2 = outer1_3;
      if (outer1_31()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(InAppNotificationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_14, outer1_8, outer1_12, outer1_10, outer1_15, outer1_16, outer1_17, outer1_18, outer1_19, outer1_13, outer1_20);
      const items = [outer1_10];
      this.syncWith(items, outer1_34);
    }
  };
  let items = [obj, ];
  obj = {
    key: "getCurrentNotification",
    value() {
      return outer1_26;
    }
  };
  items[1] = obj;
  return callback2(InAppNotificationStore, items);
})(require("initialize").Store);
tmp7.displayName = "InAppNotificationStore";
tmp7 = new tmp7(require("dispatcher"), {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    let c29 = true;
    let closure_30 = require(10251) /* _createForOfIteratorHelperLoose */.toScheduleSnapshot(getCurrentRestrictedSchedule());
    handleAlertMessage();
  },
  LOGOUT: function handleLogout() {
    let c29 = false;
    const EMPTY_SCHEDULE_SNAPSHOT = require(10251) /* _createForOfIteratorHelperLoose */.EMPTY_SCHEDULE_SNAPSHOT;
    let c26 = null;
    tmp5.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const channel_id = message.channel_id;
    let obj = require(10253) /* canViewPotentiallyNSFWChannel */;
    if (obj.canViewPotentiallyNSFWChannel(channel_id)) {
      if (obj2.shouldShowSpoilerGateForChannelId(channel_id)) {
        return false;
      } else {
        if (importDefault(5651)(message)) {
          const SELF_MENTIONABLE_SYSTEM = constants4.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            return false;
          }
        }
        if (!message.optimistic) {
          if (obj3.allowInAppNotifications()) {
            if (!obj4.isEnabled()) {
              if (!uiStore.getChatOpen(channel_id)) {
                const result = require(10254) /* _createForOfIteratorHelperLoose */.shouldIncludeSelectedChannel();
                const obj5 = require(10254) /* _createForOfIteratorHelperLoose */;
                if (obj6.shouldNotify(message, channel_id, result)) {
                  const channel = store.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const messageRecord = require(4351) /* createMinimalMessageRecord */.createMessageRecord(message);
                    const obj11 = require(4351) /* createMinimalMessageRecord */;
                    if (obj12.isMessageContentPreviewable(messageRecord)) {
                      callback3(message, channel.guild_id);
                      obj = {};
                      obj = {
                        type: constants3.MESSAGE,
                        guild: store2.getGuild(channel.getGuildId()),
                        channel,
                        message: messageRecord,
                        key: messageRecord.id,
                        duration: 5 * importDefault(664).Millis.SECOND,
                        onDismiss() {
                                            outer1_1(outer1_2[32]).clearNotification();
                                          },
                        parentChannel: store.getChannel(channel.parent_id),
                        inAppNotificationId: require(10266) /* hasMedia */.generateInAppNotificationId(),
                        mentionCount: mentionCount.getMentionCount(channel.id)
                      };
                      obj.notification = obj;
                      handleEnqueueNotification(obj);
                    } else {
                      return false;
                    }
                    obj12 = require(10264) /* isMessageContentPreviewable */;
                  }
                } else {
                  return false;
                }
                obj6 = require(10254) /* _createForOfIteratorHelperLoose */;
              }
            }
            obj4 = importDefault(10263);
          }
          obj3 = require(10254) /* _createForOfIteratorHelperLoose */;
        }
        return false;
      }
      obj2 = require(5723) /* getSpoilerGatingChannelId */;
    } else {
      return false;
    }
  },
  MESSAGE_REQUEST_NOTIFICATION_SENT: function handleMessageRequest(triggeringUserId) {
    triggeringUserId = triggeringUserId.triggeringUserId;
    let obj = importDefault(10268);
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      const user = authStore.getUser(triggeringUserId);
      if (null == user) {
        return false;
      } else {
        obj = {};
        obj = { type: constants3.MESSAGE_REQUEST, author: user, numMutualGuilds: triggeringUserId.numMutualGuilds };
        const _HermesInternal = HermesInternal;
        obj.key = "message-request-" + triggeringUserId;
        obj.duration = 5 * importDefault(664).Millis.SECOND;
        obj.onDismiss = function onDismiss() {
          outer1_1(outer1_2[32]).clearNotification();
        };
        obj.inAppNotificationId = require(10266) /* hasMedia */.generateInAppNotificationId();
        obj.notification = obj;
        handleEnqueueNotification(obj);
      }
    } else {
      return false;
    }
  },
  MESSAGE_ACK: function handleMessageAck(arg0) {
    let importDefault;
    let require;
    ({ channelId: require, messageId: importDefault } = arg0);
    function predicate(c26) {
      let tmp = c26.type === outer1_23.MESSAGE;
      if (tmp) {
        tmp = c26.channel.id === closure_0;
      }
      if (tmp) {
        tmp = outer1_1(outer1_2[45]).compare(c26.message.id, closure_1) <= 0;
        const obj = outer1_1(outer1_2[45]);
      }
      return tmp;
    }
    let predicateResult = null != c26;
    if (predicateResult) {
      predicateResult = predicate(c26);
    }
    if (predicateResult) {
      trackDismissed(c26, "message_acked");
    }
    return rejectNotifications(predicate);
  },
  REACTION_NOTIFICATION_SENT: function handleReactionNotification(arg0) {
    let channelId;
    let emoji;
    let guildId;
    let message;
    ({ message, emoji } = arg0);
    if (null != message) {
      if (null != message.reactions) {
        if (null != emoji) {
          if (obj13.allowInAppNotifications()) {
            let obj = emoji(4321);
            let tryParseChannelPathResult = obj.tryParseChannelPath(tmp);
            if (null == tryParseChannelPathResult) {
              tryParseChannelPathResult = { channelId: null, guildId: null };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = emoji(3803).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === emoji(1282).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
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
                        const result1 = emoji(10254).shouldIncludeSelectedChannel();
                        const obj5 = emoji(10254);
                        obj = { message, channel, reactor: user, includeSelectedChannel: result1 };
                        if (obj6.shouldNotifyForReaction(obj)) {
                          const messageRecord = emoji(4351).createMessageRecord(message);
                          const obj8 = emoji(4351);
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
                              duration: 5 * importDefault(664).Millis.SECOND,
                              onDismiss() {
                                                        outer1_1(outer1_2[32]).clearNotification();
                                                      },
                              channel,
                              guild,
                              user,
                              message: messageRecord,
                              parentChannel: store.getChannel(channel.parent_id),
                              reaction: tmp25,
                              inAppNotificationId: emoji(10266).generateInAppNotificationId()
                            };
                            obj.notification = obj1;
                            handleEnqueueNotification(obj);
                          } else {
                            return false;
                          }
                          obj9 = emoji(10264);
                        } else {
                          return false;
                        }
                        obj6 = emoji(10254);
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
          obj13 = emoji(10254);
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    savedMessage = savedMessage.savedMessage;
    let obj = importDefault(9571);
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      if (null != savedMessage.message) {
        const channel = store.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          obj = {};
          obj = {
            type: constants3.MESSAGE_REMINDER,
            key: "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId,
            duration: 10 * importDefault(664).Millis.SECOND,
            onDismiss() {
                    outer1_1(outer1_2[32]).clearNotification();
                  },
            channel,
            author: savedMessage.message.author,
            savedMessage,
            inAppNotificationId: require(10266) /* hasMedia */.generateInAppNotificationId()
          };
          obj.notification = obj;
          handleEnqueueNotification(obj);
          const obj4 = require(10266) /* hasMedia */;
        }
      }
    }
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    let subtitle;
    let title;
    ({ title, subtitle } = arg0);
    let obj = require(6828) /* apexExperiment */;
    const tmp = !obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" });
    let tmp2 = !tmp;
    if (!tmp) {
      if (!!obj.screenDowntimeReminder) {
        obj = {};
        obj = {
          type: constants3.RESTRICTED_HOURS_WARNING,
          key: "restricted-hours-warning",
          duration: 10 * importDefault(664).Millis.SECOND,
          onDismiss() {
                outer1_1(outer1_2[32]).clearNotification();
              },
          title,
          subtitle,
          inAppNotificationId: require(10266) /* hasMedia */.generateInAppNotificationId()
        };
        obj.notification = obj;
        handleEnqueueNotification(obj);
        const obj4 = require(10266) /* hasMedia */;
      }
      tmp2 = !!obj.screenDowntimeReminder;
      const tmp5 = !!obj.screenDowntimeReminder;
    }
    return tmp2;
  },
  RESTRICTED_HOURS_STATE_CHANGE: function handleRestrictedHoursStateChange(isInRestrictedHours) {
    isInRestrictedHours = isInRestrictedHours.isInRestrictedHours;
    if (isInRestrictedHours) {
      if (null != c26) {
        trackDismissed(c26, "restricted_hours");
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
            const obj3 = require(10254) /* _createForOfIteratorHelperLoose */;
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
                    duration: 5 * importDefault(664).Millis.SECOND,
                    onDismiss() {
                                    outer1_1(outer1_2[32]).clearNotification();
                                  },
                    inAppNotificationId: require(10266) /* hasMedia */.generateInAppNotificationId()
                  };
                  obj.notification = obj;
                  handleEnqueueNotification(obj);
                }
              }
            }
            obj4 = require(10259) /* getFocusedChannelId */;
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
    let c26 = null;
    showNextNotification();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    function predicate(c26) {
      let tmp = c26.type === outer1_23.MESSAGE;
      if (tmp) {
        tmp = c26.channel.id === channelId;
      }
      if (!tmp) {
        let tmp4 = c26.type === outer1_23.MESSAGE_FAILED_TO_SEND;
        if (tmp4) {
          tmp4 = c26.channelId === channelId;
        }
        tmp = tmp4;
      }
      if (!tmp) {
        let tmp7 = c26.type === outer1_23.ALERT;
        if (tmp7) {
          tmp7 = c26.channel.id === channelId;
        }
        tmp = tmp7;
      }
      return tmp;
    }
    let predicateResult = null != c26;
    if (predicateResult) {
      predicateResult = predicate(c26);
    }
    if (predicateResult) {
      trackDismissed(c26, "notification_clicked");
    }
    return rejectNotifications(predicate);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleVoiceChatOpen(arg0) {
    let importDefault;
    let require;
    ({ channelId: require, chatOpen: importDefault } = arg0);
    function predicate(c26) {
      let tmp = c26.type === outer1_23.MESSAGE;
      if (tmp) {
        tmp = c26.channel.id === closure_0;
      }
      if (tmp) {
        tmp = closure_1;
      }
      return tmp;
    }
    let predicateResult = null != c26;
    if (predicateResult) {
      predicateResult = predicate(c26);
    }
    if (predicateResult) {
      trackDismissed(c26, "notification_clicked");
    }
    return rejectNotifications(predicate);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsUpdate() {
    let flag = !require(10254) /* _createForOfIteratorHelperLoose */.allowInAppNotifications();
    if (flag) {
      if (null != c26) {
        const tmp5 = trackDismissed(c26, "settings_updated");
        c26 = null;
      }
      tmp5.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (c29) {
      let obj = require(6828) /* apexExperiment */;
      obj = { location: "InAppNotificationStore" };
      if (obj.getIsFamilyCenterV3Enabled(obj)) {
        const toScheduleSnapshotResult = require(10251) /* _createForOfIteratorHelperLoose */.toScheduleSnapshot(getCurrentRestrictedSchedule());
        const EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
        const obj3 = require(10251) /* _createForOfIteratorHelperLoose */;
        const diffSchedulesResult = require(10251) /* _createForOfIteratorHelperLoose */.diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult);
        let setting = null != diffSchedulesResult;
        if (setting) {
          const EnableScreenDowntimeScheduleNotifications = require(3803) /* explicitContentFromProto */.EnableScreenDowntimeScheduleNotifications;
          setting = EnableScreenDowntimeScheduleNotifications.getSetting();
        }
        if (setting) {
          setting = require(10254) /* _createForOfIteratorHelperLoose */.allowInAppNotifications();
          const obj5 = require(10254) /* _createForOfIteratorHelperLoose */;
        }
        if (setting) {
          obj = {};
          const obj1 = {
            type: constants3.RESTRICTED_SCHEDULE_UPDATED,
            key: require(10251) /* _createForOfIteratorHelperLoose */.restrictedScheduleNotificationKey(diffSchedulesResult.kind),
            duration: 7 * importDefault(664).Millis.SECOND,
            onDismiss() {
                    outer1_1(outer1_2[32]).clearNotification();
                  }
          };
          const obj8 = require(10251) /* _createForOfIteratorHelperLoose */;
          obj1.title = require(10251) /* _createForOfIteratorHelperLoose */.getRestrictedScheduleNotificationTitle(diffSchedulesResult.kind);
          const obj9 = require(10251) /* _createForOfIteratorHelperLoose */;
          obj1.subtitle = require(10251) /* _createForOfIteratorHelperLoose */.getRestrictedScheduleNotificationSubtitle(diffSchedulesResult.rule);
          const obj10 = require(10251) /* _createForOfIteratorHelperLoose */;
          obj1.inAppNotificationId = require(10266) /* hasMedia */.generateInAppNotificationId();
          obj.notification = obj1;
          handleEnqueueNotification(obj);
          const obj11 = require(10266) /* hasMedia */;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
});
let result = require("_inherits").fileFinishedImporting("stores/native/InAppNotificationStore.tsx");

export default tmp7;
