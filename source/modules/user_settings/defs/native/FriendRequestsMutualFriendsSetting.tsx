// Module ID: 14516
// Function ID: 14517
// Name: toggle
// Dependencies: [19, 7830, 676, 14363, 4135, 6207, 1403, 11006, 1236, 2]

// Module 14516 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hasFlagAll from "hasFlag" /* 1403 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14363 */;
import closure_3 from "noop" /* 19 */;
import { FriendSourceFlags } from "ME" /* 676 */;
import createToggle from "createToggle" /* 11006 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.IqlCSq);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const FriendSourceFlagsSetting = setting(4135).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return React.useMemo(() => setting(closure_1_2[5]).computeFlags(setting), items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = explicitContentFromProto.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = explicitContentFromProto.FriendSourceFlagsSetting;
    const obj = hasFlagAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
    }
    FriendSourceFlagsSetting2.updateSetting(addFlagResult);
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx");

export default createToggle;
