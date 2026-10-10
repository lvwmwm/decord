// Module ID: 16290
// Function ID: 16291
// Name: ParentalControlsGoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [7258, 7992, 558, 576, 15073, 8242, 15077, 15082, 1126, 1209, 10663, 2]
// Exports: onGoreContentNonFriendsDmOnPress

// Module 16290 (ParentalControlsGoreMediaFiltersNonFriendsDMsSetting)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15073 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 15077 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8242);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentNonFriendsDmSettingValue() {
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useParentalControlSettings;
  const parentalControlledGoreContentSettings = obj2.useParentalControlledGoreContentSettings();
  let prop;
  if (parentalControlledGoreContentSettings != null) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp6 = null;
  if (null != prop) {
    let tmp7;
    if (cResult[0] !== prop) {
      const tmpResult = ExplicitMediaRedactionUtils;
      const tmp8 = tmpResult.redactionSettingToRenderedString(prop)();
      cResult[0] = prop;
      cResult[1] = tmp8;
      tmp7 = tmp8;
    } else {
      tmp7 = cResult[1];
    }
    tmp6 = tmp7;
  }
  return tmp6;
}) : (function useGoreContentNonFriendsDmSettingValue() {
  const obj = useParentalControlSettings;
  const parentalControlledGoreContentSettings = obj.useParentalControlledGoreContentSettings();
  let prop;
  if (parentalControlledGoreContentSettings != null) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    const tmpResult = ExplicitMediaRedactionUtils;
    tmp5 = tmpResult.redactionSettingToRenderedString(prop)();
  }
  return tmp5;
});
function onGoreContentNonFriendsDmOnPress() {
  let intl;
  let intl2;
  let items;
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(15077);
    const goreContentNonFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    let obj2 = {
      title: intl.string(selectedTeenId(1126).t["16/3Bi"]),
      subtitle: intl2.string(selectedTeenId(1126).t["Yh+HX1"]),
      handlePress(goreContentNonFriendDm) {
          const obj = FamilyCenterControlledSettingsUtils;
          const obj2 = { goreContentNonFriendDm };
          return obj.updateGoreContentSetting(selectedTeenId, obj2);
        },
      currentValue: goreContentNonFriendDm,
      excluded: items
    };
    const handleSensitiveMediaFilterPress = selectedTeenId(15082).handleSensitiveMediaFilterPress;
    selectedTeenId(15082);
    intl = selectedTeenId(1126).intl;
    intl2 = selectedTeenId(1126).intl;
    items = [selectedTeenId(1209).ExplicitContentRedaction.SHOW];
    const result = handleSensitiveMediaFilterPress(obj2);
  }
}
function getTitle() {
  const intl = intl3.intl;
  return intl.string(intl3.t["Yh+HX1"]);
}
let obj = { useTitle: getTitle, parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, useTrailing: tmp2, onPress: onGoreContentNonFriendsDmOnPress, unsearchable: true };
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export const useGoreContentNonFriendsDmSettingValue = tmp2;
export { onGoreContentNonFriendsDmOnPress };
