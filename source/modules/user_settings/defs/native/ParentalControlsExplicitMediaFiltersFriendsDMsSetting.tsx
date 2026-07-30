// Module ID: 14683
// Function ID: 14684
// Name: pressable
// Dependencies: [5793, 7753, 13850, 5860, 13854, 1236, 13847, 1306, 10116, 2]

// Module 14683 (pressable)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
  },
  parent: require("MobileSetting").MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const parentalControlledExplicitContentSettings = require(13850) /* useParentalControlledExplicitContentSettings */.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp5 = null;
    if (null != prop) {
      tmp5 = require(5860) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(prop)();
      const tmpResult = require(5860) /* redactionSettingToRenderedString */;
    }
    return tmp5;
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(13854);
      const intl = selectedTeenId(1236).intl;
      const stringResult = intl.string(selectedTeenId(1236).t.GYpoAq);
      obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      obj[0] = stringResult;
      const intl2 = selectedTeenId(1236).intl;
      obj[1] = intl2.string(selectedTeenId(1236).t["+uI23H"]);
      obj[2] = function handlePress(explicitContentFriendDm) {
        let obj = selectedTeenId(outer1_1[4]);
        obj = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(selectedTeenId, obj);
      };
      obj[3] = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1306).ExplicitContentRedaction.SHOW];
      obj[4] = items;
      const result = selectedTeenId(13847).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(13847);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;
