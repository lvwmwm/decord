// Module ID: 13819
// Function ID: 105966
// Name: toggle
// Dependencies: [5590, 7697, 653, 13789, 4471, 1212, 4562, 13820, 13821, 566, 10059, 2]

// Module 13819 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Consents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XuADY2);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.hasConsented(outer1_4.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      let items = [Consents.USAGE_STATISTICS];
      const obj3 = require(13820) /* handleRequestSuccess */;
      require(13820) /* handleRequestSuccess */.setConsents(items, []).catch((message) => outer1_0(outer1_2[8]).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = require(13820) /* handleRequestSuccess */.setConsents(items, []);
    } else {
      let obj = importDefault(4471);
      obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.title = intl.string(require(1212) /* getSystemLocale */.t.OdPCbN);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.body = intl2.string(require(1212) /* getSystemLocale */.t.MGWabA);
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t["D3+rU4"]);
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj.cancelText = intl4.string(require(1212) /* getSystemLocale */.t.kYpG0u);
      obj.confirmColor = importDefault(4562).Colors.RED;
      obj.onConfirm = function onConfirm() {
        const items = [outer1_4.USAGE_STATISTICS];
        return outer1_0(outer1_2[7]).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return require(13789) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default createToggle;
