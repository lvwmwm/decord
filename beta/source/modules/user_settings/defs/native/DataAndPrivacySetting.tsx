// Module ID: 15469
// Function ID: 15470
// Name: DataAndPrivacySetting
// Dependencies: [19, 1086, 558, 576, 14379, 14382, 10874, 1127, 9204, 15470, 2]

// Module 15469 (DataAndPrivacySetting)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import ShieldLockIcon from "ShieldLockIcon" /* 9204 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14379 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 14382 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => react.useCallback(() => {
  const obj = ConsentActionCreators;
  const consents = obj.fetchConsents();
  const obj2 = RequestYourDataSetting;
  const harvestStatus = obj2.fetchHarvestStatus();
  return true;
}, []));
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
