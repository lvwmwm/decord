// Module ID: 15758
// Function ID: 15759
// Name: AndroidNotificationLightsSetting
// Dependencies: [15745, 8238, 558, 568, 1368, 15747, 1119, 11594, 14733, 15751, 2]

// Module 15758 (AndroidNotificationLightsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15751 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15745 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const SettingsNotificationUtils = tmp2(15747);
({ useAndroidNotificationLightsEnabled: c2, setAndroidNotificationLightsEnabled } = AndroidNotificationSettingsStore);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = React2();
  if (cResult[0] !== tmp4) {
    const isIOSResult = tmp(1368).isIOS();
    let tmp7 = !isIOSResult;
    if (!isIOSResult) {
      tmp7 = !tmp(15747).hasAndroidNotificationChannels();
      const tmpResult2 = tmp(15747);
    }
    if (tmp7) {
      tmp7 = null != tmp4;
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
    const tmpResult = tmp(1368);
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const tmp = React2();
  const isIOSResult = PlatformUtils.isIOS();
  let tmp5 = !isIOSResult;
  if (!isIOSResult) {
    tmp5 = !SettingsNotificationUtils.hasAndroidNotificationChannels();
    const tmp2Result = SettingsNotificationUtils;
  }
  if (tmp5) {
    tmp5 = null != tmp;
  }
  return tmp5;
});
const obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.E3xHUp);
  },
  useValue: null,
  onValueChange: null
};
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
obj.useValue = () => {
  let flag = React2();
  if (flag == null) {
    flag = false;
  }
  return flag;
};
obj.onValueChange = setAndroidNotificationLightsEnabled;
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  let tmp = closure_3();
  if (tmp) {
    tmp = !obj.useIsDeclarativeSettingsUIAvailable("AndroidNotificationLightsSetting");
  }
  return tmp;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  let isDeclarativeSettingsUIAvailable = closure_3();
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationLightsSetting");
  }
  return isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationLightsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationLightsSetting = toggle1;
