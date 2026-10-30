// Module ID: 17888
// Function ID: 17889
// Name: ParentalControlsGoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [7708, 8424, 16666, 8679, 16670, 16675, 1114, 1197, 11505, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 17888 (ParentalControlsGoreMediaFiltersNonFriendsDMsSetting)
import intl3 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16666 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16670 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8679);
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
    let obj = selectedTeenId(16670);
    const goreContentNonFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    let obj2 = {
      title: intl.string(selectedTeenId(1114).t["16/3Bi"]),
      subtitle: intl2.string(selectedTeenId(1114).t["Yh+HX1"]),
      handlePress(goreContentNonFriendDm) {
          const obj = FamilyCenterControlledSettingsUtils;
          const obj2 = { goreContentNonFriendDm };
          return obj.updateGoreContentSetting(selectedTeenId, obj2);
        },
      currentValue: goreContentNonFriendDm,
      excluded: items
    };
    const handleSensitiveMediaFilterPress = selectedTeenId(16675).handleSensitiveMediaFilterPress;
    selectedTeenId(16675);
    intl = selectedTeenId(1114).intl;
    intl2 = selectedTeenId(1114).intl;
    items = [selectedTeenId(1197).ExplicitContentRedaction.SHOW];
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
