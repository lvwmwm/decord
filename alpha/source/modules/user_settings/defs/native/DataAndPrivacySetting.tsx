// Module ID: 16069
// Function ID: 16070
// Name: DataAndPrivacySetting
// Dependencies: [19, 1085, 558, 576, 14940, 14943, 11262, 1126, 9105, 16070, 2]

// Module 16069 (DataAndPrivacySetting)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import ShieldLockIcon from "ShieldLockIcon" /* 9105 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14940 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 14943 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreNavigationAction() {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = ConsentActionCreators;
      const consents = obj.fetchConsents();
      const obj2 = RequestYourDataSetting;
      const harvestStatus = obj2.fetchHarvestStatus();
      return true;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function usePreNavigationAction() {
  return react.useCallback(() => {
    const obj = ConsentActionCreators;
    const consents = obj.fetchConsents();
    const obj2 = RequestYourDataSetting;
    const harvestStatus = obj2.fetchHarvestStatus();
    return true;
  }, []);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.OAuOHD);
  },
  parent: null,
  IconComponent: ShieldLockIcon.ShieldLockIcon,
  screen: {
    route: UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    }
  },
  usePreNavigationAction: tmp2
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;
