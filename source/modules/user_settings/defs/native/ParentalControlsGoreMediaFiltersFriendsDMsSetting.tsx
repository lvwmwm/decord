// Module ID: 14428
// Function ID: 108794
// Name: getTitle
// Dependencies: []

// Module 14428 (getTitle)
function getTitle() {
  const intl = arg1(dependencyMap[6]).intl;
  return intl.string(arg1(dependencyMap[6]).t.+uI23H);
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[8]);
obj = {
  useTitle: getTitle,
  parent: arg1(dependencyMap[1]).MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const parentalControlledGoreContentSettings = arg1(dependencyMap[2]).useParentalControlledGoreContentSettings();
    let goreContentFriendDm;
    if (null != parentalControlledGoreContentSettings) {
      goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
    }
    let tmp3 = null;
    if (null != goreContentFriendDm) {
      tmp3 = arg1(dependencyMap[3]).redactionSettingToRenderedString(goreContentFriendDm)();
      const obj2 = arg1(dependencyMap[3]);
    }
    return tmp3;
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    const selectedTeenId = selectedTeenId.getSelectedTeenId();
    const arg1 = selectedTeenId;
    if (null != selectedTeenId) {
      let obj = arg1(dependencyMap[4]);
      obj = {};
      const intl = arg1(dependencyMap[6]).intl;
      obj.title = intl.string(arg1(dependencyMap[6]).t.16/3Bi);
      obj.subtitle = getTitle();
      obj.handlePress = function handlePress(goreContentFriendDm) {
        let obj = selectedTeenId(closure_1[4]);
        obj = { goreContentFriendDm };
        return obj.updateGoreContentSetting(selectedTeenId, obj);
      };
      obj.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      const items = [arg1(dependencyMap[7]).ExplicitContentRedaction.SHOW];
      obj.excluded = items;
      const result = arg1(dependencyMap[5]).handleSensitiveMediaFilterPress(obj);
      const obj2 = arg1(dependencyMap[5]);
    }
  },
  unsearchable: true
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
