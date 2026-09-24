// Module ID: 15255
// Function ID: 15256
// Name: FriendRequestsMutualGuildsSetting
// Dependencies: [19, 8270, 1078, 558, 15094, 568, 2023, 7273, 1389, 11630, 1119, 2]

// Module 15255 (FriendRequestsMutualGuildsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import FlagUtilsAll from "FlagUtils" /* 1389 */;
import UserSettings from "UserSettings" /* 2023 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7273 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15094 */;
import noop from "module_19" /* 19 */;

require = fn;
const FriendSourceFlags = fn(1078).FriendSourceFlags;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
fn = () => useParentalControlSettings.useIsParentallyControlled();
const SettingBuilders = fn(11630);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
  const setting = FriendSourceFlagsSetting.useSetting();
  if (cResult[0] !== setting) {
    const flags = UserSettingsUtils.computeFlags(setting);
    cResult[0] = setting;
    cResult[1] = flags;
    let tmp5 = flags;
    const tmpResult = UserSettingsUtils;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5.mutualGuilds;
}) : (() => {
  const FriendSourceFlagsSetting = setting(2023).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).mutualGuilds;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mozb8f);
  },
  parent: fn(8270).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.useSetting();
    if (cResult[0] !== setting) {
      const flags = UserSettingsUtils.computeFlags(setting);
      cResult[0] = setting;
      cResult[1] = flags;
      let tmp5 = flags;
      const tmpResult = UserSettingsUtils;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5.mutualGuilds;
  }) : (() => {
    const FriendSourceFlagsSetting = setting(2023).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).mutualGuilds;
  }),
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = UserSettings.FriendSourceFlagsSetting;
    const obj = FlagUtilsAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
    }
    FriendSourceFlagsSetting2.updateSetting(addFlagResult);
  },
  useIsDisabled: fn
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx");

export default toggle;
