// Module ID: 16227
// Function ID: 16228
// Name: ParentalControlsExplicitMediaFiltersFriendsDMsSetting
// Dependencies: [7811, 8265, 15098, 7874, 15102, 1115, 15107, 1186, 11754, 2]

// Module 16227 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import util from "util" /* 1115 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7874 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15098 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 15102 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7811 */;

require = fn;
const SettingBuilders = fn(11754);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: fn(8265).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp5 = null;
    if (null != prop) {
      tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(prop)();
      const tmpResult = ExplicitMediaRedactionUtils;
    }
    return tmp5;
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const intl = selectedTeenId(1115).intl;
      const obj = selectedTeenId(15102);
      const stringResult = intl.string(selectedTeenId(1115).t.GYpoAq);
      const obj3 = { title: stringResult, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl2 = selectedTeenId(1115).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1115).t["+uI23H"]);
      obj3.handlePress = function handlePress(explicitContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentFriendDm });
      };
      obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1186).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(15107).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(15107);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
