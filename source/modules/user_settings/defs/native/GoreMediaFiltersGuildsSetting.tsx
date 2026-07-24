// Module ID: 13787
// Function ID: 105687
// Name: getTitle
// Dependencies: [7751, 7705, 13778, 13774, 6834, 5678, 13775, 1212, 1282, 10127, 2]

// Module 13787 (getTitle)
import createToggle from "createToggle";

function getTitle() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["FP+a42"]);
}
const pressable = createToggle.createPressable({
  useTitle: getTitle,
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = require(13774) /* useExplicitContentSettingOrDefault */;
    return require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    let obj = require(5678) /* resolveGoreSettingWithDefaults */;
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["16/3Bi"]);
    obj.subtitle = getTitle();
    obj.handlePress = function handlePress(goreContentGuilds) {
      let obj = outer1_0(outer1_1[5]);
      obj = { goreContentGuilds };
      return obj.updateGoreContentSetting(obj);
    };
    const items = [require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK];
    obj.excluded = items;
    obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = require(13775) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useIsDisabled() {
    let userIsTeen = require(7705) /* useUserIsTeen */.useUserIsTeen();
    const obj = require(7705) /* useUserIsTeen */;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1212) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1212) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  }
});
let obj = {
  useTitle: getTitle,
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = require(13774) /* useExplicitContentSettingOrDefault */;
    return require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    let obj = require(5678) /* resolveGoreSettingWithDefaults */;
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["16/3Bi"]);
    obj.subtitle = getTitle();
    obj.handlePress = function handlePress(goreContentGuilds) {
      let obj = outer1_0(outer1_1[5]);
      obj = { goreContentGuilds };
      return obj.updateGoreContentSetting(obj);
    };
    const items = [require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK];
    obj.excluded = items;
    obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = require(13775) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useIsDisabled() {
    let userIsTeen = require(7705) /* useUserIsTeen */.useUserIsTeen();
    const obj = require(7705) /* useUserIsTeen */;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1212) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1212) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  }
};
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx");

export default pressable;
