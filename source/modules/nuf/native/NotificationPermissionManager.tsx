// Module ID: 16020
// Function ID: 122913
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16020 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function haveNotSeenPromptSince(arg0, arg1) {
  const tmp = state.getState().promptLastSeen[arg0];
  let tmp2 = null == tmp;
  if (!tmp2) {
    let tmp4;
    if (items.includes(arg0)) {
      tmp4 = importDefault(dependencyMap[19])().diff(tmp, "days") >= 1;
      const obj = importDefault(dependencyMap[19])();
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function shouldShowPrompt() {
  return _shouldShowPrompt(...arguments);
}
function _shouldShowPrompt() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _shouldShowPrompt = obj;
  return obj(...arguments);
}
function shouldShowReactivationPrompt() {
  return _shouldShowReactivationPrompt(...arguments);
}
function _shouldShowReactivationPrompt() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _shouldShowReactivationPrompt = obj;
  return obj(...arguments);
}
function showPrompt(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  const timeout = setTimeout(() => {
    let obj = arg0(paths[20]);
    const result = obj.setPushPermissionReactivationSeen(arg0);
    obj = {};
    const obj2 = arg1(paths[15]);
    obj.impressionName = arg0(paths[18]).ImpressionNames.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
    obj.impressionProperties = { action_location: arg1 };
    obj.location = arg1;
    obj2.openLazy(arg0(paths[17])(paths[16], paths.paths), closure_16, obj);
  }, arg2);
}
function _logNotificationPermissionStatus() {
  return _logNotificationPermissionStatus2(...arguments);
}
function _logNotificationPermissionStatus2() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _logNotificationPermissionStatus2 = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const NativeModules = arg1(dependencyMap[6]).NativeModules;
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const PermissionPromptType = arg1(dependencyMap[11]).PermissionPromptType;
({ NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY: closure_16, EventActionLocation: closure_17 } = arg1(dependencyMap[12]));
const tmp2 = arg1(dependencyMap[12]);
({ RelationshipTypes: closure_18, GuildFeatures: closure_19, AnalyticEvents: closure_20 } = arg1(dependencyMap[13]));
let closure_21 = arg1(dependencyMap[14]).NotificationAuthorizationStatus;
const items = [, ];
({ FRIEND_REQUEST_SENT: arr[0], INVITE_ACCEPTED: arr[1] } = PermissionPromptType);
let closure_23 = null;
let tmp4 = (arg0) => {
  class NotificationPermissionManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = closure_3(this, NotificationPermissionManager);
      items1 = [...items];
      obj = closure_6(NotificationPermissionManager);
      tmp3 = closure_5;
      if (closure_24()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      NotificationPermissionManager = tmp3Result;
      tmp3Result.previousAppState = null;
      obj = {
        MESSAGE_CREATE(arg0) {
              tmp3Result.handleMessageCreate(arg0);
              const result = tmp3Result.handleMessageCreateForNudge(arg0);
            },
        MESSAGE_REACTION_ADD(arg0) {
              const result = tmp3Result.handleReactionAddForNudge(arg0);
            },
        INVITE_ACCEPT_SUCCESS(arg0) {
              tmp3Result.handleInviteAccept(arg0);
            },
        RELATIONSHIP_ADD(arg0) {
              const result = tmp3Result.handleSendFriendRequest(arg0);
            },
        POST_CONNECTION_OPEN() {
              tmp3Result.handleConnectionOpen();
            },
        APP_STATE_UPDATE(arg0) {
              tmp3Result.handleAppStateUpdate(arg0);
            }
      };
      tmp3Result.actions = obj;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.handleConnectionOpen = closure_8(obj);
      tmp3Result.handleMessageCreate = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp3Result.handleInviteAccept = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp3Result.handleSendFriendRequest = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp3Result.handleAppStateUpdate = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result._handleNotificationAuthorizationStatusUpdate = closure_8(tmp);
      return tmp3Result;
    }
  }
  const arg1 = NotificationPermissionManager;
  callback2(NotificationPermissionManager, arg0);
  let obj = {
    key: "handleMessageCreateForNudge",
    value(message) {
      message = message.message;
      if (!message.optimistic) {
        if (!message.isPushNotification) {
          if (null == tmp2) {
            let id;
            if (null != message) {
              const author = message.author;
              if (null != author) {
                id = author.id;
              }
            }
            if (id === store.getId()) {
              const channel = store2.getChannel(tmp);
              if (null != channel) {
                const guildId = channel.getGuildId();
                if (channel.isThread()) {
                  let isMutedResult = closure_10.isMuted(channel.id);
                } else {
                  isMutedResult = closure_13.isChannelMuted(guildId, channel.id);
                }
                if (!isMutedResult) {
                  const result = NotificationPermissionManager(closure_2[20]).setPushNotificationPermissionEligibleForPrompt(constants.CHANNEL_BANNER);
                  const obj = NotificationPermissionManager(closure_2[20]);
                }
              }
            }
          }
        }
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "handleReactionAddForNudge",
    value(optimistic) {
      if (!optimistic.optimistic) {
        if (tmp2 === store.getId()) {
          const channel = store2.getChannel(tmp);
          if (null != channel) {
            const guildId = channel.getGuildId();
            if (channel.isThread()) {
              let isMutedResult = closure_10.isMuted(channel.id);
            } else {
              isMutedResult = closure_13.isChannelMuted(guildId, channel.id);
            }
            if (!isMutedResult) {
              const result = NotificationPermissionManager(closure_2[20]).setPushNotificationPermissionEligibleForPrompt(constants.POST_REACTION_BANNER);
              const obj = NotificationPermissionManager(closure_2[20]);
            }
          }
        }
      }
    }
  };
  items[1] = obj;
  return callback(NotificationPermissionManager, items);
}(importDefault(dependencyMap[26]));
tmp4 = new tmp4();
const tmp3 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/nuf/native/NotificationPermissionManager.tsx");

export default tmp4;
