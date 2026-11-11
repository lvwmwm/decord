// Module ID: 17269
// Function ID: 17270
// Name: UseDataToCustomizeDiscordSetting
// Dependencies: [6783, 9136, 1072, 17228, 504, 6205, 1113, 6277, 17267, 17268, 12317, 2]

// Module 17269 (UseDataToCustomizeDiscordSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6205 */;
import AlertDefault from "Alert" /* 6277 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17228 */;
import ConsentActionCreators from "ConsentActionCreators" /* 17267 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 17268 */;
import ConsentStore from "ConsentStore" /* 6783 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
