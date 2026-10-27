// Module ID: 19371
// Function ID: 19372
// Name: NativeNotificationsManager
// Dependencies: [5, 6814, 1087, 3, 7214, 1384, 10753, 10756, 8696, 1267, 2]

// Module 19371 (NativeNotificationsManager)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1087 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import PushNotificationDefault from "PushNotification" /* 10753 */;
import react_nativeDefault from "react-native" /* 10756 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6814 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

let c4, c5, c7, c8, closure_0, closure_3, map;

const AnalyticEvents = Constants.AnalyticEvents;
let closure_6 = new LoggerDefault("NativeNotificationsManager");
const tmp2 = new LoggerDefault("NativeNotificationsManager");
class NativeNotificationsManager extends AutomaticLifecycleManager {
  constructor() {
    let totalMentionCount;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handleAck = function handleAck(channelId) {
      channelId = channelId.channelId;
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        const obj2 = PushNotificationDefault;
        const result = obj2.setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
      }
      if (null != channelId) {
        const obj3 = react_nativeDefault;
        const result1 = obj3.clearNotificationsForChannel(channelId);
      }
    };
    applyArgumentsResult.handlePostConnectionOpen = _asyncToGenerator(async function(arg0, value) {
      let closure_5;
      let str1;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp72;
        let c6;
        try {
          let closure_4;
          let processing_notifications;
          let processing_notification_states;
          let PUSH_NOTIFICATION_RECEIVED;
          let closure_8;
          let moveAndReadData;
          let obj;
          let normalizeTimestampToMs;
          let str3;
          c8 = 2;
          const tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_4 = tmp;
              processing_notifications = undefined;
              processing_notification_states = undefined;
              map = undefined;
              tmp72 = undefined;
              closure_6 = undefined;
              PUSH_NOTIFICATION_RECEIVED = undefined;
              closure_8 = undefined;
              c6 = 1;
              moveAndReadData = function moveAndReadData() {
                return closure_1_10(...arguments);
              };
              obj = function _moveAndReadData() {
                obj = PUSH_NOTIFICATION_RECEIVED(function*(arg0, value) {
                  let obj3;
                  let obj6;
                  let obj9;
                  closure_0 = arg0;
                  closure_1 = value;
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    try {
                      let closure_2;
                      c5 = 2;
                      if (0 === c4) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          closure_3 = tmp4;
                          closure_2 = tmp;
                          c4 = 1;
                          c5 = 1;
                          const obj5 = { value: obj9.removeFile(str3, closure_1), done: false };
                          obj9 = closure_0(closure_2[8]);
                          return obj5;
                        }
                      } else if (1 === c4) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          const obj7 = { value, done: true };
                          return obj7;
                        } else {
                          c4 = 2;
                          c5 = 1;
                          const obj8 = { value: obj6.moveFile(closure_131_0, closure_0, closure_1), done: false };
                          obj6 = closure_0(closure_2[8]);
                          return obj8;
                        }
                      } else {
                        let tmp5;
                        if (2 === c4) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            const obj10 = { value, done: true };
                            return obj10;
                          } else {
                            tmp5 = null;
                            if (value) {
                              c4 = 3;
                              c5 = 1;
                              const obj11 = { value: obj3.readFile(closure_131_0, closure_1, "utf8"), done: false };
                              obj3 = closure_0(closure_2[8]);
                              return obj11;
                            }
                          }
                        } else if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else {
                          tmp5 = value;
                          if (arg0 === 2) {
                            c5 = 3;
                            obj = { value, done: true };
                            return obj;
                          }
                        }
                        c5 = 3;
                        const obj12 = { value: tmp5, done: true };
                        return obj12;
                      }
                    } catch (tmp24) {
                      c5 = 3;
                      throw tmp24;
                    }
                  }
                });
                return obj(...arguments);
              };
              normalizeTimestampToMs = function normalizeTimestampToMs(timestamp) {
                if (null != timestamp) {
                  let rounded;
                  if (typeof timestamp === "number") {
                    const _Math = Math;
                    rounded = Math.round(1000 * timestamp);
                  } else if (typeof timestamp === "string") {
                    const _parseInt = parseInt;
                    rounded = parseInt(timestamp, 10);
                  }
                  return rounded;
                }
              };
              str3 = "cache";
              const obj14 = PlatformUtils;
              if (obj14.isIOS()) {
                str3 = "shared";
              }
              processing_notifications = "processing_notifications";
              processing_notification_states = "processing_notification_states";
              PUSH_NOTIFICATION_RECEIVED = moveAndReadData("notifications_to_track", "processing_notifications");
              c7 = 2;
              c8 = 1;
              let obj5 = { value: PUSH_NOTIFICATION_RECEIVED, done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c6 = 0;
              let closure_12 = tmp72;
              closure_132_6.error("Error tracking push notifications", closure_12);
            } else {
              if (2 === tmp4) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  let obj6 = { value, done: true };
                  return obj6;
                } else {
                  PUSH_NOTIFICATION_RECEIVED = value;
                  if (null == PUSH_NOTIFICATION_RECEIVED) {
                    c6 = 0;
                    c8 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    const _Map = Map;
                    const self = this;
                    const self2 = this;
                    map = new Map();
                    PUSH_NOTIFICATION_RECEIVED = closure_132_0(closure_132_2[5]);
                    if (PUSH_NOTIFICATION_RECEIVED.isIOS()) {
                      PUSH_NOTIFICATION_RECEIVED = moveAndReadData("notification_states_to_track", processing_notification_states);
                      c7 = 3;
                      c8 = 1;
                      let obj8 = { value: PUSH_NOTIFICATION_RECEIVED, done: false };
                      return obj8;
                    }
                  }
                }
              } else if (3 === tmp4) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  let obj9 = { value, done: true };
                  return obj9;
                } else {
                  tmp72 = value;
                  PUSH_NOTIFICATION_RECEIVED = tmp72;
                  if (null !== tmp72) {
                    const str14 = tmp72.trim();
                    const parts = str14.split("\n");
                    const item = parts.forEach((item) => {
                      const parsed = JSON.parse(item);
                      const result = closure_1_4.set(parsed._local_uuid, parsed.app_state);
                    });
                  }
                }
              } else if (4 === tmp4) {
                c6 = 1;
                PUSH_NOTIFICATION_RECEIVED = closure_0;
                closure_0.return();
                throw tmp72;
              } else {
                if (5 === tmp4) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 0;
                    c8 = 3;
                    let obj10 = { value, done: true };
                    return obj10;
                  } else {
                    let tmp5 = closure_4;
                    PUSH_NOTIFICATION_RECEIVED = closure_132_0(closure_132_2[5]);
                    if (PUSH_NOTIFICATION_RECEIVED.isIOS()) {
                      let obj2 = closure_132_0(closure_132_2[8]);
                      PUSH_NOTIFICATION_RECEIVED = obj2.removeFile(str3, processing_notification_states);
                      c7 = 6;
                      c8 = 1;
                      let obj11 = { value: PUSH_NOTIFICATION_RECEIVED, done: false };
                      return obj11;
                    }
                  }
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  obj = { value, done: true };
                  return obj;
                }
                c6 = 0;
              }
              const str = PUSH_NOTIFICATION_RECEIVED.trim();
              closure_6 = str.split("\n");
              let closure_1 = closure_6;
              closure_0 = closure_6[Symbol.iterator]();
              PUSH_NOTIFICATION_RECEIVED = closure_0.next();
              while (closure_0 !== undefined) {
                c6 = 2;
                let _JSON = JSON;
                closure_8 = JSON.parse(PUSH_NOTIFICATION_RECEIVED);
                PUSH_NOTIFICATION_RECEIVED = closure_132_0(closure_132_2[5]);
                let isIOSResult = PUSH_NOTIFICATION_RECEIVED.isIOS();
                if (isIOSResult) {
                  isIOSResult = undefined !== closure_8._local_uuid;
                }
                if (isIOSResult) {
                  PUSH_NOTIFICATION_RECEIVED = closure_8;
                  value = map.get(closure_8._local_uuid);
                  let background_str = value;
                  if (value == null) {
                    background_str = "background";
                  }
                  PUSH_NOTIFICATION_RECEIVED.app_state = background_str;
                }
                let tmp34 = closure_132_1(closure_132_2[9]);
                PUSH_NOTIFICATION_RECEIVED = closure_132_5.PUSH_NOTIFICATION_RECEIVED;
                let obj12 = { notification_received_timestamp: normalizeTimestampToMs(closure_8.timestamp), push_action_type: closure_8.push_action_type, notif_instance_id: closure_8.notif_instance_id, notif_type_id: closure_8.notif_type_id, join_id: closure_8.join_id, notif_user_id: closure_8.notif_user_id, receiving_user_id: closure_8.receiving_user_id, message_id: closure_8.message_id, message_type: closure_8.message_type, guild_id: closure_8.guild_id, channel_id: closure_8.channel_id, channel_type: str1, rel_type: closure_8.rel_type, mention_type: closure_8.mention_type, app_state: closure_8.app_state, os_enabled: closure_8.os_enabled };
                let track = tmp34.track;
                let str2 = closure_8.channel_type;
                str1 = undefined;
                if (str2 != null) {
                  str1 = str2.toString();
                }
                let trackResult = track(PUSH_NOTIFICATION_RECEIVED, obj12);
                c6 = 1;
                continue;
              }
              let obj7 = closure_132_0(closure_132_2[8]);
              PUSH_NOTIFICATION_RECEIVED = obj7.removeFile(str3, processing_notifications);
              c7 = 5;
              c8 = 1;
              const obj13 = { value: PUSH_NOTIFICATION_RECEIVED, done: false };
              return obj13;
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp72) {
          if (0 === c6) {
            c8 = 3;
            throw tmp72;
          } else if (1 === tmp74) {
            c7 = 1;
          } else {
            c7 = 4;
          }
        }
      }
    });
    applyArgumentsResult.actions = { MESSAGE_ACK: applyArgumentsResult.handleAck, CHANNEL_SELECT: applyArgumentsResult.handleAck, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen };
    return applyArgumentsResult;
  }
}
const nativeNotificationsManager = new NativeNotificationsManager();
let result = size.fileFinishedImporting("modules/notifications/native/NativeNotificationsManager.tsx");

export default nativeNotificationsManager;
