// Module ID: 14399
// Function ID: 110063
// Dependencies: [653, 675, 686, 2]

// Module 14399
import ME from "ME";

let closure_2;
let closure_3;
let closure_4;
({ DesktopNotificationTypes: closure_2, NotificationPermissionTypes: closure_3, AnalyticEvents: closure_4 } = ME);
const result = require("dispatcher").fileFinishedImporting("actions/NotificationActionCreators.tsx");

export default {
  setDesktopType(desktopType) {
    let obj = importDefault(675);
    obj = { notifications_enabled: desktopType === constants.ALL };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType };
    importDefault(686).dispatch(obj);
  },
  setTTSType(ttsType) {
    let obj = importDefault(675);
    obj = { tts_type: ttsType.toString() };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType };
    importDefault(686).dispatch(obj);
  },
  setDisabledSounds(disabled_sounds) {
    let obj = importDefault(675);
    obj = { disabled_sounds };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: disabled_sounds };
    importDefault(686).dispatch(obj);
  },
  toggleDisableAllSounds(all_sounds_enabled) {
    let obj = importDefault(675);
    obj = { all_sounds_enabled: !all_sounds_enabled };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    importDefault(686).dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
  },
  setDisableUnreadBadge(disableUnreadBadge) {
    let obj = importDefault(675);
    obj = { unread_badge_enabled: !disableUnreadBadge };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge };
    importDefault(686).dispatch(obj);
  },
  setTaskbarFlash(show_taskbar_flash) {
    let obj = importDefault(675);
    obj = { show_taskbar_flash };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: show_taskbar_flash };
    importDefault(686).dispatch(obj);
  },
  setNotifyMessagesInSelectedChannel(notify) {
    let obj = importDefault(675);
    obj = { notify_messages_in_selected_channel: notify };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL", notify };
    importDefault(686).dispatch(obj);
  },
  setScreenDowntimeReminder(screenDowntimeReminder) {
    let obj = importDefault(675);
    obj = { screen_downtime_reminder: screenDowntimeReminder };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER", screenDowntimeReminder };
    importDefault(686).dispatch(obj);
  },
  setPermissionsState(enabled, source) {
    let obj = importDefault(675);
    obj = { enabled: enabled === constants2.ENABLED, source };
    obj.track(constants3.ENABLE_NOTIFICATIONS, obj);
    obj = { type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled, source };
    importDefault(686).dispatch(obj);
  },
  showNotification(icon, title, body, trackingProps) {
    const importDefault = arg4;
    let obj = importDefault(686);
    obj = { type: "NOTIFICATION_CREATE", icon, title, body, trackingProps };
    obj = {};
    const merged = Object.assign(arg4);
    obj["onClick"] = function onClick(arg0) {
      if (null != lib.onClick) {
        lib.onClick(arg0);
      }
      lib(outer1_1[2]).dispatch({ type: "NOTIFICATION_CLICK" });
    };
    obj.options = obj;
    obj.dispatch(obj);
  },
  clickedNotification() {
    importDefault(686).dispatch({ type: "NOTIFICATION_CLICK" });
  }
};
