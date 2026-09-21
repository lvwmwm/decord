// Module ID: 15136
// Function ID: 15137
// Name: RequestYourDataSetting
// Dependencies: [17, 1372, 8233, 1074, 21, 1243, 7229, 1248, 504, 4379, 15137, 1115, 4348, 11725, 15139, 2]
// Exports: fetchHarvestStatus, useIsHarvestRequestDisabled

// Module 15136 (RequestYourDataSetting)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import _modDef4348 from "module_4348" /* 4348 */;
import _mod4379 from "module_4379" /* 4379 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7229 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import identity from "module_1243" /* 1243 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const HarvesterUtils = tmp(15137);
function useIsHarvestRequestDisabled() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let harvestDisabledResult = closure_7((isRequesting) => isRequesting.isRequesting, _mod4379.shallow);
  let tmp6 = null == stateFromStores;
  if (!tmp6) {
    if (!harvestDisabledResult) {
      harvestDisabledResult = HarvesterUtils.harvestDisabled(tmp4, stateFromStores);
      const tmpResult = HarvesterUtils;
    }
    tmp6 = harvestDisabledResult;
  }
  return tmp6;
}
const ActivityIndicator = _mod17.ActivityIndicator;
({ REQUEST_DATA_LIMIT_DAYS: hasOwnProperty, UserSettingsSections } = Constants);
const jsx = jsxProd.jsx;
let closure_7 = identity.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XAHCgJ);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useTrailing: function useHarvestRequestSettingTrailing() {
    let tmp = null;
    if (closure_7((isRequesting) => isRequesting.isRequesting, _mod4379.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: function useRequestYourDataSettingDescription() {
    const tmp3 = closure_7((harvestRequest) => harvestRequest.harvestRequest, _mod4379.shallow);
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return null;
    } else if (currentUser.isStaff()) {
      const intl2 = tmp(1115).intl;
      return intl2.string(tmp(1115).t.ZPQLH2);
    } else if (null == tmp3) {
      return null;
    } else {
      const addResult = _modDef4348(tmp3.created_at).add(hasOwnProperty, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(_modDef4348())) {
        const intl = tmp(1115).intl;
        const obj = { date: addResult.format("MMMM Do YYYY") };
        formatToPlainStringResult = intl.formatToPlainString(tmp(1115).t.RNDlV9, obj);
      }
      return formatToPlainStringResult;
    }
  },
  useIsDisabled: useIsHarvestRequestDisabled,
  usePreNavigationAction() {
    const items = [UserStore];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let harvestDisabledResult = closure_7((isRequesting) => isRequesting.isRequesting, _mod4379.shallow);
    let tmp6 = null == stateFromStores;
    if (!tmp6) {
      if (!harvestDisabledResult) {
        harvestDisabledResult = HarvesterUtils.harvestDisabled(tmp4, stateFromStores);
        const tmpResult = HarvesterUtils;
      }
      tmp6 = harvestDisabledResult;
    }
    require = tmp6;
    return (fn) => {
      let flag = !harvestDisabledResult;
      if (!harvestDisabledResult) {
        fn();
        flag = true;
      }
      return flag;
    };
  },
  screen: {
    route: UserSettingsSections.REQUEST_DATA,
    getComponent() {
      return require("RequestDataScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = UserSettingsAccountActionCreators.getHarvestStatus();
  harvestStatus.then((result) => {
    const body = result;
    body(1248).batchUpdates(() => {
      state.setState({ isRequesting: false, harvestRequest: body.body });
    });
  }, () => {
    ReactBatchUpdates.batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export { useIsHarvestRequestDisabled };
