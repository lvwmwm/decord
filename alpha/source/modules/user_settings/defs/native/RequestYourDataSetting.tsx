// Module ID: 17388
// Function ID: 17389
// Name: RequestYourDataSetting
// Dependencies: [17, 1388, 9202, 1072, 21, 1258, 7800, 1263, 504, 5221, 17389, 1113, 2169, 12406, 17391, 2]
// Exports: fetchHarvestStatus, useIsHarvestRequestDisabled

// Module 17388 (RequestYourDataSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import react_native2 from "react-native" /* 1263 */;
import _modDef2169 from "module_2169" /* 2169 */;
import _slicedToArray from "_slicedToArray" /* 5221 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7800 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 1072 */;
import module_1258 from "module_1258" /* 1258 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let UserSettingsSections;
let hasOwnProperty;
let tmp;
const HarvesterUtils = tmp(17389);
const f115181 = () => currentUser.getCurrentUser();
const f115182 = (harvestRequest) => harvestRequest.harvestRequest;
const f115183 = (isRequesting) => isRequesting.isRequesting;
function useIsHarvestRequestDisabled() {
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f115181);
  const tmp4 = closure_7(f115182, _slicedToArray.shallow);
  let harvestDisabledResult = closure_7(f115183, _slicedToArray.shallow);
  let tmp6 = null == stateFromStores;
  if (!tmp6) {
    if (!harvestDisabledResult) {
      const tmpResult = HarvesterUtils;
      harvestDisabledResult = tmpResult.harvestDisabled(tmp4, stateFromStores);
    }
    tmp6 = harvestDisabledResult;
  }
  return tmp6;
}
const ActivityIndicator = react_native.ActivityIndicator;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ REQUEST_DATA_LIMIT_DAYS: hasOwnProperty, UserSettingsSections } = Constants);
const jsx = Fragment.jsx;
let closure_7 = module_1258.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.XAHCgJ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useTrailing: function useHarvestRequestSettingTrailing() {
    let tmp = null;
    if (closure_7((isRequesting) => isRequesting.isRequesting, _slicedToArray.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: function useRequestYourDataSettingDescription() {
    const tmp3 = closure_7((harvestRequest) => harvestRequest.harvestRequest, _slicedToArray.shallow);
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return null;
    } else if (currentUser.isStaff()) {
      const intl2 = tmp(1113).intl;
      return intl2.string(intl3.t.ZPQLH2);
    } else if (null == tmp3) {
      return null;
    } else {
      const obj3 = _modDef2169(tmp3.created_at);
      const addResult = obj3.add(hasOwnProperty, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(_modDef2169())) {
        const intl = tmp(1113).intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj = { date: addResult.format("MMMM Do YYYY") };
        const RNDlV9 = tmp(1113).t.RNDlV9;
        formatToPlainStringResult = formatToPlainString(RNDlV9, obj);
      }
      return formatToPlainStringResult;
    }
  },
  useIsDisabled: useIsHarvestRequestDisabled,
  usePreNavigationAction() {
    let currentUser;
    const items = [UserStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f115181);
    const tmp4 = closure_7(f115182, _slicedToArray.shallow);
    let harvestDisabledResult = closure_7(f115183, _slicedToArray.shallow);
    let tmp6 = null == stateFromStores;
    if (!tmp6) {
      if (!harvestDisabledResult) {
        const tmpResult = HarvesterUtils;
        harvestDisabledResult = tmpResult.harvestDisabled(tmp4, stateFromStores);
      }
      tmp6 = harvestDisabledResult;
    }
    harvestDisabledResult = tmp6;
    return (fn) => {
      let flag = !harvestDisabledResult;
      if (flag) {
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
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export function fetchHarvestStatus() {
  let state;
  let obj = UserSettingsAccountActionCreators;
  const harvestStatus = obj.getHarvestStatus();
  harvestStatus.then((result) => {
    const body = result;
    let obj = body(closure_2[7]);
    obj.batchUpdates(() => {
      const obj = { isRequesting: false, harvestRequest: body.body };
      state.setState(obj);
    });
  }, () => {
    const obj = react_native2;
    obj.batchUpdates(() => state.setState({ isRequesting: false }));
  });
}
export { useIsHarvestRequestDisabled };
