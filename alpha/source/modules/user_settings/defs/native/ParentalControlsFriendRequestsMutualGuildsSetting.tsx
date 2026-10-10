// Module ID: 16286
// Function ID: 16287
// Name: ParentalControlsFriendRequestsMutualGuildsSetting
// Dependencies: [19, 7258, 7992, 1085, 558, 576, 7740, 15074, 6683, 1403, 10663, 1126, 2]

// Module 16286 (ParentalControlsFriendRequestsMutualGuildsSetting)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6683 */;
import useSelectedTeen from "useSelectedTeen" /* 7740 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15074 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendSourceFlags = Constants.FriendSourceFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsMutualGuildsSettingValue() {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = useSelectedTeen;
  const selectedTeenId = obj2.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = tmp(15074).ParentalControlledFriendSourceFlags;
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
  return tmp6.mutualGuilds;
}) : (function useFriendRequestsMutualGuildsSettingValue() {
  let controlledSetting;
  let obj = controlledSetting(7740);
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = controlledSetting(15074).ParentalControlledFriendSourceFlags;
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  const items = [controlledSetting];
  return react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(controlledSetting);
  }, items).mutualGuilds;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mozb8f);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let addFlagResult;
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const updateControlledSetting = ParentalControlledFriendSourceFlags2.updateControlledSetting;
      const obj = FlagUtilsAll;
      if (arg0) {
        addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
      }
      const result = updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx");

export default toggle;
