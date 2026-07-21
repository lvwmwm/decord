// Module ID: 14227
// Function ID: 107541
// Dependencies: []

// Module 14227
const _module = require(dependencyMap[0]);
({ DesktopNotificationTypes: closure_2, NotificationPermissionTypes: closure_3, AnalyticEvents: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("actions/NotificationActionCreators.tsx");

export default {
  setDesktopType(desktopType) {
    let obj = importDefault(dependencyMap[1]);
    obj = { notifications_enabled: desktopType === constants.ALL };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType };
    importDefault(dependencyMap[2]).dispatch(obj);
  },
  setTTSType(ttsType) {
    let obj = importDefault(dependencyMap[1]);
    obj = { tts_type: ttsType.toString() };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType };
    importDefault(dependencyMap[2]).dispatch(obj);
  },
  setDisabledSounds(disabled_sounds) {
    let obj = importDefault(dependencyMap[1]);
    obj = { disabled_sounds };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: disabled_sounds };
    importDefault(dependencyMap[2]).dispatch(obj);
  },
  toggleDisableAllSounds(all_sounds_enabled) {
    let obj = importDefault(dependencyMap[1]);
    obj = { all_sounds_enabled: !all_sounds_enabled };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    importDefault(dependencyMap[2]).dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
  },
  setDisableUnreadBadge(disableUnreadBadge) {
    let obj = importDefault(dependencyMap[1]);
    obj = { unread_badge_enabled: !disableUnreadBadge };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge };
    importDefault(dependencyMap[2]).dispatch(obj);
  },
  setTaskbarFlash(show_taskbar_flash) {
    let obj = importDefault(dependencyMap[1]);
    obj = { show_taskbar_flash };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: show_taskbar_flash };
    importDefault(dependencyMap[2]).dispatch(obj);
  },
  setNotifyMessagesInSelectedChannel(notify) {
    let obj = importDefault(dependencyMap[1]);
    obj = { notify_messages_in_selected_channel: notify };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL", notify };
    importDefault(dependencyMap[2]).dispatch(obj);
  },
  setScreenDowntimeReminder(screenDowntimeReminder) {
    let obj = importDefault(dependencyMap[1]);
    obj = { screen_downtime_reminder: screenDowntimeReminder };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER", screenDowntimeReminder };
    importDefault(dependencyMap[2]).dispatch(obj);
  },
  setPermissionsState(enabled, source) {
    let obj = importDefault(dependencyMap[1]);
    obj = { enabled: enabled === constants2.ENABLED, source };
    obj.track(constants3.ENABLE_NOTIFICATIONS, obj);
    obj = { type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled, source };
    importDefault(dependencyMap[2]).dispatch(obj);
  },
  showNotification(icon, title, body, trackingProps) {
    const importDefault = arg4;
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "NOTIFICATION_CREATE", icon, title, body, trackingProps };
    obj = {};
    const merged = Object.assign(arg4);
    obj["onClick"] = function onClick(arg0) {
      if (null != arg4.onClick) {
        arg4.onClick(arg0);
      }
      arg4(closure_1[2]).dispatch({ type: "NOTIFICATION_CLICK" });
    };
    obj.options = obj;
    obj.dispatch(obj);
  },
  clickedNotification() {
    importDefault(dependencyMap[2]).dispatch({ type: "NOTIFICATION_CLICK" });
  }
};
