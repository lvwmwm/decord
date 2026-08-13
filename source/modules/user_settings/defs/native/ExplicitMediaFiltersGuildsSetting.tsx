// Module ID: 14142
// Function ID: 14143
// Name: pressable
// Dependencies: [8127, 8081, 14136, 14132, 7107, 5956, 1236, 14133, 1306, 10407, 2]

// Module 14142 (pressable)
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
    const obj = require(14132) /* useExplicitContentSettingOrDefault */;
    return require(7107) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  },
  onPress: function onObscuredContentGuildsOnPress() {
    let obj = require(5956) /* resolveExplicitContentSettingWithDefaults */;
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
    const result = require(14133) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
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
    let userIsTeen = require(8081) /* useUserIsTeen */.useUserIsTeen();
    const obj = require(8081) /* useUserIsTeen */;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
});
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;
