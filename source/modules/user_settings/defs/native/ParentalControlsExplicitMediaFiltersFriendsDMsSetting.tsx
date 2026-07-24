// Module ID: 14608
// Function ID: 111358
// Name: getTitle
// Dependencies: [6769, 7751, 13778, 6834, 13782, 1212, 13775, 1282, 10127, 2]

// Module 14608 (getTitle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function getTitle() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["+uI23H"]);
}
createToggle = {
  useTitle: getTitle,
  parent: require("MobileSetting").MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const parentalControlledExplicitContentSettings = require(13778) /* useParentalControlledExplicitContentSettings */.useParentalControlledExplicitContentSettings();
    let prop;
    if (null != parentalControlledExplicitContentSettings) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp3 = null;
    if (null != prop) {
      tmp3 = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(prop)();
      const obj2 = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */;
    }
    return tmp3;
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(13782);
      const intl = selectedTeenId(1212).intl;
      const stringResult = intl.string(selectedTeenId(1212).t.GYpoAq);
      obj = {
        title: stringResult,
        subtitle: getTitle(),
        handlePress(explicitContentFriendDm) {
            let obj = selectedTeenId(outer1_1[4]);
            obj = { explicitContentFriendDm };
            return obj.updateExplicitContentSetting(selectedTeenId, obj);
          }
      };
      obj.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1282).ExplicitContentRedaction.SHOW];
      obj.excluded = items;
      const result = selectedTeenId(13775).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(13775);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;
