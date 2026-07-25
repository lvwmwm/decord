// Module ID: 13784
// Function ID: 105704
// Name: getTitle
// Dependencies: [7697, 13785, 5834, 5853, 1212, 13786, 10059, 13788, 2]

// Module 13784 (getTitle)
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

function getTitle() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["+uI23H"]);
}
const pressable = createToggle.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = require(13785) /* useExplicitContentSettingOrDefault */;
    return require(5834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = require(5853) /* resolveExplicitContentSettingWithDefaults */;
    const intl = require(1212) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1212) /* getSystemLocale */.t.GYpoAq);
    obj = {
      title: stringResult,
      subtitle: getTitle(),
      handlePress(explicitContentFriendDm) {
        let obj = outer1_0(outer1_1[3]);
        obj = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(obj);
      },
      currentValue: obj.getExplicitContentSettingOrDefault().explicitContentFriendDm
    };
    const result = require(13786) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
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
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = require(13785) /* useExplicitContentSettingOrDefault */;
    return require(5834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = require(5853) /* resolveExplicitContentSettingWithDefaults */;
    const intl = require(1212) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1212) /* getSystemLocale */.t.GYpoAq);
    obj = {
      title: stringResult,
      subtitle: getTitle(),
      handlePress(explicitContentFriendDm) {
        let obj = outer1_0(outer1_1[3]);
        obj = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(obj);
      },
      currentValue: obj.getExplicitContentSettingOrDefault().explicitContentFriendDm
    };
    const result = require(13786) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
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
let result = require("timeoutAttachmentsAndEmbedsForMessage").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
