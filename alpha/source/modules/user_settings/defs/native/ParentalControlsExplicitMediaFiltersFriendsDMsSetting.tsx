// Module ID: 17885
// Function ID: 17886
// Name: ParentalControlsExplicitMediaFiltersFriendsDMsSetting
// Dependencies: [7708, 8424, 16666, 8679, 16670, 1114, 16675, 1197, 11505, 2]

// Module 17885 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import intl3 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16666 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16670 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8679);
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
      let obj = selectedTeenId(16670);
      const explicitContentFriendDm = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const intl = selectedTeenId(1114).intl;
      const stringResult = intl.string(selectedTeenId(1114).t.GYpoAq);
      let obj2 = {
        title: stringResult,
        subtitle: intl2.string(selectedTeenId(1114).t["+uI23H"]),
        handlePress(explicitContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { explicitContentFriendDm };
            return obj.updateExplicitContentSetting(selectedTeenId, obj2);
          },
        currentValue: explicitContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(16675).handleSensitiveMediaFilterPress;
      selectedTeenId(16675);
      intl2 = selectedTeenId(1114).intl;
      items = [selectedTeenId(1197).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
