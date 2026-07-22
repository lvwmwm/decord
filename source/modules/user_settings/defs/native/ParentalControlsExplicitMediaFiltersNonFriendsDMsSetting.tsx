// Module ID: 14445
// Function ID: 108887
// Name: useObscuredContentNonFriendsDmSettingValue
// Dependencies: [2382364728, 1728053255, 33554471, 1929379840, 1428, 11997, 2, 31, 33, 13640]
// Exports: onObscuredContentNonFriendsDmOnPress, useObscuredContentNonFriendsDmSettingValue

// Module 14445 (useObscuredContentNonFriendsDmSettingValue)
import module_33 from "module_33";
import getPermissiveness from "getPermissiveness";

function useObscuredContentNonFriendsDmSettingValue() {
  const parentalControlledExplicitContentSettings = arg1(dependencyMap[2]).useParentalControlledExplicitContentSettings();
  let prop;
  if (null != parentalControlledExplicitContentSettings) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  let tmp3 = null;
  if (null != prop) {
    tmp3 = arg1(dependencyMap[3]).redactionSettingToRenderedString(prop)();
    const obj2 = arg1(dependencyMap[3]);
  }
  return tmp3;
}
function onObscuredContentNonFriendsDmOnPress() {
  const selectedTeenId = selectedTeenId.getSelectedTeenId();
  const arg1 = selectedTeenId;
  if (null != selectedTeenId) {
    let obj = arg1(dependencyMap[4]);
    const intl = arg1(dependencyMap[5]).intl;
    const stringResult = intl.string(arg1(dependencyMap[5]).t.GYpoAq);
    obj = { title: stringResult, subtitle: getTitle() };
    const items = [arg1(dependencyMap[7]).ExplicitContentRedaction.SHOW];
    obj.excluded = items;
    obj.handlePress = function handlePress(explicitContentNonFriendDm) {
      let obj = selectedTeenId(closure_1[4]);
      obj = { explicitContentNonFriendDm };
      const result = obj.updateExplicitContentSetting(selectedTeenId, obj);
    };
    obj.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    const result = arg1(dependencyMap[6]).handleSensitiveMediaFilterPress(obj);
    const obj2 = arg1(dependencyMap[6]);
  }
}
function getTitle() {
  const intl = arg1(dependencyMap[5]).intl;
  return intl.string(arg1(dependencyMap[5]).t.Yh+HX1);
}
let closure_2 = importDefault(dependencyMap[0]);
module_33 = { useTitle: getTitle, parent: arg1(dependencyMap[1]).MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, useTrailing: useObscuredContentNonFriendsDmSettingValue, onPress: onObscuredContentNonFriendsDmOnPress, unsearchable: true };
module_33 = module_33.createPressable(module_33);
const result = getPermissiveness.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default module_33;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };
