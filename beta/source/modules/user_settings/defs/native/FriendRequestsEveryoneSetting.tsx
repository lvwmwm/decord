// Module ID: 15253
// Function ID: 15254
// Name: FriendRequestsEveryoneSetting
// Dependencies: [19, 8270, 1078, 558, 568, 2023, 7273, 15094, 11630, 1119, 2]

// Module 15253 (FriendRequestsEveryoneSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7273 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15094 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1078);
({ AllFriendSourceFlags: c3, FriendSourceFlags: closure_4 } = Constants);
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11630);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  return tmp5.all;
}) : (() => {
  const FriendSourceFlagsSetting = setting(2023).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).all;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
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
    return tmp5.all;
  }) : (() => {
    const FriendSourceFlagsSetting = setting(2023).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).all;
  }),
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    FriendSourceFlagsSetting.updateSetting(tmp3);
  },
  useIsDisabled: () => useParentalControlSettings.useIsParentallyControlled()
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default toggle;
