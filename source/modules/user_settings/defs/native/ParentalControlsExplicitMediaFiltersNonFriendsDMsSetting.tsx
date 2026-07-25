// Module ID: 14620
// Function ID: 111490
// Name: useObscuredContentNonFriendsDmSettingValue
// Dependencies: [5765, 7697, 13789, 5834, 13793, 1212, 13786, 1282, 10059, 2]
// Exports: onObscuredContentNonFriendsDmOnPress, useObscuredContentNonFriendsDmSettingValue

// Module 14620 (useObscuredContentNonFriendsDmSettingValue)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useObscuredContentNonFriendsDmSettingValue() {
  const parentalControlledExplicitContentSettings = require(13789) /* useParentalControlledExplicitContentSettings */.useParentalControlledExplicitContentSettings();
  let prop;
  if (null != parentalControlledExplicitContentSettings) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  let tmp3 = null;
  if (null != prop) {
    tmp3 = require(5834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(prop)();
    const obj2 = require(5834) /* timeoutAttachmentsAndEmbedsForMessage */;
  }
  return tmp3;
}
function onObscuredContentNonFriendsDmOnPress() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(13793);
    const intl = selectedTeenId(1212).intl;
    const stringResult = intl.string(selectedTeenId(1212).t.GYpoAq);
    obj = { title: stringResult, subtitle: getTitle() };
    const items = [selectedTeenId(1282).ExplicitContentRedaction.SHOW];
    obj.excluded = items;
    obj.handlePress = function handlePress(explicitContentNonFriendDm) {
      let obj = selectedTeenId(outer1_1[4]);
      obj = { explicitContentNonFriendDm };
      const result = obj.updateExplicitContentSetting(selectedTeenId, obj);
    };
    obj.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(13786).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(13786);
  }
}
function getTitle() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["Yh+HX1"]);
}
createToggle = { useTitle: getTitle, parent: require("MobileSetting").MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, useTrailing: useObscuredContentNonFriendsDmSettingValue, onPress: onObscuredContentNonFriendsDmOnPress, unsearchable: true };
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default createToggle;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };
