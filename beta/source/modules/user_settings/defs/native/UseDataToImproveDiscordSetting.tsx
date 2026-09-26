// Module ID: 15135
// Function ID: 15136
// Name: UseDataToImproveDiscordSetting
// Dependencies: [6868, 8265, 1074, 15098, 5140, 1115, 5237, 15136, 15137, 504, 11754, 2]

// Module 15135 (UseDataToImproveDiscordSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5140 */;
import common_AlertDefault from "common/Alert" /* 5237 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15098 */;
import ConsentActionCreators from "ConsentActionCreators" /* 15136 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 15137 */;
import ConsentStore from "ConsentStore" /* 6868 */;

require = fn;
const Consents = fn(1074).Consents;
const SettingBuilders = fn(11754);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XuADY2);
  },
  parent: fn(8265).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [ConsentStore];
    return initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      let items = [Consents.USAGE_STATISTICS];
      ConsentActionCreators.setConsents(items, []).catch((error) => showDataPrivacyRateLimitAlert.showDataPrivacyRateLimitAlert(error.message));
      const setConsentsResult = ConsentActionCreators.setConsents(items, []);
    } else {
      const obj2 = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.OdPCbN);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.MGWabA);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t["D3+rU4"]);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t.kYpG0u);
      obj2.confirmColor = common_AlertDefault.Colors.RED;
      obj2.onConfirm = function onConfirm() {
        const items = [constants.USAGE_STATISTICS];
        return ConsentActionCreators.setConsents([], items);
      };
      AlertActionCreatorsDefault.show(obj2);
    }
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default toggle;
