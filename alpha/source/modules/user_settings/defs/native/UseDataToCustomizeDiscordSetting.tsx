// Module ID: 15899
// Function ID: 15900
// Name: UseDataToCustomizeDiscordSetting
// Dependencies: [6188, 8260, 1087, 558, 15859, 576, 504, 5399, 1128, 5498, 15897, 15898, 11065, 2]

// Module 15899 (UseDataToCustomizeDiscordSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl5 from "intl" /* 1128 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5399 */;
import AlertDefault from "Alert" /* 5498 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15859 */;
import ConsentActionCreators from "ConsentActionCreators" /* 15897 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 15898 */;
import ConsentStore from "ConsentStore" /* 6188 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Consents = Constants.Consents;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function useIsDisabled() {
  const obj = useParentalControlSettings;
  return obj.useIsParentallyControlled();
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToCustomizeDiscordSettingValue() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConsentStore];
    const fn = function o() {
      return ConsentStore.hasConsented(constants.PERSONALIZATION);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useDataToCustomizeDiscordSettingValue() {
  const items = [ConsentStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
});
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.MNKzyg);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: tmp3,
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
  useIsDisabled
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default toggle;
