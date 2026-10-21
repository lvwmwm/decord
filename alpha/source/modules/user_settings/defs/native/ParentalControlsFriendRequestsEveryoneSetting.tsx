// Module ID: 17127
// Function ID: 17128
// Name: ParentalControlsFriendRequestsEveryoneSetting
// Dependencies: [19, 7622, 8308, 1087, 558, 576, 8102, 15988, 7070, 11155, 1128, 2]

// Module 17127 (ParentalControlsFriendRequestsEveryoneSetting)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7070 */;
import useSelectedTeen from "useSelectedTeen" /* 8102 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15988 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7622 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsEveryoneSettingValue() {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = useSelectedTeen;
  const selectedTeenId = obj2.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = tmp(15988).ParentalControlledFriendSourceFlags;
  const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  if (cResult[0] !== controlledSetting) {
    const tmpResult = UserSettingsUtils;
    const flags = tmpResult.computeFlags(controlledSetting);
    cResult[0] = controlledSetting;
    cResult[1] = flags;
    tmp6 = flags;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6.all;
}) : (function useFriendRequestsEveryoneSettingValue() {
  let controlledSetting;
  let obj = controlledSetting(8102);
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = controlledSetting(15988).ParentalControlledFriendSourceFlags;
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  const items = [controlledSetting];
  return react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(controlledSetting);
  }, items).all;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mGr3CX);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp3,
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let tmp7;
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const updateControlledSetting = ParentalControlledFriendSourceFlags.updateControlledSetting;
      if (arg0) {
        tmp7 = tmp5;
      } else {
        tmp7 = tmp5 & ~hasOwnProperty.NO_RELATION;
      }
      const result = updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default toggle;
