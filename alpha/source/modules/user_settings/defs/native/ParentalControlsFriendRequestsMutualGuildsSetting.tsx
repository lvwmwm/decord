// Module ID: 17129
// Function ID: 17130
// Name: ParentalControlsFriendRequestsMutualGuildsSetting
// Dependencies: [19, 7622, 8308, 1087, 558, 576, 8102, 15988, 7070, 1405, 11155, 1128, 2]

// Module 17129 (ParentalControlsFriendRequestsMutualGuildsSetting)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import FlagUtilsAll from "FlagUtils" /* 1405 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7070 */;
import useSelectedTeen from "useSelectedTeen" /* 8102 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15988 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7622 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendSourceFlags = Constants.FriendSourceFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsMutualGuildsSettingValue() {
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
  return tmp6.mutualGuilds;
}) : (function useFriendRequestsMutualGuildsSettingValue() {
  let controlledSetting;
  let obj = controlledSetting(8102);
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = controlledSetting(15988).ParentalControlledFriendSourceFlags;
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
