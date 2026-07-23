// Module ID: 13760
// Function ID: 105531
// Name: toggle
// Dependencies: [5592, 7662, 653, 13727, 566, 4470, 1212, 4561, 13758, 13759, 10095, 2]

// Module 13760 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Consents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.MNKzyg);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.hasConsented(outer1_4.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      let items = [Consents.PERSONALIZATION];
      const obj3 = require(13758) /* handleRequestSuccess */;
      require(13758) /* handleRequestSuccess */.setConsents(items, []).catch((message) => outer1_0(outer1_2[9]).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = require(13758) /* handleRequestSuccess */.setConsents(items, []);
    } else {
      let obj = importDefault(4470);
      obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.title = intl.string(require(1212) /* getSystemLocale */.t["9SNpzv"]);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.body = intl2.string(require(1212) /* getSystemLocale */.t.gJvDDh);
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t["9g5UGw"]);
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj.cancelText = intl4.string(require(1212) /* getSystemLocale */.t["+ZLPw9"]);
      obj.confirmColor = importDefault(4561).Colors.RED;
      obj.onConfirm = function onConfirm() {
        const items = [outer1_4.PERSONALIZATION];
        return outer1_0(outer1_2[8]).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return require(13727) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default createToggle;
