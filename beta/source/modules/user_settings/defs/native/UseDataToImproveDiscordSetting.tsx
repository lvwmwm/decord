// Module ID: 14390
// Function ID: 14391
// Name: UseDataToImproveDiscordSetting
// Dependencies: [6012, 7417, 1074, 14353, 5203, 1115, 5300, 14391, 14392, 504, 11006, 2]

// Module 14390 (UseDataToImproveDiscordSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import AlertDefault from "Alert" /* 5300 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14353 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14391 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 14392 */;
import ConsentStore from "ConsentStore" /* 6012 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Consents = Constants.Consents;
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.XuADY2);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [ConsentStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const tmp = arg0;
    if (tmp) {
      let items = [Consents.USAGE_STATISTICS];
      const obj2 = ConsentActionCreators;
      const setConsentsResult = obj2.setConsents(items, []);
      setConsentsResult.catch((error) => {
        const message = error.message;
        const obj = showDataPrivacyRateLimitAlert;
        return obj.showDataPrivacyRateLimitAlert(message);
      });
    } else {
      let obj = {
        title: intl.string(intl5.t.OdPCbN),
        body: intl2.string(intl5.t.MGWabA),
        confirmText: intl3.string(intl5.t["D3+rU4"]),
        cancelText: intl4.string(intl5.t.kYpG0u),
        confirmColor: AlertDefault.Colors.RED,
        onConfirm() {
            const items = [constants.USAGE_STATISTICS];
            const obj = ConsentActionCreators;
            return obj.setConsents([], items);
          }
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl5.intl;
      intl2 = intl5.intl;
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      show(obj);
    }
  },
  useIsDisabled() {
    const obj = useParentalControlSettings;
    return obj.useIsParentallyControlled();
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default toggle;
