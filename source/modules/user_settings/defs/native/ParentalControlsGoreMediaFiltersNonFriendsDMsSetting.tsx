// Module ID: 14623
// Function ID: 111505
// Name: useGoreContentNonFriendsDmSettingValue
// Dependencies: [5765, 7697, 13790, 5834, 13794, 13787, 1212, 1282, 10059, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 14623 (useGoreContentNonFriendsDmSettingValue)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useGoreContentNonFriendsDmSettingValue() {
  const parentalControlledGoreContentSettings = require(13790) /* useParentalControlledExplicitContentSettings */.useParentalControlledGoreContentSettings();
  let prop;
  if (null != parentalControlledGoreContentSettings) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp3 = null;
  if (null != prop) {
    tmp3 = require(5834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(prop)();
    const obj2 = require(5834) /* timeoutAttachmentsAndEmbedsForMessage */;
  }
  return tmp3;
}
function onGoreContentNonFriendsDmOnPress() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(13794);
    obj = {};
    const intl = selectedTeenId(1212).intl;
    obj.title = intl.string(selectedTeenId(1212).t["16/3Bi"]);
    obj.subtitle = getTitle();
    obj.handlePress = function handlePress(goreContentNonFriendDm) {
      let obj = selectedTeenId(outer1_1[4]);
      obj = { goreContentNonFriendDm };
      return obj.updateGoreContentSetting(selectedTeenId, obj);
    };
    obj.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    const items = [selectedTeenId(1282).ExplicitContentRedaction.SHOW];
    obj.excluded = items;
    const result = selectedTeenId(13787).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(13787);
  }
}
function getTitle() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["Yh+HX1"]);
}
createToggle = { useTitle: getTitle, parent: require("MobileSetting").MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, useTrailing: useGoreContentNonFriendsDmSettingValue, onPress: onGoreContentNonFriendsDmOnPress, unsearchable: true };
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default createToggle;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
