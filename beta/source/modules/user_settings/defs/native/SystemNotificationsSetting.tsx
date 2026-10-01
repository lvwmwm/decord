// Module ID: 15039
// Function ID: 15040
// Name: SystemNotificationsSetting
// Dependencies: [5, 17, 7417, 1074, 5045, 11903, 11911, 1241, 8746, 11006, 1115, 2]

// Module 15039 (SystemNotificationsSetting)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 11903 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

let c2, c3;

let metroImportAll;
let metroImportDefault;
let obj = function _handleEnableSystemNotification() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let tmp;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_0;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            const NativePermissionManager = NativeModules.NativePermissionManager;
            c2 = 1;
            c3 = 1;
            const obj6 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_0 = value;
          if (closure_0 === closure_129_6.UNDETERMINED) {
            const obj3 = closure_129_1(closure_129_2[6]);
            const permission = obj3.requestPermission((permission_granted) => {
              obj = closure_1_1(closure_1_2[7]);
              const obj2 = { action_type: constants2.ALLOW_TO_REQUEST, action_location: constants3.NOTIFICATION_SETTING, permission_granted };
              obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
              const tmp = closure_1_1;
              const tmp2 = closure_1_2;
              if (!permission_granted) {
                const tmpResult = tmp(tmp2[8]);
                const result = tmpResult.openNotificationSettings();
              }
            });
          } else {
            let num3 = 0;
            const track = closure_129_1(closure_129_2[7]).track;
            const NOTIFICATION_SETTINGS_CLICKED = closure_129_5.NOTIFICATION_SETTINGS_CLICKED;
            const tmp10 = closure_129_1(closure_129_2[7]);
            if (closure_0 === closure_129_6.AUTHORIZED) {
              num3 = 1;
            }
            obj = { setting_type: "os", current_status: num3 };
            const trackResult = track(NOTIFICATION_SETTINGS_CLICKED, obj);
            let obj2 = closure_129_1(closure_129_2[8]);
            let result = obj2.openNotificationSettings();
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp25) {
        c3 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_6 = NativePermissionConstants.NotificationAuthorizationStatus;
({ EventActionType: metroImportDefault, EventActionLocation: metroImportAll } = NotificationPermissionConstants);
obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.nl2Dqx);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  onPress: function handleEnableSystemNotification() {
    return obj(...arguments);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SystemNotificationsSetting.tsx");

export default pressable;
