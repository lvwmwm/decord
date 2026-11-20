// Module ID: 17271
// Function ID: 17272
// Name: ParentalControlsGoreMediaFiltersFriendsDMsSetting
// Dependencies: [8215, 8592, 15995, 8328, 15999, 16005, 1112, 1195, 11817, 2]

// Module 17271 (ParentalControlsGoreMediaFiltersFriendsDMsSetting)
import intl3 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15995 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 15999 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8215 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8328);
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
      let obj = selectedTeenId(15999);
      const goreContentFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      let obj2 = {
        title: intl.string(selectedTeenId(1112).t["16/3Bi"]),
        subtitle: intl2.string(selectedTeenId(1112).t["+uI23H"]),
        handlePress(goreContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { goreContentFriendDm };
            return obj.updateGoreContentSetting(selectedTeenId, obj2);
          },
        currentValue: goreContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(16005).handleSensitiveMediaFilterPress;
      selectedTeenId(16005);
      intl = selectedTeenId(1112).intl;
      intl2 = selectedTeenId(1112).intl;
      items = [selectedTeenId(1195).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
