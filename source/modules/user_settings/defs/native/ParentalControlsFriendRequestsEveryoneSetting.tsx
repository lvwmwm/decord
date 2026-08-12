// Module ID: 14977
// Function ID: 14978
// Name: toggle
// Dependencies: [19, 7038, 8123, 676, 7379, 14137, 6054, 10493, 1236, 2]

// Module 14977 (toggle)
import noop from "noop";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import ME from "ME";
import createToggle from "createToggle";

let c4;
let c5;
const require = arg1;
({ AllFriendSourceFlags: c4, FriendSourceFlags: c5 } = ME);
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.mGr3CX);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const selectedTeenId = controlledSetting(7379).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14137).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(outer1_1[6]).computeFlags(controlledSetting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = require(14137) /* result */.ParentalControlledFriendSourceFlags;
      if (arg0) {
        let tmp7 = tmp5;
      } else {
        tmp7 = tmp5 & ~constants.NO_RELATION;
      }
      const result = ParentalControlledFriendSourceFlags.updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default createToggle;
