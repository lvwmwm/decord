// Module ID: 15062
// Function ID: 15063
// Name: FriendRequestsEveryoneSetting
// Dependencies: [19, 7966, 1085, 558, 576, 2040, 6675, 14902, 11262, 1126, 2]

// Module 15062 (FriendRequestsEveryoneSetting)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14902 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp;
const UserSettingsUtils = tmp(6675);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AllFriendSourceFlags: c3, FriendSourceFlags: closure_4 } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsEveryoneSettingValue() {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
  const setting = FriendSourceFlagsSetting.useSetting();
  if (cResult[0] !== setting) {
    const tmpResult = UserSettingsUtils;
    const flags = tmpResult.computeFlags(setting);
    cResult[0] = setting;
    cResult[1] = flags;
    tmp5 = flags;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5.all;
}) : (function useFriendRequestsEveryoneSettingValue() {
  let setting;
  const FriendSourceFlagsSetting = setting(2040).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  return react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(setting);
  }, items).all;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mGr3CX);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp3,
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    let tmp3;
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const updateSetting = FriendSourceFlagsSetting.updateSetting;
    if (arg0) {
      tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    updateSetting(tmp3);
  },
  useIsDisabled() {
    const obj = useParentalControlSettings;
    return obj.useIsParentallyControlled();
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default toggle;
