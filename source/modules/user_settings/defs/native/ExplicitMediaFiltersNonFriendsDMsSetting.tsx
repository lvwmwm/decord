// Module ID: 13795
// Function ID: 105792
// Name: useObscuredContentNonFriendsDmSettingValue
// Dependencies: [7697, 13786, 5834, 5853, 1212, 13787, 10059, 13789, 2]
// Exports: onObscuredContentNonFriendsDmOnPress, useObscuredContentNonFriendsDmSettingValue

// Module 13795 (useObscuredContentNonFriendsDmSettingValue)
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

function useObscuredContentNonFriendsDmSettingValue() {
  const obj = require(13786) /* useExplicitContentSettingOrDefault */;
  return require(5834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm)();
}
function onObscuredContentNonFriendsDmOnPress() {
  let obj = require(5853) /* resolveExplicitContentSettingWithDefaults */;
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t.GYpoAq);
  obj = {
    title: stringResult,
    subtitle: getTitle(),
    handlePress(explicitContentNonFriendDm) {
      let obj = outer1_0(outer1_1[3]);
      obj = { explicitContentNonFriendDm };
      return obj.updateExplicitContentSetting(obj);
    },
    currentValue: obj.getExplicitContentSettingOrDefault().explicitContentNonFriendDm
  };
  const result = require(13787) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
}
function getTitle() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["Yh+HX1"]);
}
const pressable = createToggle.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  useSearchTerms: function getSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1212) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1212) /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: getTitle,
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  useSearchTerms: function getSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1212) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1212) /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
};
let result = require("timeoutAttachmentsAndEmbedsForMessage").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };
