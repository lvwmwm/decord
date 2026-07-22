// Module ID: 14447
// Function ID: 108897
// Name: useGoreContentNonFriendsDmSettingValue
// Dependencies: []
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 14447 (useGoreContentNonFriendsDmSettingValue)
function useGoreContentNonFriendsDmSettingValue() {
  const parentalControlledGoreContentSettings = arg1(dependencyMap[2]).useParentalControlledGoreContentSettings();
  let prop;
  if (null != parentalControlledGoreContentSettings) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp3 = null;
  if (null != prop) {
    tmp3 = arg1(dependencyMap[3]).redactionSettingToRenderedString(prop)();
    const obj2 = arg1(dependencyMap[3]);
  }
  return tmp3;
}
function onGoreContentNonFriendsDmOnPress() {
  const selectedTeenId = selectedTeenId.getSelectedTeenId();
  const arg1 = selectedTeenId;
  if (null != selectedTeenId) {
    let obj = arg1(dependencyMap[4]);
    obj = {};
    const intl = arg1(dependencyMap[6]).intl;
    obj.title = intl.string(arg1(dependencyMap[6]).t.16/3Bi);
    obj.subtitle = getTitle();
    obj.handlePress = function handlePress(goreContentNonFriendDm) {
      let obj = selectedTeenId(closure_1[4]);
      obj = { goreContentNonFriendDm };
      return obj.updateGoreContentSetting(selectedTeenId, obj);
    };
    obj.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    const items = [arg1(dependencyMap[7]).ExplicitContentRedaction.SHOW];
    obj.excluded = items;
    const result = arg1(dependencyMap[5]).handleSensitiveMediaFilterPress(obj);
    const obj2 = arg1(dependencyMap[5]);
  }
}
function getTitle() {
  const intl = arg1(dependencyMap[6]).intl;
  return intl.string(arg1(dependencyMap[6]).t.Yh+HX1);
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[8]);
obj = { useTitle: getTitle, parent: arg1(dependencyMap[1]).MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, useTrailing: useGoreContentNonFriendsDmSettingValue, onPress: onGoreContentNonFriendsDmOnPress, unsearchable: true };
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
