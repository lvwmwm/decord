// Module ID: 17922
// Function ID: 17923
// Name: NotificationsManager
// Dependencies: [5, 4709, 502, 2063, 5971, 12140, 1085, 7477, 12141, 5054, 17923, 1999, 1272, 4659, 7500, 12143, 12581, 1264, 1381, 6797, 15583, 1105, 2]

// Module 17922 (NotificationsManager)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import _modDef4659 from "module_4659" /* 4659 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7477 */;
import react_nativeDefault from "react-native" /* 7500 */;
import PushNotificationPermissionStore2 from "PushNotificationPermissionStore" /* 12140 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12143 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4709 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
import Constants from "Constants" /* 1085 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12141 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

const PushNotificationPermissionStore = PushNotificationPermissionStore2;
let closure_3;

let c10;
let closure_12;
let closure_14;
let closure_15;
let unpackModuleId;
function haveNotSeenPromptSince(arg0, arg1) {
  const tmp = PushNotificationPermissionStore.getState().promptLastSeen[arg0];
  let tmp2 = null == tmp;
  if (!tmp2) {
    let tmp4;
    if (items.includes(arg0)) {
      obj = _modDef4659();
      tmp4 = obj.diff(tmp, "days") >= 1;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function shouldShowPrompt() {
  return obj(...arguments);
}
let obj = function _shouldShowPrompt() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        let closure_1;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj3.getNotificationAuthorizationStatus(), done: false };
            obj3 = react_nativeDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1 = value;
          const tmp10 = (closure_1 === closure_130_13.UNDETERMINED || closure_1 === closure_130_13.PROVISIONAL) && closure_130_17(closure_0, 1);
          c4 = 3;
          obj = { value: tmp10, done: true };
          return obj;
        }
      } catch (tmp22) {
        c4 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
function shouldShowReactivationPrompt() {
  return obj(...arguments);
}
obj = function _shouldShowReactivationPrompt() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp2;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj3.getNotificationAuthorizationStatus(), done: false };
            obj3 = react_nativeDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const tmp8 = value === closure_130_13.DENIED && closure_130_17(closure_0, 1);
          c4 = 3;
          obj = { value: tmp8, done: true };
          return obj;
        }
      } catch (tmp16) {
        c4 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
function showPrompt(arg0, arg1, arg2) {
  let closure_22;
  let timeout;
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    obj = PushNotificationActionCreators;
    const result = obj.setPushPermissionReactivationSeen(closure_0);
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj2 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.PUSH_NOTIFICATION_REACTIVATION_PROMPT, impressionProperties: { action_location: location }, location };
    ActionSheetActionCreatorsDefault;
    const tmp3 = asyncRequire(17923, dependencyMap.paths);
    openLazy(tmp3, authStore2, obj2);
  }, arg2);
}
function _logNotificationPermissionStatus() {
  return obj(...arguments);
}
obj = function _logNotificationPermissionStatus2() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let obj2;
    let tmp6;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
        let tmp4;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            tmp4 = undefined;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.getNotificationAuthorizationStatus(), done: false };
            obj2 = react_nativeDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          const obj6 = closure_129_0(closure_129_2[16]);
          tmp4 = obj6.allowInAppNotifications();
          const obj7 = { os_enabled: closure_0 === closure_129_13.AUTHORIZED, foreground_app_enabled: tmp4, background_app_enabled: tmp4, notification_authorization_status: tmp6 };
          const track = closure_129_1(closure_129_2[17]).track;
          const NOTIFICATION_PERMISSION_STATUS = closure_129_12.NOTIFICATION_PERMISSION_STATUS;
          const tmp20 = closure_129_1(closure_129_2[17]);
          tmp6 = null;
          const obj8 = closure_129_0(closure_129_2[18]);
          if (obj8.isIOS()) {
            tmp6 = closure_0;
          }
          track(NOTIFICATION_PERMISSION_STATUS, obj7);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        c3 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
const PermissionPromptType = PushNotificationPermissionStore2.PermissionPromptType;
({ RelationshipTypes: c10, GuildFeatures: unpackModuleId, AnalyticEvents: closure_12 } = Constants);
let closure_13 = NativePermissionConstants.NotificationAuthorizationStatus;
({ NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY: closure_14, EventActionLocation: closure_15 } = NotificationPermissionConstants);
const items = [, ];
({ FRIEND_REQUEST_SENT: arr[0], INVITE_ACCEPTED: arr[1] } = PermissionPromptType);
let c22 = null;
class NotificationsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.previousAppState = null;
    applyArgumentsResult.actions = {
      MESSAGE_CREATE(message) {
        require.handleMessageCreate(message);
        const result = require.handleMessageCreateForNudge(message);
      },
      MESSAGE_REACTION_ADD(optimistic) {
        const result = require.handleReactionAddForNudge(optimistic);
      },
      INVITE_ACCEPT_SUCCESS(arg0) {
        require.handleInviteAccept(arg0);
      },
      RELATIONSHIP_ADD(arg0) {
        const result = require.handleSendFriendRequest(arg0);
      },
      POST_CONNECTION_OPEN() {
        require.handleConnectionOpen();
      },
      APP_STATE_UPDATE(arg0) {
        require.handleAppStateUpdate(arg0);
      }
    };
    applyArgumentsResult.handleConnectionOpen = _asyncToGenerator(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp3;
              c1 = 1;
              c2 = 1;
              const obj4 = { value: closure_1_24(), done: false };
              return obj4;
            }
          } else if (1 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c1 = 2;
              c2 = 1;
              const obj6 = { value: closure_128_0._handleNotificationAuthorizationStatusUpdate(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          c2 = 3;
          throw tmp7;
        }
      }
    });
    _asyncToGenerator(async (arg0) => {
      let constants2;
      let author = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (async (arg0, value) => {
        let c0;
        let c1;
        let c2;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp4;
                closure_1 = tmp;
                author = undefined;
                c1 = undefined;
                c2 = undefined;
                ({ message: c0, optimistic: c1, isPushNotification: c2, sendMessageOptions: c3 } = closure_0);
                c3 = 1;
                c4 = 1;
                return { value: "Reflect", done: true };
              }
            } else {
              let tmp5;
              if (1 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                } else {
                  const tmp6 = c1 || c2 || null != c3;
                  if (!tmp6) {
                    id = undefined;
                    if (author != null) {
                      author = author.author;
                      if (author != null) {
                        id = author.id;
                      }
                    }
                    tmp5 = id === id.getId();
                    if (tmp5) {
                      c3 = 2;
                      c4 = 1;
                      const obj5 = { value: closure_1_18(constants.MESSAGE_SENT), done: false };
                      return obj5;
                    }
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else {
                tmp5 = value;
                if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                }
              }
              if (tmp5) {
                closure_1_23(constants.MESSAGE_SENT, constants2.MESSAGE_SENT, 1000);
              }
            }
          } catch (tmp23) {
            c4 = 3;
            throw tmp23;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleMessageCreate = function() {
      return closure_0(...arguments);
    };
    _asyncToGenerator(async (arg0) => {
      let constants2;
      let constants3;
      let invite = arg0;
      let c4 = 0;
      let c5 = 0;
      const iter = (async (arg0, value) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                closure_3 = tmp4;
                closure_2 = tmp;
                invite = undefined;
                invite = invite.invite;
                c4 = 1;
                c5 = 1;
                return { value: "Reflect", done: true };
              }
            } else {
              let tmp5;
              if (1 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                } else {
                  const guild = invite.guild;
                  let features;
                  if (guild != null) {
                    features = guild.features;
                  }
                  closure_1 = features;
                  if (features == null) {
                    closure_1 = [];
                  }
                  if (!closure_1.includes(constants2.COMMUNITY)) {
                    const obj4 = closure_1(closure_2[20]);
                    if (obj4.getConfig({ location: "NotificationPermissionManager" }).inHoldout) {
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: closure_1_18(constants.INVITE_ACCEPTED), done: false };
                      return obj6;
                    }
                  }
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                } else {
                  tmp5 = value;
                  if (!tmp5) {
                    c4 = 3;
                    c5 = 1;
                    const obj8 = { value: closure_1_20(constants.INVITE_ACCEPTED), done: false };
                    return obj8;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else {
                tmp5 = value;
                if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                }
              }
              if (tmp5) {
                closure_1_23(constants.INVITE_ACCEPTED, constants3.INVITE_ACCEPTED, 1000);
              }
            }
          } catch (tmp25) {
            c5 = 3;
            throw tmp25;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleInviteAccept = function() {
      return closure_0(...arguments);
    };
    _asyncToGenerator(async (arg0) => {
      let closure_1;
      let closure_2;
      let constants2;
      let constants3;
      let relationship = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (async (arg0, value) => {
        let tmp5;
        if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            tmp5 = relationship.type === constants2.PENDING_OUTGOING;
            if (tmp5) {
              c3 = 2;
              c4 = 1;
              const obj5 = { value: closure_1_18(constants.FRIEND_REQUEST_SENT), done: false };
              return obj5;
            }
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            tmp5 = value;
            if (!tmp5) {
              c3 = 3;
              c4 = 1;
              const obj7 = { value: closure_1_20(constants.FRIEND_REQUEST_SENT), done: false };
              return obj7;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else {
          tmp5 = value;
          if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          }
        }
        if (tmp5) {
          closure_1_23(constants.FRIEND_REQUEST_SENT, constants3.FRIEND_REQUEST_SENT, 100);
        }
        await "IconComponent";
        relationship = relationship.relationship;
        return "Reflect";
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleSendFriendRequest = function() {
      return closure_0(...arguments);
    };
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
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
          let state;
          let closure_1;
          let closure_2;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              state = closure_0.state;
              closure_1 = undefined;
              closure_2 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "Reflect", done: true };
            }
          } else {
            if (1 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = closure_130_1.previousAppState === closure_0(closure_2[21]).AppStates.BACKGROUND;
                closure_2 = state === closure_0(closure_2[21]).AppStates.ACTIVE;
                closure_130_1.previousAppState = state;
                const tmp6 = closure_1 && closure_2;
                if (tmp6) {
                  c3 = 2;
                  c4 = 1;
                  const obj5 = { value: closure_130_1._handleNotificationAuthorizationStatusUpdate(), done: false };
                  return obj5;
                }
              }
            } else {
              if (2 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
            if (state === closure_0(closure_2[21]).AppStates.ACTIVE) {
              c3 = 3;
              c4 = 1;
              const obj7 = { value: closure_1_24(), done: false };
              return obj7;
            }
          }
        } catch (tmp17) {
          c4 = 3;
          throw tmp17;
        }
      }
    });
    applyArgumentsResult.handleAppStateUpdate = function() {
      return closure_0(...arguments);
    };
    applyArgumentsResult._handleNotificationAuthorizationStatusUpdate = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
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
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              const obj3 = tmp4(c2[14]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj3.getNotificationAuthorizationStatus(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            obj = tmp(c2[15]);
            const result = obj.updateNotificationAuthorizationStatus(tmp);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    });
    return applyArgumentsResult;
  }
  handleMessageCreateForNudge(message) {
    message = message.message;
    if (!message.optimistic) {
      if (!message.isPushNotification) {
        if (null == tmp2) {
          let id;
          if (message != null) {
            const author = message.author;
            if (author != null) {
              id = author.id;
            }
          }
          if (id === AuthenticationStore.getId()) {
            const channel = ChannelStore.getChannel(tmp);
            if (null != channel) {
              let isMutedResult;
              const guildId = channel.getGuildId();
              if (channel.isThread()) {
                isMutedResult = JoinedThreadsStore.isMuted(channel.id);
              } else {
                isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
              }
              if (!isMutedResult) {
                obj = PushNotificationActionCreators;
                const result = obj.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.CHANNEL_BANNER);
              }
            }
          }
        }
      }
    }
  }
  handleReactionAddForNudge(optimistic) {
    if (!optimistic.optimistic) {
      if (tmp2 === AuthenticationStore.getId()) {
        const channel = ChannelStore.getChannel(tmp);
        if (null != channel) {
          let isMutedResult;
          const guildId = channel.getGuildId();
          if (channel.isThread()) {
            isMutedResult = JoinedThreadsStore.isMuted(channel.id);
          } else {
            isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
          }
          if (!isMutedResult) {
            obj = PushNotificationActionCreators;
            const result = obj.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.POST_REACTION_BANNER);
          }
        }
      }
    }
  }
}
const prototype = NotificationsManager.prototype;
const notificationsManager = new NotificationsManager();
let result = size.fileFinishedImporting("modules/notifications/NotificationsManager.native.tsx");

export default notificationsManager;
