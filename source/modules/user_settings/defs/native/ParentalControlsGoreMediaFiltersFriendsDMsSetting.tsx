// Module ID: 14621
// Function ID: 111495
// Name: getTitle
// Dependencies: [5765, 7697, 13789, 5834, 13793, 13786, 1212, 1282, 10059, 2]

// Module 14621 (getTitle)
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
    const parentalControlledGoreContentSettings = require(13789) /* useParentalControlledExplicitContentSettings */.useParentalControlledGoreContentSettings();
    let goreContentFriendDm;
    if (null != parentalControlledGoreContentSettings) {
      goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
    }
    let tmp3 = null;
    if (null != goreContentFriendDm) {
      tmp3 = require(5834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(goreContentFriendDm)();
      const obj2 = require(5834) /* timeoutAttachmentsAndEmbedsForMessage */;
    }
    return tmp3;
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(13793);
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
      const result = selectedTeenId(13786).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(13786);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;
