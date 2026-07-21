// Module ID: 10207
// Function ID: 78838
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10207 (_isNativeReflectConstruct)
let TTSNotificationTypes;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSetDesktopType(desktopType) {
  obj.desktopType = desktopType.desktopType;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const DesktopNotificationTypes = tmp2.DesktopNotificationTypes;
({ NotificationPermissionTypes: closure_8, TTSNotificationTypes } = tmp2);
let obj = { width: true, height: true, backgroundColor: true, borderRadius: true, alignItems: true, justifyContent: true, position: true, right: true, desktopType: arg1(dependencyMap[6]).isPlatformEmbedded ? DesktopNotificationTypes.ALL : DesktopNotificationTypes.NEVER, disabledSounds: [], ttsType: TTSNotificationTypes.NEVER };
let tmp3 = (DeviceSettingsStore) => {
  class NotificationSettingsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, NotificationSettingsStore);
      obj = closure_5(NotificationSettingsStore);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = NotificationSettingsStore;
  callback2(NotificationSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const obj = {};
      const merged = Object.assign(closure_10);
      const merged1 = Object.assign(arg0);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDesktopType",
    value() {
      return closure_11.desktopType;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTTSType",
    value() {
      return closure_11.ttsType;
    }
  };
  items[4] = {
    key: "getDisabledSounds",
    value() {
      return closure_11.disabledSounds;
    }
  };
  items[5] = {
    key: "getDisableAllSounds",
    value() {
      return closure_11.disableAllSounds;
    }
  };
  items[6] = {
    key: "getDisableUnreadBadge",
    value() {
      return closure_11.disableUnreadBadge;
    }
  };
  items[7] = {
    key: "getNotifyMessagesInSelectedChannel",
    value() {
      return closure_11.notifyMessagesInSelectedChannel;
    }
  };
  items[8] = {
    key: "taskbarFlash",
    get() {
      return closure_11.taskbarFlash;
    }
  };
  items[9] = {
    key: "screenDowntimeReminder",
    get() {
      return closure_11.screenDowntimeReminder;
    }
  };
  items[10] = {
    key: "isSoundDisabled",
    value(arg0) {
      let disableAllSounds = closure_11.disableAllSounds;
      if (!disableAllSounds) {
        const disabledSounds = closure_11.disabledSounds;
        disableAllSounds = -1 !== disabledSounds.indexOf(arg0);
      }
      return disableAllSounds;
    }
  };
  return callback(NotificationSettingsStore, items);
}(importDefault(dependencyMap[7]).DeviceSettingsStore);
tmp3.displayName = "NotificationSettingsStore";
tmp3.persistKey = "notifications";
const items = [
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.disabledSounds = obj.disabledSounds || [];
    obj.disableUnreadBadge = obj.disableUnreadBadge || false;
    obj.taskbarFlash = null == obj.taskbarFlash || obj.taskbarFlash;
    let NEVER = obj.ttsType;
    if (!NEVER) {
      NEVER = TTSNotificationTypes.NEVER;
    }
    obj.ttsType = NEVER;
    if (null != obj.desktopType) {
      return obj;
    } else {
      obj.desktopType = arg1(dependencyMap[6]).isPlatformEmbedded ? DesktopNotificationTypes.ALL : DesktopNotificationTypes.NEVER;
    }
  }
];
tmp3.migrations = items;
obj = {
  NOTIFICATIONS_SET_DESKTOP_TYPE: handleSetDesktopType,
  NOTIFICATIONS_SET_TTS_TYPE: function handleSetTTSType(ttsType) {
    obj.ttsType = ttsType.ttsType;
  },
  NOTIFICATIONS_SET_DISABLED_SOUNDS: function handleSetDisabledSounds(sounds) {
    obj.disabledSounds = sounds.sounds;
  },
  NOTIFICATIONS_TOGGLE_ALL_DISABLED: function handleToggleAllDisabled() {
    obj.disableAllSounds = !obj.disableAllSounds;
  },
  NOTIFICATIONS_SET_PERMISSION_STATE: function handleSetHavePermission(enabled) {
    enabled = enabled.enabled;
    if (enabled === constants.BLOCKED) {
      let obj = { desktopType: DesktopNotificationTypes.NEVER };
      handleSetDesktopType(obj);
    } else if (enabled === constants.ENABLED) {
      obj = { desktopType: DesktopNotificationTypes.ALL };
      handleSetDesktopType(obj);
    }
  },
  NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function handleSetDisableUnreadBadge(disableUnreadBadge) {
    obj.disableUnreadBadge = disableUnreadBadge.disableUnreadBadge;
  },
  NOTIFICATIONS_SET_TASKBAR_FLASH: function handleSetTaskbarFlash(taskbarFlash) {
    obj.taskbarFlash = taskbarFlash.taskbarFlash;
  },
  NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function handleSetNotifyMessagesInSelectedChannel(notify) {
    obj.notifyMessagesInSelectedChannel = notify.notify;
  },
  NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: function handleSetScreenDowntimeReminder(screenDowntimeReminder) {
    obj.screenDowntimeReminder = screenDowntimeReminder.screenDowntimeReminder;
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[8]), obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/NotificationSettingsStore.tsx");

export default tmp3;
