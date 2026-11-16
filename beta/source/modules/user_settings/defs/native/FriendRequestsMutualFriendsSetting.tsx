// Module ID: 17506
// Function ID: 17507
// Name: FriendRequestsMutualFriendsSetting
// Dependencies: [19, 9202, 1072, 17346, 5131, 7813, 1406, 12406, 1113, 2]

// Module 17506 (FriendRequestsMutualFriendsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FlagUtilsAll from "FlagUtils" /* 1406 */;
import UserSettings from "UserSettings" /* 5131 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7813 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17346 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
    const FriendSourceFlagsSetting = setting(5131).FriendSourceFlagsSetting;
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
