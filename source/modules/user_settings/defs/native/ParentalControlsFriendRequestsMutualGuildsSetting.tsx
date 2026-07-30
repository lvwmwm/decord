// Module ID: 14682
// Function ID: 14683
// Name: toggle
// Dependencies: [19, 5793, 7753, 676, 6254, 13851, 6503, 1384, 10116, 1236, 2]

// Module 14682 (toggle)
import noop from "noop";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { FriendSourceFlags } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.mozb8f);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const selectedTeenId = controlledSetting(6254).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(13851).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(outer1_2[6]).computeFlags(controlledSetting), items).mutualGuilds;
  },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = require(13851) /* result */.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = require(13851) /* result */.ParentalControlledFriendSourceFlags;
      const obj = importAll(1384);
      if (arg0) {
        let addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx");

export default createToggle;
