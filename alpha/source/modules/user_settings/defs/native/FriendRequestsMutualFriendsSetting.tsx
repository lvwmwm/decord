// Module ID: 16829
// Function ID: 16830
// Name: FriendRequestsMutualFriendsSetting
// Dependencies: [19, 8424, 1072, 16666, 4834, 7159, 1397, 11505, 1114, 2]

// Module 16829 (FriendRequestsMutualFriendsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import FlagUtilsAll from "FlagUtils" /* 1397 */;
import UserSettings from "UserSettings" /* 4834 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16666 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendSourceFlags = Constants.FriendSourceFlags;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IqlCSq);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    let setting;
    const FriendSourceFlagsSetting = setting(4834).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return react.useMemo(() => {
      const obj = UserSettingsUtils;
      return obj.computeFlags(setting);
    }, items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    let addFlagResult;
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = UserSettings.FriendSourceFlagsSetting;
    const updateSetting = FriendSourceFlagsSetting2.updateSetting;
    const obj = FlagUtilsAll;
    const tmp2 = arg0;
    if (tmp2) {
      addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
    }
    updateSetting(addFlagResult);
  },
  useIsDisabled() {
    const obj = useParentalControlSettings;
    return obj.useIsParentallyControlled();
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx");

export default toggle;
