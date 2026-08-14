// Module ID: 14179
// Function ID: 14180
// Name: toggle
// Dependencies: [5890, 8148, 676, 14149, 4705, 1236, 4795, 14180, 14181, 589, 10421, 2]

// Module 14179 (toggle)
import hasConsented from "hasConsented";
import { Consents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XuADY2);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [hasConsented];
    return require(589) /* initialize */.useStateFromStores(items, () => hasConsented.hasConsented(constants.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      let items = [Consents.USAGE_STATISTICS];
      const obj3 = require(14180) /* handleRequestSuccess */;
      require(14180) /* handleRequestSuccess */.setConsents(items, []).catch((message) => callback(14181).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = require(14180) /* handleRequestSuccess */.setConsents(items, []);
    } else {
      let obj = importDefault(4705);
      obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl.string(require(1236) /* getSystemLocale */.t.OdPCbN);
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.MGWabA);
      const intl3 = require(1236) /* getSystemLocale */.intl;
      obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["D3+rU4"]);
      const intl4 = require(1236) /* getSystemLocale */.intl;
      obj[3] = intl4.string(require(1236) /* getSystemLocale */.t.kYpG0u);
      obj[4] = importDefault(4795).Colors.RED;
      obj[5] = function onConfirm() {
        const items = [constants.USAGE_STATISTICS];
        return callback(14180).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return require(14149) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default createToggle;
