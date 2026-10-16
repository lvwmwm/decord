// Module ID: 15946
// Function ID: 15947
// Name: FriendRequestsMutualGuildsSetting
// Dependencies: [19, 8213, 1087, 558, 15783, 576, 2044, 6906, 1405, 11006, 1128, 2]

// Module 15946 (FriendRequestsMutualGuildsSetting)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import FlagUtilsAll from "FlagUtils" /* 1405 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15783 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

let tmp;
const UserSettingsUtils = tmp(6906);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendSourceFlags = Constants.FriendSourceFlags;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function useIsDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsMutualGuildsSettingValue() {
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
  return tmp5.mutualGuilds;
}) : (function useFriendRequestsMutualGuildsSettingValue() {
  let setting;
  const FriendSourceFlagsSetting = setting(2044).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  return react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(setting);
  }, items).mutualGuilds;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mozb8f);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp3,
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    let addFlagResult;
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = UserSettings.FriendSourceFlagsSetting;
    const updateSetting = FriendSourceFlagsSetting2.updateSetting;
    const obj = FlagUtilsAll;
    const tmp2 = arg0;
    if (tmp2) {
      addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
    }
    updateSetting(addFlagResult);
  },
  useIsDisabled
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx");

export default toggle;
