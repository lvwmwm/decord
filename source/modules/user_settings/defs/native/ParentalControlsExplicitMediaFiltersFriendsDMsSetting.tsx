// Module ID: 14436
// Function ID: 108839
// Name: getTitle
// Dependencies: []

// Module 14436 (getTitle)
function getTitle() {
  const intl = arg1(dependencyMap[5]).intl;
  return intl.string(arg1(dependencyMap[5]).t.+uI23H);
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[8]);
obj = {
  useTitle: getTitle,
  parent: arg1(dependencyMap[1]).MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const parentalControlledExplicitContentSettings = arg1(dependencyMap[2]).useParentalControlledExplicitContentSettings();
    let prop;
    if (null != parentalControlledExplicitContentSettings) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp3 = null;
    if (null != prop) {
      tmp3 = arg1(dependencyMap[3]).redactionSettingToRenderedString(prop)();
      const obj2 = arg1(dependencyMap[3]);
    }
    return tmp3;
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    const selectedTeenId = selectedTeenId.getSelectedTeenId();
    const arg1 = selectedTeenId;
    if (null != selectedTeenId) {
      let obj = arg1(dependencyMap[4]);
      const intl = arg1(dependencyMap[5]).intl;
      const stringResult = intl.string(arg1(dependencyMap[5]).t.GYpoAq);
      obj = {
        title: stringResult,
        subtitle: getTitle(),
        handlePress(explicitContentFriendDm) {
            let obj = selectedTeenId(closure_1[4]);
            obj = { explicitContentFriendDm };
            return obj.updateExplicitContentSetting(selectedTeenId, obj);
          }
      };
      obj.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [arg1(dependencyMap[7]).ExplicitContentRedaction.SHOW];
      obj.excluded = items;
      const result = arg1(dependencyMap[6]).handleSensitiveMediaFilterPress(obj);
      const obj2 = arg1(dependencyMap[6]);
    }
  },
  unsearchable: true
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
