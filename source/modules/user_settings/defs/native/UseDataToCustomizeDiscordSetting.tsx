// Module ID: 13981
// Function ID: 13982
// Name: toggle
// Dependencies: [5723, 7864, 676, 13948, 589, 4593, 1236, 4683, 13979, 13980, 10333, 2]

// Module 13981 (toggle)
import hasConsented from "hasConsented";
import { Consents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.MNKzyg);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [hasConsented];
    return require(589) /* initialize */.useStateFromStores(items, () => hasConsented.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      let items = [Consents.PERSONALIZATION];
      const obj3 = require(13979) /* handleRequestSuccess */;
      require(13979) /* handleRequestSuccess */.setConsents(items, []).catch((message) => callback(13980).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = require(13979) /* handleRequestSuccess */.setConsents(items, []);
    } else {
      let obj = importDefault(4593);
      obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl.string(require(1236) /* getSystemLocale */.t["9SNpzv"]);
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.gJvDDh);
      const intl3 = require(1236) /* getSystemLocale */.intl;
      obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["9g5UGw"]);
      const intl4 = require(1236) /* getSystemLocale */.intl;
      obj[3] = intl4.string(require(1236) /* getSystemLocale */.t["+ZLPw9"]);
      obj[4] = importDefault(4683).Colors.RED;
      obj[5] = function onConfirm() {
        const items = [constants.PERSONALIZATION];
        return callback(13979).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return require(13948) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default createToggle;
