// Module ID: 17407
// Function ID: 17408
// Name: ParentalControlsExplicitMediaFiltersFriendsDMsSetting
// Dependencies: [8335, 8712, 16130, 8448, 16134, 1112, 16140, 1195, 11942, 2]

// Module 17407 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import intl3 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16130 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16134 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8448);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle: function getTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["+uI23H"]);
  },
  parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useParentalControlSettings;
    const parentalControlledExplicitContentSettings = obj.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp5 = null;
    if (null != prop) {
      const tmpResult = ExplicitMediaRedactionUtils;
      tmp5 = tmpResult.redactionSettingToRenderedString(prop)();
    }
    return tmp5;
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let intl2;
    let items;
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(16134);
      const explicitContentFriendDm = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const intl = selectedTeenId(1112).intl;
      const stringResult = intl.string(selectedTeenId(1112).t.GYpoAq);
      let obj2 = {
        title: stringResult,
        subtitle: intl2.string(selectedTeenId(1112).t["+uI23H"]),
        handlePress(explicitContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { explicitContentFriendDm };
            return obj.updateExplicitContentSetting(selectedTeenId, obj2);
          },
        currentValue: explicitContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(16140).handleSensitiveMediaFilterPress;
      selectedTeenId(16140);
      intl2 = selectedTeenId(1112).intl;
      items = [selectedTeenId(1195).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
