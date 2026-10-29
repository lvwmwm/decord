// Module ID: 17816
// Function ID: 17817
// Name: ParentalControlsGoreMediaFiltersFriendsDMsSetting
// Dependencies: [7703, 8387, 558, 576, 16613, 8645, 16617, 16622, 1125, 1208, 11302, 2]

// Module 17816 (ParentalControlsGoreMediaFiltersFriendsDMsSetting)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16613 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16617 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7703 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8645);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
function getTitle() {
  const intl = intl3.intl;
  return intl.string(intl3.t["+uI23H"]);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentFriendsDmSettingValue() {
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useParentalControlSettings;
  const parentalControlledGoreContentSettings = obj2.useParentalControlledGoreContentSettings();
  let goreContentFriendDm;
  if (parentalControlledGoreContentSettings != null) {
    goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
  }
  let tmp6 = null;
  if (null != goreContentFriendDm) {
    let tmp7;
    if (cResult[0] !== goreContentFriendDm) {
      const tmpResult = ExplicitMediaRedactionUtils;
      const tmp8 = tmpResult.redactionSettingToRenderedString(goreContentFriendDm)();
      cResult[0] = goreContentFriendDm;
      cResult[1] = tmp8;
      tmp7 = tmp8;
    } else {
      tmp7 = cResult[1];
    }
    tmp6 = tmp7;
  }
  return tmp6;
}) : (function useGoreContentFriendsDmSettingValue() {
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
});
let obj = {
  useTitle: getTitle,
  parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
  onPress: function onGoreContentFriendsDmOnPress() {
    let intl;
    let intl2;
    let items;
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(16617);
      const goreContentFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      let obj2 = {
        title: intl.string(selectedTeenId(1125).t["16/3Bi"]),
        subtitle: intl2.string(selectedTeenId(1125).t["+uI23H"]),
        handlePress(goreContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { goreContentFriendDm };
            return obj.updateGoreContentSetting(selectedTeenId, obj2);
          },
        currentValue: goreContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(16622).handleSensitiveMediaFilterPress;
      selectedTeenId(16622);
      intl = selectedTeenId(1125).intl;
      intl2 = selectedTeenId(1125).intl;
      items = [selectedTeenId(1208).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
