// Module ID: 13988
// Function ID: 106858
// Name: toggle
// Dependencies: [31, 7733, 653, 13834, 3838, 6485, 1360, 10099, 1212, 2]

// Module 13988 (toggle)
import result from "result";
import { FriendSourceFlags } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.mozb8f);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const FriendSourceFlagsSetting = setting(3838).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return React.useMemo(() => setting(outer1_2[5]).computeFlags(setting), items).mutualGuilds;
  },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = require(3838) /* explicitContentFromProto */.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = require(3838) /* explicitContentFromProto */.FriendSourceFlagsSetting;
    const obj = importAll(1360);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
    }
    FriendSourceFlagsSetting2.updateSetting(addFlagResult);
  },
  useIsDisabled() {
    return require(13834) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx");

export default createToggle;
