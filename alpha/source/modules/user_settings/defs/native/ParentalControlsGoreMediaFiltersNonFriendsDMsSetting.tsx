// Module ID: 18196
// Function ID: 18197
// Name: ParentalControlsGoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [7855, 8573, 16968, 8828, 16972, 16977, 1113, 1196, 11729, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 18196 (ParentalControlsGoreMediaFiltersNonFriendsDMsSetting)
import intl3 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16968 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16972 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8828);
function useGoreContentNonFriendsDmSettingValue() {
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
}
function onGoreContentNonFriendsDmOnPress() {
  let intl;
  let intl2;
  let items;
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(16972);
    const goreContentNonFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    let obj2 = {
      title: intl.string(selectedTeenId(1113).t["16/3Bi"]),
      subtitle: intl2.string(selectedTeenId(1113).t["Yh+HX1"]),
      handlePress(goreContentNonFriendDm) {
          const obj = FamilyCenterControlledSettingsUtils;
          const obj2 = { goreContentNonFriendDm };
          return obj.updateGoreContentSetting(selectedTeenId, obj2);
        },
      currentValue: goreContentNonFriendDm,
      excluded: items
    };
    const handleSensitiveMediaFilterPress = selectedTeenId(16977).handleSensitiveMediaFilterPress;
    selectedTeenId(16977);
    intl = selectedTeenId(1113).intl;
    intl2 = selectedTeenId(1113).intl;
    items = [selectedTeenId(1196).ExplicitContentRedaction.SHOW];
    const result = handleSensitiveMediaFilterPress(obj2);
  }
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle: function getTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["Yh+HX1"]);
  },
  parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
