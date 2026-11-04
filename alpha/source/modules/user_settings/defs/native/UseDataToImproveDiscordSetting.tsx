// Module ID: 16993
// Function ID: 16994
// Name: UseDataToImproveDiscordSetting
// Dependencies: [6877, 8573, 1072, 16956, 6093, 1113, 6165, 16994, 16995, 504, 11728, 2]

// Module 16993 (UseDataToImproveDiscordSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6093 */;
import AlertDefault from "Alert" /* 6165 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16956 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16994 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 16995 */;
import ConsentStore from "ConsentStore" /* 6877 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
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
