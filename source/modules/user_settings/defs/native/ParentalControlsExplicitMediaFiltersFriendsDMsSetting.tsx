// Module ID: 14444
// Function ID: 108882
// Name: getTitle
// Dependencies: [2382364728, 1728053255, 33554471, 1929379840, 1428, 11997, 2, 31, 33, 13640]

// Module 14444 (getTitle)
import module_33 from "module_33";
import getPermissiveness from "getPermissiveness";

function getTitle() {
  const intl = arg1(dependencyMap[5]).intl;
  return intl.string(arg1(dependencyMap[5]).t.+uI23H);
}
let closure_2 = importDefault(dependencyMap[0]);
module_33 = {
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
module_33 = module_33.createPressable(module_33);
const result = getPermissiveness.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default module_33;
