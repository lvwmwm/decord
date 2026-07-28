// Module ID: 14667
// Function ID: 111678
// Name: useGoreContentNonFriendsDmSettingValue
// Dependencies: [5775, 7733, 13834, 5844, 13838, 13831, 1212, 1282, 10099, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 14667 (useGoreContentNonFriendsDmSettingValue)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useGoreContentNonFriendsDmSettingValue() {
  const parentalControlledGoreContentSettings = require(13834) /* useParentalControlledExplicitContentSettings */.useParentalControlledGoreContentSettings();
  let prop;
  if (null != parentalControlledGoreContentSettings) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp3 = null;
  if (null != prop) {
    tmp3 = require(5844) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(prop)();
    const obj2 = require(5844) /* timeoutAttachmentsAndEmbedsForMessage */;
  }
  return tmp3;
}
function onGoreContentNonFriendsDmOnPress() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(13838);
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
    const result = selectedTeenId(13831).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(13831);
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
