// Module ID: 17577
// Function ID: 17578
// Name: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting
// Dependencies: [7680, 8365, 558, 576, 16375, 8623, 16379, 1125, 16384, 1208, 11248, 2]
// Exports: onObscuredContentNonFriendsDmOnPress

// Module 17577 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16375 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16379 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7680 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8623);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentNonFriendsDmSettingValue() {
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useParentalControlSettings;
  const parentalControlledExplicitContentSettings = obj2.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
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
}) : (function useObscuredContentNonFriendsDmSettingValue() {
  const obj = useParentalControlSettings;
  const parentalControlledExplicitContentSettings = obj.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    const tmpResult = ExplicitMediaRedactionUtils;
    tmp5 = tmpResult.redactionSettingToRenderedString(prop)();
  }
  return tmp5;
});
function onObscuredContentNonFriendsDmOnPress() {
  let intl2;
  let items;
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(16379);
    const explicitContentNonFriendDm = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    const intl = selectedTeenId(1125).intl;
    const stringResult = intl.string(selectedTeenId(1125).t.GYpoAq);
    let obj2 = {
      title: stringResult,
      subtitle: intl2.string(selectedTeenId(1125).t["Yh+HX1"]),
      excluded: items,
      handlePress(explicitContentNonFriendDm) {
          const obj = FamilyCenterControlledSettingsUtils;
          const obj2 = { explicitContentNonFriendDm };
          const result = obj.updateExplicitContentSetting(selectedTeenId, obj2);
        },
      currentValue: explicitContentNonFriendDm
    };
    const handleSensitiveMediaFilterPress = selectedTeenId(16384).handleSensitiveMediaFilterPress;
    selectedTeenId(16384);
    intl2 = selectedTeenId(1125).intl;
    items = [selectedTeenId(1208).ExplicitContentRedaction.SHOW];
    let result = handleSensitiveMediaFilterPress(obj2);
  }
}
function getTitle() {
  const intl = intl3.intl;
  return intl.string(intl3.t["Yh+HX1"]);
}
let obj = { useTitle: getTitle, parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, useTrailing: tmp2, onPress: onObscuredContentNonFriendsDmOnPress, unsearchable: true };
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export const useObscuredContentNonFriendsDmSettingValue = tmp2;
export { onObscuredContentNonFriendsDmOnPress };
