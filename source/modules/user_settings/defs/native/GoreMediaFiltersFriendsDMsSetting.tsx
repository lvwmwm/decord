// Module ID: 13785
// Function ID: 105675
// Name: getTitle
// Dependencies: [7751, 13774, 6834, 5678, 13775, 1212, 10127, 13777, 2]

// Module 13785 (getTitle)
import createToggle from "createToggle";

function getTitle() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["+uI23H"]);
}
const pressable = createToggle.createPressable({
  useTitle: getTitle,
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = require(13774) /* useExplicitContentSettingOrDefault */;
    return require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = require(5678) /* resolveGoreSettingWithDefaults */;
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["16/3Bi"]);
    obj.subtitle = getTitle();
    obj.handlePress = function handlePress(goreContentFriendDm) {
      let obj = outer1_0(outer1_1[3]);
      obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = require(13775) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1212) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1212) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: getTitle,
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = require(13774) /* useExplicitContentSettingOrDefault */;
    return require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = require(5678) /* resolveGoreSettingWithDefaults */;
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["16/3Bi"]);
    obj.subtitle = getTitle();
    obj.handlePress = function handlePress(goreContentFriendDm) {
      let obj = outer1_0(outer1_1[3]);
      obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = require(13775) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1212) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1212) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
};
let result = require("timeoutAttachmentsAndEmbedsForMessage").fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
