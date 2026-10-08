// Module ID: 16106
// Function ID: 16107
// Name: ParentalControlsGoreMediaFiltersFriendsDMsSetting
// Dependencies: [7247, 7966, 558, 576, 14902, 8218, 14906, 14911, 1126, 1209, 11262, 2]

// Module 16106 (ParentalControlsGoreMediaFiltersFriendsDMsSetting)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14902 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14906 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8218);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
function getTitle() {
  const intl = intl3.intl;
  return intl.string(intl3.t["+uI23H"]);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentFriendsDmSettingValue() {
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useParentalControlSettings;
  const parentalControlledGoreContentSettings = obj2.useParentalControlledGoreContentSettings();
  let goreContentFriendDm;
  if (parentalControlledGoreContentSettings != null) {
    goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
  }
  let tmp6 = null;
  if (null != goreContentFriendDm) {
    let tmp7;
    if (cResult[0] !== goreContentFriendDm) {
      const tmpResult = ExplicitMediaRedactionUtils;
      const tmp8 = tmpResult.redactionSettingToRenderedString(goreContentFriendDm)();
      cResult[0] = goreContentFriendDm;
      cResult[1] = tmp8;
      tmp7 = tmp8;
    } else {
      tmp7 = cResult[1];
    }
    tmp6 = tmp7;
  }
  return tmp6;
}) : (function useGoreContentFriendsDmSettingValue() {
  const obj = useParentalControlSettings;
  const parentalControlledGoreContentSettings = obj.useParentalControlledGoreContentSettings();
  let goreContentFriendDm;
  if (parentalControlledGoreContentSettings != null) {
    goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
  }
  let tmp5 = null;
  if (null != goreContentFriendDm) {
    const tmpResult = ExplicitMediaRedactionUtils;
    tmp5 = tmpResult.redactionSettingToRenderedString(goreContentFriendDm)();
  }
  return tmp5;
});
let obj = {
  useTitle: getTitle,
  parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
  onPress: function onGoreContentFriendsDmOnPress() {
    let intl;
    let intl2;
    let items;
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(14906);
      const goreContentFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      let obj2 = {
        title: intl.string(selectedTeenId(1126).t["16/3Bi"]),
        subtitle: intl2.string(selectedTeenId(1126).t["+uI23H"]),
        handlePress(goreContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { goreContentFriendDm };
            return obj.updateGoreContentSetting(selectedTeenId, obj2);
          },
        currentValue: goreContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(14911).handleSensitiveMediaFilterPress;
      selectedTeenId(14911);
      intl = selectedTeenId(1126).intl;
      intl2 = selectedTeenId(1126).intl;
      items = [selectedTeenId(1209).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
