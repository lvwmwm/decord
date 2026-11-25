// Module ID: 16287
// Function ID: 16288
// Name: FriendRequestsMutualGuildsSetting
// Dependencies: [19, 8712, 1071, 16126, 4738, 7415, 1404, 11942, 1112, 2]

// Module 16287 (FriendRequestsMutualGuildsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FlagUtilsAll from "FlagUtils" /* 1404 */;
import UserSettings from "UserSettings" /* 4738 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7415 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16126 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendSourceFlags = Constants.FriendSourceFlags;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mozb8f);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    let setting;
    const FriendSourceFlagsSetting = setting(4738).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return react.useMemo(() => {
      const obj = UserSettingsUtils;
      return obj.computeFlags(setting);
    }, items).mutualGuilds;
  },
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
  useIsDisabled() {
    const obj = useParentalControlSettings;
    return obj.useIsParentallyControlled();
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx");

export default toggle;
