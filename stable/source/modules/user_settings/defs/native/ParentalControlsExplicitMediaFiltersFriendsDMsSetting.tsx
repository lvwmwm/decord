// Module ID: 18308
// Function ID: 18309
// Name: ParentalControlsExplicitMediaFiltersFriendsDMsSetting
// Dependencies: [7824, 8536, 17069, 8791, 17073, 1113, 17079, 1196, 11717, 2]

// Module 18308 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import intl3 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17069 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 17073 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7824 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8791);
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
      let obj = selectedTeenId(17073);
      const explicitContentFriendDm = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const intl = selectedTeenId(1113).intl;
      const stringResult = intl.string(selectedTeenId(1113).t.GYpoAq);
      let obj2 = {
        title: stringResult,
        subtitle: intl2.string(selectedTeenId(1113).t["+uI23H"]),
        handlePress(explicitContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { explicitContentFriendDm };
            return obj.updateExplicitContentSetting(selectedTeenId, obj2);
          },
        currentValue: explicitContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(17079).handleSensitiveMediaFilterPress;
      selectedTeenId(17079);
      intl2 = selectedTeenId(1113).intl;
      items = [selectedTeenId(1196).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
