// Module ID: 17396
// Function ID: 17397
// Name: ParentalControlsGoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [8335, 8712, 16116, 8448, 16120, 16126, 1112, 1195, 11937, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 17396 (ParentalControlsGoreMediaFiltersNonFriendsDMsSetting)
import intl3 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16116 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16120 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8448);
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
    let obj = selectedTeenId(16120);
    const goreContentNonFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    let obj2 = {
      title: intl.string(selectedTeenId(1112).t["16/3Bi"]),
      subtitle: intl2.string(selectedTeenId(1112).t["Yh+HX1"]),
      handlePress(goreContentNonFriendDm) {
          const obj = FamilyCenterControlledSettingsUtils;
          const obj2 = { goreContentNonFriendDm };
          return obj.updateGoreContentSetting(selectedTeenId, obj2);
        },
      currentValue: goreContentNonFriendDm,
      excluded: items
    };
    const handleSensitiveMediaFilterPress = selectedTeenId(16126).handleSensitiveMediaFilterPress;
    selectedTeenId(16126);
    intl = selectedTeenId(1112).intl;
    intl2 = selectedTeenId(1112).intl;
    items = [selectedTeenId(1195).ExplicitContentRedaction.SHOW];
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
