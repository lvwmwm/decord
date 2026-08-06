// Module ID: 13994
// Function ID: 13995
// Name: pressable
// Dependencies: [8005, 7959, 13985, 13981, 6980, 5838, 13982, 1236, 1306, 10364, 2]

// Module 13994 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["FP+a42"]);
  },
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = require(13981) /* useExplicitContentSettingOrDefault */;
    return require(6980) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    let obj = require(5838) /* resolveGoreSettingWithDefaults */;
    obj = { title: null, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["16/3Bi"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["FP+a42"]);
    obj[2] = function handlePress(goreContentGuilds) {
      let obj = callback(table[5]);
      obj = { goreContentGuilds };
      return obj.updateGoreContentSetting(obj);
    };
    const items = [require(1306) /* create */.ExplicitContentRedaction.BLOCK];
    obj[3] = items;
    obj[4] = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = require(13982) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useIsDisabled() {
    let userIsTeen = require(7959) /* useUserIsTeen */.useUserIsTeen();
    const obj = require(7959) /* useUserIsTeen */;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1236) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  }
});
let obj = {
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["FP+a42"]);
  },
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = require(13981) /* useExplicitContentSettingOrDefault */;
    return require(6980) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    let obj = require(5838) /* resolveGoreSettingWithDefaults */;
    obj = { title: null, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["16/3Bi"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["FP+a42"]);
    obj[2] = function handlePress(goreContentGuilds) {
      let obj = callback(table[5]);
      obj = { goreContentGuilds };
      return obj.updateGoreContentSetting(obj);
    };
    const items = [require(1306) /* create */.ExplicitContentRedaction.BLOCK];
    obj[3] = items;
    obj[4] = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = require(13982) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useIsDisabled() {
    let userIsTeen = require(7959) /* useUserIsTeen */.useUserIsTeen();
    const obj = require(7959) /* useUserIsTeen */;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1236) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  }
};
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx");

export default pressable;
