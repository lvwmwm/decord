// Module ID: 16828
// Function ID: 16829
// Name: FriendRequestsEveryoneSetting
// Dependencies: [19, 8424, 1072, 4834, 7159, 16666, 11505, 1114, 2]

// Module 16828 (FriendRequestsEveryoneSetting)
import intl2 from "intl" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16666 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AllFriendSourceFlags: c3, FriendSourceFlags: closure_4 } = Constants);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mGr3CX);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    let setting;
    const FriendSourceFlagsSetting = setting(4834).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return react.useMemo(() => {
      const obj = UserSettingsUtils;
      return obj.computeFlags(setting);
    }, items).all;
  },
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default toggle;
