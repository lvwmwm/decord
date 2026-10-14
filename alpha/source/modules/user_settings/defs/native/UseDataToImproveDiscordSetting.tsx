// Module ID: 15491
// Function ID: 15492
// Name: UseDataToImproveDiscordSetting
// Dependencies: [5937, 8000, 1085, 558, 15454, 5304, 1126, 5403, 15492, 15493, 576, 504, 10767, 2]

// Module 15491 (UseDataToImproveDiscordSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5304 */;
import AlertDefault from "Alert" /* 5403 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15454 */;
import ConsentActionCreators from "ConsentActionCreators" /* 15492 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 15493 */;
import ConsentStore from "ConsentStore" /* 5937 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToImproveDiscordSettingValue() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConsentStore];
    const fn = function o() {
      return ConsentStore.hasConsented(constants.USAGE_STATISTICS);
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
}) : (function useDataToImproveDiscordSettingValue() {
  const items = [ConsentStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.USAGE_STATISTICS));
});
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.XuADY2);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: tmp3,
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
  useIsDisabled
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default toggle;
