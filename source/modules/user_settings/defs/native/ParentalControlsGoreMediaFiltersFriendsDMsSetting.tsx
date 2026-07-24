// Module ID: 14610
// Function ID: 111368
// Name: getTitle
// Dependencies: [6769, 7751, 13778, 6834, 13782, 13775, 1212, 1282, 10127, 2]

// Module 14610 (getTitle)
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
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const parentalControlledGoreContentSettings = require(13778) /* useParentalControlledExplicitContentSettings */.useParentalControlledGoreContentSettings();
    let goreContentFriendDm;
    if (null != parentalControlledGoreContentSettings) {
      goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
    }
    let tmp3 = null;
    if (null != goreContentFriendDm) {
      tmp3 = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(goreContentFriendDm)();
      const obj2 = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */;
    }
    return tmp3;
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(13782);
      obj = {};
      const intl = selectedTeenId(1212).intl;
      obj.title = intl.string(selectedTeenId(1212).t["16/3Bi"]);
      obj.subtitle = getTitle();
      obj.handlePress = function handlePress(goreContentFriendDm) {
        let obj = selectedTeenId(outer1_1[4]);
        obj = { goreContentFriendDm };
        return obj.updateGoreContentSetting(selectedTeenId, obj);
      };
      obj.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      const items = [selectedTeenId(1282).ExplicitContentRedaction.SHOW];
      obj.excluded = items;
      const result = selectedTeenId(13775).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(13775);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;
