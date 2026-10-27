// Module ID: 16146
// Function ID: 16147
// Name: UseDataToImproveDiscordSetting
// Dependencies: [6670, 8332, 1087, 558, 16109, 5908, 1128, 5978, 16147, 16148, 576, 504, 11209, 2]

// Module 16146 (UseDataToImproveDiscordSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl5 from "intl" /* 1128 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5908 */;
import AlertDefault from "Alert" /* 5978 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16109 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16147 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 16148 */;
import ConsentStore from "ConsentStore" /* 6670 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11209 */;
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
