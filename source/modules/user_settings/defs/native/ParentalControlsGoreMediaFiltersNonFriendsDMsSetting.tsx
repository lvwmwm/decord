// Module ID: 14997
// Function ID: 14998
// Name: useGoreContentNonFriendsDmSettingValue
// Dependencies: [7066, 8148, 14149, 7129, 14153, 14146, 1236, 1306, 10421, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 14997 (useGoreContentNonFriendsDmSettingValue)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
function useGoreContentNonFriendsDmSettingValue() {
  const parentalControlledGoreContentSettings = require(14149) /* useParentalControlledExplicitContentSettings */.useParentalControlledGoreContentSettings();
  let prop;
  if (parentalControlledGoreContentSettings != null) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = require(7129) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(prop)();
    const tmpResult = require(7129) /* redactionSettingToRenderedString */;
  }
  return tmp5;
}
function onGoreContentNonFriendsDmOnPress() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(14153);
    obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
    const intl = selectedTeenId(1236).intl;
    obj[0] = intl.string(selectedTeenId(1236).t["16/3Bi"]);
    const intl2 = selectedTeenId(1236).intl;
    obj[1] = intl2.string(selectedTeenId(1236).t["Yh+HX1"]);
    obj[2] = function handlePress(goreContentNonFriendDm) {
      let obj = selectedTeenId(outer1_1[4]);
      obj = { goreContentNonFriendDm };
      return obj.updateGoreContentSetting(selectedTeenId, obj);
    };
    obj[3] = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    const items = [selectedTeenId(1306).ExplicitContentRedaction.SHOW];
    obj[4] = items;
    const result = selectedTeenId(14146).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(14146);
  }
}
createToggle = {
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Yh+HX1"]);
  },
  parent: require("MobileSetting").MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default createToggle;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
