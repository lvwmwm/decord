// Module ID: 18309
// Function ID: 18310
// Name: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting
// Dependencies: [7824, 8536, 17069, 8791, 17073, 1113, 17079, 1196, 11717, 2]
// Exports: onObscuredContentNonFriendsDmOnPress, useObscuredContentNonFriendsDmSettingValue

// Module 18309 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import intl3 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17069 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 17073 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7824 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8791);
function useObscuredContentNonFriendsDmSettingValue() {
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
}
function onObscuredContentNonFriendsDmOnPress() {
  let intl2;
  let items;
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(17073);
    const explicitContentNonFriendDm = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    const intl = selectedTeenId(1113).intl;
    const stringResult = intl.string(selectedTeenId(1113).t.GYpoAq);
    let obj2 = {
      title: stringResult,
      subtitle: intl2.string(selectedTeenId(1113).t["Yh+HX1"]),
      excluded: items,
      handlePress(explicitContentNonFriendDm) {
          const obj = FamilyCenterControlledSettingsUtils;
          const obj2 = { explicitContentNonFriendDm };
          const result = obj.updateExplicitContentSetting(selectedTeenId, obj2);
        },
      currentValue: explicitContentNonFriendDm
    };
    const handleSensitiveMediaFilterPress = selectedTeenId(17079).handleSensitiveMediaFilterPress;
    selectedTeenId(17079);
    intl2 = selectedTeenId(1113).intl;
    items = [selectedTeenId(1196).ExplicitContentRedaction.SHOW];
    let result = handleSensitiveMediaFilterPress(obj2);
  }
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle: function getTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["Yh+HX1"]);
  },
  parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };
