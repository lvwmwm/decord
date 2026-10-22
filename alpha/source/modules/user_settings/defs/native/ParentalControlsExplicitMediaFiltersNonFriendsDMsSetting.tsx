// Module ID: 17222
// Function ID: 17223
// Name: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting
// Dependencies: [7630, 8318, 558, 576, 16047, 8572, 16051, 1128, 16056, 1211, 11181, 2]
// Exports: onObscuredContentNonFriendsDmOnPress

// Module 17222 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16047 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16051 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7630 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8572);
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
    let obj = selectedTeenId(16051);
    const explicitContentNonFriendDm = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    const intl = selectedTeenId(1128).intl;
    const stringResult = intl.string(selectedTeenId(1128).t.GYpoAq);
    let obj2 = {
      title: stringResult,
      subtitle: intl2.string(selectedTeenId(1128).t["Yh+HX1"]),
      excluded: items,
      handlePress(explicitContentNonFriendDm) {
          const obj = FamilyCenterControlledSettingsUtils;
          const obj2 = { explicitContentNonFriendDm };
          const result = obj.updateExplicitContentSetting(selectedTeenId, obj2);
        },
      currentValue: explicitContentNonFriendDm
    };
    const handleSensitiveMediaFilterPress = selectedTeenId(16056).handleSensitiveMediaFilterPress;
    selectedTeenId(16056);
    intl2 = selectedTeenId(1128).intl;
    items = [selectedTeenId(1211).ExplicitContentRedaction.SHOW];
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
