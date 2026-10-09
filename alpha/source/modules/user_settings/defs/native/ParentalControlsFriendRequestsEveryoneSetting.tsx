// Module ID: 16217
// Function ID: 16218
// Name: ParentalControlsFriendRequestsEveryoneSetting
// Dependencies: [19, 7252, 7974, 1085, 558, 576, 7722, 15015, 6682, 10629, 1126, 2]

// Module 16217 (ParentalControlsFriendRequestsEveryoneSetting)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6682 */;
import useSelectedTeen from "useSelectedTeen" /* 7722 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15015 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7252 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
  const ParentalControlledFriendSourceFlags = tmp(15015).ParentalControlledFriendSourceFlags;
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
  let obj = controlledSetting(7722);
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = controlledSetting(15015).ParentalControlledFriendSourceFlags;
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
