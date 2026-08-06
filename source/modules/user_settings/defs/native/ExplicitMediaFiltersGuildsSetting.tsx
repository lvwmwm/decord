// Module ID: 13991
// Function ID: 13992
// Name: pressable
// Dependencies: [8005, 7959, 13985, 13981, 6980, 5836, 1236, 13982, 1306, 10364, 2]

// Module 13991 (pressable)
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["FP+a42"]);
  },
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentGuildsSettingValue() {
    const obj = require(13981) /* useExplicitContentSettingOrDefault */;
    return require(6980) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  },
  onPress: function onObscuredContentGuildsOnPress() {
    let obj = require(5836) /* resolveExplicitContentSettingWithDefaults */;
    const intl = require(1236) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1236) /* getSystemLocale */.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["FP+a42"]);
    obj[2] = function handlePress(explicitContentGuilds) {
      let obj = callback(table[5]);
      obj = { explicitContentGuilds };
      return obj.updateExplicitContentSetting(obj);
    };
    const items = [require(1306) /* create */.ExplicitContentRedaction.BLOCK];
    obj[3] = items;
    obj[4] = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
    const result = require(13982) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1236) /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled() {
    let userIsTeen = require(7959) /* useUserIsTeen */.useUserIsTeen();
    const obj = require(7959) /* useUserIsTeen */;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
});
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;
