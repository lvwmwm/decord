// Module ID: 16069
// Function ID: 16070
// Name: UseDataToImproveDiscordSetting
// Dependencies: [6306, 8593, 1072, 16031, 5739, 1113, 5811, 16070, 16071, 504, 11875, 2]

// Module 16069 (UseDataToImproveDiscordSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5739 */;
import AlertDefault from "Alert" /* 5811 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16031 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16070 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 16071 */;
import ConsentStore from "ConsentStore" /* 6306 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
