// Module ID: 18218
// Function ID: 18219
// Name: ParentalControlsFriendRequestsEveryoneSetting
// Dependencies: [19, 7860, 8578, 1072, 8517, 16992, 7305, 16996, 11737, 1113, 2]

// Module 18218 (ParentalControlsFriendRequestsEveryoneSetting)
import intl2 from "intl" /* 1113 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7305 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16992 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16996 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7860 */;
import Constants from "Constants" /* 1072 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mGr3CX);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    let controlledSetting;
    let obj = controlledSetting(8517);
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(16992).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return react.useMemo(() => {
      const obj = UserSettingsUtils;
      return obj.computeFlags(controlledSetting);
    }, items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let tmp8;
      const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
      FamilyCenterSaveErrorUtils;
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const updateControlledSetting = ParentalControlledFriendSourceFlags.updateControlledSetting;
      if (arg0) {
        tmp8 = tmp6;
      } else {
        tmp8 = tmp6 & ~hasOwnProperty.NO_RELATION;
      }
      showToastIfSaveFails(updateControlledSetting(selectedTeenId, tmp8));
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default toggle;
