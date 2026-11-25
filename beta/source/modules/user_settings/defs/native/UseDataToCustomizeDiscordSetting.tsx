// Module ID: 16167
// Function ID: 16168
// Name: UseDataToCustomizeDiscordSetting
// Dependencies: [6427, 8712, 1071, 16126, 504, 5860, 1112, 5932, 16165, 16166, 11942, 2]

// Module 16167 (UseDataToCustomizeDiscordSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl5 from "intl" /* 1112 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5860 */;
import AlertDefault from "Alert" /* 5932 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16126 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16165 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 16166 */;
import ConsentStore from "ConsentStore" /* 6427 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Consents = Constants.Consents;
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.MNKzyg);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [ConsentStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const tmp = arg0;
    if (tmp) {
      let items = [Consents.PERSONALIZATION];
      const obj2 = ConsentActionCreators;
      const setConsentsResult = obj2.setConsents(items, []);
      setConsentsResult.catch((error) => {
        const message = error.message;
        const obj = showDataPrivacyRateLimitAlert;
        return obj.showDataPrivacyRateLimitAlert(message);
      });
    } else {
      let obj = {
        title: intl.string(intl5.t["9SNpzv"]),
        body: intl2.string(intl5.t.gJvDDh),
        confirmText: intl3.string(intl5.t["9g5UGw"]),
        cancelText: intl4.string(intl5.t["+ZLPw9"]),
        confirmColor: AlertDefault.Colors.RED,
        onConfirm() {
            const items = [constants.PERSONALIZATION];
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default toggle;
