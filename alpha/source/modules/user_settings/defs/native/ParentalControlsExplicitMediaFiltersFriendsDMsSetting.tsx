// Module ID: 16287
// Function ID: 16288
// Name: ParentalControlsExplicitMediaFiltersFriendsDMsSetting
// Dependencies: [7258, 7992, 558, 576, 15073, 8242, 15077, 1126, 15082, 1209, 10663, 2]

// Module 16287 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15073 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 15077 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8242);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
function getTitle() {
  const intl = intl3.intl;
  return intl.string(intl3.t["+uI23H"]);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentFriendsDmSettingValue() {
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useParentalControlSettings;
  const parentalControlledExplicitContentSettings = obj2.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
  }
  let tmp6 = null;
  if (null != prop) {
    let tmp7;
    if (cResult[0] !== prop) {
      const tmpResult = ExplicitMediaRedactionUtils;
      const tmp8 = tmpResult.redactionSettingToRenderedString(prop)();
      cResult[0] = prop;
      cResult[1] = tmp8;
      tmp7 = tmp8;
    } else {
      tmp7 = cResult[1];
    }
    tmp6 = tmp7;
  }
  return tmp6;
}) : (function useObscuredContentFriendsDmSettingValue() {
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
});
let obj = {
  useTitle: getTitle,
  parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
  onPress: function onObscuredContentFriendsDmOnPress() {
    let intl2;
    let items;
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(15077);
      const explicitContentFriendDm = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const intl = selectedTeenId(1126).intl;
      const stringResult = intl.string(selectedTeenId(1126).t.GYpoAq);
      let obj2 = {
        title: stringResult,
        subtitle: intl2.string(selectedTeenId(1126).t["+uI23H"]),
        handlePress(explicitContentFriendDm) {
            const obj = FamilyCenterControlledSettingsUtils;
            const obj2 = { explicitContentFriendDm };
            return obj.updateExplicitContentSetting(selectedTeenId, obj2);
          },
        currentValue: explicitContentFriendDm,
        excluded: items
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(15082).handleSensitiveMediaFilterPress;
      selectedTeenId(15082);
      intl2 = selectedTeenId(1126).intl;
      items = [selectedTeenId(1209).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
