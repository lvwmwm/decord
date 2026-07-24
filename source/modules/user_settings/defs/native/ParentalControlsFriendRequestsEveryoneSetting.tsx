// Module ID: 14605
// Function ID: 111343
// Name: toggle
// Dependencies: [31, 6769, 7751, 653, 7124, 13779, 5793, 10127, 1212, 2]

// Module 14605 (toggle)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import createToggle from "createToggle";

let closure_4;
let closure_5;
const require = arg1;
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: closure_5 } = ME);
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.mGr3CX);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const selectedTeenId = controlledSetting(7124).useSelectedTeenId();
    let tmp2;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    const ParentalControlledFriendSourceFlags = controlledSetting(13779).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(tmp2);
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(outer1_1[6]).computeFlags(controlledSetting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = require(13779) /* result */.ParentalControlledFriendSourceFlags;
      if (arg0) {
        let tmp7 = tmp4;
      } else {
        tmp7 = tmp4 & ~constants.NO_RELATION;
      }
      const result = ParentalControlledFriendSourceFlags.updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default createToggle;
