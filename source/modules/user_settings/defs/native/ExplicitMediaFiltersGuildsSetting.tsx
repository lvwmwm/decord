// Module ID: 13795
// Function ID: 105794
// Name: getTitle
// Dependencies: [7697, 7649, 13789, 13785, 5834, 5853, 1212, 13786, 1282, 10059, 2]

// Module 13795 (getTitle)
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

function getTitle() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["FP+a42"]);
}
const pressable = createToggle.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentGuildsSettingValue() {
    const obj = require(13785) /* useExplicitContentSettingOrDefault */;
    return require(5834) /* timeoutAttachmentsAndEmbedsForMessage */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  },
  onPress: function onObscuredContentGuildsOnPress() {
    let obj = require(5853) /* resolveExplicitContentSettingWithDefaults */;
    const intl = require(1212) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1212) /* getSystemLocale */.t.GYpoAq);
    obj = {
      title: stringResult,
      subtitle: getTitle(),
      handlePress(explicitContentGuilds) {
        let obj = outer1_0(outer1_1[5]);
        obj = { explicitContentGuilds };
        return obj.updateExplicitContentSetting(obj);
      }
    };
    const items = [require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK];
    obj.excluded = items;
    obj.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
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
  useIsDisabled() {
    let userIsTeen = require(7649) /* useUserIsTeen */.useUserIsTeen();
    const obj = require(7649) /* useUserIsTeen */;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
});
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;
