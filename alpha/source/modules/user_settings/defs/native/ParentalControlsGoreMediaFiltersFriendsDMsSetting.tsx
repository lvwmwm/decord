// Module ID: 17887
// Function ID: 17888
// Name: ParentalControlsGoreMediaFiltersFriendsDMsSetting
// Dependencies: [7708, 8424, 16666, 8679, 16670, 16675, 1114, 1197, 11505, 2]

// Module 17887 (ParentalControlsGoreMediaFiltersFriendsDMsSetting)
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
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = useParentalControlSettings;
    const parentalControlledGoreContentSettings = obj.useParentalControlledGoreContentSettings();
    let goreContentFriendDm;
    if (parentalControlledGoreContentSettings != null) {
      goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
    }
    let tmp5 = null;
    if (null != goreContentFriendDm) {
      const tmpResult = ExplicitMediaRedactionUtils;
      tmp5 = tmpResult.redactionSettingToRenderedString(goreContentFriendDm)();
    }
    return tmp5;
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let intl;
    let intl2;
    let items;
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(16670);
      const goreContentFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      let obj2 = {
        title: intl.string(selectedTeenId(1114).t["16/3Bi"]),
        subtitle: intl2.string(selectedTeenId(1114).t["+uI23H"]),
        handlePress(goreContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { goreContentFriendDm };
            return obj.updateGoreContentSetting(selectedTeenId, obj2);
          },
        currentValue: goreContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(16675).handleSensitiveMediaFilterPress;
      selectedTeenId(16675);
      intl = selectedTeenId(1114).intl;
      intl2 = selectedTeenId(1114).intl;
      items = [selectedTeenId(1197).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
