// Module ID: 18475
// Function ID: 18476
// Name: ParentalControlsGoreMediaFiltersFriendsDMsSetting
// Dependencies: [8673, 9136, 17228, 8787, 17232, 17238, 1113, 1196, 12317, 2]

// Module 18475 (ParentalControlsGoreMediaFiltersFriendsDMsSetting)
import intl3 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17228 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 17232 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8787);
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
      let obj = selectedTeenId(17232);
      const goreContentFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      let obj2 = {
        title: intl.string(selectedTeenId(1113).t["16/3Bi"]),
        subtitle: intl2.string(selectedTeenId(1113).t["+uI23H"]),
        handlePress(goreContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { goreContentFriendDm };
            return obj.updateGoreContentSetting(selectedTeenId, obj2);
          },
        currentValue: goreContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(17238).handleSensitiveMediaFilterPress;
      selectedTeenId(17238);
      intl = selectedTeenId(1113).intl;
      intl2 = selectedTeenId(1113).intl;
      items = [selectedTeenId(1196).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
